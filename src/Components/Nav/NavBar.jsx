// import { Navbar } from "flowbite-react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import logo from "../../assets/logo.png";

// export default function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeNavbar = () => {
//     setIsOpen(false);
//   };

//   return (
//     <Navbar className="bg-green-950/80 relative">
//       <div className="flex items-center justify-between w-full px-4">
//         <Navbar.Brand href="#" className="flex items-center">
//           <div className="w-9 h-9">
//             <img src={logo} alt="Festival of Flowers Logo" />
//           </div>
//           <span
//             className="font-semibold px-2 text-amber-100"
//             style={{ fontFamily: "Abril Fatface, serif" }}
//           >
//             Festival of Flowers
//           </span>
//         </Navbar.Brand>

//         {/* زر القائمة في الشاشات الصغيرة */}
//         <button
//           className="text-amber-100 md:hidden focus:outline-none"
//           onClick={toggleNavbar}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* القائمة في الشاشات الكبيرة */}
//         <nav className="hidden md:flex space-x-8">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-amber-100 font-bold"
//                 : "text-white hover:text-amber-100"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/plants"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-amber-100 font-bold"
//                 : "text-white hover:text-amber-100"
//             }
//           >
//             Plants
//           </NavLink>
//           <NavLink
//             to="/tools"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-amber-100 font-bold"
//                 : "text-white hover:text-amber-100"
//             }
//           >
//             Tools
//           </NavLink>
//         </nav>
//       </div>

//       {/* القائمة الجانبية للشاشات الصغيرة */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-green-950/90 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out z-50 `}
//       >
//         <button
//           className="text-white absolute top-4 right-4"
//           onClick={closeNavbar}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         <nav className="mt-12 flex flex-col space-y-4 px-4">
//           <NavLink
//             to="/"
//             onClick={closeNavbar}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-amber-100 font-bold"
//                 : "text-white hover:text-amber-100"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/plants"
//             onClick={closeNavbar}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-amber-100 font-bold"
//                 : "text-white hover:text-amber-100"
//             }
//           >
//             Plants
//           </NavLink>
//           <NavLink
//             to="/tools"
//             onClick={closeNavbar}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-amber-100 font-bold"
//                 : "text-white hover:text-amber-100"
//             }
//           >
//             Tools
//           </NavLink>
//         </nav>
//       </div>
//     </Navbar>
//   );
// }



import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { RiPlantLine } from "react-icons/ri";
import { PiShovelFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="hidden md:flex justify-between items-center bg-green-950/80 px-4 py-2">
        <div className="flex items-center">
          <div className="w-9 h-9">
            <img src={logo} alt="Festival of Flowers Logo" />
          </div>
          <span
            className="font-semibold px-2 text-amber-100"
            style={{ fontFamily: "Abril Fatface, serif" }}
          >
            Festival of Flowers
          </span>
        </div>
        <div className="flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-amber-100 font-bold"
                : "text-white hover:text-amber-100"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            className={({ isActive }) =>
              isActive
                ? "text-amber-100 font-bold"
                : "text-white hover:text-amber-100"
            }
          >
            Plants
          </NavLink>
          <NavLink
            to="/tools"
            className={({ isActive }) =>
              isActive
                ? "text-amber-100 font-bold"
                : "text-white hover:text-amber-100"
            }
          >
            Tools
          </NavLink>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 bg-green-950 z-50 md:hidden flex justify-between items-center px-4 py-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-amber-100 flex flex-col items-center"
              : "text-white hover:text-amber-100 flex flex-col items-center"
          }
        >
          <FaHome color="#ffff" />
          <span className="text-xs">الرئيسة</span>
        </NavLink>
        <NavLink
          to="/plants"
          className={({ isActive }) =>
            isActive
              ? "text-amber-100 flex flex-col items-center"
              : "text-white hover:text-amber-100 flex flex-col items-center"
          }
        >
          <RiPlantLine color="#ffff" />
          <span className="text-xs">نباتك</span>
        </NavLink>
        <NavLink
          to="/tools"
          className={({ isActive }) =>
            isActive
              ? "text-amber-100 flex flex-col items-center"
              : "text-white hover:text-amber-100 flex flex-col items-center"
          }
        >
          <PiShovelFill color="#ffff" />
          <span className="text-xs">أدواتك</span>
        </NavLink>

        <button
          onClick={toggleSidebar}
          className="text-white hover:text-amber-100 flex flex-col items-center"
        >
          <IoMenu color="#ffff" />
          <span className="text-xs">القائمة</span>
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-950 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={closeSidebar}
          className="absolute top-4 left-4 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="mt-12 flex flex-col space-y-4 px-6">
          <NavLink
            to="/cart"
            onClick={closeSidebar}
            className="text-white hover:text-amber-100"
          >
            السلة
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeSidebar}
            className="text-white hover:text-amber-100"
          >
            من نحن
          </NavLink>
          <NavLink
            to="/orders"
            onClick={closeSidebar}
            className="text-white hover:text-amber-100"
          >
            طلباتك
          </NavLink>
          <NavLink
            to="/support"
            onClick={closeSidebar}
            className="text-white hover:text-amber-100"
          >
            الدعم
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeSidebar}
            className="text-white hover:text-amber-100"
          >
            تواصل معنا
          </NavLink>
        </nav>
      </div>
    </>
  );
}
