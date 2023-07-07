import React from "react";
import {useState} from "react";
import {CONTRACT_ABI, CONTRACT_ADDRESS} from "../web3.config";
import Web3 from "web3";
const web3 = new Web3(window.ethereum);
var {ethers} = require("ethers");
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const CreateVote = ({account, methods, setMethods}) => {
  const [isTab, setIsTab] = useState("agenda");
  const [agenda, setAgenda] = useState([""]);
  const [election, setElection] = useState([""]);
  const [candidate, setCandidate] = useState([""]);

  const addInput = () => {
    setAgenda([...agenda, ""]);
  };

  const handleInputChange = (index, value) => {
    const updatedInputs = [...agenda];
    updatedInputs[index] = value;
    setAgenda(updatedInputs);
  };

  const addInputElection = () => {
    setElection([...election, ""]);
  };

  const handleInputChangeElection = (index, value) => {
    const updatedElection = [...election];
    updatedElection[index] = value;
    setElection(updatedElection);
  };

  const addInputCandidate = () => {
    setCandidate([...candidate, ""]);
  };

  const handleInputChangeCandidate = (index, value) => {
    const updatedCandidate = [...candidate];
    updatedCandidate[index] = value;
    setCandidate(updatedCandidate);
  };
  // 타임스탬프로 변환
  function Unix_timestampConv(_time) {
    let time = Math.floor(new Date(_time).getTime() / 1000);
    console.log("time : " + time);
    return time;
  }

  async function sendAgenda(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const title_a = data.get("title_a");
    const context_a = data.get("context_a");
    const endTime_a = data.get("endTime_a");
    let time = Unix_timestampConv(endTime_a);
    console.log(time);

    let canVoted_a = Array.from(data.getAll("regardingUsers_a"));
    let elective_a = [0, ...Array.from(data.getAll("elective_a"))];
    console.log(elective_a);
    try {
      await contract.methods
        .makeANewPoll(title_a, context_a, 1, elective_a, time, canVoted_a)
        .send({from: account, to: CONTRACT_ADDRESS});
    } catch (error) {
      console.error(error);
    }
  }

  async function sendElection(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const title = data.get("title");
    const context = data.get("context");

    const endTime = data.get("endTime_a");

    let time = Unix_timestampConv(endTime);
    console.log(time);

    let canVoted = Array.from(data.getAll("regardingUsers"));
    let elective = [];

    try {
      await contract.methods
        .makeANewPoll(title, context, 0, elective, time, canVoted)
        .send({from: account, to: CONTRACT_ADDRESS});
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div
      className="flex flex-col justify-start items-start  rounded-lg bg-gray-200"
      drop-shadow-md
      style={{backgroundImage: "url('/assets/images/create_background.png')"}}
    >
      <div className="w-[50%] h-[80%] ">
        <div className="flex justify-center items-center">
          <div
            className="w-[30%] text-white  mt-24 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full py-4 flex justify-center text-2xl"
            onClick={() => {
              setIsTab("agenda");
            }}
          >
            선출 제안
          </div>
          <div
            className="w-[30%] text-white mt-24 bg-gradient-to-br from-pink-500 to-blue-500 py-4 rounded-full ml-4 flex text-2xl  justify-center"
            onClick={() => {
              setIsTab("election");
            }}
          >
            안건 제안
          </div>
        </div>
        {isTab === "agenda" && (
          <div className="flex flex-row justify-center items-center mx-20  my-4 p-12   rounded-2xl   bg-white border-4 border-purple-500">
            <form onSubmit={sendAgenda}>
              <div className="">
                <div className="flex">
                  <div className="mr-10">
                    <p>선출 주제</p>
                    <input
                      type="text"
                      className="border-4 border-purple-500"
                      name="title_a"
                      placeholder="ex) 우리반 반장 뽑기 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>투표 기한</p>
                    <input
                      type="date"
                      name="endTime_a"
                      className="border-4 border-purple-500"
                    />
                  </div>
                </div>
                <p className="mt-8">상세 내용</p>
                <input
                  type="text"
                  name="context_a"
                  className="border-4 border-purple-500 w-[100%]"
                />
                <p className="mt-8">투표 참가자</p>
                {agenda.map((input, index) => (
                  <input
                    key={index}
                    value={input}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder="Enter a value"
                    className="border-4 border-purple-500"
                  />
                ))}
                <button
                  className="bg-gray-400 text-3xl rounded-full py-2 px-4 flex items-center justify-center"
                  onClick={addInput}
                >
                  +
                </button>
                <p className="mt-8">후보자</p>
                {election.map((input, index) => (
                  <input
                    key={index}
                    value={input}
                    onChange={(e) =>
                      handleInputChangeElection(index, e.target.value)
                    }
                    placeholder="Enter a value"
                    className="border-4 border-purple-500"
                  />
                ))}
                <button
                  onClick={addInputElection}
                  className="bg-gray-400 text-3xl rounded-full py-2 px-4 flex items-center justify-center"
                >
                  +
                </button>
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-pink-500 to-blue-500 mt-8 text-3xl py-2 px-6 rounded-full font-bold"
                >
                  Create A Poll
                </button>
              </div>
            </form>
          </div>
        )}
        {isTab === "election" && (
          <div className="flex flex-row justify-center items-center mx-20  my-4 p-9   rounded-2xl   bg-white border-4 border-purple-500">
            <form onSubmit={sendElection}>
              <div className="">
                <div className="flex mt-3">
                  <div>
                    <p>안건 주제</p>
                    <input
                      type="text"
                      className="border-4 border-purple-500"
                      name="title"
                      placeholder="ex) 시험 금지법"
                    />
                  </div>
                  <div className="flex flex-col ml-10">
                    <p>투표 기한</p>
                    <input
                      type="date"
                      name="endTime"
                      className="border-4 border-purple-500"
                    />
                  </div>
                </div>
                <p className="mt-8">상세 내용</p>
                <input
                  type="text"
                  name="context"
                  className="border-4 border-purple-500 w-[100%]"
                />
                <p className="mt-8">투표 참가자</p>
                {candidate.map((input, index) => (
                  <input
                    key={index}
                    value={input}
                    onChange={(e) =>
                      handleInputChangeCandidate(index, e.target.value)
                    }
                    placeholder="Enter a value"
                    className="border-4 border-purple-500"
                  />
                ))}
                <button
                  onClick={addInputCandidate}
                  className="bg-gray-400 text-3xl rounded-full py-2 px-4 flex items-center justify-center"
                >
                  +
                </button>
              </div>

              <button
                type="submit"
                className="text-white bg-gradient-to-r from-pink-500 to-blue-500 mt-8 text-3xl py-2 px-6 rounded-full font-bold"
              >
                Make A Poll
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default CreateVote;
