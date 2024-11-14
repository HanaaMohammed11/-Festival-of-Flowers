import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function NavBar() {
  return (
    <Navbar className="bg-green-950/80">
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

      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-amber-100 font-bold transition-all duration-200"
              : "text-white hover:text-amber-100 transition-all duration-200"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/plants"
          className={({ isActive }) =>
            isActive
              ? "text-amber-100 font-bold transition-all duration-200"
              : "text-white hover:text-amber-100 transition-all duration-200"
          }
        >
          Plants
        </NavLink>
        <NavLink
          to="/tools"
          className={({ isActive }) =>
            isActive
              ? "text-amber-100 font-bold transition-all duration-200"
              : "text-white hover:text-amber-100 transition-all duration-200"
          }
        >
          Tools
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
