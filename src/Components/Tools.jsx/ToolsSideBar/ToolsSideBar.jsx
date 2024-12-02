import { useState } from "react";
import ToolCard from "../ToolCard/ToolCard";
import { CiSearch } from "react-icons/ci";

function ToolsSideBar() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="font-cairo ">
      <div className="relative pt-5 w-[30%] ml-2 ">
        <input
          className="rounded-full w-52 h-7 pr-2  text-right border-2 border-green-900 "
          placeholder="...بحث"
        />
        <span className="absolute left-5 top-9 transform -translate-y-1/2 text-gray-500">
          <CiSearch />
        </span>
      </div>
      <div className="flex-col md:flex-row sm:flex xxs:flex-col xs:flex-col lg:flex-row  ">
        {/* Fixed Sidebar */}
        <div className="w-[20%]  z-10 lg:right-0 xs:right-20 xxs:right-32  md:right-0 p-5">
          <div>
            <h1 className="font-semibold mb-5 text-right lg:text-xl md:text-xl sm:text-md text-md lg:block md:block sm:hidden hidden xl:block">
              التصنيفات
            </h1>

            {/* Dropdown for small screens */}
            <div className="sm:block md:hidden xs:block xxs:block hidden right-1 lg:hidden ">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className=" p-1 bg-[#375744] text-right text-white rounded-lg focus:outline-none"
              >
                <option value="" disabled>
                  اختر التصنيف
                </option>
                <option value="fertilizers">اسمدة</option>
                <option value="pots">اصص</option>
                <option value="protection-tools">أدوات الحماية</option>
                <option value="irrigation-tools">أدوات الري</option>
                <option value="digging-tools">أدوات الحفر</option>
                <option value="pruning-tools">أدوات التقليم</option>
              </select>
            </div>

            {/* List for larger screens */}
            <ul className="space-y-2 sm:hidden xs:hidden xxs:hidden md:block lg:block">
              <li className="flex justify-between items-center bg-[#375744] dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-lg cursor-pointer transition-all duration-300">
                <button className="flex justify-between w-full">
                  <span className="text-white dark:text-gray-300">20</span>
                  <span className="text-white dark:text-white font-medium">
                    اسمدة
                  </span>
                </button>
              </li>
              <li className="flex justify-between items-center bg-[#375744] dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-lg cursor-pointer transition-all duration-300">
                <button className="flex justify-between w-full">
                  <span className="text-white dark:text-gray-300">60</span>
                  <span className="text-white dark:text-white font-medium">
                    اصص
                  </span>
                </button>
              </li>
              <li className="flex justify-between items-center bg-[#375744] dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-lg cursor-pointer transition-all duration-300">
                <button className="flex justify-between w-full">
                  <span className="text-white dark:text-gray-300">70</span>
                  <span className="text-white dark:text-white font-medium">
                    أدوات الحماية
                  </span>
                </button>
              </li>
              <li className="flex justify-between items-center bg-[#375744] dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-lg cursor-pointer transition-all duration-300">
                <button className="flex justify-between w-full">
                  <span className="text-white dark:text-gray-300">10</span>
                  <span className="text-white dark:text-white font-medium">
                    أدوات الري
                  </span>
                </button>
              </li>
              <li className="flex justify-between items-center bg-[#375744] dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-lg cursor-pointer transition-all duration-300">
                <button className="flex justify-between w-full">
                  <span className="text-white dark:text-gray-300">40</span>
                  <span className="text-white dark:text-white font-medium">
                    أدوات الحفر
                  </span>
                </button>
              </li>
              <li className="flex justify-between items-center bg-[#375744] dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-lg cursor-pointer transition-all duration-300">
                <button className="flex justify-between w-full">
                  <span className="text-white dark:text-gray-300">40</span>
                  <span className="text-white dark:text-white font-medium">
                    أدوات التقليم
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-[80%] md:w-[75%] flex justify-center  items-center">
          <ToolCard />
        </div>
      </div>
    </div>
  );
}

export default ToolsSideBar;
