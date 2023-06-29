import React from "react";

const Main = () => {
  const memberArray = [
    {id: "01", name: "YOUMIN HA", image: "/assets/images/youmin.jpg"},
    {
      id: "02",
      name: "AHN JAEWOO",
      image: "/assets/images/jaewoo.jpeg",
    },
    {
      id: "03",
      name: "KIM YEONG DO",
      image: "/assets/images/youngdo.png",
    },
    {
      id: "04",
      name: "HWANG JAE YUN",
      image: "/assets/images/jaeyoun.jpg",
    },
  ];

  return (
    <div className="pt-8">
      <div
        className="flex flex-col justify-center items-start h-screen bg-cover p-12"
        style={{backgroundImage: "url('/assets/images/background.png')"}}
      >
        <h1 className="text-white text-7xl">
          BlockChain voting system <br />
        </h1>
        <p className="text-white font-bold py-6 text-3xl">
          Vote Chain의 투표시스템으로 보다 안전
          <br />
          안전하고 투명한 투표를 경험해보세요.
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

      <div className="w-screen">
        <img
          src="/assets/images/description.png"
          className="w-[100%]"
          alt="description"
        />
      </div>
      <div className="flex h-[80%] py-20">
        <img
          className="w-[68%] rounded-b-full"
          src="/assets/images/jelly_with_sea.png"
          alt="sea with jelly fish"
        />
        <div className=" flex flex-col items-start justify-start p-8">
          <h1 className="text-3xl font-bold">
            Vote Chain은 투명하고 공정한 투표를 위해 노력하고 있습니다.
          </h1>
          <p className="py-4 text-xl">
            해파리는 투명한 몸체를 가지고 있어 쉽게 내부를 확인할 수 있습니다.
            이처럼 Vote Chain도 블록체인 투표 시스템을 통해 투표 과정을 보다
            투명하게 제공하고자 합니다. 모든 투표 기록은 블록체인에 기록되어
            누구나 확인할 수 있고, 조작이나 부정 행위를 감지할 수 있기에
            신뢰성과 투명성을 동시에 보장합니다.
          </p>
          <p className="py-3 text-xl">
            해파리는 자신을 방어하기 위해 독특한 방어 기능을 가지고 있습니다.
            Vote Chain 또한, 암호화 기술을 사용하여 분산 저장된 데이터는
            해킹이나 데이터 손실로부터 보호되어 투표의 안전성을 보장받을 수
            있도록 합니다.
          </p>
          <p className="py-3 text-xl">
            Vote Chain을 통해 보다 안전하고 투명한 투표문화를 만들어 나갈 수
            있습니다.
          </p>
          <button className="py-2 px-4 bg-[#3e8ae6] text-white border-white rounded-full">
            구축시작{" "}
          </button>
        </div>
      </div>
      <div className="w-screen flex bg-[#fafafa] py-12 flex-col ">
        <h1 className="text-5xl font-bold text-end pr-6 pb-8">
          Member Introduce
        </h1>
        <div className="flex">
          {memberArray.map((e) => {
            return (
              <div className="flex-col w-1/4 px-10 py-12 border-r-2 rounded-lg border-gray-200 transition-transform transition-shadow transition-rounded hover:duration-250 hover:ease-in-out hover:shadow-lg hover:rounded-lg hover:-translate-y-3	">
                <p className="text-[#3e8ae6] font-bold text-5xl pb-4">{e.id}</p>
                <p className="font-bold pb-4">{e.name}</p>
                <div className="rounded-full  ">
                  <img
                    src={e.image}
                    className="rounded-full"
                    alt="personalpicture"
                  />
                </div>
                <p className="font-bold pb-4">직책</p>
                <p className="font-bold pb-4">담당업무</p>
                <p className="font-bold">자기 소개</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
