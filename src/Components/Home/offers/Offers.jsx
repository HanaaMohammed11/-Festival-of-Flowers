import React from "react";
import bg from "../../../assets/header.jpg";

export default function Offers() {
  return (
    <div
      className="flex justify-center text-center items-center mt-10"
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 6), rgba(0, 100,10, .5)) ,url('${bg}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="font-cairo text-white p-10 ">
        <h1 className="text-3xl">🌿 خدمة متابعة النباتات </h1>
        <p className="font-semibold mt-10 lg:mx-44 md:mx-44">
          {" "}
          هل تحب نباتاتك ولكن تجد صعوبة في العناية بها بشكل مستمر؟ لدينا الحل!
          مع خدمة متابعة النباتات لدينا، يمكنك الآن الاستمتاع بنباتاتك دون القلق
          بشأن رعايتها.<br></br>
          <br></br> تعرف الان علي عروضنا
        </p>
        <button
    
          className=  "bg-green-700 font-cairo mt-10 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-green-600 text-sm sm:text-base"
        >
رؤية المزيد        </button>
      </div>
    </div>
  );
}
