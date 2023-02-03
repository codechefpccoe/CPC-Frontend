import React from "react";
import Navbar from "../../Components/Navbar";
import Container from "./Container";

const index = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Container />
    </div>
  );
};

export default index;
