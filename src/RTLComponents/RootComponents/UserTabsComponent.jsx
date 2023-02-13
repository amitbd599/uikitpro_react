import React from "react";
import UserTabs from "../ChildComponents/UserTabs";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const UserTabsComponent = () => {
  return (
    <>
      <Header />
      <UserTabs />
      <Footer />
    </>
  );
};

export default UserTabsComponent;
