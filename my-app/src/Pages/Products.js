import React from "react";
import { Helmet } from "react-helmet";
import pinkCircle from "../assets/pink-circle.svg";
import { categories } from "../data/categories";

function Products() {
  return (
    <div>
      <Helmet>
        <title>Dinox - Produits</title>
      </Helmet>
      <section className="pt-lg-5 pt-md-5  pt-0 pt-sm-0">
        <div className="container pt-md-5 pt-lg-5 pt-0 pt-sm-0">
          <div className="pt-lg-5 pt-md-5 pt-0 pt-sm-0">
            <h1 className="pt-lg-5 pt-md-5 pt-5 pt-sm-0 text-center font-monospace text-dark fw-bold fs-1">
              Produits
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
        <div className="container p-5  mb-5 bg-dark rounded-3 bg-opacity-75">
          <div className="row">
            {categories.map((category) => (
              <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                <a href={`/category/${category.id}`} role="button">
                  <div className="card border-0 my-2" key={category.id}>
                    <img
                      src={category.image}
                      className="card-img"
                      alt="..."
                    />
                    {/* {category.image} */}
                    <div className="card-img-overlay py-0 position-relative w-100">
                      <h5 className="card-title rounded-1 fs-6 fw-bold font-monospace position-absolute bottom-0 start-50 py-2 w-75 translate-middle-x align-self-end text-center bg-light text-bg-light">
                        {category.name}
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
