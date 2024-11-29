import plant from "../../../public/images.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles;
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
import './styles.css';
import { useState } from 'react';
// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
function Detilesplant(){
  const [activeTab, setActiveTab] = useState('description');

    
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
 <div className="w-1/2 mt-20">
<h1 className="text-2xl font-semibold mb-3 "> Spider Plant</h1>
<h1 className="text-2xl font-semibold text-[#375744] mb-3">150.00 EL</h1>
<p className="text-sm ">Spider plant, Chlorophytum comosum, is one of the most common houseplants. 
  Spider plant, Chlorophytum comosum, is one of the most common and well-known of all houseplants. 
  It is especially popular with beginners, being easy to grow and propagate, tolerant of neglect,</p>
  <div className="mt-10 flex justify-around w-[40%]">
  <input type="number" className="w-14 border-2 rounded-md border-[#375744]"/>
  <button type="button" className="w-40 border-2 border-[#375744] text-white bg-[#375744] rounded-md p-2 hover:bg-white hover:text-[#375744]"><Link to="/cart">Add To Card</Link></button>
  </div>
 </div>
    </div>
    <div className="mt-20 mb-20">
      <div className="text-center">
        <button
          type="button"
          className={`w-40 ${activeTab === 'description' ? ' bg-[#375744] text-white rounded-md' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          type="button"
          className={`w-40 ${activeTab === 'reviews' ? ' bg-[#375744] text-white rounded-md' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>
      <div className="container ml-10 mt-10">
        {activeTab === 'description' ? (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
            reiciendis rem molestiae nesciunt assumenda ratione error maxime quaerat
            modi inventore neque voluptatibus facere blanditiis placeat? Cumque sed id
            possimus deleniti numquam officiis maiores ea totam tempore. Itaque atque
            maiores nam ipsum expedita provident, consectetur odit doloremque quidem
            iste nostrum labore!
          </p>
        ) : (
        <input className="border-2 border-[#375744] w-60"></input>
        )}
      </div>
    </div>

    </>)
}
export default Detilesplant;