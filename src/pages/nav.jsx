import React from "react";
import {useNavigate} from "react-router";

const Nav = () => {
  const navigate = useNavigate();
  const array = [
    {
      name: "page1",
      link: "/",
    },
    {
      name: "page2",
      link: "/page2",
    },
    {
      name: "page3",
      link: "/page3",
    },
  ];

  return (
    <nav className="flex justify-between bg-blue-900 p-4 fixed w-screen mb-20 z-10 rounded-b-lg">
      <div className="flex flex-col">
        <p>TITLE</p>
      </div>
      <div>
        {array.map((e, idx) => {
          return (
            <button
              key={idx}
              className="bg-black text-white p-4 rounded-lg mr-4"
              onClick={() => {
                navigate(e.link);
              }}
            >
              {e.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
