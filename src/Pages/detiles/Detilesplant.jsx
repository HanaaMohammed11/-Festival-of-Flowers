import plant from "../../../public/images.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles;
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
function Detilesplant(){
    
    
    return(<>
<div className="flex justify-between  container mx-14 mt-5 p-10">
 <div className="w-1/2">
<img  src={plant} alt=""width={500} />
<div className="mt-5 w-[83%] lg:h-20 sm:h-32">
<Swiper
        slidesPerView={3}
        spaceBetween={5}
        freeMode={true}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false, 
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="public/images.jpg" className="rounded-lg"/></SwiperSlide>
        <SwiperSlide><img src="public/images.jpg"className="rounded-lg"/></SwiperSlide>
        <SwiperSlide><img src="public/images.jpg"className="rounded-lg"/></SwiperSlide>
        <SwiperSlide><img src="public/images.jpg"className="rounded-lg"/></SwiperSlide>
      </Swiper>
      </div>
 </div>
 <div className="w-1/2 mt-5">
<h1 className="text-2xl font-semibold mb-3 "> Spider Plant</h1>
<h1 className="text-2xl font-semibold text-[#375744] mb-3">150.00 EL</h1>
<p className="text-sm ">Spider plant, Chlorophytum comosum, is one of the most common houseplants. 
  Spider plant, Chlorophytum comosum, is one of the most common and well-known of all houseplants. 
  It is especially popular with beginners, being easy to grow and propagate, tolerant of neglect,</p>
  <div className="mt-10 flex justify-around">
  <input type="number" className="w-14 border-2 border-[#375744]"/>
  <button type="button" className="w-26 border-2 border-[#375744] text-white bg-[#375744] rounded-xl p-2 hover:bg-white hover:text-[#375744]"> Add To Card</button>
  </div>
 </div>
    </div>
    </>)
}
export default Detilesplant;