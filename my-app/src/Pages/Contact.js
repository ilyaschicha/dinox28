import React from "react";
import { Helmet } from "react-helmet";
import pinkCircle from "../assets/pink-circle.svg";

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
        
      </section>
    </div>
  );
}

export default Contact;
