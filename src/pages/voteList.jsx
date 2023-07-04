import React from "react";
import VoteCarousel from "../components/carousel";

import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useState, useEffect } from "react";
const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const VoteList = () => {
  const [pollList, setPollList] = useState([]);
  const [account, setAccount] = useState();

  async function connect() {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("res : " + res);
        setAccount(res[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Install metamask");
    }
  }

  const getPoll = async () => {
    const response_1 = await contract.methods.getAllPoll().call();
    console.log("response_1 : " + response_1);
    setPollList(response_1);

    // const response_3 = await contract.methods.getVoteResults().call();

    // console.log("response_3 : " + response_3);
    // setMethods_3(response_3);

    // const response_2 = await contract.methods
    //   .getRegardingUserPolls(account)
    //   .call();

    // console.log("response_2 : " + response_2);
    // setMethods_2(response_2);
  };

  useEffect(() => {
    connect();
    getPoll();
  }, []);

  return (
    <div className="p-20 ">
      <div
        className="mt-10 flex flex-col justify-center items-center  rounded-lg bg-gray-200"
        drop-shadow-md
      >
        <p className="mt-14 mb-10 px-20 py-4 border-sky-500 border bg-white">
          참가 할 투표
        </p>
        <div className=" w-[80%] h-[80%] flex items-center mb-20">
          {/* <VoteCarousel methods={methods_2} /> */}
        </div>
        <p className="mt-14 mb-10 px-20 py-4 border-sky-500 border bg-white">
          내가 참가한 투표
        </p>
        <div className=" w-[80%] h-[80%] flex items-center mb-20">
          <VoteCarousel pollList={pollList} />
        </div>
        <p className="mb-10 px-20 py-4 border-sky-500 border  bg-white">
          내가 만든 투표
        </p>
        <div className=" w-[80%] h-[80%]  flex items-center mb-20">
          {/* <VoteCarousel methods={methods_3} /> */}
        </div>
      </div>
    </div>
  );
};

export default VoteList;
