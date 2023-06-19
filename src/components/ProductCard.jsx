import React, { useState } from "react";
import { ProductDetails } from "../pages";

export const ProductCard = ({ image, product, details }) => {
  const [dialogDetails, setDialogDetails] = useState(false);

  const showDetails = () => {
    setDialogDetails(true);
  };

  return (
    <>
      <section
        className="w-full sm:w-3 text-center cursor-pointer"
        onClick={showDetails}
      >
        <img alt="Card" src={image} className="w-full" />
        <h3>{`${product}`}</h3>
      </section>
      <ProductDetails
        visible={{ show: dialogDetails, hide: setDialogDetails }}
        details={details}
      />
    </>
  );
};
