import React from "react";
import Logo from "../assets/logo.png";
import { Cards } from "./cards";
import image1 from "../assets/card1.jpg";

const Property = () => {
  return (
    <section className="font-Poppins mb-52">
      <div className="flex justify-center ">
        <img src={Logo} alt="" className="w-[200px]" />
      </div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="uppercase text-2xl font-semibold">Futura Property</h1>
        <p className="py-4 px-7 font-light text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Cards
        img={image1}
        judul="Rumah Pademangan"
        desc="lorem dkasjnkifjdiewqhjfiowaehjfoijhds"
      />
    </section>
  );
};

export default Property;
