import React from "react";
import Hero from "../assets/hero1.png";

const Jumbotron = () => {
  return (
    <>
      <section className="mt-[7rem] flex justify-center">
        <div>
          <img src={Hero} alt="" className="w-screen" />
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
