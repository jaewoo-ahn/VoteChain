import { useState, useEffect } from "react";
import { Nav, Main, CreateVote, Footer } from "./pages";

import GetMadeVote from "./pages/getMadeVote";
import GetRegardingUserPolls from "./pages/getRegardingUserPolls";
import GetMyVotedAll from "./pages/getMyVotedAll";
import { Route, Routes } from "react-router-dom";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./web3.config";
import Web3 from "web3";
const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const App = () => {
  const [account, setAccount] = useState();
  const [methods, setMethods] = useState([]);

  async function connect() {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(res[0]);
        console.log("account app : " + account);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Install metamask");
    }
  }

  useEffect(() => {
    connect();
  }, [account]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CreateVote" element={<CreateVote account={account} />} />
        <Route
          path="/getMadeVote"
          element={<GetMadeVote account={account} />}
        />
        <Route
          path="/getMyVotedAll"
          element={<GetMyVotedAll account={account} />}
        />
        <Route
          path="/getRegardingUserPolls"
          element={<GetRegardingUserPolls account={account} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
