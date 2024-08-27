import React from "react";
import { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { IoMdArrowRoundBack } from "react-icons/io";
import Intersect from "../../../Assets/Intersect.png";

const CompletedModal = ({ closeModal }) => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;

  const compData = [
    {
      logo : Intersect,
      campaignName: "Save Trees and More",
      brandName: "Brand Name",
      platformName: "Instagram, Snapchat",
      location: "New Delhi, Mumbai",
      startDate: "1 July 2024",
      endDate: "10 July 2024",
      compensation: "Payment / $5000",
      additionalInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio .",
    },
  ];
  return (
    <div
      className={` flex relative  ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div>
        {compData.map((user, index) => (
          <div
            key={index}
            className="fixed inset-0 top-0  z-50 flex items-center justify-center bg-[#00000066] "
          >
            <div className="w-[529px] h-[606px]  bg-white justify-center rounded-[14px] ">
              <div className=" flex gap-2 mt-[24px] ml-[23px]">
                <div className="items-center">
                  <button onClick={() => closeModal(false)}>
                    {" "}
                    <IoMdArrowRoundBack />
                  </button>
                </div>
                <div className="text-[14px] font-normal font-body">
                  Campaign Details
                </div>
              </div>

              <div className="text-start w-[442px]">
                <div className="flex items-center gap-[10px] mt-[14px] ml-[43px]">
                  <img src={user.logo} alt="logo" srcset="" />
                  <div className="flex w-[442px] flex-col items-start gap-1">
                    <h1 className="text-[20px] font-body font-semibold text-[#0066FF] self-stretch">
                      {user.campaignName}
                    </h1>
                    <h3 className="text-[14px] font-semibold text-[#797A7B] self-stretch">
                      {user.brandName}
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="w-[442px] text-[12px] font-body font-normal text-[#797A7B] mt-[13px] ml-[43px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.Nunc vulputate libero et velit interdum, ac aliquet
                    odio mattis.
                  </p>
                </div>

                <div className="w-[442px] h-[232px] py-6 ml-[43px]">
                  <div className=" flex justify-between py-2">
                    <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                      Platfotm :
                    </div>
                    <div className="text-[14px] font-body font-normal text-[#000000]">
                      {user.platformName}
                    </div>
                  </div>

                  <div className=" flex justify-between py-2">
                    <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                      Location :
                    </div>
                    <div className="text-[14px] font-body font-normal text-[#000000]">
                      {user.location}
                    </div>
                  </div>

                  <div className=" flex justify-between py-2">
                    <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                      Start Date :
                    </div>
                    <div className="text-[14px] font-body font-normal text-[#000000]">
                      {user.startDate}
                    </div>
                  </div>

                  <div className=" flex justify-between py-2">
                    <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                      End Date :
                    </div>
                    <div className="text-[14px] font-body font-normal text-[#000000]">
                      {user.endDate}
                    </div>
                  </div>

                  <div className=" flex justify-between py-2">
                    <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                      Deliverables :
                    </div>
                    <div className="flex gap-1">
                      <div className="text-[14px] font-body font-normal text-[#000000] bg-[#E8FFF0] p-1 px-2 rounded-full">
                        1 X Story
                      </div>
                      <div className="text-[14px] font-body font-normal text-[#000000] bg-[#E8FFF0] p-1 px-2 rounded-full">
                        2 X Reel
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-between py-2">
                    <div className="text-[12px] font-body font-normal text-[#797A7B] ">
                      Compensation :
                    </div>
                    <div className="text-[14px] font-body font-normal text-[#000000]">
                      {user.compensation}
                    </div>
                  </div>
                </div>

                <div className="my-6 ml-[43px]">
                  <h1 className="w-[442px] text-[14px] font-body font-normal text-[#1F2223] self-stretch">
                    Additional information
                  </h1>
                  <p className="w-[442px] text-[12px] font-body font-normal text-[#797A7B] my-2 self-stretch">
                    {user.additionalInfo}
                  </p>
                </div>
                <div className="mt-[45px] flex gap-[14px] w-[432px] ml-[43px]">
                  <button
                    onClick={() => closeModal(false)}
                    className="w-[126px] h-[35px] px-[16px] border text-[#0066FF] border-[#0066FF] rounded-[4px] "
                  >
                    Cancel
                  </button>
                  <button className="flex w-[300px] h-[35px] px-[16px] justify-center items-center gap-[12px] flex-shrink-0 rounded-[4px] bg-[#0066FF] text-[#FFFFFF] ">
                    View Proof
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedModal;
