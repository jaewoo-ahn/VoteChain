import React from "react";
import useAxios from "../hooks/custom_axios";

const Main = () => {
  const {data, error, loading} = useAxios("/todos");

  return (
    <div className="pt-8">
      <div
        className="flex flex-col justify-center items-start h-screen bg-cover p-12"
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
      <div className="flex h-[80%]">
        <img
          className="w-[68%] rounded-b-full"
          src="/assets/images/jelly_with_sea.png"
          alt="sea with jelly fish"
        />
        <div className=" flex flex-col items-start justify-start p-8">
          <h1 className="text-4xl font-bold py-4">
            당사의 제품은 콘텐츠 배포의 장벽을 허물고 있습니다
          </h1>
          <p className="py-4 text-xl">
            Pinata에서는 브랜드와 크리에이터가 상상력을 마음껏 발휘할 수 있도록
            지원합니다.
          </p>
          <p className="py-4 text-xl">
            당사의 제품은 모든 유형의 미디어를 규모에 따라 안전하게 배포할 수
            있도록 지원하여 크리에이티브 에이전시를 제한하는 제한적인 플랫폼,
            중개자 및 알고리즘으로부터 자유롭게 해줍니다.
          </p>
          <p className="py-4 text-xl">
            당신이 그것을 만들 수 있다면, 우리는 당신이 그것을 공유하도록 도울
            수 있습니다. 너의 길.
          </p>
          <button className="py-2 px-4 bg-[#3e8ae6] text-white border-white rounded-full">
            구축시작{" "}
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Main;
