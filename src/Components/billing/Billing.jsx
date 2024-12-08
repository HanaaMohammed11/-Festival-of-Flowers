import { useState } from "react";
import {  FileInput, Label } from 'flowbite-react'
function Billing() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <>
      <main dir="rtl" className="container mx-auto py-8 px-4 font-cairo mb-10">
        <h1 className="text-[#375840] mb-5 lg:text-4xl md:text-3xl sm:text-xl xs:text-2xl transform transition-all duration-700">
          تفاصيل فاتورة
        </h1>
        <div className="lg:mt-20 lg:flex justify-between">
          {/* Form */}
          <form className="lg:w-1/2">
            <div className="lg:flex justify-between">
              <div className="xs:mt-3">
                <label className="block pb-3">
                  الاسم الأول <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-2xl bg-[#21863c2c] p-1 xs:w-full lg:w-60 text-right"
                  required
                />
              </div>
              <div className="xs:mt-3">
                <label className="block pb-3">
                  الاسم الثاني <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-2xl bg-[#21863c2c] p-1 xs:w-full lg:w-60 text-right"
                  required
                />
              </div>
            </div>
            <div className="lg:flex justify-between mt-5">
              <div className="xs:mt-3">
                <label className="block pb-3">
                  المدينة <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-2xl bg-[#21863c2c] p-1 lg:w-60 xs:w-full text-right"
                  required
                />
              </div>
              <div className="xs:mt-3">
                <label className="block pb-3">
                  العنوان <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-2xl bg-[#21863c2c] p-1 lg:w-60 xs:w-full text-right"
                  required
                />
              </div>
            </div>
            <div className="lg:flex justify-between mt-5">
              <div className="xs:mt-3">
                <label className="block pb-3">
                  رقم التلفون <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-2xl bg-[#21863c2c] p-1 lg:w-60 xs:w-full text-right"
                  required
                />
              </div>
              <div className="xs:mt-3">
                <label className="block pb-3">
                  البريد الإلكتروني <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-2xl bg-[#21863c2c] p-1 lg:w-60 xs:w-full text-right"
                  required
                />
              </div>
            </div>
            <label className="block pb-3 pt-5">
              ملاحظات الطلب
            </label>
            <textarea className="rounded-2xl bg-[#21863c2c] p-1 xs:w-full lg:w-80 text-right border-none" />
          </form>

          {/* Order Summary */}
          <div className="lg:w-[40%] xs:mt-8">
            <h1 className="text-[#375840] text-2xl">طلبك</h1>
            <div className="mt-5">
              <li className="flex justify-between items-center p-2 rounded-lg">
                <span className="text-black text-lg dark:text-white">المجموع</span>
                <span className="text-black text-lg dark:text-gray-300">1160</span>
              </li>
            </div>
            <div className="border-b-2 border-[#21863c2c]">
              <li className="flex justify-between items-center p-2 rounded-lg">
                <span className="text-black text-lg dark:text-white">الشحن</span>
                <span className="text-black text-lg dark:text-gray-300">20</span>
              </li>
            </div>
            <div className="mt-3">
              <li className="flex justify-between items-center p-2 rounded-lg">
                <span className="text-black text-lg dark:text-white">الإجمالي</span>
                <span className="text-black text-lg dark:text-gray-300">1180</span>
              </li>
            </div>

            {/* Payment Method */}
            <div className="mt-20">
              <form>
                <div className="mb-5">
                  <input
                    type="radio"
                    id="cash"
                    name="Payment"
                    value="cash"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="pb-3">الدفع عند الاستلام</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="online"
                    name="Payment"
                    value="online"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="pb-3">الدفع فودافون كاش</label>
                </div>
              </form>
            </div>

            {/* Vodafone Cash Card */}
            {paymentMethod === "online" && (
             <div className="mt-5 bg-[#f3f4f6] p-2 rounded-lg shadow-md">
             <Label
               htmlFor="dropzone-file"
               className="flex h-40 w-40 m-auto cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
             >
               <div className="flex flex-col items-center justify-center pb-4 pt-4">
                 <svg
                   className="mb-3 h-6 w-6 text-gray-500 dark:text-gray-400"
                   aria-hidden="true"
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
                 <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                   <span className="font-semibold">اضغط لارسال الصور</span>
                 </p>
               </div>
               <FileInput id="dropzone-file" className="hidden" />
             </Label>
           </div>
           
            )}

            <button className="mt-10 px-4 py-2 border-2 border-[#375744] text-white bg-[#375744] rounded-md hover:bg-white hover:text-[#375744]">
              تأكيد الطلب
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Billing;
