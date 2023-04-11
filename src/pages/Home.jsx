import React from "react";
import { Navbar } from "../component/Navbar";
import Jumbotron from "../component/Jumbotron";
// import Hero from "../component/Property";
import Property from "../component/Property";

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Property />
    </>
  );
};

export default Home;
