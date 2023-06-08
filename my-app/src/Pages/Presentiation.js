import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Helmet } from "react-helmet";
import StarRating from "../components/StarRating";
import p13 from "../assets/photo-13.jpg";
import p14 from "../assets/photo-14.jpg";
import p15 from "../assets/photo-15.jpg";
import p16 from "../assets/photo-16.jpg";
import p17 from "../assets/photo-17.jpg";
// import p18 from "../assets/photo-18.jpg";
import pinkCircle from "../assets/pink-circle.svg";
function Presentiation() {
  return (
    <div>
      <Helmet>
        <title>Dinox - Presentation</title>
      </Helmet>
      <section className="pt-lg-5 pt-md-5  pt-0 pt-sm-0">
        <div className="container pt-md-5 pt-lg-5 pt-0 pt-sm-0">
          <div className="pt-lg-5 pt-md-5 pt-0 pt-sm-0">
            <h1 className="pt-lg-5 pt-md-5 pt-0 pt-sm-0 text-center font-monospace text-dark fw-bold fs-1">
              Présentation
            </h1>
          </div>
        </div>
      </section>
      <section className="w-100">
        <div className="container py-5 d-flex justify-content-end">
          <div className="position-absolute mt-5 start-50 translate-middle">
            <img src={pinkCircle} alt="pipes" style={{ height: "100px" }} />
          </div>
        </div>
        <div className="py-5 bg-dark bg-opacity-75">
          <div className="container">
            <div className="row">
              <div className="col-12  col-lg-6 col-md-12 col-sm-12  align-self-center">
                <h1 className="pt-4 text-lg-start text-center text-sm-center font-monospace text-light fw-bold fs-1">
                  Dinox
                </h1>
                <div class="text-light pe-5 pt-3 text-lg-start text-center text-sm-center ">
                  <p>
                    Dinox votre entreprise de réalisation de travaux de bâtiment
                    soudure et menuiserie métallique dont le produit phare et
                    l’inox
                    <br />
                    On vous propose la modernité, une innovation en matière de
                    déco intérieure, et extérieure,
                    <br />
                    Cette nouveauté vous permet de réaliser toutes fabrication
                    de :
                  </p>
                  <p className="text-start">
                    – Rampe d’escalier ; main courante
                    <br />
                    – Garde-corps pour fenêtre et balcon en inox et en verre
                    <br />
                    – Barrière en inox ; verre feuilleté pour balcon et escalier
                    <br />– Porte électrique et vitrine ; panneaux de séparation
                    en verre feuilletée et en inox
                  </p>
                  <p>
                    Ainsi que la vente de toutes Les accessoires
                    <br />
                    Le Fait d’être des installateurs, ainsi que des
                    fournisseurs,&nbsp;nous rend plus efficace pour vous
                    conseiller,
                    <br />
                    Nous réalisons l’ensemble de vos projets avec des prix et
                    des délais compétitifs
                    <br />
                    En utilisant des matériaux de hautes qualités aux normes
                    certifiés en inox 316 et 304 L<br />
                    Sous aucune sous-traitances
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-12 col-sm-12 pt-5 text-md-center text-sm-center text-start text-lg-start">
                <img src={p13} alt="stares" className="rounded-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            backgroundImage: `url(${p14})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <div
            className="section-overlay"
            style={{ background: "rgba(0,0,0,.64)" }}
          >
            <div className="py-5"></div>
            <h1 className="text-center text-light fs-1 fw-bold font-monospace pt-5 pb-3 px-md-4 px-lg-0 px-sm-4 px-0">
              VOTRE SATISFACTION EST NOTRE ENGAGEMENT
            </h1>
            <div className="py-5"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-5 py-5">
          <div className="row pt-5">
            <div className="col-lg-1 d-lg-block d-md-none d-sm-none d-none"></div>
            <div className="position-relative col-lg-10 col-sm-12 col-md-12 col-12">
              <div className="bg-dark p-3  rounded-3">
                <div className=""
                style={{height: "480px"}}
                ></div>

                <ControlledCarousel />
                <h1 className="font-monospace fs-2 fw-bold text-center text-light">
                  FORMULES POUR LA FOURNITURE ET POSE
                </h1>
                <div className="text-center py-3">
                  <StarRating rating={5} className="text-center" />
                </div>
                <p className="text-center text-light px-5">
                  Pour tout vos travaux, contactez notre service-commercial afin
                  de prendre un rendez-vous. Un versement de 50 % sera effectué
                  lors de votre commande et le reste juste avant la finition des
                  travaux. Notre service commercial sera toujours à votre
                  écoute.
                </p>
                <div className="text-center pb-5">
                  <a
                    href="/contact"
                    className="btn px-4 py-2 rounded-pill"
                    role="button"
                    style={{ backgroundColor: "#FF00F5", color: "#FFFFFF" }}
                  >
                    <span className="">
                      <span className="">
                        <i
                          aria-hidden="true"
                          className="pe-3 fs-6 fas fa-phone-alt"
                        ></i>
                      </span>
                      <span className="fw-semibold fs-6">
                        Contactez nous pour un devis
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-1  d-lg-block d-md-none d-sm-none d-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Presentiation;

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        className="w-50 position-absolute start-50 translate-middle"
        style={{top: "200px"}}
        >
        <Carousel.Item className="">
          <img className="d-block rounded-4" src={p15} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="">
          <img className="d-block  rounded-4" src={p16} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="">
          <img className="d-block  rounded-4" src={p17} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

  );
}
