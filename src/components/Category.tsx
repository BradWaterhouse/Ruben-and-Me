import React, { ReactElement, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import GridProduct from "./GridProduct";
//@ts-ignore
import Products from "./../../products.json";
import { useLocation } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  categories: Array<string>;
}

const Category = (): ReactElement => {
  const location = useLocation();
  const [categoryName, setCategoryName] = useState<string>("");
  const [products, setProducts] = useState([]);

  useEffect((): void => {
    setProducts([]);
    getURL();
    getProductsForCategory();
  }, [location, categoryName]);

  const getURL = (): void => {
    const fullUrl = location.pathname;
    setCategoryName(fullUrl.substring(fullUrl.lastIndexOf("/") + 1));
  };

  const getProductsForCategory = (): void => {
    const jsonProductList: Product[] = Products.all;

    jsonProductList.map((product: Product) => {
      if (product.categories.includes(categoryName)) {
        setProducts((products: Product[]) => [...products, product]);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Ruben & Me | Category</title>
        <meta name="description" content="" />
      </Helmet>

      <main className="main-content">
        <div className="container mb-5">
          <h2 className="title mt-2 has-text-centered">{categoryName + "."}</h2>
          <p className="has-text-centered">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text.
          </p>
          <hr />

          <div className="columns is-multiline has-text-centered">
            <div className="column is-2 is-offset-10-desktop is-right is-12-mobile">
              <div
                className="sort field is-pulled-right"
                style={{ marginTop: 10 }}
              >
                <span>Sort by: </span>
                <select aria-label="Sort by">
                  <option value="weight">Bestsellers</option>
                  <option value="pricedesc">Price (Desc)</option>
                  <option value="priceasc">Price (Asc)</option>
                  <option value="nameasc">Name: A to Z</option>
                  <option value="namedesc">Name: Z to A</option>
                </select>
              </div>
            </div>

            <div className="column is-12">
              <div className="columns is-multiline is-mobile">
                {products.map((product: Product) => {
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Category;
