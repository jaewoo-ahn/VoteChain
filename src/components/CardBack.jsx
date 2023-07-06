import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VoteCarousel from "../components/carousel";
import "swiper/css";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect } from "react";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

export default function CardBack({ pollList, cardId }) {
  return (
    <div className="bg-red-300  text-center  w-96  h-96 rounded-lg">hello</div>
  );
}
