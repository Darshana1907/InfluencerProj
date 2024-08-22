import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";

const CompltedComp = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();



  return (
    <div
    class={` flex relative  ${
      !expanded
        ? "left-[100px] w-[calc(100%-110px)]"
        : "left-[320px] w-[calc(100%-320px)]"
    }  overflow-y-auto  bg-white space-y-4 p-4 `}
  >
    <div className="bg-white h-[897px] w-full">
      <div class="flex w-full justify-between items-center p-4 bg-white border-border">
        <div>
          <h1 class="text-[24px] font-semibold font-body">Opportunities</h1>
          <p class="text-[14px] font-normal font-body text-[#57595a]">
          Discover various brand campaigns —connect, collaborate, and elevate your influence to the next level!
          </p>
        </div>
       
      </div>
      <div class="flex mt-7 pb-3 border-b border-border">
        <div className="flex gap-6">
          <Link to="/Opportunities">
            <div
              className={` px-[6px] text-[16px]  font-body   w-[160px] h-[22px] ${
                location.pathname === "/Opportunities"
                  ? " text-[#191D23] font-semibold border-b-2 border-[#0066FF] "
                  : "text-[#57595A] font-normal"
              }`}
            >
              New Opportunities
            </div>
          </Link>
          <Link to="/Applied">
            <div
              className={`  text-[16px]  font-body  w-[177px] h-[22px]  ${
                location.pathname === "/Applied"
                  ? "text-primary border-b-2 border-[#0066FF] font-semibold"
                  : "text-[#57595A] font-normal"
              }`}
            >
             Applied Opportunities
            </div>
          </Link>
          <Link to="/Ongoing">
            <div
              className={`text-[16px]  font-body  w-[184px] h-[22px]   ${
                location.pathname === "/Ongoing"
                  ? "text-primary border-b-2 border-[#0066FF] font-semibold"
                  : "text-[#57595A] font-normal"
              }`}
            >
             Ongoing Opportunities
            </div>
          </Link>
          <Link to="/Complete">
            <div
              className={`text-[16px]  font-body  w-[202px] h-[22px]   ${
                location.pathname === "/Complete"
                  ? "text-primary border-b-2 border-[#0066FF] font-semibold"
                  : "text-[#57595A] font-normal"
              }`}
            >
            Completed Opportunities
            </div>
          </Link>
        </div>
       
      </div>
      Complete............
    </div>

  
  </div>
  );
};

export default CompltedComp;
