import React from "react";

const LearnLayout = (props) => {
  return (
    <div className="px-[1rem] lg:px-[3rem] pt-[7rem] lg:pt-[9rem] flex pb-[4rem] text-[#16002c]">
      <div className="w-[100%] lg:w-[50%] px-4">
        <p className="w-[90%] text-[1.2rem] font-[700] leading-[1.5rem] mb-4">
          {props.p1}
        </p>
        <h1 className="text-[2.5rem] lg:text-[4.2rem] font-bold leading-[2.4rem] lg:leading-[4.2rem] mb-4">
          {props.h1}
        </h1>
        <div className="w-[100%] block lg:hidden">
          <img className="lg:px-4" src={props.img} alt="" />
        </div>
        <p className="text-[1.05rem] font-[500] leading-[1.5rem] my-4">
          {props.p2}
        </p>
      </div>
      <div className="w-[50%] hidden lg:block">
        <img className="px-4" src={props.img} alt="" />
      </div>
    </div>
  );
};

export default LearnLayout;
