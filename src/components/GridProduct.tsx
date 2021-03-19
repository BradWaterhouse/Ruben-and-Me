import React, { ReactElement } from "react";
import "./../assets/scss/category.scss";

interface Props {
  image: string;
  price: number;
  name: string;
  link: string;
}

const GridProduct = (props: Props): ReactElement => {
  return (
    <div className="column is-one-quarter-desktop is-6-mobile">
      <div className="card" style={{ paddingBottom: 20 }}>
        <img src={props.image} alt="Alps" style={{maxHeight: 375}} />
        <div className="w3-container w3-center card-text">
          <h3 className="product-name-text">{props.name}</h3>
          <b>£{props.price}</b>
          <br />
          <button
            className="button is-size-7-mobile"
            style={{ marginTop: 10, backgroundColor: "#faefdf" }}
          >
            <a target="_blank" href={props.link} style={{ color: "black" }}>
              Shop now on Etsy
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridProduct;
