import React, { useState, useEffect } from "react";
import "../css/slider.css";
import logo from "../assets/luxinox.png";
import icon from "../assets/circle.svg";
import p01 from "../assets/photo-01.jpg";
import p02 from "../assets/photo-02.jpg";
import p03 from "../assets/photo-03.jpg";



const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    p01,
    p02,
    p03,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 3);
    }, 5000); // Change the interval time to 500 milliseconds (0.5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <img
        src={images[currentImage]}
        alt="Slider"
        className="slider-image loop-transition"
      />
      <div className="slider-overlay">
        <div className="d-flex flex-wrap flex-sm-wrap-reverse flex-wrap-reverse">
          <div className="col-lg-7 col-sm-12 col-12 d-flex flex-column justify-content-end align-items-center">
            <img src={logo} alt="pipes" />
          </div>
          <div  className="col-lg-5 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-lg-start align-items-sm-center align-items-center">
            <img height="65" src={icon} alt="pipes"  />

            <h3 className="text-light text-lg-start text-center text-sm-center font-monospace fs-3">Bienvenue</h3>
            <h1 className="text-light text-lg-start text-center text-sm-center display-2 fw-semibold font-monospace">Dinox</h1>
            <p className="fs-5 text-lg-start text-center text-sm-center px-5 px-lg-0 px-sm-5" style={{color: '#DDD'}}>
              Entreprise Spécialisé Dans Les TravauxEn Inox & Verre, Une Equipe
              de Professionnels Et à Votre Services
            </p>
            <div className="text-lg-start text-center text-sm-center">
              <a
                href="/products"
                className="btn px-5 py-3 rounded-pill"
                role="button"
                style={{backgroundColor: '#FF00F5',color: '#FFFFFF',}}
              >
                <span className="">
                  <span className="">
                    <i aria-hidden="true" className="pe-3 fs-4 fas fa-shopping-cart "></i>
                  </span>
                  <span className="fw-semibold fs-4">Voir Les Produits</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
