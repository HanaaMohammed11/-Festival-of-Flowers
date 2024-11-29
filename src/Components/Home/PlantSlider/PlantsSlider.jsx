import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import slide_img from '../../../assets/plant3.jpg';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import hero from "../../../assets/ab61497a-3d00-4508-82f9-69f34d3596b9.png";
import leves from "../../../assets/59a36e7ff3603bd4b72de0ac45944418-removebg-preview.png";
import { useEffect, useRef, useState } from 'react';


export default function PlantsSlider() {
  const nav = useNavigate();


 
  const swiperSlideImgStyles = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); }
        //    else {
        //   setIsVisible(false); 
        // }
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
    <div      ref={sectionRef} className={`plantscontainer  font-cairo text-[#375840] relative text-center lg:mt-28 md:mt-28 sm:mt-6 mt-6  ${isVisible ? "animate-fadeInUp" : "opacity-0" } transition-opacity duration-500`}>
     
     <h1  className={`lg:text-4xl md:text-3xl sm:text-xl text-xl transform transition-all mb-10  duration-700
        
        `}>
 🌱  نباتاتنا         </h1>   

  {/* Controls */}
      {/* <div className="flex justify-between items-center px-10 z-20">
        <div className="flex justify-between">
          <div className="swiper-prev cursor-pointer mr-4 text-green-600 hover:text-green-800 text-3xl">
            <FaArrowAltCircleLeft />
          </div>

          <div className="swiper-next cursor-pointer text-green-600 hover:text-green-800 text-3xl">
            <FaArrowAltCircleRight />
          </div>
        </div>

      
      </div> */}

      {/* Swiper */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        loop={true}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-full max-w-5xl"
        style={swiperStyles}
      >
        
        {/* Slides */}
        {[...Array(5)].map((_, index) => (
          <SwiperSlide
            key={index}
            className="tranding-slide"
            style={{ background: 'transparent' }}          >
            <div className="w-64 bg-white  p-4  shadow-lg rounded-lg hover:text-black hover:bg-green-950/80">
              <div className="h-52 pb-5">
                <img
                  src={slide_img}
                  alt={`Plant ${index}`}
                  className="rounded-lg mb-4"
                  style={swiperSlideImgStyles} 
                />
              </div>
              <p className="font-semibold">Plant {index + 1}</p>
              <p className="text-green-600 font-semibold hover:text-black">$25</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <img
        src={leves}
        alt=""
        className="w-16 absolute top-0 lg:right-52  sm:right-0  right-0   z-0 md:w-16 lg:w-16 xl:w-16"
        style={{
          filter: "drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.9))",
        }}
      />
      <button
          onClick={() => nav('/plants')}
          className=  "bg-green-700 font-cairo mt-10 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-green-600 text-sm sm:text-base"
        >
رؤية المزيد        </button>
<img
        src={leves}
        alt=""
        className="w-5 absolute top-64    z-0 md:w-16 lg:w-16 xl:w-16"
        style={{
          filter: "drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.9))",
        }}
      />
      {/* <img
        src={leves}
        alt=""
        className="w-5 absolute top-96 right-20    z-0 md:w-16 lg:w-16 xl:w-16"
        style={{
          filter: "drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.9))",
        }}
      /> */}
    </div>
  );
}
