// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
  
//     </>
//   )
// }
import React, { useState } from "react";

const states = ["Andhra Pradesh", "Maharashtra", "Tamil Nadu", "Punjab", "Karnataka"];
const seasons = ["Kharif", "Rabi", "Summer", "Winter"];

export default function App() {
  const [state, setState] = useState("");
  const [season, setSeason] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    if (state && season) {
      setPrediction("🌾 Suitable Crop: Rice");
    } else {
      setPrediction("⚠️ Please select both state and season.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          Crop Prediction Model 🌱
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">State</label>
            <select
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              onChange={(e) => setState(e.target.value)}
              value={state}
            >
              <option value="">Select a state</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Season</label>
            <select
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              onChange={(e) => setSeason(e.target.value)}
              value={season}
            >
              <option value="">Select a season</option>
              {seasons.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
            onClick={handlePredict}
          >
            Predict Crop
          </button>

          {prediction && (
            <div className="mt-4 text-center text-xl font-semibold text-green-900">
              {prediction}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// export default App
