import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "نبات", price: 437, quantity: 4, image: "public/pNug7bBksRVsL54EEE5Wu9.jpg" },
    { id: 2, name: "نبات", price: 945, quantity: 2, image: "public/pNug7bBksRVsL54EEE5Wu9.jpg" },
    { id: 3, name: "نبات", price: 597, quantity: 7, image: "public/pNug7bBksRVsL54EEE5Wu9.jpg" },
    { id: 4, name: "نبات", price: 597, quantity: 7, image: "public/pNug7bBksRVsL54EEE5Wu9.jpg" },
    { id: 5, name: "نبات", price: 597, quantity: 7, image: "public/pNug7bBksRVsL54EEE5Wu9.jpg" },
    { id: 6, name: "نبات", price: 597, quantity: 7, image: "public/pNug7bBksRVsL54EEE5Wu9.jpg" },
  ]);

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <main dir="rtl" className="container mx-auto py-8 px-4">
      <h2 className="lg:text-4xl xs:text-2xl font-bold mb-20 mt-5">
        سلة التسوق
      </h2>
      <div className="lg:grid grid-cols-3 gap-6">
        {/* عناصر السلة */}
        <div className="col-span-2 p-4 border shadow-2xl xs:mb-10 border-[#375744] rounded">
          <table className="w-full text-right">
            <thead className="border-b border-[#375744] pb-5">
              <tr>
                <th>المنتج</th>
                <th>الكمية</th>
                <th>الإجمالي</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b space-y-4 border-[#375744]">
                  <td className="py-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    {item.name}
                  </td>
                  <td>
                    <div className="flex items-center">
                      <button
                        className="px-2 bg-gray-200 rounded"
                        onClick={() => decrement(item.id)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="px-2 bg-gray-200 rounded"
                        onClick={() => increment(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      <MdDelete size={30} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="mt-4 px-4 py-2 border-2 border-[#375744] text-white bg-[#375744] rounded-md hover:bg-white hover:text-[#375744]">
            <Link to='/plants'>إضافة منتجات</Link>
          </button>
        </div>

        {/* ملخص الطلب */}
        <div className="p-4 border shadow-2xl h-[60vh] border-[#375744] rounded">
          <h3 className="font-bold mb-4">ملخص الطلب</h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="كود الخصم"
              className="w-full border rounded px-2 py-1"
            />
            <button className="mt-2 px-4 py-2 bg-gray-300 rounded">تطبيق</button>
          </div>
          <ul>
            <li>الإجمالي الفرعي: {calculateTotal().toFixed(2)} Egp</li>
            <li>الخصم: -100 Egp</li>
            <li>رسوم التوصيل: 50 Egp</li>
          </ul>
          <div className="mt-4 font-bold text-[#375744]">
            الإجمالي النهائي: ${(calculateTotal() - 100 + 50).toFixed(2)} Egp
          </div>
          <button className="mt-4 px-4 py-2 border-2 border-[#375744] text-white bg-[#375744] rounded-md hover:bg-white hover:text-[#375744] w-full">
            إتمام الشراء الآن
          </button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
