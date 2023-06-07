import React from "react";
import Slider from "../components/Slider";
import CustomCarousel from "../components/CustomCarousel";
import logo from "../assets/stainless-steel.png";
import icon from "../assets/pink-circle.svg";
import StarRating from "../components/StarRating";


import '../css/carousel.css'; // Create a CSS file for your component styles
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logoo from "../assets/logo.png";
import "../css/reset.css";



function Home() {
  return (
    <div>
      <Slider />
      <section className="h-100" style={{ backgroundColor: "#2f0e66" }}>
        <div className="container py-5">
          <div className="row">
            {[
              {
                icon: "fab fa-gg",
                name: "Rampes Escaliers",
                description: "Vente De Tubes En Inox & Accessoires",
              },
              {
                icon: "fas fa-bacon",
                name: "Garde Corps",
                description: "fenétre Balcon En Inox & Verre",
              },
              {
                icon: "fas fa-align-center",
                name: "Mur rideaux",
                description: "mur rideaux alico et terre ventile",
              },
              {
                icon: "fas fa-toggle-on",
                name: "Cabine de douche",
                description: "& Vitrine En Verre Trempé Porte automatique",
              },
            ].map((item) => (
              <div className="col-lg-3 my-lg-0 my-2 my-sm-2 col-sm-6 col-12">
                <div
                  className="pt-4 ps-4 pe-lg-4 m-lg-2 m-0 h-100 w-100"
                  style={{ backgroundColor: "#462083" }}
                >
                  <div className="row">
                    <div className="col-lg-2 col-sm-12">
                      <span className="text-warning fs-2  ">
                        <i
                          aria-hidden="true"
                          className={item.icon}
                          style={{ color: "#FF00F5" }}
                        ></i>
                      </span>
                    </div>
                    <div className="col-lg-10 col-sm-12  ">
                      <h4 className="text-light  fs-lg-2 fs-sm-4  fw-bold font-monospace ms-lg-2 mt-2">
                        <span>{item.name}</span>
                      </h4>
                      <p
                        className="fs-6 fs- ms-lg-2"
                        style={{ color: "rgba(248,246,243,0.91)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CustomCarousel />
      <section className="w-100">
        <div className="container py-5 d-flex justify-content-end">
          <div className="position-absolute">
            <img
              src={logo}
              alt="pipes"
              style={{ height: "100px", paddingRight: "300px" }}
            />
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#F8F6F3" }}>
        <div className="container py-5">
          <div className="row pt-5">
            {[
              {
                image:
                  "https://bigluxinox.com/wp-content/uploads/2020/01/ramp-1.png",
                name: "Rampes Escaliers",
                description: "& Main Courante En Inox",
              },
              {
                image:
                  "https://bigluxinox.com/wp-content/uploads/2020/01/tube.png",
                name: "Tubes",
                description: "Vente De Tubes En Inox & Accessoires",
              },
              {
                image:
                  "https://bigluxinox.com/wp-content/uploads/2020/04/New-Project.jpg",
                name: "Portes automatiques",
                description: "& Vitrines En Verre Trempés",
              },
            ].map((item) => (
              <div className="col-lg-4 my-3 col-sm-12">
                <div
                  className="p-4 rounded-3 shadow-sm"
                  style={{
                    background: `#ffffff url(${item.image}) no-repeat right top`,
                    height: "430px",
                  }}
                >
                  <h2 className=" font-monospace fs-4">{item.name}</h2>
                  <p className="fs-6 fw-semibold">{item.description}</p>
                  <div>
                    <a
                      href="https://bigluxinox.com/shop/"
                      className="btn px-4 py-2 rounded-pill"
                      role="button"
                      style={{ backgroundColor: "#FF00F5", color: "#FFFFFF" }}
                    >
                      <span className="">
                        <span className="fw-semibold fs-4">
                          Voir Le Produit
                        </span>
                        <span className="">
                          <i
                            aria-hidden="true"
                            className="ps-3 fs-4 fas fa-arrow-right"
                          ></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div
          className="position-relative"
          style={{ backgroundColor: "#2f0e66" }}
        >
          <div className="container">
            <div className="d-flex py-5 justify-content-lg-between justify-content-sm-center align-content-lg-center align-content-sm-center flex-lg-row flex-sm-column flex-column">
              <p className="font-monospace fw-bold fs-2 text-light m-0 text-lg-start text-sm-center text-center">
                Une Equipe de Professionnels Et à Votre Service
              </p>
              <div className="text-lg-start text-sm-center text-center pt-sm-3 pt-lg-0 pt-3">
                <a
                  href="https://bigluxinox.com/shop/"
                  className="btn px-5 py-3 rounded-pill"
                  role="button"
                  style={{ backgroundColor: "#FF00F5", color: "#FFFFFF" }}
                >
                  <span className="">
                    <span className="">
                      <i
                        aria-hidden="true"
                        className="pe-4 fs-5 fas fa-phone-alt"
                      ></i>
                    </span>
                    <span className="fw-semibold fs-5">Contact</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <svg
            width="3em"
            height="3em"
            viewBox="0 0 16 16"
            className="position-absolute top-100 start-50 translate-middle mt-1"
            fill="#2f0e66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
        <div className="d-flex justify-content-center bg-light py-5">
          <h3 className="font-monospace text-dark fw-bold fs-2 text-center px-5 px-lg-0 px-sm-5">
            votre satisfaction est notre engagement
          </h3>
        </div>
      </section>
      <section style={{ backgroundColor: "#FFF" }}>
        <div className="container">
          {/* d-flex justify-content-center align-content-center flex-column */}
          <div className="row py-5">
            <div className="col-12 d-flex justify-content-center">
              <h2 className="font-monospace d-flex fs-2 fw-bold text-dark pb-4">
                Accessoires
              </h2>
            </div>
            <div className="col-12 d-flex justify-content-center pb-5 pt-1">
              <img
                height="65"
                src={icon}
                alt="pipes"
                style={{ height: "65px" }}
              />
            </div>
          </div>
          <div className="row pb-5">
            {[
              {
                image:
                  "https://bigluxinox.com/wp-content/uploads/2020/03/Rampes0772-300x300.jpg",
                sku: "RI-001",
                category: "Rampes",
                rating: 4,
              },
              {
                image:
                  "https://bigluxinox.com/wp-content/uploads/2020/03/Rampes0774-300x300.jpg",
                sku: "RI-002",
                category: "Rampes",
                rating: 5,
              },
              {
                image:
                  "https://bigluxinox.com/wp-content/uploads/2020/03/Rampes0775-300x300.jpg",
                sku: "RI-003",
                category: "Rampes",
                rating: 5,
              },
              {
                image:
                  "https://bigluxinox.com/wp-content/uploads/2020/03/Rampes0782-300x300.jpg",
                sku: "RI-004",
                category: "Rampes",
                rating: 5,
              },
            ].map((item) => (
              <div className="col-12 col-lg-3 col-sm-6 my-sm-2 text-center text-lg-start text-sm-center my-2 my-lg-0">
                <img src={item.image} alt="accessoire" />
                <h6>{item.category}</h6>
                <h2 className="font-monospace text-dark">{item.sku}</h2>
                <StarRating rating={item.rating} />
              </div>
            ))}
          </div>
          <div className="py-sm-3 py-lg-5"></div>
        </div>
      </section>
      <section style={{ backgroundColor: "#FFF" }}>

        <div className="container">
          <div className="row py-5">
            <div className="col-12 d-flex justify-content-center">
              <h2 className="font-monospace d-flex fs-2 fw-bold text-dark pb-4">
                Présentation
              </h2>
            </div>
            <div className="col-12 d-flex justify-content-center pb-5 pt-1">
              <img
                height="65"
                src={icon}
                alt="pipes"
                style={{ height: "65px" }}
              />
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <div className="row row-cols-1 row-cols-md-3 g-4 d-flex align-items-end pb-5">
            <div className="col">
              <div
                className="card  border-0 shadow"
                style={{ height: "356.344px" }}
              >
                <div className="card-body p-4">
                  <h5 className="card-title font-monospace fs-1 fw-bold px-3 text-sm-center pt-5 pt-lg-0 pt-sm-5">
                    Fournitures et poses
                  </h5>
                  <div className="text-center fs-4">
                    <StarRating rating={5} />
                  </div>
                  <p className="card-text text-center px-4">
                    NOUS TRAVAILLONS AVEC UNE ÉQUIPE DE PROFESSIONNELLE DONT LE
                    SEUL OBJECTIF ET VOTRE SATISFACTION
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-bg-dark border-0 shadow"
                style={{ height: "462px" }}
              >
                <img
                  src="https://bigluxinox.com/wp-content/uploads/2020/01/presentation33.jpg"
                  className="card-img"
                  alt="..."
                  style={{ height: "462px" }}
                />
                <div className="card-img-overlay bg-dark opacity-50"></div>
                <div className="card-img-overlay  pt-5">
                  <h5 className="card-title pt-5 font-monospace fs-2  fw-bold px-3 text-center">
                    On Vous Propose La Modernité
                  </h5>
                  <p className="card-text text-center px-3">
                    une innovation en matiére de déco intérieure et extérieure
                  </p>
                  <div className="text-center">
                    <a
                      href="https://bigluxinox.com/shop/"
                      className="btn px-4 py-2 rounded-pill"
                      role="button"
                      style={{ backgroundColor: "#FF00F5", color: "#FFFFFF" }}
                    >
                      <span className="">
                        <span className="fw-semibold fs-6">
                          Voir Plus
                        </span>
                        <span className="">
                          <i
                            aria-hidden="true"
                            className="ps-3 fs-6 fas fa-arrow-right"
                          ></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card pb-5  border-0 shadow"
                style={{
                  height: "356.344px",
                }}
              >
                <div className="card-body py-5">
                  <h5 className="card-title text-center font-monospace fs-1 fw-bold px-lg-3 px-sm-5 pt-5 pt-lg-0 pt-sm-5">
                    Dinox
                  </h5>
                  <div className="text-center fs-4">
                    <StarRating rating={5} />
                  </div>
                  <p className="card-text text-center px-4">
                    ON VOUS PROPOSE UN PRODUIT DURABLE QUI ALLIE ENTRE CONFORT
                    ET SÉCURITÉ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
        <span className="fs-3 font-monospace fw-bold text-dark mb-3 mb-lg-0 mb-sm-3">Notre Client :</span>
        <Carousel 
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            centerMode={true}
            showPartialVisibility={true}
            centerSlidePercentage={30}
            swipeScrollTolerance={5}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="btn  btn-outline-dark left rounded-circle px-3 py-2 border-0" // Add "left" class for the previous button
                  >
                    <i class="fa fa-angle-left"></i>
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="btn  btn-outline-dark right rounded-circle px-3 py-2 border-0" // Add "right" class for the next button
                  >
                    <i class="fa fa-angle-right"></i>
                  </button>
                )
              }
            responsive={{
              desktop: {
                breakpoint: { max: 4000, min: 1024 },
                items: 5,
                partialVisibilityGutter: 10,
              },
              tablet: {
                breakpoint: { max: 1024, min: 768 },
                items: 3,
                partialVisibilityGutter: 10,
              },
              mobile: {
                breakpoint: { max: 767, min: 0 },
                items: 3,
                partialVisibilityGutter: 10,
              },
            }}
            className="custom-carousel"
          >
            {Array.from({ length: 15 }, (_, index) => (
          <div className='mb-3 px-3'>
          <img src={logoo} alt={`Item  ${index +1}`} className="mb-5" style={{width: '200px'}} />
        </div>
        ))}

          </Carousel>
        </div>
        <div className="py-5"></div>
      </section>
    </div>
  );
}

export default Home;
