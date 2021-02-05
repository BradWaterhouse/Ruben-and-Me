import React, { ReactElement } from "react";

interface Props {
  image: string;
  price: number;
  name: string;
}

const GridProduct = (props: Props): ReactElement => {
  return (
    <div className="column is-one-quarter-desktop is-6-mobile">
      <div className="card" style={{ paddingBottom: 20 }}>
        <img src={props.image} alt="Alps" />
        <div className="w3-container w3-center">
          <h3>{props.name}</h3>
          <b>£{props.price}</b>
          <br />
          <button
            className="button is-size-7-mobile"
            style={{ marginTop: 10, backgroundColor: "#faefdf" }}
          >
            Shop now on Etsy
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridProduct;
