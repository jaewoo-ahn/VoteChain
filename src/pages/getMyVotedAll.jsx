import React from "react";
import VoteCarousel3 from "../components/carousel3";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useState, useEffect } from "react";
const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const GetMyVotedAll = ({ account }) => {
  const [pollList, setPollList] = useState([]);
  const [pollList2, setPollList2] = useState([]);
  const [pollList3, setPollList3] = useState([]);

  const getPoll = async () => {
    console.log(contract);
    console.log("account : " + account);
    try {
      const response_1 = await contract.methods.getMyVotedAll(account).call();
      console.log("response_1 : " + response_1);
      console.log(response_1);
      setPollList(response_1[0]);
      setPollList2(response_1[1]);
      setPollList3(response_1[2]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPoll();
    console.log(pollList2);
    console.log(pollList);
    console.log(pollList3);
  }, [account]);

  return (
    <div className="p-20 ">
      <div
        className="mt-10 flex flex-col justify-center items-center  rounded-lg bg-gray-200"
        drop-shadow-md
        style={{ backgroundImage: "url('/assets/images/background.png')" }}
      >
        <p className="  text-sky-400  mb-10 px-20 py-4 border-sky-500 border  rounded-lg">
          투표 결과
        </p>
        <div className=" w-[80%] h-[80%] flex items-center mb-20">
          <VoteCarousel3
            pollList={pollList}
            pollList2={pollList2}
            pollList3={pollList3}
          />
        </div>
      </div>
    </div>
  );
};

export default GetMyVotedAll;
