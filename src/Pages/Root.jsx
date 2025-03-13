import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
