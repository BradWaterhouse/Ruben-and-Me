import React, { ReactElement, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
//@ts-ignore
import Categories from "./../../category.json";
import { useLocation } from "react-router-dom";
import "./../assets/scss/category.scss";

const ShopifyCollection = (): ReactElement => {
  const location = useLocation();
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect((): void => {
    getURL();
  }, [location, categoryName]);

  useEffect(() => {
    //@ts-ignore
    const client = ShopifyBuy.buildClient({
      domain: "reuben-me.myshopify.com",
      storefrontAccessToken: "3f34ea50797015b7bb3a9c199e5a588c",
    });

    //@ts-ignore
    const ui = ShopifyBuy.UI.init(client);

    ui.createComponent("product", {
      id: 6164708851866,
      node: document.getElementById("test-id"),
      options: {
        product: {
          buttonDestination: "modal",
        },
        cart: {
          startOpen: true,
        },
      },
    });
  }, []);

  const getURL = (): void => {
    const fullUrl = location.pathname;
    setCategoryName(fullUrl.substring(fullUrl.lastIndexOf("/") + 1));
  };

  const getCategoryDescription = (): string => {
    if (Categories[categoryName] == undefined) {
      return "default category description";
    }
    return Categories[categoryName];
  };

  const formatCategoryName = (categoryName: string): string =>
    categoryName.replace("-", " ");

  return (
    <>
      <Helmet>
        <title>Reuben & Me | {formatCategoryName(categoryName)}</title>
        <meta name="description" content="" />
      </Helmet>

      <main className="main-content">
        <div className="container mb-5">
          <h2
            className="title mt-2 has-text-centered capitalize"
            style={{ fontWeight: "lighter" }}
          >
            {formatCategoryName(categoryName) + "."}
          </h2>
          <p className="has-text-centered">{getCategoryDescription()}</p>
          <hr />

          <div className="columns is-multiline has-text-centered">
            <div id="test-id" />
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopifyCollection;
