import { Card, FileInput, Label, Modal } from 'flowbite-react'
import React, { useState } from 'react'

export default function PricingCards() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='xl:flex lg:flex md:flex pb-24 sm:flex xs:flex-col xxs:flex-col  flex-wrap gap-5 mt-5 justify-center items-center font-cairo flex'>
        <div className='card1 shadow-xl'>
            <Card className='text-center flex justify-center items-center lg:w-80 w-64'>
              <h1 className='lg:text-6xl md:text-6xl sm:text-5xl xxs:text-4xl xs:text-4xl font-semibold text-[#375840]'>  200 <span className='text-sm '>EGP</span> </h1>
              <p className='text-xl'> 🌱 خطة شهرية</p>
              <p className='text-end  text-sm'>
              التذكير بالسقاية: نصائح عن كميات المياه المناسبة لكل نوع من النبات<br></br>
الرعاية الموسمية: توجيهات حول التسميد أو قص الأوراق الذابلة<br></br>
ملاحظات نمو النبات: نصائح لرصد علامات النمو غير الطبيعي مثل اصفرار الأوراق<br></br>
نصائح التنظيف: كيفية تنظيف الأوراق من الغبار لتحسين عملية التمثيل الضوئي<br></br>
              </p>
              <button onClick={() => setOpenModal(true)}
                        className=  "bg-green-700 font-cairo mt-10 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-green-600 text-sm sm:text-base"
>
                اشترك الان
              </button>
              <Modal  show={openModal} onClose={() => setOpenModal(false)} className='flex justify-center items-center text-center bg-green-950'>
        <Modal.Header className='text-right font-cairo text-[#375840] items-center flex justify-center'>الاشتراك في الباقة</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 font-cairo">
             للاشتراك في الباقة الشهرية يرجي دفع المبلغ علي محفظة فودافون كاش الي الرقم المرفق (+201090955882) ومن ثم ارفاق صورة باتمام عميلة التحويل ورفعها في حقل الادخال
            </p>
            <div className='flex lg:flex md:flex sm:flex xs:flex-col xxs:flex-col justify-center gap-5'>
            <div className="flex flex-col items-end space-y-2">
            <label htmlFor="Fullname" className='text-right font-cairo mx-4'>: الاسم رباعي</label>
         

            <input
                 id="Fullname"
          className="rounded-full w-52 h-7 pr-2  text-right border-2 bg-[#21863c2c] "
        />
        </div>
            <div className="flex flex-col items-end space-y-2">
            <label htmlFor="phone" className='text-right font-cairo mx-4'>: رقم الهاتف </label>
         

            <input
                 id="phone"
          className="rounded-full w-52 h-7 pr-2  text-right border-2 bg-[#21863c2c] "
        />
        </div>
         
        </div>
      
            <Label
        htmlFor="dropzone-file"
        className="flex h-52 w-52 m-auto cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
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
        </Modal.Body>
        <Modal.Footer>
          <button
                                  className=  "bg-green-700 font-cairo flex justify-center items-center text-white px-4 sm:px-6 py-2 rounded-full hover:bg-green-600 text-sm sm:text-base"

           onClick={() => setOpenModal(false)}>ارسال</button>
       
        </Modal.Footer>
      </Modal>
            
            </Card>

        </div>
        <div className='card2 shadow-xl'>
            <Card className='text-center flex justify-center items-center lg:w-80 w-64'>
              <h1 className='lg:text-6xl md:text-6xl sm:text-5xl xxs:text-4xl xs:text-4xl font-semibold text-[#375840]'>  300 <span className='text-sm '>EGP</span> </h1>
              <p className='text-xl'> 🌳 خطة سنوية</p>
              <p className='text-end  text-sm'>
              التذكير بالسقاية: نصائح عن كميات المياه المناسبة لكل نوع من النبات<br></br>
الرعاية الموسمية: توجيهات حول التسميد أو قص الأوراق الذابلة<br></br>
ملاحظات نمو النبات: نصائح لرصد علامات النمو غير الطبيعي مثل اصفرار الأوراق<br></br>
نصائح التنظيف: كيفية تنظيف الأوراق من الغبار لتحسين عملية التمثيل الضوئي<br></br>
              </p>
              <button onClick={() => setOpenModal(true)}
                        className=  "bg-green-700 font-cairo mt-10 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-green-600 text-sm sm:text-base"
>
                اشترك الان
              </button>
            
            </Card>
        </div>
        <div className='car3 shadow-xl'>
            <Card className='text-center flex justify-center items-center lg:w-80 w-64'>
              <h1 className='lg:text-6xl md:text-6xl sm:text-5xl xxs:text-4xl xs:text-4xl font-semibold text-[#375840]'>  0 <span className='text-sm '>EGP</span> </h1>
              <p className='text-xl'>  🌟  خطة مجانية</p>
              <p className='text-end  text-sm'>
              التذكير بالسقاية: نصائح عن كميات المياه المناسبة لكل نوع من النبات<br></br>
الرعاية الموسمية: توجيهات حول التسميد أو قص الأوراق الذابلة<br></br>
ملاحظات نمو النبات: نصائح لرصد علامات النمو غير الطبيعي مثل اصفرار الأوراق<br></br>
نصائح التنظيف: كيفية تنظيف الأوراق من الغبار لتحسين عملية التمثيل الضوئي<br></br>
              </p>
              <button
                        className=   "pointer-events-none bg-gray-100 font-cairo mt-10 text-gray-400 px-4 sm:px-6 py-2 rounded-full  text-sm sm:text-base"
>
                اشترك الان
              </button>
            
            </Card>

        </div>


    </div>
  )
}
