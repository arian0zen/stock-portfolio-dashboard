"use client";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaQuoteLeft } from "react-icons/fa";
import { BiError, BiCheckCircle, BiCheck } from "react-icons/bi";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import useSwr from "swr";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Quotes from "@/components/Quotes/Quotes";
import Social from "@/components/Socials/Socials";

const RegistrationForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(null);
  const [userNameStatus, setUserNameStatus] = useState(null);
  const [passwordStatus, setPasswordStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      router?.replace("/dashboard");
    }
  });

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (userNameStatus === "E01") {
      toast.error("Username already exists");
      return;
    }
    if (username.trim() === "" || password.trim() === "") {
      toast.error("Username and Password cannot be empty");
      return;
    }
    try {
      setloading(true);
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      toast.success(data.message);
      toast.info("You can now login to your account");
      setUserNameStatus(null);
      usernameRef.current.value = "";
      passwordRef.current.value = "";
      setloading(false);
    } catch (error) {
      setloading(false);
      setUserNameStatus(null);
      setError(error.message);
      toast.error(error.message);
    }

    // usernameRef.current.value = "";
    // passwordRef.current.value = "";
  };

  const onBlurUsernameHandler = async (e) => {
    const username = usernameRef.current.value;
    if (username.trim() === "") {
      setUserNameStatus(null);
      return;
    }
    const res = await fetch("/api/validate-username", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
    const data = await res.json();
    if (data.error) {
      setUserNameStatus(null);
      setError(data.error);
      toast.error(data.error);
      return;
    }
    if (data.status === "E01") {
      setUserNameStatus("E01");
      return;
    } else if (data.status === "S01") {
      setUserNameStatus("S01");
      return;
    }
  };

  const passwordValidationHandler = ()=>{
    const password = passwordRef.current.value;
    if(password.trim().length === 0){
      setPasswordStatus(null);
      return;
    }
    if(password.trim().length < 8){
      setPasswordStatus("E01");
      return;
    }
    setPasswordStatus("S01");
    return;
  }


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-[#F6F7F9] fade w-full h-screen flex flex-row items-center justify-center relative">
<div className="hidden lg:flex h-full w-full flex-col justify-center relative z-10 overflow-hidden border-r">
          <div>
            <Quotes />
            {/* <Social /> */}
          </div>
        </div>
      <div className="bg-white w-full px-4 lg:px-0 h-full flex justify-center items-center">
        <div className="w-[430px] mx-auto flex flex-row h-fit overflow-hidden">
          <div className="w-full px-2 sm:px-6 py-7 flex flex-col bg-white">
            <div className="pb-8 w-full h-full flex flex-col justify-end items-start  text-black">
              <h2 className="text-2xl capitalize mb-2 font-medium">
                <span className="text-emerald-500 font-semibold">
                  Let{"'"}s
                </span>{" "}
                get started
              </h2>
              <p className="text-sm">Introduce yourself!</p>
            </div>
            <div className="w-full flex flex-col">
              <label className="text-sm mb-1 text-gray-700">Username</label>
              <input
                type="text"
                className="text-gray-700 w-full p-2.5 rounded-md border-[1.5px] focus:border-emerald-400 focus:outline-none text-sm"
                placeholder="Enter your username"
                ref={usernameRef}
                onBlur={onBlurUsernameHandler}
                required
              />
              {userNameStatus === "E01" && (
                <div className="flex flex-row items-center mt-2">
                  <BiError className="text-red-500 text-xl" />
                  <span className="text-xs text-red-500 ml-2">
                    Ohh Ohh! Someone already took your username
                  </span>
                </div>
              )}
              {userNameStatus === "S01" && (
                <div className="flex flex-row items-center mt-2">
                  <BiCheck className="text-emerald-500 text-xl" />
                  <span className="text-xs text-emerald-500 ml-2">
                    Wow! That{"'"}s a cool username
                  </span>
                </div>
              )}

              <label className="text-sm mt-4 mb-1 text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="text-gray-700 w-full p-2.5 rounded-md border-[1.5px] focus:border-emerald-400 focus:outline-none text-sm pr-10"
                  onChange={passwordValidationHandler}
                  placeholder="Enter your password"
                  ref={passwordRef}
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <RiEyeLine size={20} /> : <RiEyeCloseLine size={20}/>}
                </div>
              </div>
              {passwordStatus === "E01" && (
                <div className="flex flex-row items-center mt-2">
                  <BiError className="text-red-500 text-xl" />
                  <span className="text-xs text-red-500 ml-2">
                   Yo! Password must be atleast 8 characters, atleast!
                  </span>
                </div>
              )}
              {passwordStatus === "S01" && (
                <div className="flex flex-row items-center mt-2">
                  <BiCheck className="text-emerald-500 text-xl" />
                  <span className="text-xs text-emerald-500 ml-2">
                    Ahh! Nice
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center my-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 focus:outline-none rounded-sm accent-emerald-600"
                  />
                  <span className="text-sm text-gray-500 ml-2">
                    Remember me
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <button
                  className="w-full p-2 rounded-md bg-emerald-500 text-white focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:cursor-not-allowed "
                  onClick={handleRegister}
                  disabled={userNameStatus !== "S01" || passwordStatus !== "S01" || loading}
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 text-center">
                Have we met already?{" "}
                <Link href="/login" className="text-emerald-500">
                  Login
                </Link>
              </p>
            </div>
            <div className="flex items-center center my-6">
              <div className="w-full border mr-4 h-fit"></div>
              <span className="text-gray-600 text-xs font-semibold whitespace-nowrap">
                BELEIVE :)
              </span>
              <div className="w-full border ml-4 h-fit"></div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" position="bottom-center" autoClose={10000} />
    </div>
  );
};

export default RegistrationForm;

// <div className="flex justify-center items-center h-screen">
//   <form
//     className="w-64 border rounded p-4 shadow-lg"
//     onSubmit={handleRegister}
//   >
//     <div className="mb-4">
//       <label
//         htmlFor="username"
//         className="block text-gray-700 font-bold mb-2"
//       >
//         Username
//       </label>
//       <input
//         ref={usernameRef}
//         type="text"
//         id="username"
//         className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//         placeholder="Enter your username"
//         required
//       />
//     </div>
//     <div className="mb-4">
//       <label
//         htmlFor="password"
//         className="block text-gray-700 font-bold mb-2"
//       >
//         Password
//       </label>
//       <input
//         ref={passwordRef}
//         type="password"
//         id="password"
//         className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//         placeholder="Enter your password"
//         required
//       />
//     </div>
//     <div className="flex justify-center">
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Register
//       </button>
//     </div>
//     <Link href="/login">Login with existing account</Link>
//   </form>
//   <ToastContainer
//     position="top-right"
//     autoClose={5000}
//     hideProgressBar={false}
//     newestOnTop={false}
//     closeOnClick
//     rtl={false}
//     pauseOnFocusLoss
//     draggable
//     pauseOnHover
//     theme="light"
//   />
// </div>
