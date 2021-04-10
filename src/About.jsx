import React from "react";
import img from "../src/images/about1.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Team of Developers with"
        para="We help others to design beautiful and responsive websites"
        visit="/reactwebsite/contact"
        btnname="Contact Now"
        imgSrc={img}
      />
    </>
  );
};

export default Home;
