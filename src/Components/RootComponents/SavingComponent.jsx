import React from "react";
import Saving from "../ChildComponents/Saving";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const SavingComponent = () => {
  return (
    <>
      <Header />
      <div className='mg-top-90'>
        <Saving />
      </div>
      <Footer />
    </>
  );
};

export default SavingComponent;
