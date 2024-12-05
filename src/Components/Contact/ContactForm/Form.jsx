import {  Textarea } from 'flowbite-react'

export default function Form() {
  return (
    <div className=' p-4 bg-[#1bc24827] border-emerald-200 border-2 rounded-lg shadow-xl flex justify-center items-center  '>
        <div
        >



<div className='flex lg:flex md:flex sm:flex xs:flex-col xxs:flex-col gap-7'>

<div className="flex flex-col items-end space-y-2">
  <label htmlFor="phone" className="font-cairo text-[#375840]">
   : رقم الهاتف
  </label>
  <input
    id="phone"
    className="rounded-full bg-[#21863c2c] p-2 w-52 text-right focus:outline-none"
  
  />
</div>
       
<div className="flex flex-col items-end space-y-2">
  <label htmlFor="fullName" className="font-cairo text-[#375840]">
   : الاسم رباعي
  </label>
  <input
    id="fullName"
    className="rounded-full bg-[#21863c2c] p-2 w-52 text-right focus:outline-none"
  
  />
</div>


        </div>
        <div>
        <Textarea 
        placeholder='اكتب رسالتك ....'
className='rounded-lg bg-[#21863c2c] w-full mt-6 h-44 text-right'/>
<button
                                  className=  "bg-green-700 font-cairo flex justify-center items-center text-white w-full mt-6 px-4 sm:px-6 py-2 rounded-full hover:bg-green-600 text-sm sm:text-base"
>
ارسال
</button>
        </div>
        </div>
      

    </div>
  )
}
