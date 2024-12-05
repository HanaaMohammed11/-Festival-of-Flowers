import  { useState } from "react";


const OrderDetails = () => {


  const [order, setOrder] = useState({
    id: "#1632",
    name: "هناء محمد",
    order: "هناء ",
    address: "مصر القاهرة اسوان",
    date: "03 يوليو 2020",
    price: "EGP40.00",
    phone: "01090955882",
    email: "hann@",
    status: "قيد الانتظار",
  });

  const [newStatus, setNewStatus] = useState(order.status); // حالة مؤقتة للحفظ

  const saveStatus = () => {
    setOrder((prev) => ({ ...prev, status: newStatus }));
    alert("تم حفظ حالة الطلب بنجاح!");
  };

  const statusOptions = ["مكتمل", "ملغي", "قيد الانتظار", "قيد الإرسال"];

  return (
    <div className="p-6 font-cairo pb-24">
      <h1 className="text-[#375840] text-center lg:text-4xl md:text-3xl sm:text-xl text-xl transform transition-all duration-700">
        تفاصيل الطلب {order.id}
      </h1>

      <div className="lg:flex md:flex sm:flex xxs:flex-col xs:flex-col mt-6 justify-center items-center p-9 shadow-2xl rounded-lg">
        {/* صورة الطلب */}
        <div className="w-full lg:w-2/3">
          <img
            src=".\src\assets\plant4.jpg"
            alt="orderimg"
            className="w-full h-[300px] object-cover rounded-md shadow-md"
          />
        </div>

        {/* تفاصيل الطلب */}
        <div className="w-full lg:w-2/3 text-right">
          <p className="mb-2">
            <strong>الاسم:</strong> {order.name}
          </p>
          <p className="mb-2">
            <strong>الطلب:</strong> {order.order}
          </p>
          <p className="mb-2">
            <strong>رقم الهاتف:</strong> {order.phone}
          </p>
          <p className="mb-2">
            {order.email} <strong>: البريد الالكتروني</strong>
          </p>
          <p className="mb-2">
            <strong>العنوان:</strong> {order.address}
          </p>
          <p className="mb-2">
            <strong>التاريخ:</strong> {order.date}
          </p>
          <p className="mb-2">
            {order.price} <strong>: السعر</strong>
          </p>
          <p className="mb-2">
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <strong> : الحالة</strong>
          </p>
        </div>
      </div>

      {/* زر الحفظ */}
      <button
        onClick={saveStatus}
        className="mt-6 px-4 py-2 bg-[#375840] text-white rounded-md shadow-md"
      >
        حفظ
      </button>
    </div>
  );
};

export default OrderDetails;
