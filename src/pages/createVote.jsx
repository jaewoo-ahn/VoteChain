import React from "react";
import { useState } from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import Web3 from "web3";

const web3 = new Web3(window.ethereum);
var { ethers } = require("ethers");
// const CreateVote = ({ account, methods, setMethods }) => {

//   async function sendAgenda(e) {
//     e.preventDefault();
//     const data = new FormData(e.target);

//     const title_a = data.get("title_a");
//     const context_a = data.get("context_a");
//     // const endTime_a = data.get("endTime_a");

//     // let time = Unix_timestampConv(endTime_a);

//     let time = 12345;

//     let canVoted = [];
//     canVoted.push(data.get("regardingUsers_a"));
//     let elective_a = [];
//     canVoted.push(data.get("elective_a"));

//     await contract.methods
//       .makeANewPoll(title_a, context_a, 1, elective_a, time, canVoted)
//       .send({ from: account, to: CONTRACT_ADDRESS });
//   }

//   // 타임스탬프로 변환
//   function Unix_timestampConv(_time) {
//     let time = Math.floor(_time / 1000);
//     console.log("time : " + time);
//     return time;
//   }

//   async function sendElection(e) {
//     e.preventDefault();
//     const data = new FormData(e.target);

//     const title = data.get("title");
//     const context = data.get("context");

//     // const endTime = data.get("endTime");

//     // let time = Unix_timestampConv(endTime);
//     let time = 12345;

//     let elective = [];

//     let canVoted = [];
//     canVoted.push(data.get("regardingUsers"));

//     await contract.methods
//       .makeANewPoll(title, context, 0, elective, time, canVoted)
//       .send({ from: account, to: CONTRACT_ADDRESS });
//   }

//   return (
//     <div
//       className=" w-screen h-screen bg-cover bg-center flex  justify-center items-center"
//       style={{
//         backgroundImage: "url('/assets/images/space.jpg')",
//       }}
//     >
//       <div className="bg-white w-[80%] h-[80%]">
//         <div className="flex ">
//           <div
//             className="w-[50%] border-solid border-b-2	py-4 flex justify-center "
//             onClick={() => {
//               setIsTab("agenda");
//             }}
//           >
//             안건 제안
//           </div>
//           <div
//             className="w-[50%] border-solid border-b-2 py-4 flex justify-center"
//             onClick={() => {
//               setIsTab("election");
//             }}
//           >
//             선출 제안
//           </div>
//         </div>
//         {isTab === "agenda" && (
//           <div className="flex flex-row justify-center items-center">
//             <form onSubmit={sendAgenda}>
//               <div className="w-[50%]">
//                 <p>안건 주제</p>
//                 <input
//                   type="text"
//                   className="border"
//                   name="title_a"
//                   placeholder="ex) 시험 금지법 "
//                 />
//                 <p>상세 내용</p>
//                 <input type="text" name="context_a" className="border" />
//                 <p>투표 참가자</p>
//                 <input type="regardingUsers_a" className="border" />
//                 <input type="regardingUsers_a" className="border" />
//                 <p>후보자</p>
//                 <input type="text" name="elective_a" className="border" />
//                 <input type="text" name="elective_a" className="border" />
//                 <p>투표 기한</p>
//                 <div className="flex flex-col">
//                   <input type="date" name="endTime_a" className="border" />
//                   <button type="submit">생성하기</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         )}
//         {isTab === "election" && (
//           <div className="flex flex-row justify-center items-center">
//             <form onSubmit={sendElection}>
//               <div className="w-[50%] ">
//                 <p>선출 주제</p>
//                 <input
//                   type="text"
//                   className="border"
//                   name="title"
//                   placeholder="ex) 우리반 반장"
//                 />
//                 <p>상세 내용</p>
//                 <input type="text" name="context" className="border" />
//                 <p>투표 참가자</p>
//                 <input type="text" name="regardingUsers" className="border" />
//               </div>
//               <p>투표 기한</p>
//               <div className="flex flex-col">
//                 <input type="date" name="endTime" className="border" />
//                 <button type="submit">생성하기</button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreateVote;

function CreateVote() {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [voteType, setVoteType] = useState(0);
  const [elective, setElective] = useState([]);
  const [endTime, setEndTime] = useState(0);
  const [regardingUsers, setRegardingUsers] = useState([]);
  const [isTab, setIsTab] = useState("agenda");

  const handleCreatePoll = async () => {
    try {
      // Ethereum 계정 연결 (Metamask 또는 기타 월렛을 사용하는 방법에 따라 다릅니다.)
      const provider = new ethers.InfuraProvider(
        "goerli",
        "wss://goerli.infura.io/ws/v3/8f21e62e72c346b9a9923f05f0ae3ab2"
      );
      console.log("provider : " + provider);
      await window.ethereum.enable();
      const signer = provider.getSigner();

      // 스마트 계약 인스턴스 생성
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      // 문자열 배열을 bytes32 배열로 변환 (스마트 계약에 맞게)
      const electiveBytes32 = elective.map((item) =>
        ethers.utils.formatBytes32String(item)
      );

      // 주소 배열을 bytes32 배열로 변환 (스마트 계약에 맞게)
      const regardingUsersBytes32 = regardingUsers.map((address) =>
        ethers.utils.getAddress(address)
      );

      // 스마트 계약 함수 호출하여 투표 생성
      const tx = await contract.makeANewPoll(
        title,
        context,
        voteType,
        electiveBytes32,
        endTime,
        regardingUsersBytes32
      );

      // 트랜잭션 처리를 기다립니다.
      await tx.wait();

      // 투표가 성공적으로 생성되었습니다!
      alert("투표가 생성되었습니다!");
    } catch (error) {
      console.error("오류 발생:", error);
      alert("투표 생성 중 오류가 발생했습니다.");
    }
  };

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
            안건 제안
          </div>
          <div
            className="w-[50%] border-solid border-b-2 py-4 flex justify-center"
            onClick={() => {
              setIsTab("election");
            }}
          >
            선출 제안
          </div>
        </div>
        {isTab === "agenda" && (
          <div className="flex flex-row justify-center items-center">
            <div className="w-[50%] ">
              <p>안건 주제</p>
              <input
                type="text"
                className="border"
                placeholder="ex) 시험 금지법 "
              />
              <p>투표 참가자</p>
              <div className="flex flex-col w-[50%]">
                <input type="email" className="border" />
                <input type="email" className="border" />
              </div>
            </div>
            <div className="flex flex-col">
              <input type="date" className="border" />
              <button>생성하기</button>
            </div>
          </div>
        )}
        {isTab === "election" && (
          <div className="flex flex-row justify-center items-center">
            <div className="w-[50%] ">
              <p>선출 주제</p>
              <input
                type="text"
                className="border"
                placeholder="ex) 우리반 반장"
              />
              <p>투표 참가자</p>
              <div className="flex flex-col w-[50%]">
                <input type="email" className="border" />
                <input type="email" className="border" />
              </div>
            </div>
            <div className="flex flex-col">
              <input type="date" className="border" />
              <button>생성하기</button>
            </div>
          </div>
        )}
      </div>
      <button onClick={handleCreatePoll}>투표 생성</button>
    </div>
  );
}

export default CreateVote;
