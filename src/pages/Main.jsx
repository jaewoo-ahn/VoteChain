import React from "react";
import useAxios from "../hooks/custom_axios";

const Main = () => {
  const {data, error, loading} = useAxios("/todos");

  return (
    <div className="pt-8">
      <div
        className="flex flex-col justify-center items-start h-screen bg-cover p-8"
        style={{backgroundImage: "url('/assets/images/background.png')"}}
      >
        <h1 className="text-white text-7xl">도달 범위 확장</h1>
        <p className="text-white font-bold py-4 text-3xl">
          Pinata의 미디어 배포 솔루션 제품군으로 참여를 유도하고 <br />
          콘텐츠를 확장하며 더 많은 수익을 얻으십시오
        </p>
        <div className="">
          <button className="bg-white py-2 px-4 rounded-full border-black border-2 hover:bg-sky-700 hover:text-white">
            더 알아보기
          </button>
          <button className="bg-white py-2 px-4 rounded-full ml-2 border-black border-2 hover:bg-sky-700 hover:text-white">
            투표하러 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
