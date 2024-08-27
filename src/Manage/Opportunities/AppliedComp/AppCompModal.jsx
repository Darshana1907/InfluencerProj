import React from "react";
import { useContext, useState, useRef } from "react";
import { Mycontext } from "../../../utils/Context";
import { IoMdArrowRoundBack } from "react-icons/io";

const AppCompModal = ({ closeModal }) => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const modalref = useRef();
  const modalclose = (e) => {
    if (modalref.current === e.target) {
      closeModal();
    }
  };
  return (
    <div
      className={` flex relative  ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div
        ref={modalref}
        onClick={modalclose}
        className="fixed inset-0 top-0  z-50 flex items-center justify-center bg-[#00000066] "
      >
        <div className="w-[529px] h-[606px]  bg-white justify-center p-4 rounded-[14px] ">
          <div className=" flex gap-2 items-center ">
            <div className="items-center">
              <button onClick={() => closeModal(false)}>
                {" "}
                <IoMdArrowRoundBack />
              </button>
            </div>
            <div className="text-[14px] font-normal font-body">
              Campaign Preview
            </div>
          </div>

          <div className="p-5 text-start w-[442px]">
            <div>
              <h1 className="text-[20px] font-body font-semibold text-[#0066FF]">
                Campaign name
              </h1>
              <h3 className="text-[14px] font-semibold text-[#797A7B]">
                BRAND NAME
              </h3>
              <p className="text-[12px] font-body font-normal text-[#797A7B] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>

            <div className="w-[442px] h-[232px] py-6 ">
              <div className=" flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                  Platfotm :
                </div>
                <div className="text-[14px] font-body font-normal text-[#000000]">
                  Instagram, Snapchat
                </div>
              </div>

              <div className=" flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                  Location :
                </div>
                <div className="text-[14px] font-body font-normal text-[#000000]">
                  New Delhi. Mumbai
                </div>
              </div>

              <div className=" flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                  Start Date :
                </div>
                <div className="text-[14px] font-body font-normal text-[#000000]">
                  1 July 2024
                </div>
              </div>

              <div className=" flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                  End Date :
                </div>
                <div className="text-[14px] font-body font-normal text-[#000000]">
                  10 July 2024
                </div>
              </div>

              <div className=" flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                  Deliverables :
                </div>
                <div className="flex gap-[4px] ">
                  <div className="w-[78px] h-[27px] rounded-[50px] bg-[#E8FFF0] py-[4px] px-[10px] text-[14px]">
                    1 X Story
                  </div>
                  <div className="w-[78px] h-[27px] rounded-[50px] bg-[#E8FFF0] py-[4px] px-[10px] text-[14px]">
                    2 X Reel
                  </div>
                </div>
              </div>

              <div className=" flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                  Compensation :
                </div>
                <div className="text-[14px] font-body font-normal text-[#000000]">
                  Payment / $5000
                </div>
              </div>
            </div>

            <div className="my-8">
              <h1 className="text-[14px] font-body font-normal text-[#1F2223]">
                Additional information
              </h1>
              <p className="text-[12px] font-body font-normal text-[#797A7B] py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio .
              </p>
            </div>
            <div className="mt-6 flex gap-[28px] w-[437px]">
              <button
                onClick={() => closeModal(false)}
                className="w-[116px] h-[35px] px-[16px] border text-[#0066FF] border-[#0066FF] rounded-[4px] "
              >
                Cancel
              </button>
              <button className="w-[293px] h-[35px] border border-[#E42828] text-[#E42828] px-[16px] rounded-[4px]">
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCompModal;
