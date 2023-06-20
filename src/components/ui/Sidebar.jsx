"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import { BiDockLeft, BiChevronDown, BiInfinite, BiWind } from "react-icons/bi";
import { IoAnalytics, IoBarChartSharp } from "react-icons/io5";
import logoPng from "../../../public/images/logo01.png";
import Image from "next/image";
import Link from "next/link";

const dashboardList = [
  {
    name: "Analytics",
    id: 1,
    path: "/dashboard/analytics",
    icon: <IoAnalytics size={15} />,
  },
  {
    name: "Charts",
    id: 2,
    path: "/dashboard/charts",
    icon: <IoBarChartSharp size={15} />,
  },
  {
    name: "Growth",
    id: 3,
    path: "/dashboard/growth",
    icon: <BiInfinite size={15} />,
  },
  {
    name: "Tasks",
    id: 4,
    path: "/dashboard/tasks",
    icon: <BiWind size={15} />,
  },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [pathName, setPathName] = useState("");

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };
  const pathname = usePathname();

  useEffect(() => {
    setPathName(pathname);
  }, [setPathName, pathname]);

  return (
    <div className="">
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`lg:block z-50 transition-all duration-300 transform h-screen bg-white ${
          isSidebarOpen ? "md:fixed sm:fixed lg:block" : "hidden"
        }`}
      >
        <div className="top-0 left-0 h-full w-64 border border-right-2 p-4 shadow">
          <div className="flex justify-between items-center cursor-pointer">
            <div className="flex justify-center items-center gap-2">
              <Image src={logoPng} height={40} width={40} alt="Image" />
              <p className="text-xl font-bold text-gray-600">
                Dashboard<span className="text-emerald-500">.io</span>
              </p>
            </div>
            <div className="block lg:hidden">
              <AiOutlineClose
                size={20}
                onClick={toggleSidebar}
                className="text-gray-600"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4 text-gray-500 cursor-pointer">
            <div
              className="flex items-center gap-2 justify-between bg-gray-100 p-2 rounded-md"
              onClick={toggleDropdown}
            >
              <div className="flex items-center gap-2 text-sm">
                <BiDockLeft size={20} className="text-gray-600" />
                <p>Dashboards</p>
              </div>
              <div className="flex">
                <div className="rounded-full w-5 h-5 bg-indigo-500 flex justify-center items-center font-bold text-white text-xs">
                  3
                </div>
                <BiChevronDown size={20} className="text-gray-600" />
              </div>
            </div>
            {isOpenDropdown && (
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: [0, 0.71, 0.92, 1.01],
                }}
                className="bg-white mt-2 text-sm"
              >
                <ul className="flex flex-col gap-2">
                  {dashboardList.map((item, index) => {
                    return (
                      <Link href={item.path} key={item.id}>
                        <li
                          className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 rounded-md text-xs ${
                            pathName === item.path &&
                            "bg-gradient-to-l from-green-400 to-emerald-600 text-white font-semibold"
                          }`}
                        >
                          {item.icon}
                          {item.name}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
