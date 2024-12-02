import { useState } from 'react';
function Cart(){
    const [quantity, setQuantity] = useState(0); // الحالة لإدارة القيمة

    const increment = () => {
      setQuantity((prev) => prev + 1); // زيادة القيمة
    };
  
    const decrement = () => {
      setQuantity((prev) => (prev > 0 ? prev - 1 : 0)); // تقليل القيمة مع منع القيم السالبة
    };
  
    const handleChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setQuantity(value); // تحديث القيمة من الإدخال
      }
    };
    return(<>
    <div className=" p-5 m-5 mt-10 shadow-lg rounded-lg  bg-white">
    <h1 className="font-semibold text-3xl border-b-2 mb-5 pb-5">Cart</h1>
    <div className="border-b-2 mb-5 pb-5 flex justify-around">
<div className="flex justify-around">
    <img src="public/images.jpg" className="w-32 h-32 rounded-xl"/>
    <div>
    <h1 className="font-semibold text-xl pb-3">Spider Plant</h1>
    <div className='flex'>
    <h1 className="pb-3">200El</h1>
    <h1 className="pb-3">200El</h1>
    </div>
    <form className="max-w-xs mx-auto">
      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          onClick={decrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
          className="bg-gray-50 border-x-0 border-gray-300 h-8 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="999"
          required
        />
        <button
          type="button"
          onClick={increment}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
</div>
</div>
<div>
    <h1 className="font-semibold">200El</h1>
</div>
    </div>
    </div>
    </>)
}
export default Cart;