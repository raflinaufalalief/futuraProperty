import React from "react";

export const Cards = (props) => {
  return (
    <>
      <div>
        <img src={props.img} alt="" className="imageCard" />
        <div>
          <h1 className="headingCard">{props.judul}</h1>
          <h1 className="descCard">{props.desc}</h1>
          <button className="btnCard"></button>
        </div>
      </div>
    </>
  );
};
