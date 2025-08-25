import Image from "next/image";
import React, { useEffect, useState } from "react";
import API_BASE_URL from "@/config/apiConfig";
import packageService from "@/services/pacakge-service";
// const FlowerShops = ({ set_Id, setModal }) => {
//   return (
//     <div className="desktop:h-[426px] mx-auto tablet:h-[450px] mobile:h-[430px] w-full flex flex-col mobile:justify-center desktop:justify-center items-center  bg-[#F8EDE3]"
//     style={{
//       boxShadow: '2.5px 2.5px 5px 0px #A6ABBD inset, -1.5px -1.5px 5px 0px #A6ABBDBF inset'
//     }}>
//       <div className="mx-auto h-[230px] mobile:flex-col mobile:items-center desktop:w-[800px] tablet:mt-[110px] tablet:w-[600px] mobile:max-w-[560.17px] mobile:w-full mobile:h-[286px] ">
//         <div
//           onClick={() => {
//             set_Id("16");
//             setModal(true);
//           }}
//           className="leading-[46.88px] cursor-pointer text-[28px] desktop:text-[40px] mobile:flex mobile:justify-center font-variation-customOpt40 text-[#1E2125]"
//         >
//           Cvetličarne
//         </div>

//         <div className="w-[600px] mt-[16px] mobile:max-w-[560.17px] mobile:w-full mobile:px-[30px]  text-[#414141] text-[16px] leading-[24px] font-variation-customOpt16">
//           <div>
//           Pregled lokalnih cvetličarn in dela njihove ponudbe. Pri njih lahko prevzamete brezplačna digitalna obvestila o pogrebu, sožalja, zahvale, enomesečnega Skrbnika.
//           </div>
//         </div>

//         <div
//           className="w-[97px] h-[47px] mt-[48px] mobile:mt-[32px] mobile:mx-auto mobile:w-[180px] text-[20px] rounded-lg text-[#1E2125] flex justify-center items-center
//                  shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] font-variation-customOpt20 leading-[23.44px]"
//         >
//           Odpri
//         </div>
//       </div>
//     </div>
//   );
// };

const FlowerShops = ({ setIsOpen, data, showShop }) => {
  useEffect(() => {
    if (data?.floristShops?.length > 0) {
      const firstShop = data.floristShops[0];
      setSelectedFloristShop(firstShop);
      getPackages(firstShop.companyId);
    }
  }, [data]);

  const [packages, setPackages] = useState([]);
  const [company, setCompany] = useState(null);
  const [selectedFloristShop, setSelectedFloristShop] = useState(null);

  const getPackages = async (companyId) => {
    try {
      const response = await packageService.getPackages(companyId);
      setPackages(response.packages);
      setCompany(response.company);
    } catch (error) {
      console.log(error);
    }
  };

  const changeSelectedFlorist = (shop) => {
    setSelectedFloristShop(shop);
    getPackages(shop.companyId);
  };

  return showShop ? (
    <div
      className="lg:h-[700px] md:h-[800px] mobile:h-[800px] w-full flex flex-col  justify-center  items-center  bg-[#F8EDE3] relative"
      style={{
        boxShadow:
          "2.5px 2.5px 5px 0px #A6ABBD inset, -1.5px -1.5px 5px 0px #A6ABBDBF inset",
      }}
    >
      <div className="mx-auto mobile:flex-col mobile:items-center desktop:w-[900px] lg:w-[750px] mobile:w-[370px] tablet:mt-[110px] mobile:mt-[110px] md:w-[650px]  mobile:px-[30px]  lg:mb-24 ">
        <div className="flex justify-between mobile:gap-[12px] lg:pt-[100px] ">
          <div className="leading-[46.88px] cursor-pointer text-[28px] desktop:text-[40px] font-variation-customOpt40 text-[#1E2125]  ">
            Cvetličarne
          </div>
          <img
            src="/memory_page_cross.png"
            alt="trbovlje"
            className="w-[50px] h-[50px]"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="text-[#0A85C2] text-[32px] mobile:text-[24px] leading-[24px] font-variation-customOpt16 mt-[18px] mobile:mt-[8px] md:mb-[40px] mobile:w-full mobile:mb-[50px]">
          {data?.city}
        </div>
      </div>
      <div className="lg:h-[664px] md:h-[880px] sm:h-[790px] w-full pt-[10px] pb-[10px] bg-[#F8EDE3]">
        <div className="  mx-auto mobile:w-[370px] md:w-[700px] lg:w-[700px] w-[400px] xl:w-[1150px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6     mobile:justify-center place-items-center items-end ">
          {/* Sponsor Card */}
          {data?.Company && (
            <div
              className="bg-[#36556C] lg:h-[230px] lg:w-[182px] md:h-[230px] md:w-[182px] h-[184px] w-[150px]      rounded-[8px] mobile:rounded-[2px] overflow-hidden relative flex flex-col items-center justify-center px-[12px] mobile:mb-5 md:mb-5 lg:mb-5 xl:mb-0 first-letter:"
              style={{
                boxShadow: "0px 50px 40px -40px rgba(60, 62, 65, 1)",
              }}
            >
              <div className="text-[#FF984E] mobile:text-[16px] text-[24px]  font-semibold  mobile:font-normal text-center">
                {data?.User.name}
              </div>
              <div className="text-[#E9EAF5] text-[14px] mt-[30px] text-center">
                {data?.city}
              </div>
              <div className="absolute bottom-[12px] right-[12px]">
                <img
                  src="/memory_demo/info.png"
                  alt="info"
                  className="w-[24px] h-[24px]"
                />
              </div>
            </div>
          )}

          {/* Cards (from cardImages) */}
          {data?.cardImages?.length > 0 &&
            data.cardImages.map((img, index) => (
              <div
                key={index}
                className="bg-white lg:w-[180px] lg:h-[160px] md:w-[195px] md:h-[160px] w-[150px] h-[130px]  lg:rounded-[8px] md:rounded-[8px] mobile:border mobile:border-[rgba(54,85,108,0.6)] flex flex-col items-center justify-center relative overflow-hidden  mobile:justify-end mobile:my-5 md:my-5 lg:my-5 xl:my-0 my-6 lg:mx-2"
                style={{
                  boxShadow: "0px 50px 40px -40px rgba(60, 62, 65, 1)",
                }}
              >
                <Image
                  src={`${API_BASE_URL}/${img}`}
                  alt={`Card ${index + 1}`}
                  width={120}
                  height={70}
                  className="w-[120px] h-[70px] object-contain mobile:w-[97px] mobile:h-[55px]"
                />
                <div className="text-[#6D778E] text-[13px] mt-[6px] mobile:bg-[#36556C] mobile:w-full mobile:text-white text-center mobile:py-2">
                  Spominska kartica {index + 1}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  ) : null;
};

export const FlowerShops2 = ({ setIsOpen, showShop }) => {
  return !showShop ? (
    <div
      className="h-[393px] mobile:h-[407px] w-full flex flex-col mobile:justify-center desktop:justify-center items-center  bg-[#F8EDE3] relative"
      style={{
        boxShadow:
          "2.5px 2.5px 5px 0px #A6ABBD inset, -1.5px -1.5px 5px 0px #A6ABBDBF inset",
      }}
    >
      <div className="mx-auto mobile:flex-col mobile:items-center desktop:w-[800px] tablet:mt-[110px] tablet:w-[600px] mobile:max-w-[560.17px] mobile:px-[30px] mobile:w-full">
        <div className="flex justify-between mobile:flex-col-reverse mobile:items-end mobile:gap-[12px]">
          <div className="leading-[46.88px] cursor-pointer text-[28px] desktop:text-[40px] mobile:flex mobile:justify-center font-variation-customOpt40 text-[#1E2125] mobile:w-full">
            Cvetličarne
          </div>
        </div>

        <div className="text-[#3C3E41] text-[16px] leading-[24px] mt-[16px] mobile:w-full mobile:text-center">
          Pregled lokalnih cvetličarn in dela njihove ponudbe. Pri njih lahko
          prevzamete brezplačna digitalna obvestila o pogrebu, sožalja, zahvale,
          enomesečnega Skrbnika.
        </div>

        <button
          className="text-[#1E2125] text-[20px] leading-[100%] font-[400] mt-[48px] py-[12px] px-[25px] rounded-[8px]"
          style={{
            background: "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
            boxShadow: "-3px -3px 7px 0px #FFFFFFB2, 3px 3px 3px 0px #C2C2C299",
          }}
          onClick={() => setIsOpen(true)}
        >
          Odpri
        </button>
      </div>
    </div>
  ) : null;
};

export default FlowerShops;
