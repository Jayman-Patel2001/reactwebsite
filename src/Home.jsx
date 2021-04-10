import React from "react";
import img from "../src/images/rocket.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        para="We are the team of talented developer making websites"
        visit="/reactwebsite/service"
        btnname="Get Started"
        imgSrc={img}
      />
    </>
  );
};

export default Home;
