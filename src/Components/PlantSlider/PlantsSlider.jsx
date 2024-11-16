import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import slide_img from './../../assets/plant3.jpg';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function PlantsSlider() {

  const nav=useNavigate()
  return (
    <div className="plantscontainer relative text-center my-44 h-[500px]">
      <h1 className="section-heading text-5xl mb-8">Our Plants</h1>

      {/* Controls */}
      <div className="  flex justify-between items-center px-10 z-20">
        {/* Previous Button */}
        <div className='flex justify-between'>
        <div className="swiper-prev cursor-pointer mr-4 text-green-600 hover:text-green-800 text-3xl">
          <FaArrowAltCircleLeft />
        </div>


        {/* Next Button */}
        <div className="swiper-next cursor-pointer text-green-600 hover:text-green-800 text-3xl">
          <FaArrowAltCircleRight />
        </div>
        </div>
     

        
        {/* More Button */}
        <button onClick={()=>nav("/plants")} className="bg-green-700 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-green-600 text-sm sm:text-base">
              See More
            </button>
      </div>

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
      >
        {/* Slides */}
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} className="tranding-slide">
            <div className="w-64 h-72 p-4 bg-white shadow-lg rounded-lg hover:text-black hover:bg-green-950/80">
              <div className="h-52 pb-5">
                <img src={slide_img} alt={`Plant ${index}`} className="rounded-lg mb-4" />
              </div>
              <p className="font-semibold">Plant {index + 1}</p>
              <p className="text-green-600 font-semibold hover:text-black">$25</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="swiper-pagination mt-16"></div> */}
    </div>
  );
}
