import React from "react";
import VoteCarousel from "../components/carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useState, useEffect } from "react";
const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const VoteList = ({ account }) => {
  const [pollList, setPollList] = useState([]);
  const [pollList_2, setPollList_2] = useState([]);
  const [pollList_3, setPollList_3] = useState([]);

  const getPoll = async () => {
    try {
      const response_1 = await contract.methods.getMyVotedAll(account).call();
      console.log("response_1 : " + response_1);
      setPollList(response_1);
    } catch (error) {
      console.error(error);
    }
  };
  const getPoll_2 = async () => {
    try {
      const response_2 = await contract.methods
        .getRegardingUserPolls(account)
        .call();

      console.log("response_2 : " + response_2);
      console.log("account : " + account);
      setPollList_2(response_2);
    } catch (error) {
      console.error(error);
    }
  };
  const getPoll_3 = async () => {
    const response_3 = await contract.methods.getMadeVote(account).call();

    console.log("response_3 : " + response_3);
    setPollList_3(response_3);
  };

  useEffect(() => {
    getPoll();
    getPoll_3();
    getPoll_2();
  }, []);

  return (
    <div className="p-20 ">
      <div
        className="mt-10 flex flex-col justify-center items-center  rounded-lg bg-gray-200"
        drop-shadow-md
        style={{ backgroundImage: "url('/assets/images/background.png')" }}
      >
        <p className=" text-sky-400  mt-14 mb-10 px-20 py-4 border-sky-500 border rounded-lg ">
          참가 할 투표
        </p>
        <div className="  flex items-center ">
          <VoteCarousel pollList={pollList_2} />
        </div>
        <p className="  text-sky-400  mt-14 mb-10 px-20 py-4 border-sky-500 border rounded-lg ">
          내가 참가한 투표
        </p>
        <div className=" flex items-center mb-20">
          <VoteCarousel pollList={pollList} />
        </div>
        <p className="  text-sky-400  mb-10 px-20 py-4 border-sky-500 border  rounded-lg">
          내가 만든 투표
        </p>
        <div className=" flex items-center mb-20">
          <VoteCarousel pollList={pollList_3} />
        </div>
      </div>
    </div>
  );
};

export default VoteList;
