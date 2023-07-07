// Import Swiper React components
import { useEffect } from "react";

export default function VoteCarousel({ pollList }) {
  useEffect(() => {
    console.log(pollList);
    // console.log("number : !!!!" + pollList[0].number);
  }, [pollList]);

  return (
    <>
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
    </>
  );
}
