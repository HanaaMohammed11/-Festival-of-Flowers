import { useState } from "react";
import PlantsForm from "../PlantForm/PlantsForm";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import ToolsForm from "../ToolsForm/ToolsForm";
import Orders from "../Orders/Orders";

export default function SideBar() {
  const [activeComponent, setActiveComponent] = useState("AddPlants");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeComponent) {
      case "AddPlants":
        return <PlantsForm />;
      case "AddTools":
        return <ToolsForm />;
        case "Orders":
          return <Orders />;
      default:
        return <PlantsForm />;
    }
  };

  return (
    <div className="flex h-screen font-cairo text-right ">
      <div
        className={`bg-[#375840] text-white h-full transition-all duration-300 ${
          isSidebarOpen ? "w-44" : "w-2"
        }`}
      >
        {isSidebarOpen && (
          <nav className="mt-4 text-right pt-5">
            <button
              onClick={() => setActiveComponent("AddPlants")}
              className={`block p-3 w-full text-center ${
                activeComponent === "AddPlants"
                  ? "bg-amber-100 text-black rounded-full font-bold"
                  : "hover:bg-amber-100 rounded-full hover:text-black"
              }`}
            >
              اضافة نبات
            </button>
            <button
              onClick={() => setActiveComponent("AddTools")}
              className={`block p-3 w-full text-center ${
                activeComponent === "AddTools"
                  ? "bg-amber-100 rounded-full text-black font-bold"
                  : "hover:bg-amber-100 rounded-full hover:text-black"
              }`}
            >
              اضافة اداة زراعية
            </button>
            <button
              onClick={() => setActiveComponent("Orders")}
              className={`block p-3 w-full text-center ${
                activeComponent === "Orders"
                  ? "bg-amber-100 rounded-full text-black font-bold"
                  : "hover:bg-amber-100 rounded-full hover:text-black"
              }`}
            >
          الطلبات
            </button>
          </nav>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={toggleSidebar}
          className="text-black hover:text-amber-100 focus:outline-none bg-[#375840] rounded-r-full py-5 px-2 h-5 items-center flex justify-center"
        >
          {isSidebarOpen ? (
            <MdOutlineKeyboardDoubleArrowLeft size={25} color="#ffff" />
          ) : (
            <MdOutlineKeyboardDoubleArrowRight size={25} color="#ffff" />
          )}
        </button>
      </div>

      <div className="flex-1 overflow-auto">{renderContent()}</div>
    </div>
  );
}
