import { Pagination } from "flowbite-react";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function ToolCard() {
  const swiperSlideImgStyles = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const itemsPerPage = 8;
  const tools = new Array(20).fill({ name: 'Tool', price: '$25' }); 

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  const totalPages = Math.ceil(tools.length / itemsPerPage); 

  const currentTools = tools.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage); 

  return (
    <div className="mt-4 font-cairo ">
      <div className="lg:flex flex md:flex-row flex-wrap sm:flex  xs:flex-col xxs:flex-col mx-2 justify-center gap-4 items-center">
        {currentTools.map((tool, index) => (
          <div key={index} className="w-56  p-4  shadow-xl rounded-lg text-white font-cairo bg-[#316646] hover:bg-green-950/90">
            <div className="h-52 pb-5">
              <img
                src="https://th.bing.com/th/id/OIP.9AEiTMAIaUBw-DwHQUSrmQHaHa?rs=1&pid=ImgDetMain"
                alt={tool.name}
                className="rounded-lg mb-4"
                style={swiperSlideImgStyles}
              />
            </div>
            <div className="flex justify-between">
              <div>
                <p>{tool.name}</p>
                <p>{tool.price}</p>
              </div>
              <button className="bg-green-800 text-white px-2 rounded-full hover:bg-green-600 text-sm">
                اضف للسلة
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
  <div className="flex items-center gap-4">
    {/* زر السهم السابق */}
    <div className="flex justify-center gap-3 items-center hover:bg-gray-300 bg-gray-200 text-black px-4 py-2 rounded-full  disabled:opacity-50"       onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >    <FaArrowAltCircleLeft color="#375744" />

    <button
 
    >
     السابق
    </button>
    </div>

    <p className="px-4 py-2 text-lg text-[#375744] font-semibold">{currentPage} / {totalPages}</p>

    {/* زر السهم التالي */}
    <div className="flex justify-center gap-3 items-center hover:bg-gray-300 bg-gray-200 text-black px-4 py-2 rounded-full  disabled:opacity-50"       onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
    <button
      className="  "
    >
      التالي 

    </button>
    <FaArrowAltCircleRight color="#375744" />
    </div>
   
  </div>
</div>

    </div>
  );
}
