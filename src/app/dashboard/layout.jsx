"use client";
import Navbar from "@/components/ui/Navbar";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Sidebar from "@/components/ui/Sidebar";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import LoginLoading from "../(auth)/login/loading";

const DefaultLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    console.log("session loading");
    return <Loading />
  } else if (session.status === "unauthenticated") {
    router?.replace("/login");
    return <LoginLoading/>
  }

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
