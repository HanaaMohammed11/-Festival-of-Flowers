import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";
import { RiCustomerService2Fill, RiPlantLine } from "react-icons/ri";

export default function FeaturesCards() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-5 mt-5">
      {/* أول صف من البطاقات */}
      <div className="flex lg:flex-row sm:flex-col justify-center gap-5 mb-5">
        <div className="card1 rounded-lg px-2 py-4 font-cairo text-center items-center  w-80 xs:w-52 m-auto">
          <FaMoneyBillWave
            size={40}
            color="#ffff"
            className="flex items-center justify-center m-auto bg-green-600 rounded-full p-2"
          />
          <h1 className="font-semibold pb-2">أسعار تنافسية</h1>
        </div>
        <div className="card2 rounded-lg px-2 py-4 font-cairo text-center items-center  w-80 xs:w-52 m-auto">
          <RiPlantLine
            size={40}
            color="#ffff"
            className="flex items-center justify-center m-auto bg-green-600 rounded-full p-2"
          />
          <h1 className="font-semibold pb-2">نباتات عالية الجودة</h1>
        </div>
      </div>

      {/* ثاني صف من البطاقات */}
      <div className="flex lg:flex-row sm:flex-col justify-center gap-5 mb-5">
        <div className="card3 rounded-lg px-2 py-4 font-cairo text-center items-center  w-80 xs:w-52 m-auto">
          <RiCustomerService2Fill
            size={40}
            color="#ffff"
            className="flex items-center justify-center m-auto bg-green-600 rounded-full p-2"
          />
          <h1 className="font-semibold p-2">خدمة عملاء مميزة</h1>
        </div>
        <div className="card4 rounded-lg px-2 py-4 font-cairo text-center items-center  w-80 xs:w-52 m-auto">
          <MdOutlineGroups
            size={40}
            color="#ffff"
            className="flex items-center justify-center m-auto bg-green-600 rounded-full p-2"
          />
          <h1 className="font-semibold p-2">فريق عمل متخصص</h1>
        </div>
      </div>
    </div>
  );
}
