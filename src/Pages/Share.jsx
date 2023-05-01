import React from "react";
import NavBar from "../Components/NavBar";
import NavRes from "../Components/NavRes";

const Share = () => {
  return (
    <div className="bg-[#dfdacd] h-fit w-[100%] ">
      <NavBar className="lg:block hidden" />
      {/* <NavRes className="block lg:hidden" /> */}
      <div className="px-[1rem] pt-[7rem] lg:px-[3rem] lg:pt-[10rem] flex lg:flex-row flex-col pb-[4rem] text-[#16002c]">
        <div className="w-[100%] block lg:hidden">
          <img src="/image/hero1.avif" alt="" />
        </div>
        <div className="w-[100%] py-8 lg:py-20 px-4">
          <h1 className="text-[2.5rem] lg:text-[5rem] font-bold lg:leading-[5rem] mb-4">
            Invest. Learn. Grow.
          </h1>
          <p className="w-[90%] text-[1.15rem] lg:text-[1.2rem] font-[500] leading-[1.5rem] mb-4">
            Invest in over 1,000 stocks, learn from current investors and grow
            your market knowledge. All in one easy to use app.
          </p>
          <p className="text-[1.15rem] lg:text-[1.3rem] font-[500] leading-[1.5rem] mb-4">
            As with all investing, your capital will be at risk.
          </p>
          <div className="flex flex-col lg:flex-row items-center h-fit mt-[2rem] lg:mt-[6rem]">
            <img src="/image/qr.svg" />
            <p className="lg:p-4 w-[100%] lg:w-[60%] text-[1.4rem] lg:text-[1.8rem] font-[800] leading-[2rem]">
              Scan this QR code to download Shares
            </p>
          </div>
        </div>
        <div className="w-[50%] hidden lg:block">
          <img src="/image/hero1.avif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Share;
