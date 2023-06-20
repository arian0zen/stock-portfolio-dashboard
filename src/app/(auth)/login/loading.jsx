import React from "react";

const LoginLoading = () => {
  return (
    <div className="flex">
      <div className="h-screen w-1/2 flex bg-slate-100 p-2 justify-center">
      <div className="flex flex-col justify-center items-center gap-4 animate-pulse">
          <div class="shadow rounded-md p-4 h-48 w-80 mx-2 bg-slate-300"></div>

        </div>
      </div>
      <div className="h-screen w-1/2 flex p-2 justify-center">
        <div className="flex flex-col justify-center items-center gap-4 animate-pulse">
          <div class="shadow rounded-md p-4 h-6 w-96 mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-6 w-96 mx-2 bg-slate-200"></div>
          <div class="shadow rounded-md p-4 h-6 w-96 mx-2 bg-slate-200"></div>

        </div>
      </div>
    </div>
  );
};

export default LoginLoading;
