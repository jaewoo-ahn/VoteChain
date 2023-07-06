import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LuVote } from "react-icons/lu";
import { FaWallet } from "react-icons/fa";
import { LoginModal } from "../components";
import Web3 from "web3";

const Nav = () => {
  const [navTab, setNavTab] = useState(0);
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const web3 = new Web3(window.ethereum);
  const [accounts, setAccount] = useState("");

  const connect = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(res[0]);
        localStorage.setItem("wallet_address", res[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Install metamask");
    }
  };

  useEffect(() => {
    console.log(accounts);
  }, []);

  return (
    <>
      <nav className="flex justify-between bg-white p-4 fixed w-screen mb-20 z-10 rounded-b-lg items-center drop-shadow-md	">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="w-12 ml-10">
            <img src="/assets/images/logoimage.png" alt="logo" />
          </div>
          <div className="w-32 ml-4">
            <img src="/assets/images/logotitle.png" alt="title" />
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <p
              className="font-bold  w-36 h-12 flex items-center justify-center rounded-md cursor-pointer hover:text-[#aa9df9]"
              onMouseEnter={() => {
                setNavTab(1);
              }}
              onMouseLeave={() => {
                setNavTab(0);
              }}
            >
              Voting
              <br />
              Management
            </p>
            {navTab === 1 && (
              <div
                className="absolute bg-white  w-40 rounded-lg"
                onMouseEnter={() => {
                  setNavTab(1);
                }}
                onMouseLeave={() => {
                  setNavTab(0);
                }}
              >
                <p
                  className="p-4 cursor-pointer hover:bg-gray-100 rounded-lg hover:text-[#aa9df9] "
                  onClick={() => {
                    navigate("/createVote");
                  }}
                >
                  새 투표 만들기
                </p>
                <p
                  className="p-4 cursor-pointer hover:bg-gray-100 rounded-lg hover:text-[#aa9df9] "
                  onClick={() => {
                    navigate("/getRegardingUserPolls");
                  }}
                >
                  투표 하기
                </p>
                <p
                  className="p-4 cursor-pointer hover:bg-gray-100 rounded-lg hover:text-[#aa9df9] "
                  onClick={() => {
                    navigate("/getMyVotedAll");
                  }}
                >
                  투표 결과
                </p>
                <p
                  className="p-4 cursor-pointer hover:bg-gray-100 rounded-lg hover:text-[#aa9df9] "
                  onClick={() => {
                    navigate("/getMadeVote");
                  }}
                >
                  내가 만든 투표
                </p>
              </div>
            )}
          </div>
          <div>
            <p
              className="ml-4 font-bold w-36 h-12 flex items-center justify-center rounded-md cursor-pointer hover:text-[#aa9df9] "
              onMouseEnter={() => {
                setNavTab(2);
              }}
              onMouseLeave={() => {
                setNavTab(0);
              }}
            >
              My Page
            </p>
            {navTab === 2 && (
              <div
                className="absolute bg-white w-40 ml-8 rounded-lg"
                onMouseEnter={() => {
                  setNavTab(2);
                }}
                onMouseLeave={() => {
                  setNavTab(0);
                }}
              >
                <p className="p-4 cursor-pointer hover:bg-gray-100 rounded-lg hover:text-[#aa9df9] ">
                  개인정보 수정
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <LuVote size={50} className="mr-6" />
          <FaWallet
            size={40}
            className="mr-6"
            onClick={() => {
              connect();
            }}
          />
        </div>
      </nav>
      {isModal ? <LoginModal /> : ""}
    </>
  );
};

export default Nav;
