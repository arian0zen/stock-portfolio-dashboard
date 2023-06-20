"use client";
import React from "react";
import { useEffect } from "react";
import { signOut } from "next-auth/react";

const DashBoard = () => {
  const logoutHandler = () => {
    signOut();
  };
  return (
    <>
      <button onClick={logoutHandler} className="btn btn-primary">
        Logout
      </button>
      <div className="text-green-500 text-2xl">This is main dashboard</div>
    </>
  );
};

export default DashBoard;
