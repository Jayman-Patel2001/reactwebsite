// import React from "react";

// const Service = (props) => {
//   return <h1>I am a {props.name} Page</h1>;
// };

// export default Service;

// React Website..........................................................
import React from "react";
import Card from "./Card";
import CardsData from "./CardsData";

const Service = () => {
  return (
    <>
      <div className="mt-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-10 col-10 mx-auto">
            <div className="row gy-5">
              {CardsData.map((val, index) => {
                return (
                  <Card
                    key={index}
                    imgSrc={val.imgSrc}
                    title={val.title}
                    content={val.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
