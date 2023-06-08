import React from "react";
import { Helmet } from "react-helmet";
import pinkCircle from "../assets/pink-circle.svg";
import Form from "react-bootstrap/Form";
function Contact() {
  return (
    <div>
      <Helmet>
        <title>Dinox - Catalogue</title>
      </Helmet>
      <section className="pt-lg-5 pt-md-5  pt-0 pt-sm-0">
        <div className="container pt-md-5 pt-lg-5 pt-0 pt-sm-0">
          <div className="pt-lg-5 pt-md-5 pt-0 pt-sm-0">
            <h1 className="pt-lg-5 pt-md-5 pt-0 pt-sm-0 text-center font-monospace text-dark fw-bold fs-1">
              Contactez-nous
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
        <div className="container shadow py-5 px-3 mb-5 bg-dark rounded-2 bg-opacity-50">
          <div className="row py-3">
            <div className="col-lg-4 col-md-12 col-12 col-sm-12 d-flex align-items-stretch">
              <div className="border border-light border-1 p-4 rounded-1 text-light text-center w-100">
                <i
                  aria-hidden="true"
                  className="text-light fs-5 fas fa-phone-alt"
                ></i>
                <p>Bureau Alger: 021-205-069</p>
                <p>Bureau Chlef: 027.725.51</p>

                <i
                  aria-hidden="true"
                  className="text-light fs-5 fas fa-phone-alt"
                ></i>
                <p>
                  Commercial Alger: 0540 939181 Commercial Chlef: 0558386366
                </p>
                <p>Gérant: 0542 673 542 </p>
                <p>Fax: 027725517</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 col-sm-12 d-flex align-items-stretch">
              <div className="border border-light border-1 p-4 rounded-1 text-light text-center w-100">
                <i
                  aria-hidden="true"
                  class="text-light fs-5 far fa-envelope"
                ></i>
                <p>bigluxinox@gmail.com</p>
                <i
                  aria-hidden="true"
                  class="text-light fs-5 far fa-envelope"
                ></i>
                <p>Horaire d’ouverture :</p>
                <p>Du Samedi au Jeudi : de 8h00 à 17h00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 col-sm-12 d-flex align-items-stretch">
              <div className="border border-light border-1 p-4 rounded-1 text-light text-center w-100">
                <i
                  aria-hidden="true"
                  class="text-light fs-5 fas fa-map-marker-alt"
                ></i>
                <p>Alger : Rue Douzi 3 N° 156 BAB EZZOUAR Alger</p>
                <i
                  aria-hidden="true"
                  class="text-light fs-5 fas fa-map-marker-alt"
                ></i>
                <p>
                  Chlef : Hay Essalem Lotissement El Chara n° 6, Chlef, Algérie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-0 shadow bg-light rounded-2 mb-5">
        <div className="text-center text-dark pt-4">
          <p className="mb-1 fw-bold">
            Vous pouvez nous laisser un message ou une demande de devis
            ci-dessous,
          </p>
          <p>
            Vous pouvez également passer par notre magasin aux heures de
            travail.
          </p>
        </div>
        <div className="container pb-5 d-flex justify-content-end">
          <div className="position-absolute mt-5 start-50 translate-middle">
            <img src={pinkCircle} alt="pipes" style={{ height: "100px" }} />
          </div>
        </div>
        <div className="bg-dark bg-opacity-25 p-5 rounded-bottom-2">
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="name" placeholder="Votre nom" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="name" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="name" placeholder="Numéro do Téléphone" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
            <div className="">
                  <a
                    href="/contact"
                    className="btn px-3 py-1 rounded-pill"
                    role="button"
                    style={{ backgroundColor: "#FF00F5", color: "#FFFFFF" }}
                  >
                    <span className="">
                      <span className="">

                      </span>
                      <span className="fw-semibold fs-6">
                        Envoyez
                      </span>
                    </span>
                  </a>
                </div>
          </Form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
