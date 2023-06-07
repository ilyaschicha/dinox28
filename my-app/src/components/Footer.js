import React from "react";
import logo from "../assets/dinox.svg";
function Footer() {
  return (
    <footer style={{ backgroundColor: "#001524" }}>
      <div className="container">
        <div className="d-flex flex-column">
          <section className="">
            <div className="row p-5">
              <div className="col-12 col-sm-12 col-lg-3 d-flex align-items-start justify-content-center flex-column">
                <h5 className="fs-2 w-100 fw-blod text-lg-start text-sm-center text-center text-light font-monospace">
                  <span>A Propos</span>
                </h5>
                <p className="fs-6 fw-semibold text-lg-start text-sm-center text-center text-light">
                  Dinox votre entreprise de réalisation de travaux de bâtiment
                  soudure et menuiserie métallique.
                </p>
              </div>
              <div className="col-12 col-sm-12 text-center mb-4 mb-lg-0 mb-sm-4 ms-3 ms-lg-0 ms-sm-3 col-lg-3 align-items-center justify-content-center">
                <img
                  src={logo}
                  className="align-self-center h-100 w-50"
                  alt=""
                />
              </div>
              <div className="col-12 col-sm-12 col-lg-6">
                <ul className="navbar-nav ms-sm-0 ms-0">
                  <li className="nav-item d-flex align-content-center">
                    <span className="fs-5 text-primary pe-1">
                      <i aria-hidden="true" className="far fa-envelope"></i>
                    </span>
                    <span className="ps-1 text-light fs-6">
                      contact@dinox.com
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="fs-5 text-primary pe-1">
                      <i aria-hidden="true" className="fas fa-phone-alt"></i>
                    </span>
                    <span className="ps-1 text-light fs-6">
                      Bureau Alger 021 205 069 - 0540 939 181
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="fs-5 text-primary pe-1">
                      <i
                        aria-hidden="true"
                        className="fas fa-map-marker-alt"
                      ></i>
                    </span>
                    <span className="ps-1 text-light fs-6">
                      Rue Douzi 3 N° 156 BAB EZZOUAR . Alger
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="fs-5 text-primary pe-1">
                      <i aria-hidden="true" className="fas fa-phone-alt"></i>
                    </span>
                    <span className="ps-1 text-light fs-6">
                      Bureau Chlef 027.725.51 - 0542 631 256
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="fs-5 text-primary pe-1">
                      <i
                        aria-hidden="true"
                        className="fas fa-map-marker-alt"
                      ></i>
                    </span>
                    <span className="ps-1 text-light fs-6">
                      Hay Essalem Lotissement El Chara n° 6, Chlef, Algérie
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="fs-5 text-primary pe-1">
                      <i aria-hidden="true" className="fas fa-phone-alt"></i>
                    </span>
                    <span className="ps-1 text-light fs-6">
                      Gérant: 0542 673 542
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="fs-5 text-primary pe-1">
                      <i aria-hidden="true" className="fas fa-fax"></i>
                    </span>
                    <span className="ps-1 text-light fs-6">Fax: 027725517</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="row py-5 border border-end-0 border-bottom-0 border-start-0">
              <div className="col-12 col-lg-8 col-sm-12 ">
                <a
                  href="https://chichailyes.com"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link fs-5 text-light"
                >
                  <span>
                    Copyright © 2023 | Dinox Développé par Algeria Software
                  </span>
                </a>
              </div>
              <div className="col-12 col-lg-4 col-sm-12 mt-3 mt-lg-0 mt-sm-3  d-flex justify-content-lg-end justify-content-sm-center justify-content-center">
                <a
                  className="btn btn-outline-light rounded-circle mx-2"
                  href="https://www.facebook.com/profile.php?id=100090463447713"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  className="btn btn-outline-light rounded-circle mx-2"
                  href="https://www.instagram.com/dinox.28/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
