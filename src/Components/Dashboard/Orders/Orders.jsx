import OrderTable from "./OrderCard";

export default function Orders() {
  return (
    <div className="flex justify-center items-center">
        <div className="p-5">
            <h1              className="text-[#375840] lg:text-4xl md:text-3xl sm:text-xl text-xl   transform transition-all duration-700 "
>الطلبات</h1>

<OrderTable/>
        </div>
    </div>
  )
}
