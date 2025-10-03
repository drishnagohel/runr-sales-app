import React from "react";
import Head from "./Head";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import FootScripts from "./FootScripts";

const MasterLayout = ({ children }) => {
  return (
    <>
      <Head />
      <div className="theme-wrapper">
        <Menu />
        <div className="theme-content">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
      <FootScripts />
    </>
  );
};

export default MasterLayout;
