import React from "react";
import useAxios from "../hooks/custom_axios";

const Page1 = () => {
  const {data, error, loading} = useAxios("/todos");

  return <div className="bg-gray-500 h-screen"></div>;
};

export default Page1;
