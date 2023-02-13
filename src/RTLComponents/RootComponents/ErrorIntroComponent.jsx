import React from "react";
import ErrorIntro from "../ChildComponents/ErrorIntro";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const ErrorIntroComponent = () => {
  return (
    <>
      <Header />
      <ErrorIntro />
      <Footer />
    </>
  );
};

export default ErrorIntroComponent;
