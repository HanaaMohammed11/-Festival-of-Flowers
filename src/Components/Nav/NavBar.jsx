import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <Navbar className="bg-green-950/80 relative">
      <div className="flex items-center justify-between w-full px-4">
        <Navbar.Brand href="#" className="flex items-center">
          <div className="w-9 h-9">
            <img src={logo} alt="Festival of Flowers Logo" />
          </div>
          <span
            className="font-semibold px-2 text-amber-100"
            style={{ fontFamily: "Abril Fatface, serif" }}
          >
            Festival of Flowers
          </span>
        </Navbar.Brand>

        {/* زر القائمة في الشاشات الصغيرة */}
        <button
          className="text-amber-100 md:hidden focus:outline-none"
          onClick={toggleNavbar}
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* القائمة في الشاشات الكبيرة */}
        <nav className="hidden md:flex space-x-8">
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
        </nav>
      </div>

      {/* القائمة الجانبية للشاشات الصغيرة */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-950/90 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 `}
      >
        <button
          className="text-white absolute top-4 right-4"
          onClick={closeNavbar}
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
        <nav className="mt-12 flex flex-col space-y-4 px-4">
          <NavLink
            to="/"
            onClick={closeNavbar}
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
            onClick={closeNavbar}
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
            onClick={closeNavbar}
            className={({ isActive }) =>
              isActive
                ? "text-amber-100 font-bold"
                : "text-white hover:text-amber-100"
            }
          >
            Tools
          </NavLink>
        </nav>
      </div>
    </Navbar>
  );
}
