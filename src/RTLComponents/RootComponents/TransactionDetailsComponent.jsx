import React from "react";
import TransactionDetails from "../ChildComponents/TransactionDetails";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const TransactionDetailsComponent = () => {
  return (
    <>
      <Header />
      <TransactionDetails />
      <Footer />
    </>
  );
};

export default TransactionDetailsComponent;
