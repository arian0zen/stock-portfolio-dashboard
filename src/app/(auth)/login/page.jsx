"use client";
import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { BiError } from "react-icons/bi";
import { useSearchParams, useRouter } from "next/navigation";
import Quotes from "@/components/Quotes/Quotes";
import Social from "@/components/Socials/Socials";

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();

  const [loginError, setLoginError] = useState(searchParams.get("error"));

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router?.replace("/dashboard");
    }
  });

  const loginHandler = async (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    // console.log('Registering user:', { username, password });
    if (username.trim() == "" || password.trim() == "") {
      toast.error("Username and Password cannot be empty");
      return;
    }

    signIn("credentials", {
      username,
      password,
    });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (session.status === "unauthenticated") {
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
                  <span className="text-emerald-500 font-semibold">Hey,</span>{" "}
                  do we know you ?
                </h2>
                <p className="text-sm">Log in to view Dashboard!</p>
              </div>
              <div className="w-full flex flex-col">
                <label className="text-sm mb-1 text-gray-700">Username</label>
                <input
                  type="text"
                  className="text-gray-700 w-full p-2.5 rounded-md border-[1.5px] focus:border-emerald-400 focus:outline-none text-sm"
                  placeholder="Enter your username"
                  ref={usernameRef}
                />

                <label className="text-sm mt-4 mb-1 text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="text-gray-700 w-full p-2.5 rounded-md border-[1.5px] focus:border-emerald-400 focus:outline-none text-sm pr-10"
                    placeholder="Enter your password"
                    ref={passwordRef}
                    onFocus={() => setLoginError("")}
                    required
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? (
                      <RiEyeLine size={20} />
                    ) : (
                      <RiEyeCloseLine size={20} />
                    )}
                  </div>
                </div>
                {loginError && (
                  <div className="flex flex-row items-center mt-2">
                    <BiError className="text-red-500 text-xl" />
                    <span className="text-sm text-red-500 ml-2">
                      {loginError}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center my-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-[#9a6afd] focus:outline-none rounded-sm accent-emerald-600"
                    />
                    <span className="text-sm text-gray-500 ml-2">
                      Remember me
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    <span className="text-emerald-500 cursor-pointer">
                      Forgot Password?
                    </span>
                  </p>
                </div>

                <div className="flex flex-row items-center">
                  <button
                    onClick={loginHandler}
                    className="w-full p-2 rounded-md bg-emerald-500 text-white focus:outline-none hover:opacity-90"
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 text-center">
                  Don{"'"}t have an account?{" "}
                  <Link href="/register" className="text-emerald-500">
                    Register
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
              <div className="flex flex-row items-center">
                <button
                  // onClick={handleLogin}
                  className="w-full p-2 rounded-md border border-2 border-emerald-500 text-emerald-500 focus:outline-none hover:border-emerald-400 hover:text-white hover:bg-emerald-400 transition-colors duration-300 ease-in-out"
                >
                  Get Started in Demo Mode
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          theme="dark"
          position="bottom-center"
          autoClose={10000}
        />
      </div>
    );
  }
};

export default LoginForm;

// <div className="flex justify-center items-center h-screen">
//   <form className="w-64 border rounded p-4 shadow-lg" onSubmit={loginHandler} >
//     <div className="mb-4">
//       <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
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
//       <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
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
//         Login
//       </button>
//     </div>
//   </form>
// </div>
