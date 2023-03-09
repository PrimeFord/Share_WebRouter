import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = React.useState(true);
  const [focus, setFocus] = useState();

  window.addEventListener("scroll", () => {
    console.log(scrollY);
    scrollY >= 20 ? setActive(true) : setActive(false);
  });
  return (
    <nav className={`${active && "active"}`}>
      <Link to="/">
        <img
          className="w-[8rem] h-[2.5rem] flex-grow-1"
          src="/image/logo.svg"
          alt=""
        />
      </Link>
      <div className="w-[60%] text-[1.15rem]">
        <Link to="/Purpose">Purpose</Link>
        <Link to="/Community">Community</Link>
        <Link to="/Career">
          Careers<sup className="text-[.6rem]">[11]</sup>
        </Link>
        <Link to="/Learn" target="_blank">
          Learn
        </Link>
        <Link to="/United" className="flex items-center gap-2">
          <img
            className="h-[1rem] w-[1rem]  "
            src="/image/location.svg"
            alt=""
          />
          <span>United Kingdom</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
