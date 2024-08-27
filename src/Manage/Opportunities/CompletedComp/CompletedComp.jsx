import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import AppCompModal from "./CompletedModal";

const CompletedComp = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);

  const campaigns = [
    {
      id: "C123456",
      name: "Save Trees and More",
      platforms: "Instagram +2",
      duration: "10 July - 15 July 2024",
      earnings: "$3000",
      status: "Completed",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      platforms: "Instagram +2",
      duration: "10 July - 15 July 2024",
      earnings: "$3000",
      status: "Completed",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      platforms: "Instagram +2",
      duration: "10 July - 15 July 2024",
      earnings: "$3000",
      status: "Completed",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      platforms: "Instagram +2",
      duration: "10 July - 15 July 2024",
      earnings: "$3000",
      status: "Completed",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      platforms: "Instagram +2",
      duration: "10 July - 15 July 2024",
      earnings: "$3000",
      status: "Completed",
    },
  ];

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
              Discover various brand campaigns —connect, collaborate, and
              elevate your influence to the next level!
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

        <div className="mt-[68px] px-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-[#797A7B] font-semibold text-[12px] text-start">
                  <span className="w-[80px] h-[16px]"> CAMPAIGN ID </span>
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] text-start">
                  <span className="w-[102px] h-[16px]"> CAMPAIGN NAME </span>
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] text-start">
                  <span className="w-[70px] h-[20px]"> PLATFORMS </span>
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] text-start">
                  <span className="w-[97px] h-[20px]"> DURATION </span>
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] text-start">
                  <span className="w-[97px] h-[20px]"> EARNINGS </span>
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] text-start">
                  <span className="w-[47px] h-[20px]"> STATUS </span>
                </th>
              </tr>{" "}
            </thead>
            <tbody className="mt-2">
              {campaigns.map((campaign, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 py-8">
                    <span className="w-[67px] h-[22px]">{campaign.id}</span>
                  </td>
                  <td>
                    <div className="py-8">
                      <span className="font-normal text-base text-[#191D23] w-[162px] h-[22px]">
                        {" "}
                        {campaign.name}
                      </span>
                      <div className="flex items-center gap-[1px]">
                        <h6 className="text-[#797A7B] font-sans text-xs not-italic font-normal leading-normal w-[38px] h-[16px]">
                          {" "}
                          Crocks{" "}
                        </h6>
                        <button>
                          <FiArrowUpRight className="text-[#0066FF]" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="font-normal text-base text-[#191D23] py-8">
                    <span className="w-[103px] h-[22px]">
                      {" "}
                      {campaign.platforms}{" "}
                    </span>
                  </td>
                  <td className="font-normal text-base text-[#191D23] py-8">
                    <span className="w-[157px] h-[22px]">
                      {" "}
                      {campaign.duration}{" "}
                    </span>
                  </td>
                  <td className="font-normal text-base text-[#191D23] py-8">
                    <span className="w-[52px] h-[22px]">
                      {" "}
                      {campaign.earnings}{" "}
                    </span>
                  </td>
                  <td className="py-8">
                    <div className="flex w-[100px] h-[24px] py-[2px] px-2 justify-center items-center gap-[6px] rounded-[14px] bg-[#D1E3FF]">
                      <GoDotFill className="w-[6px] h-[6px] text-[#0062F5]" />
                      <span className="text-[#000] font-sans text-sm not-italic font-normal leading-[20px]">
                        {campaign.status}
                      </span>
                    </div>
                  </td>
                  <td className="flex items-center gap-[14px] py-8">
                    <button
                      className="text-[#06F] text-center font-sans text-sm not-italic font-normal leading-[100%] w-[79px]"
                      onClick={() => {
                        setOpenModal(true);
                      }}
                    >
                      View Details
                    </button>
                    <button className="flex h-[35px] px-4 justify-center items-center gap-[10px] rounded-lg border border-[#06F] bg-[#06F] text-[#FFFFFF]">
                      View proof
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {openModal && <AppCompModal closeModal={setOpenModal} />}
        </div>
      </div>
    </div>
  );
};

export default CompletedComp;
