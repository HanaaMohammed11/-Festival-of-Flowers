import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderTable = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null); 

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const orders = [
    {
      id: "#1632",
      name: "هناء محمد",
      address: "مصر القاهرة اسوان",
      date: "03 يوليو 2020",
      price: "EGP40.00",
      status: "قيد الانتظار",
    },
    {
      id: "#1633",
      name: "حياة ابو الحسن",
      address: "مصر القاهرة اسوان",
      date: "08 أغسطس 2020",
      price: "EGP39.00",
      status: "قيد الإرسال",
    },
    {
      id: "#133",
      name: "ابو الحسن",
      address: "مصر القاهرة اسوان",
      date: "08 أغسطس 2020",
      price: "EGP39.00",
      status: "مكتمل",
    },
  ];

  const [selectedStatus, setSelectedStatus] = useState("الكل");

  const statusClasses = {
    "قيد الانتظار": "text-yellow-500",
    "قيد الإرسال": "text-blue-500",
    "مكتمل": "text-green-500",
    "ملغي": "text-red-500",
  };

  const filteredOrders =
    selectedStatus === "الكل"
      ? orders
      : orders.filter((order) => order.status === selectedStatus);

  return (
    <div className="p-4 sm:p-6">
    <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
      {filteredOrders.length} طلبات تم العثور عليها
    </p>
    <div className="flex flex-wrap justify-start mb-4">
      {["الكل", "قيد الإرسال", "قيد الانتظار", "مكتمل"].map((status) => (
        <button
          key={status}
          onClick={() => setSelectedStatus(status)}
          className={`px-3 py-2 text-sm sm:px-4 sm:py-2 rounded-md mb-2 mr-2 ${
            selectedStatus === status
              ? "bg-[#375840] text-white"
              : "bg-gray-200"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  
    <div className="overflow-x-auto sm:overflow-visible">
      <table className="hidden sm:table min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 sm:px-6 sm:py-3 text-right text-gray-500 font-medium">
              #
            </th>
            <th className="px-3 py-2 sm:px-6 sm:py-3 text-right text-gray-500 font-medium">
              الاسم
            </th>
            <th className="px-3 py-2 sm:px-6 sm:py-3 text-right text-gray-500 font-medium">
              العنوان
            </th>
            <th className="px-3 py-2 sm:px-6 sm:py-3 text-right text-gray-500 font-medium">
              التاريخ
            </th>
            <th className="px-3 py-2 sm:px-6 sm:py-3 text-right text-gray-500 font-medium">
              السعر
            </th>
            <th className="px-3 py-2 sm:px-6 sm:py-3 text-right text-gray-500 font-medium">
              الحالة
            </th>
            <th className="px-3 py-2 sm:px-6 sm:py-3 text-right text-gray-500 font-medium">
              الإجراءات
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr
              key={index}
              className={`${
                order.status === "قيد الإرسال" ? "bg-[#21863c2c]" : "bg-white"
              }`}
            >
              <td className="px-3 py-2 sm:px-6 sm:py-4 text-gray-700">{order.id}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 text-gray-700">{order.name}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 text-gray-700">
                {order.address}
              </td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 text-gray-700">{order.date}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 text-gray-700">{order.price}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    statusClasses[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 text-gray-700 relative">
                <button
                  onClick={() => toggleDropdown(order.id)}
                  className="px-3 py-2 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  ...
                </button>
                {openDropdown === order.id && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md z-10">
                    <button
                      onClick={() => console.log(`حذف الطلب ${order.id}`)}
                      className="w-full px-4 py-2 text-right hover:bg-red-100 text-red-500"
                    >
                      حذف
                    </button>
                    <button
                      onClick={() => navigate(`/order`)}
                      className="w-full px-4 py-2 text-right hover:bg-gray-100"
                    >
                      التفاصيل
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <div className="sm:hidden">
        {filteredOrders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg p-4 mb-4"
          >
            <p className="text-gray-700 mb-2">
              <strong>الطلب:</strong> {order.id}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>الاسم:</strong> {order.name}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>العنوان:</strong> {order.address}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>التاريخ:</strong> {order.date}
            </p>
            <p className="text-gray-700 mb-2">
               {order.price} <strong> : السعر</strong>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>الحالة:</strong>{" "}
              <span className={statusClasses[order.status]}>{order.status}</span>
            </p>
            <div className="flex justify-between gap-6">
              <button
                onClick={() => console.log(`حذف الطلب ${order.id}`)}
                className="px-3 py-2 bg-red-100 text-red-500 rounded-md"
              >
                حذف
              </button>
              <button
                onClick={() => navigate(`/order`)}
                className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md"
              >
                التفاصيل
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  
  );
};

export default OrderTable;
