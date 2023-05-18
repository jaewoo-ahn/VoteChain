import React from "react";
import useAxios from "../hooks/custom_axios";

const Page2 = () => {
  const {data, error, loading} = useAxios("/users");

  return <div>Page2</div>;
};

export default Page2;
