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
import Cards from "../../Components/cards/Cards";
function Plants (){
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
    return(
    <>
 <div  className="relative w-full h-[35vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${head})`,
        }}>
      <h1 className="text-center text-6xl text-white pt-12">Shop Products</h1>
 </div>
 <div className="bg-zinc-300 h-[10vh] flex justify-center">
 <div className="relative pt-5 w-[20%] pl-5">
  <input 
    className="rounded-lg w-full h-7 pl-2 " 
    placeholder="Search..."
  />
  <span className="absolute right-5 top-9 transform -translate-y-1/2 text-gray-500">
  <CiSearch />
  </span>
</div>
<div className="flex items-center space-x-0 w-[20%] ml-96">
  <div>
    <Label htmlFor="countries" value="Sort By" />
  </div>
  <select id="countries" required className="w-0 bg-transparent border-none cursor-pointer">
    <option>20-50 Price</option>
    <option>50-100 Price</option>
    <option>100-150 Price</option>
    <option>150-200 Price</option>
  </select>
</div>
 </div>
 <div className="flex justify-between mt-20 container lg:mx-10 border-b-2 pb-5" >
  <div className='lg:w-[20%] sm:w-[30%] sm:ml-5'> 
    <div>
      <h1 className="text-2xl font-bold mb-5">All Categories</h1>
      <ul className="flex border-b-2 pb-5">
        <div>
        <li>Alpines </li>
        <li>Cacti and succulents</li>
        <li>Ferns</li>
        <li>Aquatic and bog </li>
        <li>Trees</li>
        <li>Alpines </li>
        <li>Cacti and succulents</li>
        <li>Ferns</li>
        <li>Aquatic and bog </li>
        <li>Trees</li>
        </div>
        <div className="ml-20">
        <li>20 </li>
        <li>60</li>
        <li>70</li>
        <li>10</li>
        <li>40</li>
        <li>20 </li>
        <li>60</li>
        <li>70</li>
        <li>10</li>
        <li>40</li>
        </div>
      </ul>
      <div className="border-b-2 pb-5">
        <div className="mb-1 block mt-5">
          <Label htmlFor="sm-range" value="Fillter By Price" className="font-bold text-base"/>
        </div>
        <RangeSlider id="sm-range" sizing="sm" />
        <div className="flex justify-between">
        <p>0</p>
        <p>500</p>
        </div>
      </div>
      <div className="mt-5 border-b-2 pb-10">
        <h1 className="font-bold text-base mb-10">Featured Products</h1>
        <div className="flex justify-around mb-5 shadow-lg rounded-lg p-4 bg-white ">
        <div> 
          <img src="public/1603744971592.webp"className=" rounded-full" width={90}/>
        </div>
        <div>
          <h1>plant1</h1>
          <h1>200 El</h1>
        </div>
        </div>
        <div className="flex justify-around mb-10 shadow-lg rounded-lg p-4 bg-white">
        <div>
          <img src="public/images.jpg"className=" rounded-full" width={100}/>
        </div>
        <div>
          <h1>plant1</h1>
          <h1>200 El</h1>
        </div>
        </div>
        <div className="flex justify-around mb-10 shadow-lg rounded-lg p-4 bg-white">
        <div>
          <img src="public/pNug7bBksRVsL54EEE5Wu9.jpg"className=" rounded-full" width={100}/>
        </div>
        <div>
          <h1>plant1</h1>
          <h1>200 El</h1>
        </div>
        </div>
        <div className="flex justify-around shadow-lg rounded-lg p-4 bg-white ">
        <div>
          <img src="public/black-prince-coleus-coleus-scutellarioides-shutterstock-com_18251.jpg" className=" rounded-full" width={90}/>
        </div>
        <div>
          <h1>plant1</h1>
          <h1>200 El</h1>
        </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-base mb-10">Popular Tags</h1>
        <div className="flex flex-row flex-wrap gap-3"> 
        <p className="rounded-lg px-4 py-2 bg-lime-950 inline-block text-white">plant</p>
        <p className="rounded-lg px-4 py-2 bg-lime-950 inline-block text-white">plant</p>
        <p className="rounded-lg px-4 py-2 bg-lime-950 inline-block text-white">plant</p>
        <p className="rounded-lg px-4 py-2 bg-lime-950 inline-block text-white">plant</p>
        <p className="rounded-lg px-4 py-2 bg-lime-950 inline-block text-white">plant</p>
        <p className="rounded-lg px-4 py-2 bg-lime-950 inline-block text-white">plant</p>
        <p className="rounded-lg px-4 py-2 bg-lime-950 inline-block text-white">plant</p>
        <p className="rounded-lg px-4 py-2 bg-lime-950 inline-block text-white">plant</p>
        <p className="rounded-lg px-4 py-2 bg-lime-950 inline-block text-white">plant</p>
        </div>
      </div>
    </div>
  </div>
  <div className='lg:w-[70%] sm:w-[70%] sm:ml-32'>
  <Cards/>
  <div className="flex overflow-x-auto sm:justify-center ">
      <Pagination layout="navigation" currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
    </div>
  </div>
 </div>
 <div className="mt-5 mb-20 lg:h-52 sm:h-32"> 
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
        <SwiperSlide><img src="public/473DA96E-6FB7-4643-BE54-36753F79B647_1440x.webp"  /></SwiperSlide>
        <SwiperSlide><img src="public/images (2).jpg"/></SwiperSlide>
        <SwiperSlide><img src="public/istockphoto-1268045137-612x612.webp"/></SwiperSlide>
        <SwiperSlide><img src="public/thumbnail-9c50c6a0f6d332867fe6f724b543e9c1-1140x618-1.jpeg" /></SwiperSlide>
        <SwiperSlide><img src="public/nurserylive-combo-packs-plants-low-maintenance-indoor-plants-for-home-decoration-16969011855500_512x512.webp"  width={10}/></SwiperSlide>
        <SwiperSlide><img src="public/Lucious-plants-in-interior-design-1.jpeg" /></SwiperSlide>
        <SwiperSlide><img src="public/images (3).jpg"  /></SwiperSlide>
        <SwiperSlide><img src="public/GettyImages-1404287433.webp"  /></SwiperSlide>      
          <SwiperSlide><img src="public/images (4).jpg"  /></SwiperSlide>      
            <SwiperSlide><img src="public/plumeria-for-sale.webp"  /></SwiperSlide>      
          <SwiperSlide><img src="public/1527091860274.webp"  /></SwiperSlide>
      </Swiper>
 </div>
    </>)
}
export default Plants