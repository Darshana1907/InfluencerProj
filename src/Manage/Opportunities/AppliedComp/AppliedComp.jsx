import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import Brand from "../../../Assets/logo.png";
import { FiArrowUpRight } from "react-icons/fi";
import AppCompModal from "./AppCompModal";

const AppliedComp = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [selectIndex, setSelectIndex] = useState(null);

  const AppliedCompData = [
    {
      logo: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platforms: "instagram+2",
      location: "New Delhi, Mumbai, Chennai",
      startDate: "1 july 2024",
      AppliedDate: "10 July 2024",
      status: "Applied",
      socials: ["instagram", "facebook", "youtube"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount: 1,
      reelCount: 2,
      storyCount: 3,
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      logo: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platforms: "instagram+2",
      location: "New Delhi, Mumbai, Chennai",
      startDate: "1 july 2024",
      AppliedDate: "10 July 2024",
      status: "Applied",
      socials: ["instagram", "facebook", "youtube"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount: 1,
      reelCount: 2,
      storyCount: 3,
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      logo: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platforms: "instagram+2",
      location: "New Delhi, Mumbai, Chennai",
      startDate: "1 july 2024",
      AppliedDate: "10 July 2024",
      status: "Applied",
      socials: ["instagram", "facebook", "youtube"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount: 1,
      reelCount: 1,
      storyCount: 3,
      payment: 8000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      logo: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platforms: "instagram+2",
      location: "New Delhi, Mumbai, Chennai",
      startDate: "1 july 2024",
      AppliedDate: "10 July 2024",
      status: "Withdrawn",
      socials: ["instagram", "facebook", "youtube"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount: 1,
      reelCount: 2,
      storyCount: 3,
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      logo: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platforms: "instagram+2",
      location: "New Delhi, Mumbai, Chennai",
      startDate: "1 july 2024",
      AppliedDate: "10 July 2024",
      status: "Applied",
      socials: ["instagram", "facebook", "youtube"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount: 1,
      reelCount: 3,
      storyCount: 1,
      payment: 7000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
  ];
  const handleViewDetails = (index) => {
    setSelectIndex(index);
    setOpenModal(true);
  };

  return (
    <div
      className={` flex relative  ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div className="bg-white h-[897px] w-full">
        <div class="flex w-full justify-between  p-4 bg-white border-border">
          <div>
            <h1 class="text-[24px] font-semibold font-body">Opportunities</h1>
            <p class="text-[14px] font-normal font-body text-[#57595a]">
              Discover various brand campaigns —connect, collaborate, and
              elevate your influence to the next level!
            </p>
          </div>
        </div>
        <div class="flex mt-7 pb-3  px-4">
          <div className="flex gap-6 border-b w-full">
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
        <div className="mt-8 px-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-[#797A7B] font-semibold text-[12px] text-start">
                  BRAND NAME
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] text-start ">
                  CAMPAIGN NAME
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] text-start ">
                  PLATFORMS
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] text-start ">
                  APPLIED DATE
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] text-start ">
                  STATUS
                </th>
              </tr>{" "}
            </thead>
            <tbody className="mt-2">
              {AppliedCompData.map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="border-y border-[#D2D3D3] h-[99px] py-[32px]"
                  >
                    <td>
                      <div className="flex">
                        <span className="font-normal text-base text-[#191D23]">
                          {" "}
                          {data.brandName}
                        </span>
                        <span>
                          <FiArrowUpRight className="mt-1 text-[#0066FF]" />
                        </span>
                      </div>
                    </td>
                    <td className="font-normal text-base text-[#191D23]">
                      {data.campaignName}
                    </td>
                    <td className="font-normal text-base text-[#191D23]">
                      {data.platforms}
                    </td>
                    <td className="font-normal text-base text-[#191D23]">
                      {data.AppliedDate}
                    </td>
                    <td>
                      <div
                        className={`flex
                       px-[8px] py-[2px] rounded-[14px]  h-[24px] items-center ${
                         data.status === "Withdrawn"
                           ? "bg-[#FFBFC3] w-[100px]"
                           : "bg-[#FFEAB0] w-[78px]"
                       }`}
                      >
                        <GoDotFill
                          className={`w-[6px] h-[6px] m-1 ${
                            data.status === "Withdrawn"
                              ? "text-[#E42828] "
                              : "text-[#FACC15]"
                          }`}
                        />

                        <span className="text-sm ">{data.status}</span>
                      </div>
                    </td>
                    <td>
                      <button
                        className={`text-[#E42828] font-semibold text-[16px] ${
                          data.status === "Withdrawn"
                            ? "text-gray-400 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={data.status === "Withdrawn"}
                      >
                        Withdraw
                      </button>
                    </td>
                    <td>
                      <button
                        className="w-[120px] h-[35px] px-[16px] rounded-[8px] border border-[#0066FF] font-normal text-[14px] text-[#0066FF]"
                        onClick={() => handleViewDetails(index)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {openModal && (
            <AppCompModal
              closeModal={setOpenModal}
              selectData={AppliedCompData[selectIndex]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedComp;
