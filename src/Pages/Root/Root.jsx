import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="container mx-auto bg-white text-black">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
