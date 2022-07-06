import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div className="rounded-lg border-2 shadow-lg">
        <img
          src={item.img}
          alt="Accesorios ClothAr"
          className=" h-72 w-full rounded-t-lg"
        />
        <div className="p-5">
          <p className="text-lg font-bold">{item.name}</p>
          <p className="italic ">${item.price}</p>
          <Link to={item.route}>
            <button className="mt-3 w-full rounded-lg bg-neutral-900 p-3 text-center text-white duration-300 hover:opacity-50">
              Ver más detalles
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
