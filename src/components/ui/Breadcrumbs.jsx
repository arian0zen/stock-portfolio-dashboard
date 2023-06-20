import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const Breadcrumbs = ({ url }) => {
  const segments = url.split("/").filter((segment) => segment !== "");
  const breadcrumbItems = ['Home', ...segments];
  const lastPath = breadcrumbItems[breadcrumbItems.length - 1];
  

  return (
    <div className="breadcrumb-navigation px-4 flex text-gray-600 font-semibold rounded-sm text-sm">
      {breadcrumbItems.map((segment, index) => (
        <div key={segment} className="flex items-center gap-4">
          {index !== 0 && (
            <div className="ml-2">
              <FaAngleRight size={15} className=""/>
            </div>
          )}
          {index === breadcrumbItems.length - 1 ? (
            <span className={`py-1 px-2 rounded-md ${segment === lastPath ? 'bg-gray-300 hover:bg-gray-800 hover:text-white text-gray-800 font-bold' : 'hover:bg-gray-200'}`}>{segment === "/" ? "Home" :  segment.charAt(0).toUpperCase() + segment.slice(1)}</span>
          ) : (
            <Link href={`${'/' + breadcrumbItems.slice(1, index + 1).join('/').trim()}`} className={`py-1 px-2 rounded-md ${segment === lastPath ? 'bg-gray-300 hover:bg-gray-800 hover:text-white text-gray-800 font-bold' : 'hover:bg-gray-200'}`}>{segment === "/" ? "Home" : segment.charAt(0).toUpperCase() + segment.slice(1)}</Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
