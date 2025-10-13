import React from "react";
import ObituaryCardFb from "./appcomponents/ObituaryCardFb";
import { useRouter } from "next/navigation";

const MemoryHeroSection = ({ obituary, handleFacebookShare, href }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(href)}
      className="relative mobile:pb-[50px] cursor-pointer relative max-w-[500px] overflow-hidden mx-auto desktop:mt-[137.02px] mobile:mt-[115px] tablet:mt-[124px] flex justify-center"
    >
      <img
        src="/fb-posting-hero-bg.png"
        alt="Memory page hero background"
        className="mobile:hidden h-[415px] mobile:h-[315px] w-[500px] object-cover"
      />
      <img
        src="/fb-posting-hero-bg.png"
        alt="Memory page hero background"
        className="mobile:flex hidden h-[400px] w-full object-cover"
      />
      <div className="absolute top-[3%] left-[4%] right-[4%]">
        <ObituaryCardFb data={obituary} />
      </div>
      <div
        onClick={handleFacebookShare}
        className="absolute flex cursor-pointer justify-center gap-3 rounded-[6px] border border-[#ffffff] items-center w-[387px] h-[32px] bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]/[30%] mobile:bottom-[22%] mobile:w-[80%] mobile:mx-auto mobile:right-[3%] bottom-[11%] right-[3%]"
      >
        <p
          style={{ fontFamily: "Roboto Flex" }}
          className="text-[#3C3E41] mobile:text-[11.5px] text-[14px]"
        >
          Vpis v žalno knjigo in informacije o pogrebu so tukaj
        </p>
        <img
          className="rotate-[180deg] mt-1 mobile:w-[10px] h-[15px] w-[12.23px] h-[18.34px]"
          src="/previous_img.png"
        />
      </div>
      <p
        style={{ fontFamily: "Roboto Flex" }}
        className="text-black/50 absolute mobile:bottom-[13%] bottom-[2%] left-[0%] mobile:text-[11.5px] text-[14px]"
      >
        osmrtnica.com
      </p>
    </div>
  );
};

export default MemoryHeroSection;
