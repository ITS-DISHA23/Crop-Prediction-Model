# 🌾 Crop Recommendation System

This project is a machine learning-based crop recommendation system that predicts the most suitable crop to grow based on environmental factors. It consists of a React frontend, a Flask backend, and a trained LightGBM model.

---

## 🚀 Features

- Predicts the best crop to grow using:
  - State
  - Season
  - Annual Rainfall
  - Pesticide usage
  - Fertiliser usage
- Built with:
  - LightGBM (for classification)
  - Flask (as the backend API)
  - React (frontend UI)
- Encodes categorical variables with LabelEncoder and OneHotEncoder

---

## 🧠 Model Info

- Total classes (crops): 55
- Dataset size: ~19,000 rows
- Preprocessing:
  - OneHotEncoding for `State` and `Season`
  - LabelEncoding for `Crop` (target)
- Model saved as: `lightgbm_crop_model.pkl`

---

## 🛠️ Setup Instructions

### Backend (Flask)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
