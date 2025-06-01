from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import os



# Initialize Flask app

app = Flask(__name__)
CORS(app)

# Load ML components
try:
    # Load encoders and model
    label_encoder = joblib.load('label_encoder.pkl')
    ohe_encoder = joblib.load('ohe_encoder.pkl')
    model = joblib.load('lightgbm_crop_model.pkl')
    print("✓ All models loaded successfully")
except Exception as e:
    print(f"Error loading models: {str(e)}")
    raise


@app.route('/predict', methods=['POST'])
def predict():
    try:
        # 1. Get and validate input data
        data = request.get_json()
        if not all(field in data for field in ['State', 'Season', 'Annual_Rainfall']):
            return jsonify({'error': 'Missing required fields'}), 400

        # 2. Prepare input data (with default values for unused features)
        input_df = pd.DataFrame([{
            'State': data['State'],
            'Season': data['Season'],
            'Annual_Rainfall': float(data['Annual_Rainfall']),
            'Pesticide': 50.0,  # Default value
            'Fertiliser': 75.0   # Default value
        }])

        # 3. Process features
        # Encode categorical features (State and Season)
        encoded_categorical = ohe_encoder.transform(input_df[['State', 'Season']])
        if hasattr(encoded_categorical, 'toarray'):
            encoded_categorical = encoded_categorical.toarray()
        
        # Combine categorical and numerical features
        encoded_df = pd.DataFrame(
            encoded_categorical,
            columns=ohe_encoder.get_feature_names_out(['State', 'Season'])
        )
        final_features = pd.concat([
            encoded_df,
            input_df[['Annual_Rainfall', 'Pesticide', 'Fertiliser']]
        ], axis=1)

        # 4. Make prediction
        prediction = model.predict(final_features)
        predicted_crop = label_encoder.inverse_transform([prediction[0]])[0]
        
        return jsonify({'predicted_crop': predicted_crop})

    except ValueError:
        return jsonify({'error': 'Invalid numerical value for Annual Rainfall'}), 400
    except Exception as e:
        print(f"Prediction error: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)



