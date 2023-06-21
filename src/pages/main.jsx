import React from "react";
import useAxios from "../hooks/custom_axios";

const Main = () => {
  const {data, error, loading} = useAxios("/todos");

  return (
    <div>
      <div className="mt-24 w-screen flex justify-center items-center p-20 bg-slate-600">
        Banner
      </div>
      <div
        className=" w-screen bg-cover bg-center flex flex-col py-40 justify-center items-center"
        style={{
          backgroundImage: "url('/assets/images/space.jpg')",
        }}
      >
        <div className="w-screen">
          <div className="w-60 h-60 flex ">
            <img src="/assets/images/jelly-black.png" alt="jellyfish-tooltip" />
          </div>
          <div className="bg-white p-8 rounded-md">
            Voter anonymity guaranteed.
          </div>
        </div>
        <div className="w-48 h-48">
          <img src="/assets/images/jelly-black.png" alt="jellyfish-tooltip" />
          <div>Voter anonymity guaranteed.</div>
        </div>
        <div className="w-48 h-48">
          <img src="/assets/images/jelly-black.png" alt="jellyfish-tooltip" />
          <div>Voter anonymity guaranteed.</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
