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
  const [quantity, setQuantity] = useState(0); // الحالة لإدارة القيمة

  const increment = () => {
    setQuantity((prev) => prev + 1); // زيادة القيمة
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0)); // تقليل القيمة مع منع القيم السالبة
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value); // تحديث القيمة من الإدخال
    }
  };
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
  <div className="mt-10 flex justify-around w-[60%]">
  <form className="max-w-xs mx-auto">
      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          onClick={decrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          value={quantity}
          onChange={handleChange}
          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="999"
          required
        />
        <button
          type="button"
          onClick={increment}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </form>
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