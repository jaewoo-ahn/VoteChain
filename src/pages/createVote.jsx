import React from "react";
import {useState} from "react";

const CreateVote = () => {
  const [isTab, setIsTab] = useState("agenda");

  return (
    <div
      className=" w-screen h-screen bg-cover bg-center flex  justify-center items-center"
      style={{
        backgroundImage: "url('/assets/images/space.jpg')",
      }}
    >
      <div className="bg-white w-[80%] h-[80%]">
        <div className="flex ">
          <div
            className="w-[50%] border-solid border-b-2	py-4 flex justify-center "
            onClick={() => {
              setIsTab("agenda");
            }}
          >
            안건 제안
          </div>
          <div
            className="w-[50%] border-solid border-b-2 py-4 flex justify-center"
            onClick={() => {
              setIsTab("election");
            }}
          >
            선출 제안
          </div>
        </div>
        {isTab === "agenda" && (
          <div className="flex flex-row justify-center items-center">
            <div className="w-[50%] ">
              <p>안건 주제</p>
              <input
                type="text"
                className="border"
                placeholder="ex) 시험 금지법 "
              />
              <p>투표 참가자</p>
              <div className="flex flex-col w-[50%]">
                <input type="email" className="border" />
                <input type="email" className="border" />
              </div>
            </div>
            <div className="flex flex-col">
              <input type="date" className="border" />
              <button>생성하기</button>
            </div>
          </div>
        )}
        {isTab === "election" && (
          <div className="flex flex-row justify-center items-center">
            <div className="w-[50%] ">
              <p>선출 주제</p>
              <input
                type="text"
                className="border"
                placeholder="ex) 우리반 반장"
              />
              <p>투표 참가자</p>
              <div className="flex flex-col w-[50%]">
                <input type="email" className="border" />
                <input type="email" className="border" />
              </div>
            </div>
            <div className="flex flex-col">
              <input type="date" className="border" />
              <p>투표후보자</p>
              <input type="text" className="border" />
              <button>생성하기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateVote;
