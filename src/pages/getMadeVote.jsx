import React from "react";
import VoteCarousel2 from "../components/carousel2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useState, useEffect } from "react";
const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const GetMadeVote = ({ account }) => {
  const [pollList, setPollList] = useState([]);

  const getPoll = async () => {
    console.log(contract);
    console.log(account);

    try {
      const response_1 = await contract.methods.getMadeVote(account).call();
      console.log("response_1 : " + response_1);
      console.log(response_1);
      setPollList(response_1);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log(pollList[0]);
  }, [pollList]);

  useEffect(() => {
    getPoll();
  }, [account]);

  return (
    <div className="p-20 ">
      <div
        className="mt-10 flex flex-col justify-center items-center  rounded-lg bg-gray-200"
        drop-shadow-md
        style={{ backgroundImage: "url('/assets/images/background.png')" }}
      >
        <p className="  text-sky-400  mt-14 mb-10 px-20 py-4 border-sky-500 border rounded-lg ">
          내가 만든 투표
        </p>
        <div className=" w-[80%] h-[80%] flex items-center mb-20">
          <VoteCarousel2 pollList={pollList} />
        </div>
      </div>
    </div>
  );
};

export default GetMadeVote;
