import { MdOutlineGroups } from 'react-icons/md'
import img from '../../../../src/assets/137bccb794f09740dd1644a8ee3f98f4.jpg'
import { RiCustomerService2Fill, RiPlantLine } from 'react-icons/ri'
import { FaMoneyBillWave } from 'react-icons/fa6'
export default function About() {
  return (
    <>
    <div className="about lg:flex md:flex sm:flex xxs:flex-col xs:flex-col flex justify-center items-center pb-24 p-2">
      <div className='shadow-2xl lg:w-1/4 xl:w-1/4 xs:hidden '>
        <img src={img} alt="" className='w-full h-80  object-fill rounded-lg shadow-xl' />
      </div>

      <div className='font-cairo lg:w-1/2  xl:w-1/2 text-right  p-9'>
      <h1
              className={`lg:text-4xl md:text-3xl text-[#375840] sm:text-xl text-xl  mb-4 transform transition-all duration-700 
              
              }`}
            >
              من نحن ؟
            </h1>
            <p

  dir="rtl"
>
  في <span className="font-bold">Festival of Flowers</span>، نسعى إلى تعزيز علاقتك بالطبيعة من خلال منتجاتنا وخدماتنا. 
  نحن نؤمن بأن لمسات الطبيعة قادرة على إحياء روح المكان. 
  <br />
  دعنا نكون شريكك في تحويل كل يوم إلى مهرجان من الجمال والزهور. 🌿🌸
</p>

      </div>

    </div>
    <div className="font-cairo">
  <h1
    className={`lg:text-4xl md:text-3xl flex justify-center text-[#375840] sm:text-xl text-xl mb-4 transform transition-all duration-700`}
  >
    لماذا تختار خدماتنا 🌸 ؟ 
  </h1>

  <div className="flex flex-col lg:flex-row justify-center gap-5 mt-5 mx-8 mb-20">
  {/* العمود الأول */}
  <div className="flex flex-col justify-center gap-5 w-full lg:w-1/2">
    <div className="card1 bg-green-600/50 rounded-lg p-5 font-cairo text-center items-center w-full">
      <FaMoneyBillWave
        size={40}
        color="#ffff"
        className="flex items-center justify-center m-auto rounded-full p-2"
      />
      <h1 className="font-semibold pb-2 text-lg">أسعار تنافسية</h1>
      <p className="text-sm text-gray-700">
        نقدم لك أفضل قيمة مقابل المال، مع أسعار تنافسية تناسب الجميع. نحرص على تقديم جودة استثنائية بأسعار معقولة لنجعل خدماتنا في متناول الجميع.
      </p>
      <p className="text-sm text-gray-700 mt-2">
        مقارنة بالسوق، نضمن لك توفير التكاليف دون المساس بجودة المنتجات أو الخدمات المقدمة.
      </p>
    </div>

    <div className="card2 bg-green-600/50 rounded-lg p-5 font-cairo text-center items-center w-full">
      <RiPlantLine
        size={40}
        color="#ffff"
        className="flex items-center justify-center m-auto rounded-full p-2"
      />
      <h1 className="font-semibold pb-2 text-lg">نباتات عالية الجودة</h1>
      <p className="text-sm text-gray-700">
        نضمن حصولك على نباتات تنمو بعناية وفق أعلى معايير الجودة. نباتاتنا تأتي مباشرة من مزارع متخصصة لضمان تقديم منتجات مميزة وصحية.
      </p>
      <p className="text-sm text-gray-700 mt-2">
        سواء كنت تبحث عن نباتات داخلية أو خارجية، ستجد لدينا مجموعة متنوعة تناسب جميع احتياجاتك.
      </p>
    </div>
  </div>

  {/* العمود الثاني */}
  <div className="flex flex-col justify-center gap-5 w-full lg:w-1/2">
    <div className="card3 bg-green-600/50 rounded-lg p-5 font-cairo text-center items-center w-full">
      <RiCustomerService2Fill
        size={40}
        color="#ffff"
        className="flex items-center justify-center m-auto rounded-full p-2"
      />
      <h1 className="font-semibold pb-2 text-lg">خدمة عملاء مميزة</h1>
      <p className="text-sm text-gray-700">
        فريق خدمة العملاء الخاص بنا مدرب على أعلى مستوى لضمان استجابتك سريعاً وباحترافية. نحن هنا لخدمتك وتلبية جميع استفساراتك وحل أي مشكلات قد تواجهها.
      </p>
      <p className="text-sm text-gray-700 mt-2">
        نسعى دائماً لتحسين تجربتك وتقديم دعم على مدار الساعة لتحقيق رضاك الكامل.
      </p>
    </div>

    <div className="card4 bg-green-600/50 rounded-lg p-5 font-cairo text-center items-center w-full">
      <MdOutlineGroups
        size={40}
        color="#ffff"
        className="flex items-center justify-center m-auto rounded-full p-2"
      />
      <h1 className="font-semibold pb-2 text-lg">فريق عمل متخصص</h1>
      <p className="text-sm text-gray-700">
        يتمتع فريق عملنا بخبرة واسعة في مجاله، ويعمل دائماً لتقديم أفضل الحلول والخدمات. نحن نؤمن بأهمية التفاصيل الدقيقة لتلبية احتياجات عملائنا.
      </p>
      <p className="text-sm text-gray-700 mt-2">
        فريقنا على أتم استعداد لتقديم المشورة والإرشادات لضمان حصولك على أفضل النتائج.
      </p>
    </div>
  </div>
</div>

</div>

    </>
  )
}
