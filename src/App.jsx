import {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {Nav, Main, CreateVote, VoteList, Footer} from "./pages";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/createVote" element={<CreateVote />} />
        <Route path="/voteList" element={<VoteList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
