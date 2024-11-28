import { useEffect, useRef, useState } from "react";
import leves from "../../../assets/59a36e7ff3603bd4b72de0ac45944418-removebg-preview.png";
import FeaturesCards from "../features/FeaturesCards";

export default function Aboutus() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); }
      },
      { threshold: .5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`text-center font-cairo relative ${
        isVisible ? "animate-fadeInUp" : "opacity-0"
      } transition-opacity duration-500`}
    >
      <div className="flex flex-col justify-center">
        {/* Positioning the first image */}
        <img
          src={leves}
          alt=""
          className="w-16 absolute top-0 lg:right-72 md:right-32 sm:right-0 right-0 z-0 md:w-20 lg:w-20 "
          style={{
            filter: "drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.9))",
          }}
        />
   <img
          src={leves}
          alt=""
          className="w-10 absolute lg:top-0 md:top-0 sm:top-10 top-10 left-10 z-0 md:w-20 lg:w-16 "
          style={{
            filter: "drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.9))",
          }}
        />
        <div className="flex flex-col sm:flex-col mx-4 lg:max-h-80">
          <div className="z-10 w-full px-4 text-[#375840]">
            <h1
              className={`text-4xl mb-7 transform transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
            >
              من نحن ؟
            </h1>

            <p
              className={`text-lg mt-4 transform transition-all mb-4 lg:mx-32 duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              في Festival of Flowers، نسعى إلى تعزيز علاقتك بالطبيعة من خلال
              منتجاتنا وخدماتنا، ونؤمن بأن لمسات الطبيعة قادرة على إحياء روح
              المكان.
              <br />
              دعنا نكون شريكك في تحويل كل يوم إلى مهرجان من الجمال والزهور.
              🌿🌸
            </p>
          </div>
        </div>

        {/* Positioning the second image */}
        {/* <img
          src={leves}
          alt=""
          className="w-16 absolute top-52 right-0 z-0 md:w-20 lg:w-20 xl:w-20"
          style={{
            filter: "drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.9))",
          }}
        /> */}
      </div>

      {/* Positioning the third image */}
      {/* <img
        src={leves}
        alt=""
        className="w-10 absolute top-64 left-10 z-0 md:w-12 lg:w-12 xl:w-12"
        style={{
          filter: "drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.9))",
        }}
      /> */}
      <FeaturesCards />
      {/* <img
        src={leves}
        alt=""
        className="w-5 absolute top-64   left-1/2 z-0 md:w-16 lg:w-16 xl:w-16"
        style={{
          filter: "drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.9))",
        }}
      /> */}
    </div>
  );
}
