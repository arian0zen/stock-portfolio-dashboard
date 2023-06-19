import React from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const Breadcrumbs = ({ url }) => {
  const segments = url.split("/").filter((segment) => segment !== "");
  const breadcrumbItems = ['Home', ...segments];
  console.log(window.location.origin);
  

  return (
    <div className="breadcrumb-navigation bg-gray-600 py-2 px-4 flex text-white rounded-lg">
      {breadcrumbItems.map((segment, index) => (
        <div key={segment} className="flex items-center gap-2">
          {index !== 0 && (
            <div className="ml-2">
              <BsChevronRight />
            </div>
          )}
          {index === breadcrumbItems.length - 1 ? (
            <span className="p-2 bg-gray-400 rounded-md">{segment === "/" ? "Home" :  segment.charAt(0).toUpperCase() + segment.slice(1)}</span>
          ) : (
            <Link href={`${'/' + breadcrumbItems.slice(1, index + 1).join('/').trim()}`} className="p-2 bg-gray-400 rounded-md">{segment === "/" ? "Home" : segment.charAt(0).toUpperCase() + segment.slice(1)}</Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
