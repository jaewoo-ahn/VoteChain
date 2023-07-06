import React from "react";
import { useState } from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect } from "react";
import Web3 from "web3";

const web3 = new Web3(window.ethereum);
var { ethers } = require("ethers");
// let contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
let contract = new web3.eth.Contract(
  CONTRACT_ABI,
  web3.utils.toChecksumAddress(CONTRACT_ADDRESS)
);
const CreateVote = ({ account, methods, setMethods }) => {
  const [isTab, setIsTab] = useState("agenda");

  // 타임스탬프로 변환
  function Unix_timestampConv(_time) {
    let time = Math.floor(new Date(_time).getTime() / 1000);
    console.log("time : " + time);
    return time;
  }

  async function sendAgenda(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("account" + typeof account);
    console.log("account" + account);
    const title_a = data.get("title_a");
    const context_a = data.get("context_a");
    const endTime_a = data.get("endTime_a");
    console.log("endTime_a" + endTime_a);
    let time = Unix_timestampConv(endTime_a);
    // let time = 12345;
    console.log(time);

    let canVoted_a = Array.from(data.getAll("regardingUsers_a"));
    let elective_a = Array.from(data.getAll("elective_a"));
    console.log("title : " + title_a);
    console.log("context : " + context_a);

    console.log("regardingUsers_a : " + canVoted_a);
    console.log("elective_a : " + elective_a);
    try {
      await contract.methods
        .makeANewPoll(title_a, context_a, 1, elective_a, time, canVoted_a)
        .send({ from: account, to: CONTRACT_ADDRESS });
      //string calldata _title,
      //string calldata _context,
      //uint _voteType,
      //string[] memory _elective,
      //uint _endTime,
      //address[] memory _regardingUsers
    } catch (error) {
      console.error(error);
    }
  }

  async function sendElection(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("account" + account);
    const title = data.get("title");
    const context = data.get("context");

    const endTime = data.get("endTime");

    let time = Unix_timestampConv(endTime);
    console.log(time);
    // let time = 12345;

    let canVoted = Array.from(data.getAll("regardingUsers"));

    let elective = [];
    console.log("title : " + title);
    console.log("context : " + context);
    console.log("canVoted : " + canVoted);
    console.log("elective : " + elective);

    try {
      await contract.methods
        .makeANewPoll(title, context, 0, elective, time, canVoted)
        .send({ from: account, to: CONTRACT_ADDRESS });
    } catch (error) {
      console.error(error);
    }
  }
  async function voting() {
    try {
      await contract.methods
        .voting("929301239860", 1, "0xa17BCCD61B839c7808BCC1090751D3aa91D9fFdc")
        .send({ from: account, to: CONTRACT_ADDRESS });
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   voting();
  // }, []);

  return (
    <div
      className="flex flex-col justify-center items-center  rounded-lg bg-gray-200"
      drop-shadow-md
      style={{ backgroundImage: "url('/assets/images/jelly_with_sea.png')" }}
    >
      <div className="w-[80%] h-[80%] ">
        <div className="flex ">
          <div
            className="w-[50%] text-white  mt-48 border-solid border-b-2	py-4 flex justify-center text-2xl"
            onClick={() => {
              setIsTab("agenda");
            }}
          >
            선출 제안
          </div>
          <div
            className="w-[50%] text-white mt-48 border-solid border-b-2 py-4 flex text-2xl  justify-center"
            onClick={() => {
              setIsTab("election");
            }}
          >
            안건 제안
          </div>
        </div>
        {isTab === "agenda" && (
          <div className="flex flex-row justify-center items-center m-28 p-28  rounded-2xl   bg-teal-100">
            <form onSubmit={sendAgenda}>
              <div className="w-[50%]">
                <p className="mt-2">선출 주제</p>
                <input
                  type="text"
                  className="border m-4"
                  name="title_a"
                  placeholder="ex) 우리반 반장 뽑기 "
                />
                <p className="mt-2">상세 내용</p>
                <input type="text" name="context_a" className="border m-4" />
                <p className="mt-2">투표 참가자</p>
                <input
                  type="text"
                  name="regardingUsers_a"
                  className="border m-4"
                />
                <input
                  type="text"
                  name="regardingUsers_a"
                  className="border m-4"
                />
                <p className="mt-2">후보자</p>
                <input type="text" name="elective_a" className="border m-4" />
                <input type="text" name="elective_a" className="border m-4" />
                <div className="flex flex-col">
                  <p className="mt-2">투표 기한</p>
                  <input type="date" name="endTime_a" className="border m-4" />
                </div>
              </div>

              <button
                type="submit"
                className="bg-purple-400 p-3 w-28 rounded-2xl text-gray-50"
              >
                생성하기
              </button>
            </form>
          </div>
        )}
        {isTab === "election" && (
          <div className="flex flex-row justify-center items-center  m-28 p-28 rounded-2xl   bg-teal-100">
            <form onSubmit={sendElection}>
              <div className="w-[50%] ">
                <p className="mt-2">안건 주제</p>
                <input
                  type="text"
                  className="border m-4"
                  name="title"
                  placeholder="ex) 시험 금지법"
                />
                <p className="mt-2">상세 내용</p>
                <input type="text" name="context" className="border m-4" />
                <p className="mt-2">투표 참가자</p>
                <input
                  type="text"
                  name="regardingUsers"
                  className="border m-4"
                />
                <input
                  type="text"
                  name="regardingUsers"
                  className="border m-4"
                />
              </div>
              <p className="mt-2">투표 기한</p>
              <input type="date" name="endTime" className="border m-4" />
              <div>
                <button
                  type="submit"
                  className="bg-purple-400 p-3 w-28 rounded-2xl text-gray-50"
                >
                  생성하기
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateVote;
