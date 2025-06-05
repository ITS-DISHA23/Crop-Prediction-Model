import React, { useState, useEffect } from "react";
import "./App.css";

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal"
  ];

  const seasons = [
      "Autumn     ",
      "Kharif     ",
      "Rabi       ",
      "Summer     ",
      "Winter     "
    ];

const cropImages = {
    "Arecanut": "https://www.sriherbs.com/wp-content/uploads/2021/02/areca-tree-4754234_1920.jpg",
    "Coconut": "http://4.bp.blogspot.com/-VCU_hynNmMY/VoTOS1qY6RI/AAAAAAAAAZs/7KIwq3j1pco/s1600/8%2Byear%2Bold%2Bcoconut.jpg",
    "Cotton(lint)": "http://xochil.com/wp-content/uploads/2014/08/west-texas-cotton-1361909.jpg",
    "Dry chillies": "https://i.pinimg.com/originals/ac/c1/a7/acc1a710cea9071d2179c1bca4bac393.jpg",
    "Gram": "https://www.protectourlivelihood.in/wp-content/uploads/2018/09/bengal-gram.jpg",
    "Jute": "https://thumbs.dreamstime.com/b/jute-plant-stems-laid-drying-sun-jute-plant-stems-laid-drying-sun-sky-green-tree-bushes-163197616.jpg",
    "Linseed": "http://www.aafarmer.co.uk/wp-content/uploads/2018/03/Premium-crops-Linseed.jpg",
    "Maize": "https://cdn.pixabay.com/photo/2014/02/23/13/08/maize-272886_1280.jpg",
    "Niger seed": "http://dhcrop.bsmrau.net/wp-content/uploads/2016/07/DSC08159.jpg",
    "Onion": "https://sandiegoseedcompany.com/wp-content/uploads/2021/02/groing-onions-feature-imgjpg-scaled.jpg",
    "Potato": "https://www.farmersalmanac.com/wp-content/uploads/2020/11/potato-crop-AdobeStock_274122906-1024x683.jpeg",
    "Rapeseed & Mustard": "https://www.agrifarming.in/wp-content/uploads/2015/04/Mustard-Production..jpg",
    "Rice": "https://media.istockphoto.com/photos/ripe-rice-in-the-field-of-farmland-picture-id622925154?k=20&m=622925154&s=612x612&w=0&h=hLtkpC3VdXeqWhblSowvPRu4XgsCwFW6JQM-Px2KzbY=",
    "Sesamum": "https://images.saymedia-content.com/.image/t_share/MTg4NDE3NzgxNjM5Njg1Mjgz/how-to-grow-sesame-seed-plants-from-shop-bought-sesame-seeds.jpg",
    "Small millets": "https://www.protectourlivelihood.in/wp-content/uploads/2022/03/Millets-header-banner.jpg",
    "Sugarcane": "http://2.bp.blogspot.com/-JF3giBXjtoQ/Um6WpCqwnBI/AAAAAAAAA3o/jbI9URai3l8/s1600/Main_Pic.jpg",
    "Sweet potato": "https://tse3.mm.bing.net/th?id=OIP.hVQyrOcgavtl_9-jjYJN3wHaFS&pid=Api&P=0&h=180",
    "Tapioca": "https://thumbs.dreamstime.com/b/tapioca-industry-kerala-india-starch-extracted-cassava-root-89233053.jpg",
    "Tobacco": "https://thumbs.dreamstime.com/b/tobacco-field-tobacco-big-leaf-crops-growing-tobacco-plantation-field-tobacco-field-tobacco-big-leaf-crops-growing-tobacco-135697246.jpg",
    "Turmeric": "https://i.pinimg.com/originals/4e/39/59/4e3959a3bd1ed065862258bf6d893a80.png",
    "Wheat": "https://tse2.mm.bing.net/th?id=OIP.DWBaC9jtDYbwnsWJIeHFYAHaEc&pid=Api&P=0&h=180",
    "Bajra": "https://jkagri.com/wp-content/uploads/2022/11/JKBH-1100.png",
    "Black pepper": "https://www.thespruce.com/thmb/N6Bs_8HNcit_2mR6ye-42k_o8-A=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-peppercorn-plant-profile-4584776-01-ef1e8aa3630d405f80f3a2cb746b9531.jpg",
    "Cardamom": "https://spiceswala.com/wp-content/uploads/2021/09/spiceswala-kerala-spices-online.jpg",
    "Coriander": "https://2.bp.blogspot.com/-gasQyStD2PU/VzmYVR8u4AI/AAAAAAAAWf4/1O1Cjyq2z9MAweBYGnLWnVmUXSIgpZymACKgB/s1600/20160516_093126.jpg",
    "Garlic": "https://i.ytimg.com/vi/YFWpYtPNPrg/maxresdefault.jpg",
    "Ginger": "https://www.asiafarming.com/wp-content/uploads/2015/10/Ginger-Plant.jpg",
    "Groundnut": "https://www.agrifarming.in/wp-content/uploads/2018/08/Groundnut-Farming-Project-Report..jpg",
    "Horse-gram": "https://www.agrifarming.in/wp-content/uploads/2019/10/Comp1-22.jpg",
    "Jowar": "https://img.freepik.com/premium-photo/closeup-jowar-grain-sorghum-crop_488761-162.jpg",
    "Ragi": "https://www.asiafarming.com/wp-content/uploads/2017/06/Finger-Millet-Ragi-Cultivation-Information.-600x330.jpg",
    "Cashewnut": "https://i.ytimg.com/vi/IOs6f2bhnTM/maxresdefault.jpg",
    "Banana": "http://www.africa-uganda-business-travel-guide.com/images/xBananaPlantationinAfrica.jpg.pagespeed.ic.GBr5jE1Caz.jpg",
    "Soyabean": "https://media.sciencephoto.com/image/f0280983/800wm/F0280983-Soybean_crop.jpg",
    "Barley": "https://tse3.mm.bing.net/th?id=OIP.wBYoaUWLy-BoVmGIyOxKPQHaFS&pid=Api&P=0&h=180",
    "Khesari": "https://www.agrifarming.in/wp-content/uploads/2019/01/Lathyrus-Farming..jpg",
    "Masoor": "https://img2.exportersindia.com/product_images/bc-full/dir_167/4984396/masoor-dal-seeds-1521632285-3737827.jpeg",
    "Moong(Green Gram)": "https://www.asiafarming.com/wp-content/uploads/2018/02/Green-Gram-Growing-and-Cultivation-Practices.-e1523079284950.jpg",
    "Safflower": "https://media.istockphoto.com/photos/safflower-crop-picture-id863155320?k=20&m=863155320&s=612x612&w=0&h=ePKwSfCESk5imyoqr-1V__ywakrrWpZdhqTDPMpCUT0=",
    "Sannhamp": "https://thumbs.dreamstime.com/b/sunhemp-sunn-hemp-flower-field-day-time-image-background-148929506.jpg",
    "Sunflower": "https://gardenerspath.com/wp-content/uploads/2022/08/Grow-Sunflowers-as-a-Cover-Crop-Feature.jpg",
    "Urad": "https://www.agrifarming.in/wp-content/uploads/2019/09/Comp1-25.jpg",
    "Peas & beans (Pulses)": "https://myknowledgebase.in/wp-content/uploads/2023/04/lush-foliage-blossoms-large-pigeon-tree-branches-having-green-long-pods-young-beans-green-been-pigeon-pea-155977868-1.jpg",
    "Cowpea(Lobia)": "http://www.quiet-corner.com/wp-content/uploads/2016/07/3-13.jpg",
    "Guar seed": "https://blog.agribazaar.com/wp-content/uploads/2022/07/guar-gum-plant-1520573138-3706142.jpg",
    "Moth": "https://www.vogueitude.com/wp-content/uploads/2021/05/requirements-to-grow-moth-beans-1568x882.jpg"
  };
const rotatingEntries = Object.entries(cropImages);

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [state, setState] = useState("");
  const [season, setSeason] = useState("");
  const [prediction, setPrediction] = useState("");
  const [currentImage, setCurrentImage] = useState(rotatingEntries[0][1]);
  const [currentCropName, setCurrentCropName] = useState(rotatingEntries[0][0]);
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    if (!state || !season) {
      setError("Please select both state and season");
      return;
    }

    setLoading(true);
    setError("");
    setPrediction("");

    try {
      const response = await fetch('http://localhost:10000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          State: state,
          Season: season,
          Annual_Rainfall: "1000.5"
        })
      });

      const result = await response.json();

      if (result.error) {
        setError(result.error);
      } else {
        const predictedCrop = result.predicted_crop;
        setPrediction(predictedCrop);
        setCurrentImage(cropImages[predictedCrop] || rotatingEntries[0][1]);
        setCurrentCropName(predictedCrop);
      }
    } catch (err) {
      setError("Error connecting to prediction service");
      console.error("Prediction error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!prediction && currentPage === "predict") {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % rotatingEntries.length);
        const [name, url] = rotatingEntries[(imageIndex + 1) % rotatingEntries.length];
        setCurrentImage(url);
        setCurrentCropName(name);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [imageIndex, prediction, currentPage]);

  return (
    <>
      <header className="header">
        <h1>🌾 Crop Prediction Model</h1>
      </header>

      {currentPage === "landing" ? (
        <><section className="intro-section">
        <div className="intro-box fade-in">
          <h1 className="animated-title">WELCOME TO AGRI-AI🌾</h1>
          <p className="animated-description">
            The Smart Crop Prediction App — your AI-powered assistant for modern farming. 
            Enter state and season details and get the best crop suggestions instantly!!
          </p>
        </div>
      </section>
      
      <div className="container">
      <button className="predict-button" onClick={() => setCurrentPage("predict")}>
  Go to Prediction <span className="arrow">→</span>
</button>

<div className="crop-gallery-scroll">
  <div className="crop-gallery">
    {Object.entries(cropImages).map(([crop, url]) => (
      <div key={crop} className="crop-card">
        <img src={url} alt={crop} />
        <p>{crop}</p>
      </div>
    ))}
  </div>
</div>


            <div className="developer-box">
  <h2>👨‍💻 Developer Info</h2>
  <div className="developer-cards">
    {[
      {
        name: "Abhisekh Padhy",
        domain: "Data Science",
        link: "https://www.linkedin.com/in/abhisekh-padhy-7374011b6",
      },
      {
        name: "Disha Rani Dash",
        domain: "Web Development",
        link: "https://www.linkedin.com/in/disha-rani-dash-74409b2b5",
      },
      {
        name: "Tadvab Pradhan",
        domain: "Web Development",
        link: "https://www.linkedin.com/in/tadvab-pradhan-97a976300",
      },
    ].map((dev) => (
      <div key={dev.name} className="dev-card">
        <div className="avatar">{dev.name.charAt(0)}</div>
        <h3>{dev.name}</h3>
        <p><strong>Domain:</strong> {dev.domain}</p>
        <div className="linkedin-hover">
          <a href={dev.link} target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            View LinkedIn
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

          </div></>
      ) : (
        <div className="container">
          <button className="predict-button" onClick={() => setCurrentPage("landing")}>
            ← Back to Home
          </button>

          <div className="content">
            <div className="right-box">
              <h2>Crop Preview</h2>
              <h3 className="crop-name">{currentCropName}</h3>
              {loading ? (
                <div className="loading">Loading prediction...</div>
              ) : (
                <img
                  key={currentImage}
                  src={currentImage}
                  alt={currentCropName}
                  className="crop-img"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300?text=No+Image+Found";
                  }}
                />
              )}
            </div>

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

              <button onClick={handlePredict} disabled={loading || !state || !season}>
                {loading ? "Predicting..." : "Predict Crop"}
              </button>

              {error && <p className="error">⚠️ {error}</p>}
              {prediction && !error && (
                <p className="prediction">🌾 Predicted Crop: <strong>{prediction}</strong></p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

