import React, { ReactElement, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
//@ts-ignore
import Categories from "./../../category.json";
import { useParams } from "react-router-dom";
import "./../assets/scss/category.scss";

interface Category {
  id: number;
  name: string;
  description: string;
}

const ShopifyCollection = (): ReactElement => {
  const { collectionName } = useParams();
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
    getCategoryInformation();
  }, [collectionName]);

  useEffect(() => {
    createCollection();
  }, [collectionId]);

  const getCategoryInformation = (): void => {
    const index = Categories.all.findIndex(
      (selectedCategory: Category) => selectedCategory.name === collectionName
    );

    if (index >= 0) {
      setCategoryDescription(Categories.all[index].description);
      setCollectionId(Categories.all[index].id);
    } else {
      setCollectionId(240046538906);
      setCategoryDescription(
        "We can't find any available products in this category, here's a list of our best sellers instead."
      );
    }
  };

  const createCollection = () => {
    document.getElementById("products").innerHTML = "";
    ui.createComponent("collection", {
      id: collectionId,
      node: document.getElementById("products"),
      moneyFormat: "%C2%A3%7B%7Bamount%7D%7D",

      options: {
        product: {
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px",
                width: "calc(25% - 20px)",
              },
              img: {
                height: "calc(100% - 15px)",
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
              },
              imgWrapper: {
                "padding-top": "calc(75% + 15px)",
                position: "relative",
                height: "0",
              },
            },
            button: {
              "font-family": "PT Sans, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#dccd54",
              },
              "background-color": "#f4e45d",
              ":focus": {
                "background-color": "#dccd54",
              },
              "border-radius": "4px",
            },
            quantityInput: {
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
            },
          },
          buttonDestination: "modal",
          contents: {
            options: false,
          },
          text: {
            button: "View product",
          },
          googleFonts: ["PT Sans"],
        },
        productSet: {
          styles: {
            products: {
              "@media (min-width: 601px)": {
                "margin-left": "-20px",
              },
            },
          },
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            button: false,
            buttonWithQuantity: true,
          },
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px",
              },
            },
            button: {
              "font-family": "PT Sans, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#dccd54",
              },
              "background-color": "#f4e45d",
              ":focus": {
                "background-color": "#dccd54",
              },
              "border-radius": "4px",
            },
            quantityInput: {
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
            },
          },
          googleFonts: ["PT Sans"],
          text: {
            button: "Add to cart",
          },
        },
        option: {},
        cart: {
          styles: {
            button: {
              "font-family": "PT Sans, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#dccd54",
              },
              "background-color": "#f4e45d",
              ":focus": {
                "background-color": "#dccd54",
              },
              "border-radius": "4px",
            },
          },
          text: {
            total: "Subtotal",
            button: "Checkout",
          },
          googleFonts: ["PT Sans"],
        },
        toggle: {
          styles: {
            toggle: {
              "font-family": "PT Sans, sans-serif",
              "background-color": "#f4e45d",
              ":hover": {
                "background-color": "#dccd54",
              },
              ":focus": {
                "background-color": "#dccd54",
              },
            },
            count: {
              "font-size": "16px",
            },
          },
          googleFonts: ["PT Sans"],
        },
      },
    });
  };

  const formatCategoryName = (categoryName: string): string =>
    categoryName.replace("-", " ");

  return (
    <>
      <Helmet>
        <title>Reuben & Me | {formatCategoryName(collectionName)}</title>
        <meta name="description" content="" />
      </Helmet>

      <main className="main-content">
        <div className="container mb-5">
          <h2
            className="title mt-2 has-text-centered capitalize"
            style={{ fontWeight: "lighter" }}
          >
            {formatCategoryName(collectionName) + "."}
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
