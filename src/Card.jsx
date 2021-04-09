import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto card_div">
        <div className="card">
          <img src={props.imgSrc} className="card-img-top" alt="Error Occur" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <NavLink exact to="/termpage" className="btn_card">
              Check Out
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
