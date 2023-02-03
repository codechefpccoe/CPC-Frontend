import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Wave from "../../Components/Wave";
import HomeContainer from "./HomeContainer";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen relative overflow-hidden ">
      <Navbar />
      <HomeContainer />
      <Footer />
      <Wave />
    </div>
  );
};

export default HomePage;
