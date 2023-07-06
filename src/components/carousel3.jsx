// Import Swiper React components
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

export default function VoteCarousel({ pollList, pollList2, pollList3 }) {
  useEffect(() => {
    console.log(pollList);
  }, [pollList]);

  return (
    <div>
      {Array.isArray(pollList) &&
        pollList?.map((list, index) => (
          <div
            key={index}
            className="bg-red-300  text-center  w-96  h-96 rounded-lg"
          >
            <div>title: {list.title}</div>
            <div>context: {list.context}</div>
            <div>elective: {list.elective}</div>
            <div>electiveCount : {list.electiveCount}</div>
            <div>endTime: {list.endTime}</div>
            <div>completed : {list.completed}</div>
          </div>
        ))}
      {Array.isArray(pollList2) &&
        pollList2?.map((list, index) => (
          <div
            key={index}
            className="bg-red-300  text-center  w-96  h-96 rounded-lg"
          >
            <div>{list}</div>
          </div>
        ))}
    </div>
  );
}
