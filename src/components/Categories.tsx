import React, { ReactElement, useEffect, useState } from "react";
import GridProduct from "./GridProduct";
//@ts-ignore
import Products from "./../../products.json";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sortingOrder: number;
  categories: Array<string>;
}

const Categories = (): ReactElement => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getBestSellers();
  }, []);

  const getBestSellers = (): void => {
    const jsonProductList: Product[] = Products.all;

    jsonProductList.map((product: Product) => {
      if (product.categories.includes("best-sellers")) {
        setProducts((products: Product[]) => [...products, product]);
      }
    });
  };

  return (
    <>
      <h3
        className="title mt-2 has-text-centered"
        style={{ fontWeight: "lighter" }}
      >
        Our best sellers.
      </h3>

      <div className="columns is-multiline is-mobile has-text-centered">
        {products.map((product) => {
          return (
            <GridProduct
              key={product.id}
              image={product.image}
              price={product.price}
              name={product.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default Categories;
