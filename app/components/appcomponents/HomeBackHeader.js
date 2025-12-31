import React from "react";
import Link from "next/link";
import SideMenu from "../ui/sideMenu";
const HomeBackHeader = () => {
  return (
    <div className="mobile:pb-[90px] relative max-w-[1280px] overflow-hidden mx-auto  mobile:mt-[115px]  flex justify-center">
      <img
        src="/samotna_klop.avif"
        alt="Naj spomin ne zbledi"
        className="mobile:hidden mobile:h-[257px] w-[1280px] object-cover"
      />
      <img
        src="/klop_naslovna.avif"
        alt="Naj spomin ne zbledi"
        className="mobile:flex hidden h-[257px] w-[1280px] object-cover"
      />
      <div className=" w-[288.58px] left-[25.41px] smmobile:left-[14px] top-2 rounded-lg border border-[#D4D4D4] absolute mobile:flex hidden overflow-hidden shadow-custom-light-dark-banner bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF10] backdrop-blur-sm">
        <nav>
          <ul className="grid grid-cols-1 smmobile:grid-cols-1 gap-[22px] h-auto p-4">
            <li>
              <HeaderHeadingTextMobile
                head={"OSMRTNICE"}
                index={"01."}
                id={1}
                endPoint={"/osmrtnice"}
              />
            </li>
            <li>
              <HeaderHeadingTextMobile
                head={"POGREBI"}
                index={"02."}
                id={2}
                endPoint={"/pogrebi?city=Celje"}
              />
            </li>
            {/* <li>
              <HeaderHeadingTextMobile
                head={"SPOMINSKA"}
                index={"03."}
                id={3}
                endPoint={"/osmrtnice"}
              />
            </li> */}
            {/* <li>
              <HeaderHeadingTextMobile
                head={"CVETLIČARNE"}
                index={"03."}
                id={4}
                endPoint={"/cvetlicarne"}
              />
            </li> */}
          </ul>
        </nav>
      </div>
      <nav className="justify-center absolute bottom-[74px] w-full px-4  desktop:flex hidden">
        <ul className="flex gap-x-[260px] w-full justify-center">
          <li>
            <HeaderHeadingText
              head={"OSMRTNICE"}
              index={"01."}
              id={1}
              endPoint={"/osmrtnice"}
            />
          </li>
          <li>
            <HeaderHeadingText
              head={"POGREBI"}
              index={"02."}
              id={2}
              endPoint={"/pogrebi?city=Celje"}
            />
          </li>
          {/* <li>
            <HeaderHeadingText
              head={"SPOMINSKA"}
              index={"03."}
              id={3}
              endPoint={"/osmrtnice"}
            />
          </li> */}
          {/* <li>
            <HeaderHeadingText
              head={"CVETLIČARNE"}
              index={"03."}
              id={4}
              endPoint={"/cvetlicarne"}
            />
          </li> */}
        </ul>
      </nav>
      <nav className="justify-between absolute bottom-[70px] w-full  tablet:flex hidden px-5  mx-auto">
        <ul className="flex gap-x-[210px] justify-center w-full px-5">
          <li>
            <HeaderHeadingTextTablet
              head={"OSMRTNICE"}
              index={"01."}
              id={1}
              endPoint={"/osmrtnice"}
            />
          </li>
          <li>
            <HeaderHeadingTextTablet
              head={"POGREBI"}
              index={"02."}
              id={2}
              endPoint={"/pogrebi?city=Celje"}
            />
          </li>
          {/* <li>
            <HeaderHeadingTextTablet
              head={"SPOMINSKA"}
              index={"03."}
              id={3}
              endPoint={"/osmrtnice"}
            />
          </li> */}
          {/* <li>
            <HeaderHeadingTextTablet
              head={"CVETLIČARNE"}
              index={"03."}
              id={4}
              endPoint={"/cvetlicarne"}
            />
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default HomeBackHeader;

const HeaderHeadingText = ({ head, index, id, endPoint }) => {
  return (
    <div className="flex flex-row items-end w-[220px] ">
      <div className="w-[1.5px] h-[60px] bg-[#FFFFFF80] mr-[15px]" />
      <Link href={endPoint} className="">
        <div className="h-[75px]">
          <p
            className="flex"
            style={{
              marginTop: "2px",
              fontWeight: "600",
              textShadow: "1px 1px 2px #fff",
              color: "#ffffff",
              fontSize: "64px",
              lineHeight: "75px",
              fontVariationSettings: "'opsz' 64",
            }}
          >
            {index}
          </p>
        </div>
        <div className=" flex items-center h-[33px]">
          <p
            className="flex"
            style={{
              marginTop: "5px",
              color: "#DEDEDE",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "32.81px",
              fontVariationSettings: "'opsz' 28",
            }}
          >
            {head}
          </p>
        </div>
      </Link>
    </div>
  );
};
const HeaderHeadingTextTablet = ({ head, index, id, endPoint }) => {
  return (
    <div className="flex flex-row items-end  ">
      <div className="w-[1.5px] h-[53px] bg-[#FFFFFF80] mr-[7.31px]" />
      <Link href={endPoint}>
        <div className="h-[47px]">
          <p
            className="flex"
            style={{
              marginTop: "2px",
              fontWeight: "600",
              textShadow: "1px 1px 2px #fff",
              color: "#ffffff",
              fontSize: "40px",
              lineHeight: "47px",
              fontVariationSettings: "'opsz' 40",
            }}
          >
            {index}
          </p>
        </div>
        <div className=" flex items-center h-[23px]">
          <p
            className="flex"
            style={{
              marginTop: "5px",
              color: "#DEDEDE",
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "23px",
              fontVariationSettings: "'opsz' 20",
            }}
          >
            {head}
          </p>
        </div>
      </Link>
    </div>
  );
};
const HeaderHeadingTextMobile = ({ head, index, id, endPoint }) => {
  return (
    <div className="flex flex-row w-[110px] items-end ">
      <div className="w-[1px] h-[57px] bg-[#C0C0C080]  " />
      <Link href={endPoint} className="ml-[6px]">
        <div className="h-[38px]">
          <p
            className="flex"
            style={{
              fontWeight: "600",
              textShadow: "1px 1px 2px #fff",
              color: "#A2A2A2",
              fontSize: "32px",
              lineHeight: "38px",
              fontVariationSettings: "'opsz' 32",
            }}
          >
            {index}
          </p>
        </div>
        <div className=" flex items-center h-[19px]">
          <p
            className="flex"
            style={{
              color: "#414141",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "19px",
              fontVariationSettings: "'opsz' 16",
            }}
          >
            {head}
          </p>
        </div>
      </Link>
    </div>
  );
};
