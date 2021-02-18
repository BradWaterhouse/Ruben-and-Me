import React, { ReactElement, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
//@ts-ignore
import Categories from "./../../category.json";
import { useLocation } from "react-router-dom";
import "./../assets/scss/category.scss";

interface Category {
  id: number;
  name: string;
  description: string;
}

const ShopifyCollection = (): ReactElement => {
  const location = useLocation();
  const [categoryName, setCategoryName] = useState<string>("");
  const [collectionId, setCollectionId] = useState<number>(0);
  const [categoryDescription, setCategoryDescription] = useState<string>(
    "default category description"
  );

  //@ts-ignore
  const client = ShopifyBuy.buildClient({
    domain: "reuben-me.myshopify.com",
    storefrontAccessToken: "3f34ea50797015b7bb3a9c199e5a588c",
  });

  //@ts-ignore
  const ui = ShopifyBuy.UI.init(client);

  useEffect(() => {
    console.log("use effect called");
    getURL();
    getCategoryInformation();

    document.getElementById("products").innerHTML = "";

    ui.createComponent("collection", {
      id: collectionId,
      node: document.getElementById("products"),
      options: {
        product: {
          buttonDestination: "modal",
          contents: {
            description: true,
          },
          styles: {
            button: {
              "background-color": "grey",
            },
          },
        },
        cart: {
          styles: {
            button: {
              "background-color": "grey",
            },
          },
        },
      },
    });
  }, [categoryName, []]);

  useEffect(() => {
    return () => {
      console.log("dismount called");
      document.getElementById("products").innerHTML = "";
      document.getElementById("products").className = "";
    };
  }, [location]);

  const getURL = (): void => {
    const fullUrl = location.pathname;
    setCategoryName(fullUrl.substring(fullUrl.lastIndexOf("/") + 1));
  };

  const getCategoryInformation = (): void => {
    const newCategories = Object.assign([], Categories.all);

    const index = newCategories.findIndex(
      (selectedCategory: Category) => selectedCategory.name === categoryName
    );

    if (index >= 0) {
      setCategoryDescription(Categories.all[index].description);
      setCollectionId(Categories.all[index].id);
    } else {
      setCollectionId(239574057114);
      setCategoryDescription(
        "We can't find any available products in this category, here's a list of our best sellers instead."
      );
    }
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
          <p className="has-text-centered">{categoryDescription}</p>
          <hr />

          <div className="columns is-multiline has-text-centered">
            <div id="products" />
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopifyCollection;
