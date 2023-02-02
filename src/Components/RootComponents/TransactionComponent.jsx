import React from "react";
import Transaction from "../ChildComponents/Transaction";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const TransactionComponent = () => {
  return (
    <>
      <Header />
      <Transaction />
      <Footer />
    </>
  );
};

export default TransactionComponent;
