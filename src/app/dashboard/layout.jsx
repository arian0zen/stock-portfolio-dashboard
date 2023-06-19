"use client";
import Navbar from "@/components/ui/Navbar";
import React, { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";

const DefaultLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    console.log("toggle sidebar");
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col justify-start items-center w-full">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="w-[90%]">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
