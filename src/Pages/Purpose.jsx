import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import PageLayout from "../Components/PageLayout";

const Purpose = () => {
  return (
    <div className="bg-[#e8d6d5] h-fit w-[100%]">
      <NavBar />
      {/* <NavRes/> */}
      <PageLayout
        p1="Our purpose"
        h1="To build a world where together, we’re more than investors."
        p2="We’re putting an end to investing alone or thinking “the financial market isn’t for me”. Shares brings connecting with friends and Investing together – in one app. Because we believe investing is for everyone, not just the top dogs."
        img="/image/hero2.avif"
      />
    </div>
  );
};

export default Purpose;
