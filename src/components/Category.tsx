import React, { ReactElement, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import GridProduct from "./GridProduct";

interface Props {}

interface State {}

const Category = (): ReactElement => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    getURL();
  });

  const getURL = (): void => {
    const fullUrl = window.location.href;
    setUrl(fullUrl.substring(fullUrl.lastIndexOf("/") + 1));
  };

  return (
    <>
      <Helmet>
        <title>Ruben & Me | Category</title>
        <meta name="description" content="" />
      </Helmet>

      <main className="main-content">
        <div className="container mb-5">
          <h2 className="title mt-2 has-text-centered">
            {url + "."}
          </h2>
          <p className="has-text-centered">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
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
                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/ESoftToys.jpg"
                  price="14.00"
                />
                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/20_01_21_Homepage_Tile_Category_Block_Robes.jpg"
                  price="17.00"
                />
                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/EBackpacks.jpg"
                  price="17.00"
                />
                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/ENewIn.jpg"
                  price="16.00"
                />

                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/20_01_21_Homepage_Tile_Category_Block_Robes.jpg"
                  price="17.00"
                />
                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/ESoftToys.jpg"
                  price="14.00"
                />
                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/ENewIn.jpg"
                  price="16.00"
                />
                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/EBackpacks.jpg"
                  price="12.00"
                />

                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/ESoftToys.jpg"
                  price="14.00"
                />
                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/20_01_21_Homepage_Tile_Category_Block_Robes.jpg"
                  price="17.00"
                />
                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/EBackpacks.jpg"
                  price="12.00"
                />
                <GridProduct
                  image="https://cdn.my1styears.com/media/wysiwyg/home/grid/ENewIn.jpg"
                  price="16.00"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Category;
