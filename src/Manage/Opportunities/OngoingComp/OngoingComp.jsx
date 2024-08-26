import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";
import OngoingPop from "./OngoingPop";
import { GoDotFill } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import Brand from "../../../Assets/logo.png";

const OngoingComp = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] =useState(false);
  const [selectIndax , setSelectIndex]= useState(null);

  const invoiceData = [
    { 
      img :Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platform: ["Instagram", "facebook","Youtube"],
      appliedDate: "10 July 2024",
      status: "Ongoing",
      balance: "$5000",
      statusColor: "bg-green-200 text-green-800", // For completed status
      location:['New Delhi, Mumbai '],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis." ,
      startDate:'1 july 2024',
      endDate :'10 july 2024',
      postCount:1,
      reelCount: 2,
      storyCount:3,
      addInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .',
    },

    {  
      img :Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platform: ["Instagram", "facebook","Youtube"],
      appliedDate: "10 July 2024",
      status: "Ongoing",
      balance: "$10000",
      statusColor: "bg-green-200 text-green-800", // For completed status
      location:['New Delhi, Mumbai '],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis." ,
      startDate:'1 july 2024',
      endDate :'10 july 2024',
      postCount:0,
      reelCount: 2,
      storyCount:1,
      addInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .',
    },
    {
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platform: ["Instagram", "facebook","Youtube"],
      appliedDate: "10 July 2024",
      status: "Ongoing",
      balance: "$10000",
      statusColor: "bg-green-200 text-green-800", // For completed status
      location:['New Delhi, Mumbai '],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis." ,
      startDate:'1 july 2024',
      endDate :'10 july 2024',
      postCount:0,
      reelCount: 2,
      storyCount:1,
      addInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .',
    },
    {
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platform: ["Instagram", "facebook","Youtube"],
      appliedDate: "10 July 2024",
      status: "Ongoing",
      balance: "$10000",
      statusColor: "bg-green-200 text-green-800", // For completed status
      location:['New Delhi, Mumbai '],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis." ,
      startDate:'1 july 2024',
      endDate :'10 july 2024',
      postCount:0,
      reelCount: 2,
      storyCount:1,
      addInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .',
    },
    {
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platform: ["Instagram", "facebook","Youtube"],
      appliedDate: "10 July 2024",
      status: "Ongoing",
      balance: "$10000",
      statusColor: "bg-green-200 text-green-800", // For completed status
      location:['New Delhi, Mumbai '],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis." ,
      startDate:'1 july 2024',
      endDate :'10 july 2024',
      postCount:0,
      reelCount: 2,
      storyCount:1,
      addInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .',
    },
  ]
 
    const handleview =(index)=>{
      setIsModalVisible(true);
      setSelectIndex(index)
    }

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
    <div className=" w-[1051px]  ">
       <table   className={`w-full ml-3`}>
       
       <thead className="h-[90px] border-b-2">
        
              <tr className="  w-[736px] h-[20px] ">
                <th className="    font-body text-[#797A7B] text-[12px]  p-3 font-semibold text-start ">
                BRAND NAME
                </th>
                <th className="   font-body text-[#797A7B] text-[12px] p-3 font-semibold text-start ">
                  CAMPAIGN NAME
                </th>
                <th className=" font-body text-[#797A7B] text-[12px]  font-semibold text-start p-3">
                PLATFORM
                </th>
                <th className=" font-body text-[#797A7B] text-[12px]  font-semibold text-start p-3">
                APPLIED DATE
                </th>
                <th className=" font-body text-[#797A7B] text-[12px]   font-semibold text-start p-3">
               STATUS
                </th>
                <th className=" font-body text-[#797A7B] text-[12px]   font-semibold text-start p-3">
               Button
                </th>


                
              </tr>
            </thead>
             

           
        <tbody className="w-[1051px] " >
        {invoiceData.map((invoice, index) => (
        <tr key={index} className="border-b  items-center h-[99px] w-[767px] ">
              <td className="   p-3 text-[16px]    font-normal font-body flex items-center ">{invoice.brandName}
                 <span className="text-[#0066FF] text-lg gap-1"><FiArrowUpRight /></span></td>

              <td className="  p-3 text-[16px]  font-normal font-body  ">{invoice.campaignName}</td>
          
              <td className=" text-[16px] p-3    font-normal font-body">
                      {invoice.platform.length > 1
                        ? `${invoice.platform[0]} +${
                          invoice.platform.length - 1
                          }`  
                        : invoice.platform[0]}
                </td>

              <td className="  p-3 text-[16px]     font-normal font-body">{invoice.appliedDate}</td>
            
            <td className="    text-[14px] font-normal p-4       ">
                      <p className={`font-body bg-[#B0EDC7] w-[84px] h-[24px] font-normal text-[14px] justify-center items-center flex  px-[8px] py-[2px]   rounded-[14px] text-black `}>
                        <span><GoDotFill  className="  text-[#22C55E]  mr-[2px] " /> </span>
                         {invoice.status}
                      </p>
                    </td>
                    
              <td className=" flex items-center justify-center  mt-8  gap-1  " >
                   <button onClick={()=>handleview(index)} className="text-[#0066FF]  mr-6 px-[16px] w-[120px] h-[35px] rounded-[8px] border-2 border-[#0066FF] font-body text-[14px]    font-normal">
                View Details</button>
           
                   <button className="bg-[#0066FF] text-[#FFFFFF] rounded-[8px] font-body text-[14px]   px-[16px] w-[120px] h-[35px] font-normal">
                   Submit proof</button>
            </td>      
            
          </tr>


          ))}
        </tbody>

          

       </table>
       </div>

      
       
      </div>

      <OngoingPop  selectData={invoiceData[selectIndax]} setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />
    </div>
  );
};

export default OngoingComp;
