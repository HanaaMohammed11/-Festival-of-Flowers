import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function ToolCard() {
  const nav = useNavigate();
  const swiperSlideImgStyles = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  const notify = () => toast("تمت الإضافة");
  const itemsPerPage = 8;
  const tools = new Array(20).fill({ name: 'Tool', price: '$25' });

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  const totalPages = Math.ceil(tools.length / itemsPerPage);

  const currentTools = tools.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="mt-4 font-cairo pb-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-2 justify-center items-center">
        {currentTools.map((tool, index) => (
          <div
            key={index}
            className="w-full sm:w-48 md:w-56 p-2 sm:p-4 shadow-xl rounded-lg text-white font-cairo bg-[#316646] hover:bg-green-950/90"
          >
            <div className="h-32 sm:h-40 md:h-52 pb-2 sm:pb-5">
              <img
                src="https://th.bing.com/th/id/OIP.9AEiTMAIaUBw-DwHQUSrmQHaHa?rs=1&pid=ImgDetMain"
                alt={tool.name}
                className="rounded-lg mb-2 sm:mb-4"
                style={swiperSlideImgStyles}
              />
            </div>
            <div className="text-center my-1 sm:my-2">
              <p className="text-sm sm:text-base">{tool.name}</p>
              <p className="text-sm sm:text-base">{tool.price}</p>
            </div>
            <div className="flex gap-2 sm:gap-4 justify-center">
              <button
                onClick={notify}
                className="bg-green-800 text-white px-2 sm:px-4 rounded-full hover:bg-green-600 text-xs sm:text-sm"
              >
                اضف للسلة
              </button>
              <button
                onClick={() => nav("/detiles")}
                className="bg-green-600 text-white p-1 sm:p-2 rounded-full hover:bg-green-600 text-xs sm:text-sm"
              >
                التفاصيل
              </button>
            </div>
            <ToastContainer className="text-right mt-10" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-4">
          {/* زر السهم السابق */}
          <div
            className="flex justify-center gap-3 items-center hover:bg-gray-300 bg-gray-200 text-black px-4 lg:py-2 rounded-full disabled:opacity-50"
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaArrowAltCircleLeft color="#375744" />
          السابق
          </div>

          <p className="lg:px-4 py-2 lg:text-lg text-[#375744] font-semibold">
            {currentPage} / {totalPages}
          </p>

          {/* زر السهم التالي */}
          <div
            className="flex justify-center gap-3 items-center hover:bg-gray-300 bg-gray-200 text-black px-4 lg:py-2 rounded-full disabled:opacity-50"
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
           التالي
            <FaArrowAltCircleRight color="#375744" />
          </div>
        </div>
      </div>
    </div>
  );
}

