import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavRes.css";

const NavRes = () => {
  const [active, setActive] = React.useState(true);
  const [focus, setFocus] = useState();
  const [index, setIndex] = useState(0);

  const actP = (e) => {
    setIndex(2);
    // e.preventDefault();
  };
  const actC = (e) => {
    setIndex(3);
    // e.preventDefault();
  };
  const actCr = (e) => {
    setIndex(4);
    // e.preventDefault();
  };
  const actU = (e) => {
    setIndex(5);
    // e.preventDefault();
  };

  console.log(index);

  window.addEventListener("scroll", () => {
    console.log(scrollY);
    scrollY >= 20 ? setActive(true) : setActive(false);
  });
  return (
    <nav className={`${active && "active"}`}>
      <Link to="/">
        <img
          className="w-[8rem] h-[2.25rem] flex-grow-1"
          src="/image/logo.svg"
          alt=""
        />
      </Link>

      <div className="text-[1.15rem]">
        <img className="h-[2.5rem] w-[2.5rem]" src="/image/menu.svg" alt="" />
        {/* <Link
          to="/Purpose"
          className={`text-[#8d8d8d] ${
            index === 2 ? "text-black border-solid border-b-2 border-black" : ""
          }`}
          onClick={actP}
        >
          Purpose
        </Link>
        <Link
          to="/Community"
          className={`text-[#8d8d8d] ${
            index === 3 ? "text-black border-solid border-b-2 border-black" : ""
          }`}
          onClick={actC}
        >
          Community
        </Link>
        <Link
          to="/Career"
          className={`text-[#8d8d8d] ${
            index === 4 ? "text-black border-solid border-b-2 border-black" : ""
          }`}
          onClick={actCr}
        >
          Careers<sup className="text-[.6rem]">[11]</sup>
        </Link>
        <Link to="/Learn" target="_blank" className="text-[#8d8d8d]">
          Learn
        </Link>
        <Link
          to="/United"
          className={`text-[#8d8d8d] flex items-center gap-2 ${
            index === 5 ? "text-black border-solid border-b-2 border-black" : ""
          }`}
          onClick={actU}
        >
          <img
            className="h-[1rem] w-[1rem]  "
            src="/image/location.svg"
            alt=""
          />
          <span>United Kingdom</span>
        </Link> */}
      </div>
    </nav>
  );
};

export default NavRes;
