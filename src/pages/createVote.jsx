import React from "react";
import { useState } from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import Web3 from "web3";

const web3 = new Web3(window.ethereum);
var { ethers } = require("ethers");
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const CreateVote = ({ account, methods, setMethods }) => {
  const [isTab, setIsTab] = useState("agenda");
  async function sendAgenda(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const title_a = data.get("title_a");
    const context_a = data.get("context_a");
    const endTime_a = data.get("endTime_a");

    let time = Unix_timestampConv(endTime_a);

    // let time = 12345;

    let canVoted_a = [];
    canVoted_a.push(data.get("regardingUsers_a"));
    let elective_a = [];
    canVoted_a.push(data.get("elective_a"));
    try {
      await contract.methods
        .makeANewPoll(title_a, context_a, 1, elective_a, time, canVoted_a)
        .send({ from: account, to: CONTRACT_ADDRESS });
    } catch (error) {
      console.error(error);
    }
  }

  // 타임스탬프로 변환
  function Unix_timestampConv(_time) {
    let time = Math.floor(_time / 1000);
    console.log("time : " + time);
    return time;
  }

  async function sendElection(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const title = data.get("title");
    const context = data.get("context");

    // const endTime = data.get("endTime_a");

    // let time = Unix_timestampConv(endTime);
    let time = 12345;

    let elective = [];
    let canVoted = [];
    canVoted.push(data.get("regardingUsers"));

    try {
      await contract.methods
        .makeANewPoll(title, context, 1, elective, time, canVoted)
        .send({ from: account, to: CONTRACT_ADDRESS });
    } catch (error) {
      console.error(error);
    }
  }

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
            선출 제안
          </div>
          <div
            className="w-[50%] border-solid border-b-2 py-4 flex justify-center"
            onClick={() => {
              setIsTab("election");
            }}
          >
            안건 제안
          </div>
        </div>
        {isTab === "agenda" && (
          <div className="flex flex-row justify-center items-center">
            <form onSubmit={sendAgenda}>
              <div className="w-[50%]">
                <p>선출 주제</p>
                <input
                  type="text"
                  className="border"
                  name="title_a"
                  placeholder="ex) 우리반 반장 뽑기 "
                />
                <p>상세 내용</p>
                <input type="text" name="context_a" className="border" />
                <p>투표 참가자</p>
                <input type="regardingUsers_a" className="border" />
                <input type="regardingUsers_a" className="border" />
                <p>후보자</p>
                <input type="text" name="elective_a" className="border" />
                <input type="text" name="elective_a" className="border" />
                <p>투표 기한</p>
                <div className="flex flex-col">
                  <input type="date" name="endTime_a" className="border" />
                  <button type="submit">생성하기</button>
                </div>
              </div>
            </form>
          </div>
        )}
        {isTab === "election" && (
          <div className="flex flex-row justify-center items-center">
            <form onSubmit={sendElection}>
              <div className="w-[50%] ">
                <p>안건 주제</p>
                <input
                  type="text"
                  className="border"
                  name="title"
                  placeholder="ex) 시험 금지법"
                />
                <p>상세 내용</p>
                <input type="text" name="context" className="border" />
                <p>투표 참가자</p>
                <input type="text" name="regardingUsers" className="border" />
              </div>
              <p>투표 기한</p>
              <div className="flex flex-col">
                <input type="date" name="endTime" className="border" />
                <button type="submit">생성하기</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateVote;
