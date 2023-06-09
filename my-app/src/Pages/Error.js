import React from "react";
import { Helmet } from "react-helmet";
import '../css/error.css';
function Error() {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://fonts.googleapis.com/css?family=Fredoka+One"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700"
          rel="stylesheet"
        />
        <title>Dinox - Error</title>
      </Helmet>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Oops, The Page you are looking for can't be found!</h2>
 
          <a href="/" className="mt-3">
            <span className="arrow"></span>Return To Homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error;
