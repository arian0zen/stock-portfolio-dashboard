import React from "react";

const Loading = () => {
  return (
    <div className="flex">
      <div class="h-screen w-[20%] animate-pulse flex bg-slate-200 p-2 justify-center">
        <div class="animate-pulse">
          <div class="mt-10 h-10 w-full bg-slate-400 rounded z-10"></div>
          <div class="mt-10 h-10 w-full bg-slate-400 rounded z-10"></div>
          <div class="mt-10 h-10 w-full bg-slate-400 rounded z-10"></div>
          <div class="mt-10 h-10 w-full bg-slate-400 rounded z-10"></div>
          <div class="grid grid-cols-10 gap-4"></div>
        </div>
      </div>
      <div class="rounded-md p-4 w-full flex flex-col">
        <div class="animate-pulse flex">
          <div class="flex-1 space-y-6 py-4">
            <div class="grid grid-cols-10 gap-4">
              <div class="h-10 w-full bg-slate-200 rounded col-span-9"></div>
              <div class="h-10 w-10 rounded-full bg-slate-300 rounded col-span-1"></div>
            </div>
          </div>
        </div>
        <div className="cards mt-10 animate-pulse flex flex-wrap gap-4 ">
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-32 w-[30%] mx-2 bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
