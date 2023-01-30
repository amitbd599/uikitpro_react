import React from "react";
import AllHeader from "../ChildComponents/AllHeader";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const AllHeaderComponent = () => {
  return (
    <>
      <Header />
      <AllHeader />
      <Footer />
    </>
  );
};

export default AllHeaderComponent;
