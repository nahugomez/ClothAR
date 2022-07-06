import React from "react";
import UserWidget from "./UserWidget";
import CartWidget from "./CartWidget";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const showMenu = () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-neutral-900 py-6 px-3 text-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-4xl font-black duration-300 hover:opacity-50"
            : "text-4xl font-black duration-300 hover:opacity-50"
        }
      >
        ClothAR
      </NavLink>
      <div className="flex gap-x-3 lg:hidden">
        <UserWidget />
        <CartWidget />
        <button className="duration-300 hover:opacity-50" onClick={showMenu}>
          <Icon icon="dashicons:menu-alt" height={"48px"} width={"48px"} />
        </button>
      </div>
      <div className="hidden w-full pt-3 lg:block lg:w-auto" id="menu">
        <div className="flex flex-col gap-y-3 lg:flex-row lg:items-center lg:gap-x-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold duration-300 hover:opacity-50"
                : "text-lg font-medium duration-300 hover:opacity-50"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/category/men"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold duration-300 hover:opacity-50"
                : "text-lg font-medium duration-300 hover:opacity-50"
            }
          >
            Hombres
          </NavLink>
          <NavLink
            to="/category/women"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold duration-300 hover:opacity-50"
                : "text-lg font-medium duration-300 hover:opacity-50"
            }
          >
            Mujeres
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold duration-300 hover:opacity-50"
                : "text-lg font-medium duration-300 hover:opacity-50"
            }
          >
            Contacto
          </NavLink>
          <UserWidget />
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
