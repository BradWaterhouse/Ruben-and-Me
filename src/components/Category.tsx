import React, { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import GridProduct from "./GridProduct";
//@ts-ignore
import Products from "./../../products.json";
import { useLocation } from "react-router-dom";
import "./../assets/scss/category.scss";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sortingOrder: number;
  categories: Array<string>;
}

const Category = (): ReactElement => {
  const location = useLocation();
  const [categoryName, setCategoryName] = useState<string>("");
  const [products, setProducts] = useState([]);
  const [sortingOrder, setSortingOrder] = useState<string>("nameasc");

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

  const handleDropdownChange = (event: ChangeEvent): void => {
    setSortingOrder((event.target as HTMLSelectElement).value);
  };

  const getSorting = (product, nextProduct): number => {
    switch (sortingOrder) {
      case "pricedesc":
        return parseInt(nextProduct.price) - parseInt(product.price);
      case "priceasc":
        return parseInt(product.price) - parseInt(nextProduct.price);
      case "nameasc":
        return product.name.localeCompare(nextProduct.name);
      case "namedesc":
        return nextProduct.name.localeCompare(product.name);
      default:
        return nextProduct.sortingOrder - product.sortingOrder;
    }
  };

  const formatCategoryName = (categoryName: string): string =>
    categoryName.replace("-", " ");

  return (
    <>
      <Helmet>
        <title>Ruben & Me | {formatCategoryName(categoryName)}</title>
        <meta name="description" content="" />
      </Helmet>

      <main className="main-content">
        <div className="container mb-5">
          <h2 className="title mt-2 has-text-centered capitalize">
            {formatCategoryName(categoryName) + "."}
          </h2>
          <p className="has-text-centered">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text.
          </p>
          <hr />

          <div className="columns is-multiline has-text-centered">
            <div className="column is-2-desktop is-offset-10-desktop is-right is-12-mobile">
              <div className="sort field" style={{ marginTop: 10 }}>
                <select
                  aria-label="Sort by"
                  className="select"
                  onChange={handleDropdownChange}
                >
                  <option value="default">Sort By</option>
                  <option value="pricedesc">Price (Desc)</option>
                  <option value="priceasc">Price (Asc)</option>
                  <option value="nameasc">Name: A to Z</option>
                  <option value="namedesc">Name: Z to A</option>
                </select>
              </div>
            </div>

            <div className="column is-12 is-centered">
              <div className="columns is-multiline is-mobile has-text-centered">
                {products.length == 0 ? (
                  <div
                    className="column has-text-centered card is-10-mobile is-offset-1-mobile"
                    style={{
                      backgroundColor: "#f3f1f1",
                      paddingTop: 30,
                      paddingBottom: 30,
                      marginTop: 20,
                    }}
                  >
                    <div>
                      <h3 className="title is-centered">
                        Sorry, we don't have any products in this category yet.
                      </h3>
                      <h5>
                        Please check our <a href="/">Facebook</a> or
                        <a href="/"> Instagram </a>page for updates.
                      </h5>
                    </div>
                  </div>
                ) : (
                  products.sort(getSorting).map((product: Product) => {
                    return (
                      <GridProduct
                        key={product.id}
                        image={product.image}
                        price={product.price}
                        name={product.name}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Category;
