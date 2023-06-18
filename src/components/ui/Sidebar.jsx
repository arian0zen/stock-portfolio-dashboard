import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("toggle sidebar");
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* <button
        className="fixed z-50 top-2 right-2 p-2 bg-gray-500 text-white rounded-lg"
        onClick={toggleSidebar}
      >
        Toggle Sidebar
      </button> */}
      <div className="">
        <div className="top-0 left-0 h-full w-64 bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-4">Sidebar</h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
