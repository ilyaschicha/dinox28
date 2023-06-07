import React from "react";
import { Helmet } from "react-helmet";

function Error() {
  return (
    <div>
      <Helmet>
        <title>Dinox - Error</title>
      </Helmet>
      <h1>Sorry this page is not available</h1>
    </div>
  );
}

export default Error;
