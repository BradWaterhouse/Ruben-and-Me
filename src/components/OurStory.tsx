import React, { ReactElement } from "react";

interface Props {}

interface State {}

const OurStory = (): ReactElement => {
  return (
    <>
      <h3 className="title mt-2 has-text-centered" style={{ fontWeight: "lighter" }}>Our Story.</h3>
      <p className="has-text-centered">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className="has-text-centered" style={{ marginTop: 10 }}>
        <b>Danny & Reuben.</b>
      </p>
    </>
  );
};

export default OurStory;
