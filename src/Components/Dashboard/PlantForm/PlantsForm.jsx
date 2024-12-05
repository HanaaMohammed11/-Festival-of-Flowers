import { FileInput, Label, Textarea } from "flowbite-react";
import { useState } from "react";

export default function PlantsForm() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="flex justify-center items-center w-full p-12">
      <div>
        <div className="flex w-full items-center justify-center  mb-3">
          <Label
            htmlFor="upload-file"
            className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
          >
            <FileInput id="upload-file" className="hidden" />

            <div className="flex flex-col items-center justify-center h-full w-full">
              <svg
                className="h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p>اضافة صورة</p>
            </div>
          </Label>
        </div>

        <div className="lg:flex md:flex sm:flex   gap-10">
          <div className="flex flex-col items-end space-y-2">
            <label htmlFor="name" className="font-cairo text-[#375840]">
              : تصنيف النبات حسب البيئة
            </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className=" p-2 bg-[#21863c2c] text-right text-gray-700 rounded-full focus:outline-none border-none"
            >
              <option value="" disabled>
                التصنيف حسب البيئة
              </option>
              <option value="Indoor "> النباتات الداخلية</option>
              <option value="Outdoor">النباتات الخارجية</option>
            </select>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <label htmlFor="name" className="font-cairo text-[#375840]">
              : تصنيف النبات حسب النمو
            </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className=" p-2 bg-[#21863c2c] text-right text-gray-700 rounded-full focus:outline-none border-none"
            >
              <option value="" disabled>
                التصنيف حسب النمو
              </option>
              <option value="Indoor "> اشجار</option>
              <option value="Outdoor"> شجيرات</option>
              <option value="Outdoor"> ازهار</option>

              <option value="Outdoor"> النباتات المتسلقة</option>
              <option value="Outdoor"> النباتات الزاحفة</option>
            </select>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <label htmlFor="name" className="font-cairo text-[#375840]">
              :تصنيف النبات حسب الاستخدام
            </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className=" p-2 bg-[#21863c2c] text-right text-gray-700 rounded-full focus:outline-none border-none"
            >
              <option value="" disabled>
                التصنيف حسب الاستخدام
              </option>
              <option value="Aromatic"> النباتات العطرية </option>
              <option value="Medicinal">النباتات الطبية</option>
              <option value="Ornamental">نباتات الزينة</option>
              <option value="Vegetables">خضر</option>
              <option value="Fruits">فاكهة</option>
              <option value="Grains">حبوب</option>
            </select>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <label htmlFor="name" className="font-cairo text-[#375840]">
              : اسم النبات
            </label>
            <input
              id="name"
              className="rounded-full bg-[#21863c2c] p-2 w-52 text-right focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2 mt-5">
          <label htmlFor="name" className="font-cairo text-[#375840]">
            : وصف النبات
          </label>

          <Textarea
            placeholder="وصف النبات  ...."
            className="rounded-lg bg-[#21863c2c] w-full mt-6 h-44 text-right"
          />
        </div>

        <div className="flex flex-col items-end space-y-2 mt-5">
          <h1 className="font-semibold text-xl">الاحتياجات البيئية</h1>
          <div className="lg:flex md:flex sm:flex   gap-10">
            <div className="flex flex-col items-end space-y-2">
              <label htmlFor="name" className="font-cairo text-[#375840]">
                : الاسمدة
              </label>
              <input
                id="name"
                className="rounded-full bg-[#21863c2c] p-2 w-52 text-right focus:outline-none"
              />
            </div>
            <div className="flex flex-col items-end space-y-2">
              <label htmlFor="name" className="font-cairo text-[#375840]">
                : الري
              </label>
              <input
                id="name"
                className="rounded-full bg-[#21863c2c] p-2 w-52 text-right focus:outline-none"
              />
            </div>

            <div className="flex flex-col items-end space-y-2">
              <label htmlFor="name" className="font-cairo text-[#375840]">
                : الضوء
              </label>
              <input
                id="name"
                className="rounded-full bg-[#21863c2c] p-2 w-52 text-right focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2 mt-5">
          <h1 className="font-semibold text-xl"> المواصفات</h1>
          <div className="lg:flex md:flex sm:flex   gap-10">
            <div className="flex flex-col items-end space-y-2">
              <label htmlFor="name" className="font-cairo text-[#375840]">
                :سعر النبات
              </label>
              <input
                id="name"
                className="rounded-full bg-[#21863c2c] p-2 w-52 text-right focus:outline-none"
              />
            </div>
            <div className="flex flex-col items-end space-y-2">
              <label htmlFor="name" className="font-cairo text-[#375840]">
                : الكمية المتوفرة
              </label>
              <input
                id="name"
                className="rounded-full bg-[#21863c2c] p-2 w-52 text-right focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-green-700 font-cairo  text-white w-52 mt-6 px-4 sm:px-6 py-2 rounded-full hover:bg-green-600 text-sm sm:text-base">
            اضافة
          </button>
        </div>
      </div>
    </div>
  );
}
