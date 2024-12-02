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
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Detilesplant(){
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(0); 
  const unitPrice = 200; 
  const [totalPrice, setTotalPrice] = useState(0); 

  const notify = () => toast("تمت الاضافه");
  const increment = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      setTotalPrice(newQuantity * unitPrice); // تحديث السعر الإجمالي
      return newQuantity;
    });
  };
  const decrement = () => {
    setQuantity((prev) => {
      const newQuantity = prev > 0 ? prev - 1 : 0;
      setTotalPrice(newQuantity * unitPrice); // تحديث السعر الإجمالي
      return newQuantity;
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value); // تحديث الكمية
      setTotalPrice(value * unitPrice); // تحديث السعر الإجمالي
    }
  };
    return(<>
<div  className=" lg:flex lg:justify-between  container lg:mx-14 mt-5 p-10">
 <div className="lg:w-1/2 xs:w-[100%]">
<img  src={plant} alt=""width={500} />
<div className="mt-5 lg:w-[83%] lg:h-20 sm:h-32">
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
 <div dir="rtl" className="lg:w-1/2 lg:mt-20 xs:mt-10 ">
<h1 className="lg:text-2xl xs:text-xl font-semibold mb-3 "> نبات العنكبوت</h1>
<h1 className="lg:text-2xl xs:text-lg font-semibold text-[#375744] mb-3">  {totalPrice} ج</h1>
<p className="lg:text-lg ">نبات العنكبوت، Chlorophytum comosum، هو أحد أكثر النباتات المنزلية شيوعًا. 
  نبات العنكبوت، Chlorophytum comosum، هو واحد من أكثر النباتات المنزلية شيوعًا والمعروفة. 
  تحظى بشعبية خاصة لدى المبتدئين، فهي سهلة النمو والتكاثر، وتتحمل الإهمال</p>
  <div className="mt-10 flex justify-around lg:w-[60%]">
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
  <button type="button" onClick={notify} className="w-40 border-2 border-[#375744] text-white bg-[#375744] rounded-md p-2 hover:bg-white hover:text-[#375744]">اضف الى السله</button>
  <ToastContainer className={'text-right mt-10'}/>
  </div>
 </div>
    </div>
    <div dir="rtl" className="lg:mt-20 xs:mt-14 mb-20">
      <div className=" text-center">
        <button
          type="button"
          className={`lg:w-40 xs:w-28 ${activeTab === 'description' ? ' bg-[#375744] text-white rounded-md' : ''}`}
          onClick={() => setActiveTab('description')}
        >
       وصف النبات
        </button>
        <button
          type="button"
          className={`lg:w-40 xs:w-28 ${activeTab === 'reviews' ? ' bg-[#375744] text-white rounded-md' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
        التعليقات
        </button>
      </div>
      <div className="mx-14 mt-10">
        {activeTab === 'description' ? (
           <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
           <h2 className="text-lg font-bold mb-4">   - نبتة العنكبوت</h2>
           <p>
             نبتة العنكبوت واسمها العلمي *كلوروفيتوم كوموسوم المخططة Chlorophytum Comosum*. وتسمى أيضاً عنكبوتية
             مخططة أو كلوروفيتوم مقلم. موطنها الأصلي جنوب أفريقيا، ولها سيقان صفراء زاحفة تظهر عليها عناقيد أزهار
             بيضاء صغيرة تنتج كل منها نباتاً جديداً نسخة من النبات الأم.
           </p>
           <p className="mt-4">
             إضافة لكونها نبتة مميزة الشكل، تعتبر نبتة كلوروفيتوم من النباتات التي تنقي الجو. ولذلك ينصح باستخدامها
             في المنزل أو بيئات العمل.
           </p>
           <h3 className="text-lg font-semibold mt-6">   -  العناية بنبات العنكبوت</h3>
           <p className="mt-2">
             المدى الحراري المثالي لنمو هذه الشجيرة بين 18 إلى 25 درجة مئوية. تحتاج إلى ضوء جيد داخل المنزل دون تعرض
             مباشر لأشعة الشمس إلا في الشتاء، مع ري غزير يقل في الشتاء.
           </p>
           <h3 className="text-lg font-semibold mt-6" >     -  تكاثر نبات العنكبوت</h3>
           <p className="mt-2">
             تتكاثر عن طريق فصل النباتات النامية (الناتجة من الأزهار) ووضعها في الماء حتى تنتج جذوراً ثم غرسها في
             التربة.
           </p>
         </div>
        ) : (
        <input className="border-2 border-[#375744] w-60"></input>
        )}
      </div>
    </div>

    </>)
}
export default Detilesplant;