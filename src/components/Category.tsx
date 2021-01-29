import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import GridProduct from "./GridProduct";

interface Props {}

interface State {}

const Category = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>Ruben & Me | Category</title>
        <meta name="description" content="" />
      </Helmet>

      <main className="main-content">
        <div className="container mb-5">
          <h2 className="title mt-2 has-text-centered">
            Personalised Children's Clothes.
          </h2>
          <p className="has-text-centered">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <hr />

          <div className="columns is-multiline has-text-centered">
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
