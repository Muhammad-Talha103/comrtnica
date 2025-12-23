import React from "react";

const ObituaryListBanner = ({ image, label, alt, h1Text }) => {
  const defaultAlt = label === "Osmrtnice" ? "osmrtnice ozadje" : label === "Pogrebi" ? "pogrebi ozadje" : label === "Lokalne cvetličarne" ? "ozadje za cvetličarne" : label === "Pogrebna podjetja" ? "ozadje za pogrebna podjetja" : `${label} ozadje`;

  const displayText = h1Text || (label === "Osmrtnice" ? "Osmrtnice" : label === "Pogrebi" ? "Pogrebi" : label === "Lokalne cvetličarne" ? "Lokalne cvetličarne" : label === "Pogrebna podjetja" ? "Pogrebna podjetja" : label);

  return (
    <div className="relative w-full overflow-hidden mx-auto desktop:mt-[70.02px] mobile:mt-[45px] tablet:mt-[52px] flex justify-center items-center">
      <img
        src={image}
        alt={alt || defaultAlt}
        className="h-[300px] mobile:h-[192px] tablet:h-[220px] w-full object-cover"
      />
      <h1
        className=" flex flex-col items-center justify-center
         py-4 px-6 mx-auto absolute rounded-lg border-2 border-[#FFFFFF] shadow-custom-light-dark-banner bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF50] backdrop-blur-sm
        text-[#1E2125] 
        mobile:text-[28px] text-[40px] 
        font-normal leading-[47px] mobile:leading-[33px] whitespace-nowrap"
      >
        {displayText}
      </h1>
    </div>
  );
};
export default ObituaryListBanner;