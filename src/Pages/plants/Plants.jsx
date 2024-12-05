import head from "./../../assets/WhatsApp Image 2024-11-28 at 11.40.16 PM.jpeg";
import { CiSearch } from "react-icons/ci";
import { Label, RangeSlider} from "flowbite-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "flowbite-react";
import { useState } from "react";
// Import Swiper styles;
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
import Cards from "../../Components/Plants/cards/Cards";
function Plants (){
  const [currentPage, setCurrentPage] = useState(1);
  
  const onPageChange = (page) => setCurrentPage(page);
    return(
    <>
  <div  className=" w-full pt-9 bg-cover bg-center"
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, .7), rgba(0, 100,10, .5)) ,url('${head}')`,

        }}>
      <h1 className="text-center lg:text-4xl md:text-4xl sm:text-2xl text-2xl text-white  font-cairo "> النباتات</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none" fill="#ffff"  className="mt-5 "     style={{ transform: 'rotate(180deg)' }}

>
   <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"></path>
   <path className="elementor-shape-fill" d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"></path>
   <path className="elementor-shape-fill" d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"></path>
   <path className="elementor-shape-fill" d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"></path>
   <path className="elementor-shape-fill" d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"></path>
   <path className="elementor-shape-fill" d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"></path>
   <path className="elementor-shape-fill" d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"></path>
   <path className="elementor-shape-fill" d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"></path>
   <path className="elementor-shape-fill" d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"></path>
</svg>
 </div> 
 <div className=" h-[10vh] flex justify-center">
 <div className="relative pt-5 lg:w-[30%] xs:w-[60%] ">
  <input 
    className="rounded-full p-4 bg-[#21863c2c]  w-full  lg:h-7  lg:pl-2 text-right " 
    placeholder="بحث "
  />
  <span className="absolute lg:left-5 lg:top-9 xs:left-2 xs:top-8 transform -translate-y-1/2 text-gray-500">
  <CiSearch />
  </span>
</div>
 </div>
 <div className="flex justify-between lg:mt-20 container lg:mx-5 border-b-2 lg:pb-20 xs:pb-10" >
  <div className='lg:w-[20%] xs:hidden sm:w-[30%] sm:ml-5'> 
    <div>
    <div>
  <h1 className="text-2xl font-bold mb-5 text-right">التصنيفات</h1>
  <ul className="space-y-2">
    <li dir="rtl" className="flex justify-between items-center bg-[#375744] dark:bg-gray-700  dark:hover:bg-gray-600 p-2 rounded-lg cursor-pointer transition-all duration-300">
      <button className="flex justify-between w-full">
        <span className="text-white dark:text-white font-medium text-right">النباتات العشبيه</span>
        <span className="text-white dark:text-gray-300 text-left">20</span>
      </button>
    </li>
    <li dir="rtl" className="flex justify-between items-center bg-[#375744] dark:bg-gray-700  dark:hover:bg-gray-600 p-2 rounded-lg cursor-pointer transition-all duration-300">
      <button className="flex justify-between w-full">
        <span className="text-white dark:text-white font-medium">الشجيرات الصغيره</span>
        <span className="text-white dark:text-gray-300">60</span>
      </button>
    </li>
    <li dir="rtl" className="flex justify-between items-center bg-[#375744] dark:bg-gray-700  dark:hover:bg-gray-600 p-2 rounded-lg cursor-pointer transition-all duration-300">
      <button className="flex justify-between w-full">
        <span className="text-white dark:text-white font-medium">الاشجار</span>
        <span className="text-white dark:text-gray-300">70</span>
      </button>
    </li>
    <li  dir="rtl" className="flex justify-between items-center bg-[#375744] dark:bg-gray-700  dark:hover:bg-gray-600 p-2 rounded-lg cursor-pointer transition-all duration-300">
      <button className="flex justify-between w-full">
        <span className="text-white dark:text-white font-medium">النباتات المتسلقه</span>
        <span className="text-white dark:text-gray-300">10</span>
      </button>
    </li>
    <li dir="rtl" className="flex justify-between items-center bg-[#375744] dark:bg-gray-700  dark:hover:bg-gray-600 p-2 rounded-lg cursor-pointer transition-all duration-300">
      <button className="flex justify-between w-full">
        <span className="text-white dark:text-white font-medium">النباتات الزاحفه</span>
        <span className="text-white dark:text-gray-300">40</span>
      </button>
    </li>
  </ul>
</div>

      <div className="border-b-2 pb-5">
        <div dir="rtl" className="mb-1 block mt-5">
          <Label htmlFor="sm-range" value="تصفية حسب السعر" className="font-bold text-base "/>
        </div>
        <RangeSlider id="sm-range" sizing="sm" />
        <div   className="flex justify-between">
        <p>0</p>
        <p>500</p>
        </div>
      </div>
      <div dir="rtl" className="mt-5 ">
        <h1 className="font-bold text-base mb-5">المنتجات المميزة</h1>
        <div className="flex justify-between mb-5 shadow-lg rounded-lg p-4 bg-white ">
        <div dir="rtl" className="pt-3">
          <h1 className="text-right">نبات</h1>
          <h1 className="text-right"> 200  ج</h1>
        </div>
        <div> 
          <img src="public/1603744971592.webp"className=" rounded-full" width={90}/>
        </div>
        </div>
        <div className="flex justify-between mb-5 shadow-lg rounded-lg p-4 bg-white ">
        <div dir="rtl" className="pt-3">
          <h1 className="text-right">نبات</h1>
          <h1 className="text-right"> 200  ج</h1>
        </div>
        <div> 
          <img src="public/1603744971592.webp"className=" rounded-full" width={90}/>
        </div>
        </div>
        <div className="flex justify-between mb-5 shadow-lg rounded-lg p-4 bg-white ">
        <div dir="rtl" className="pt-3">
          <h1 className="text-right">نبات</h1>
          <h1 className="text-right"> 200  ج</h1>
        </div>
        <div> 
          <img src="public/1603744971592.webp"className=" rounded-full" width={90}/>
        </div>
        </div>
      
      </div>
      {/* <div dir="rtl" className="mt-5">
        <h1 className="font-bold text-base mb-5">كلمات اكثر بحثا</h1>
        <div className="flex flex-row flex-wrap gap-3"> 
        <p className="rounded-lg px-4 py-2 bg-[#375744] inline-block text-white">نبات</p>
        <p className="rounded-lg px-4 py-2 bg-[#375744] inline-block text-white">نبات</p>
        <p className="rounded-lg px-4 py-2 bg-[#375744] inline-block text-white">نبات</p>
        <p className="rounded-lg px-4 py-2 bg-[#375744] inline-block text-white">نبات</p>
        <p className="rounded-lg px-4 py-2 bg-[#375744] inline-block text-white">نبات</p>
        <p className="rounded-lg px-4 py-2 bg-[#375744] inline-block text-white">نبات</p>
        </div>
      </div> */}
    </div>
  </div>
  <div className='lg:w-[70%] xs:w-[50%] xs:ml-32'>
  <Cards/>
  </div>
 </div>
 <div className="mt-10 lg:h-52 sm:h-32 xs:h-24"> 
 <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false, 
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="public/473DA96E-6FB7-4643-BE54-36753F79B647_1440x.webp" className="rounded-lg"/></SwiperSlide>
        <SwiperSlide><img src="public/images (2).jpg"className="rounded-lg"/></SwiperSlide>
        <SwiperSlide><img src="public/istockphoto-1268045137-612x612.webp"className="rounded-lg"/></SwiperSlide>
        <SwiperSlide><img src="public/thumbnail-9c50c6a0f6d332867fe6f724b543e9c1-1140x618-1.jpeg" className="rounded-lg" /></SwiperSlide>
        <SwiperSlide><img src="public/nurserylive-combo-packs-plants-low-maintenance-indoor-plants-for-home-decoration-16969011855500_512x512.webp"   className="rounded-lg"/></SwiperSlide>
        <SwiperSlide><img src="public/Lucious-plants-in-interior-design-1.jpeg" className="rounded-lg"/></SwiperSlide>
        <SwiperSlide><img src="public/images (3).jpg" className="rounded-lg" /></SwiperSlide>
        <SwiperSlide><img src="public/GettyImages-1404287433.webp" className="rounded-lg" /></SwiperSlide>      
          <SwiperSlide><img src="public/images (4).jpg" className="rounded-lg" /></SwiperSlide>      
          <SwiperSlide><img src="public/plumeria-for-sale.webp" className="rounded-lg" /></SwiperSlide>      
          <SwiperSlide><img src="public/1527091860274.webp" className="rounded-lg" /></SwiperSlide>
      </Swiper>
 </div>
    </>)
}
export default Plants