import head from "../../../public/2c3505263b85e142862cc48ca141ad64.jpg";
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
 <div  className="relative w-full lg:h-[35vh] xs:h-[20vh] md:h-[25vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${head})`,
        }}>
      <h1 className="text-center lg:text-6xl xs:text-3xl md:text-4xl text-white xs:pt-10 lg:pt-12">زين بيتك بنباتتنا</h1>
 </div>
 <div className="bg-zinc-300 h-[10vh] flex justify-center">
 <div className="relative pt-5 lg:w-[30%] xs:w-[60%] ">
  <input 
    className="rounded-lg  w-full  lg:h-7  lg:pl-2 text-right " 
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