"use client";
import React from "react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const DashBoard = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.replace("/login");
    }
  });
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
