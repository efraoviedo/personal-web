import React from "react";
import { Header } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      console.log(children);
    </>
  );
};

export default Layout;
