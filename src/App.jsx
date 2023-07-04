import { useState, useEffect } from "react";
import { Nav, Main, CreateVote, VoteList, Footer } from "./pages";
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
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Install metamask");
    }
  }

  const getPoll = async () => {
    const response = await contract.methods.getAllPoll().call();
    console.log("response : " + response);

    setMethods(response);
  };

  useEffect(() => {
    getPoll();
    connect();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/CreateVote"
          element={
            <CreateVote
              account={account}
              methods={methods}
              setMethods={setMethods}
            />
          }
        />
        <Route path="/voteList" element={<VoteList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
