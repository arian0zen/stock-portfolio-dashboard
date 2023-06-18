"use client";
import Navbar from "@/components/ui/Navbar";
import React from "react";
import Sidebar from "@/components/ui/Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col justify-start items-center w-full">
        <Navbar />
        <div className="w-[90%]">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
