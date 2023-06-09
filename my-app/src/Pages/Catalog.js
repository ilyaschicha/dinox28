import React from "react";
import { Helmet } from "react-helmet";
import pinkCircle from "../assets/pink-circle.svg";
import pdf from "../assets/test.pdf";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function Catalog() {


  const newplugin = defaultLayoutPlugin();
  return (
    <div>
      <Helmet>
        <title>Dinox - Catalogue</title>
      </Helmet>
      <section className="pt-lg-5 pt-md-5  pt-0 pt-sm-0">
        <div className="container pt-md-5 pt-lg-5 pt-0 pt-sm-0">
          <div className="pt-lg-5 pt-md-5 pt-0 pt-sm-0">
            <h1 className="pt-lg-5 pt-md-5 pt-5 pt-sm-0 text-center font-monospace text-dark fw-bold fs-1">
              Catalogue
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
        <div className="container py-5 mb-5 bg-dark rounded-3 bg-opacity-75">
          <div className="pt-3" style={{height: "800px"}}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={pdf} plugins={[newplugin]} initialPage={0} />
            </Worker>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catalog;
