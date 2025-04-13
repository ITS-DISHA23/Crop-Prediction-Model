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
import React, { useState, useEffect } from "react";
import "./App.css";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal"
];

const seasons = ["Kharif", "Rabi", "Zaid", "Summer", "Winter", "Autumn"];

const cropImages = {
  Rice: "https://media.istockphoto.com/photos/ripe-rice-in-the-field-of-farmland-picture-id622925154?k=20&m=622925154&s=612x612&w=0&h=hLtkpC3VdXeqWhblSowvPRu4XgsCwFW6JQM-Px2KzbY=",
  Wheat: "https://www.worldatlas.com/r/w1200/upload/d8/f0/68/shutterstock-116527159.jpg",
  Maize: "https://cdn.pixabay.com/photo/2014/02/23/13/08/maize-272886_1280.jpg",
  Cotton: "http://xochil.com/wp-content/uploads/2014/08/west-texas-cotton-1361909.jpg",
  Sugarcane: "http://2.bp.blogspot.com/-JF3giBXjtoQ/Um6WpCqwnBI/AAAAAAAAA3o/jbI9URai3l8/s1600/Main_Pic.jpg"}
const rotatingImages = Object.values(cropImages);

export default function App() {
  const [state, setState] = useState("");
  const [season, setSeason] = useState("");
  const [prediction, setPrediction] = useState("");
  const [currentImage, setCurrentImage] = useState(rotatingImages[0]);
  const [imageIndex, setImageIndex] = useState(0);

  const handlePredict = () => {
    let crop = "Rice"; // default
    if (season === "Rabi") crop = "Wheat";
    if (season === "Summer") crop = "Maize";
    if (state === "Punjab") crop = "Cotton";
    if (state === "Uttar Pradesh") crop = "Sugarcane";

    setPrediction(crop);
    setCurrentImage(cropImages[crop]);
  };

  useEffect(() => {
    if (!prediction) {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % rotatingImages.length);
        setCurrentImage(rotatingImages[(imageIndex + 1) % rotatingImages.length]);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [imageIndex, prediction]);
  

  return (
    <><header className="header">
      <h1>🌾 Crop Prediction Model</h1>
    </header><div className="container">
        <div className="content">
          <div className="left-box">
            <h2>Enter Details</h2>
            <label>State:</label>
            <select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">Select</option>
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <label>Season:</label>
            <select value={season} onChange={(e) => setSeason(e.target.value)}>
              <option value="">Select</option>
              {seasons.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <button onClick={handlePredict}>Predict Crop</button>

            {prediction && <p className="prediction">🌾 Predicted Crop: <strong>{prediction}</strong></p>}
          </div>

          <div className="right-box">
            <h2>Crop Image</h2>
            <img src={currentImage}alt="Crop" className="crop-img"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/400x300?text=No+Image+Found";
  }}
/>
          </div>
        </div>
      </div>
      <div className="crop-gallery">
  {Object.entries(cropImages).map(([crop, url]) => (
    <div key={crop} className="crop-card">
      <img src={url} alt={crop} />
      <p>{crop}</p>
    </div>
  ))}
</div>

</>
  );
}


// export default App
