// import React from "react";
// import VoteCarousel from "../components/carousel";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Web3 from "web3";
// import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
// import { useState, useEffect } from "react";
// const web3 = new Web3(window.ethereum);
// const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

// const GetRegardingUserPolls = ({ account }) => {
//   const [pollList_2, setPollList_2] = useState([]);

//   const getPoll_2 = async () => {
//     console.log("account : " + account);
//     try {
//       const response_2 = await contract.methods
//         .getRegardingUserPolls(account)
//         .call();

//       console.log(response_2);
//       console.log("account : " + account);
//       setPollList_2(response_2);
//       console.log(pollList_2);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getPoll_2();
//   }, [account]);

//   return (
//     <div className="p-20 ">
//       <div
//         className="mt-10 flex flex-col justify-center items-center  rounded-lg bg-gray-200"
//         drop-shadow-md
//         style={{ backgroundImage: "url('/assets/images/background.png')" }}
//       >
//         <p className=" text-sky-400  mt-14 mb-10 px-20 py-4 border-sky-500 border rounded-lg ">
//           참가 할 투표
//         </p>
//         <div className=" w-[80%] h-[80%] flex items-center mb-20">
//           <VoteCarousel pollList={pollList_2} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetRegardingUserPolls;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardBack from "../components/CardBack";
import { Swiper, SwiperSlide } from "swiper/react";
import VoteCarousel from "../components/carousel";
import "swiper/css";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect } from "react";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const GetRegardingUserPolls = ({ account }) => {
  const [pollList_2, setPollList_2] = useState([]);
  const navigate = useNavigate();

  const getPoll_2 = async () => {
    console.log("account: " + account);
    try {
      const response_2 = await contract.methods
        .getRegardingUserPolls(account)
        .call();

      console.log(response_2);
      console.log("account: " + account);
      setPollList_2(response_2);
      console.log(pollList_2);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPoll_2();
  }, [account]);

  return (
    <div className="p-20">
      <div
        className="mt-10 flex flex-col justify-center items-center rounded-lg bg-gray-200"
        drop-shadow-md
      >
        <p className="text-sky-400 mt-14 mb-10 px-20 py-4 border-sky-500 border rounded-lg">
          vote to participate
        </p>
        <div className="w-[80%] h-[80%] flex items-center mb-20">
          <VoteCarousel pollList={pollList_2} />
        </div>
      </div>
    </div>
  );
};

export default GetRegardingUserPolls;
