import React from "react";
import VoteCarousel from "../components/carousel";

const VoteList = () => {
  return (
    <div className="p-20 ">
      <div
        className="mt-10 flex flex-col justify-center items-center  rounded-lg bg-gray-200"
        drop-shadow-md
      >
        <p className="mt-14 mb-10 px-20 py-4 border-sky-500 border bg-white">
          내가 참가한 투표 & 참가 할 투표
        </p>
        <div className=" w-[80%] h-[80%] flex items-center mb-20">
          <VoteCarousel />
        </div>
        <p className="mb-10 px-20 py-4 border-sky-500 border  bg-white">
          내가 만든 투표
        </p>
        <div className=" w-[80%] h-[80%]  flex items-center mb-20">
          <VoteCarousel />
        </div>
      </div>
    </div>
  );
};

export default VoteList;
