import React, { ReactElement } from "react";

const PromoHeader = (): ReactElement => {
  return (
    <>
      <div className="container mb-5">
        <hr />
        <div
          className="columns is-10 has-text-centered is-centered is-mobile"
          style={{ marginTop: 20 }}
        >
          <div
            className="column has-text-centered"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <h3 className="subtitle mt-2">
              <b>Free</b> Gift Box.
            </h3>
            <small className="is-hidden-mobile">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </small>
            <small className="is-hidden-desktop is-hidden-tablet">
              Across all items.
            </small>
          </div>
          <div
            className="column has-text-centered"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <h3 className="subtitle mt-2">
              <b>Free</b> Delivery.
            </h3>
            <small className="is-hidden-mobile">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </small>
            <small className="is-hidden-desktop is-hidden-tablet">
              On orders over £32.
            </small>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default PromoHeader;
