import { Link } from "react-router-dom";
import slide_img from "../../../assets/plant3.jpg";
import React from "react";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cards() {
  const notify = () => toast("تمت الاضافه");
  const itemsPerPage = 6;
  const tools = new Array(25).fill({ name: 'نباتات', price:  '200  ج', description: "افضل واجمل نباتات تزين بها بيتك"}); 

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  const totalPages = Math.ceil(tools.length / itemsPerPage); 

  const currentTools = tools.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage); 
  return (
    <div className="mt-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {currentTools.map((tool, index) => (
        <div
        key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col" dir="rtl"
        >
          {/* الصورة */}
          <img
            src="public/pNug7bBksRVsL54EEE5Wu9.jpg"
            className="w-full h-48 object-cover"
          />
          {/* المحتوى */}
          <div className="p-4 flex flex-col flex-grow">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {tool.name}
            </h5>
            <p className="font-semibold text-gray-700 dark:text-gray-400 mt-2">
              {tool.price}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
              {tool.description}
            </p>
            <div className="flex justify-around items-center mt-4">
              <button className="text-lime-950 font-semibold">
                <Link to="/detiles">تفاصيل....</Link>
              </button>
              <button
                type="button"
                onClick={notify}
                className="w-32 border-2 border-[#375744] text-white bg-[#375744] rounded-md hover:bg-white hover:text-[#375744]"
              >
       اضف الى السله
              </button>
              <ToastContainer className={'text-right mt-10'}/>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-16">
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

export default Cards;
