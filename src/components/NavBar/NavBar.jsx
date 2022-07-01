import React from "react";
import UserWidget from "./UserWidget";
import CartWidget from "./CartWidget";
import { Icon } from "@iconify/react";

const NavBar = () => {
  const showMenu = () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-neutral-900 py-6 px-3 text-white">
      <a
        href="/home"
        className="text-4xl font-black duration-300 hover:opacity-50"
      >
        ClothEs
      </a>
      <div className="flex gap-x-3 lg:hidden">
        <UserWidget styles="hover:opacity-50 duration-300 lg:hidden" />
        <CartWidget styles="hover:opacity-50 duration-300 lg:hidden" />
        <button className="duration-300 hover:opacity-50" onClick={showMenu}>
          <Icon icon="dashicons:menu-alt" height={"48px"} width={"48px"} />
        </button>
      </div>
      <div className="hidden w-full pt-3 lg:block lg:w-auto" id="menu">
        <div className="flex flex-col gap-y-3 lg:flex-row lg:items-center lg:gap-x-5">
          <a
            href="/home"
            className="text-lg font-medium duration-300 hover:opacity-50"
          >
            Inicio
          </a>
          <a
            href="/home"
            className="text-lg font-medium duration-300 hover:opacity-50"
          >
            Hombres
          </a>
          <a
            href="/home"
            className="text-lg font-medium duration-300 hover:opacity-50"
          >
            Mujeres
          </a>
          <a
            href="/home"
            className="text-lg font-medium duration-300 hover:opacity-50"
          >
            FAQs
          </a>
          <a
            href="/home"
            className="text-lg font-medium duration-300 hover:opacity-50"
          >
            Contacto
          </a>
          <UserWidget styles="hover:opacity-50 duration-300 hidden lg:block" />
          <CartWidget styles="hover:opacity-50 duration-300 hidden lg:block" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
