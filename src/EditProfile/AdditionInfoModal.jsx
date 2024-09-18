import React from "react";
import { useContext, useState } from "react";
import { Mycontext } from "../../src/utils/Context";
import { useNavigate } from "react-router-dom";

const AdditionInfoModal = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const navigate = useNavigate()

  const [moreInfo, setMoreInfo] = useState({
    detailstext: "",
    summarytext: "",
  });

  const getWordCount = (text) => {
    return text.trim().split(/\s+/).length;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (getWordCount(value) <= 500) {
      setMoreInfo({ ...moreInfo, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(moreInfo);
    navigate('/Platform');
  };

  return (
    <div
      className={`flex relative${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      } overflow-y-auto bg-white space-y-4 p-4`}
    >
      <div className="fixed inset-0 bg-[black] bg-opacity-30 flex justify-center items-center backdrop-blur-sm">
        <form onSubmit={handleSubmit}>
          <div className="bg-[#FFFFFF] w-[710px] h-[790px] mt-[55px] rounded-[14px] relative">
            <div className="w-[710px] h-[82px] pt-[48px] pl-[24px] pb-[12px] pr-[24px] flex justify-between">
              <h4 className="w-[204px] h-[18px] text-sm  font-semibold text-[#363939]">
                Step 3: Additional Information
              </h4>
              <button
                className="text-[#AEAEAE] text-sm font-normal "
                
              >
                Exit
              </button>
            </div>
            <div className="w-full h-[4px] bg-[#EAEAEA]">
              <div className="w-[532.5px] h-[4px] bg-[#0066FF]"></div>
            </div>
            <div className="w-[606px] h-[60px] mt-[40px] gap-y-[10px] flex flex-col mx-12 ">
              <h2 className="w-[606px] h-[30px] font-semibold text-2xl text-[#363939]">
                More Details
              </h2>
              <p className="w-[606px] h-[20px] text-[#969696] text-base font-normal">
                Tell us more about yourself
              </p>
            </div>
            <div className="mx-12 mt-[35px]">
              <textarea
                className=" border-[#969696] border-[0.7px] w-[606px] h-[135px] py-[19px] px-[20px] rounded-lg resize-none  gap-[10px] placeholder-[#6E6E6E] placeholder:font-normal  placeholder:text-[16px]"
                name="detailstext"
                value={moreInfo.detailstext}
                onChange={(e) => handleChange(e)}
                placeholder="About Yourself"
              ></textarea>
              <div className="w-[80px] h-[22px]  absolute right-12">
                <p className=" text-[#6E6E6E] text-xs font-normal ">
                  {`${getWordCount(moreInfo.detailstext)} / 500 words`}
                </p>
              </div>
            </div>
            <div className="w-[606px] h-[170px] flex flex-col mx-12 mt-6">
              <label className="text-[#000000] font-normal text-lg">
                Professional Summary
              </label>

              <div className=" mt-[10px]">
                <textarea
                  className=" border-[#969696] border-[0.7px] w-[606px] h-[135px] py-[19px] px-[20px] rounded-lg resize-none  gap-[10px] placeholder-[#6E6E6E] placeholder:font-normal  placeholder:text-[16px]"
                  onChange={(e) => handleChange(e)}
                  name="summarytext"
                  value={moreInfo.summarytext}
                  placeholder="About Your Work"
                ></textarea>
                <div className="w-[80px] h-[22px] absolute right-12">
                  <p className=" text-[#6E6E6E] text-xs font-normal text-end">
                    {`${getWordCount(moreInfo.summarytext)} / 500 words`}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-14 bottom-10">
              <button
                type="submit"
                className="w-[170px] h-[45px] rounded-lg px-[16px] bg-[#0066FF] text-[#FFFFFF] text-center text-base font-normal"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdditionInfoModal;
