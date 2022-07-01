import React from "react";

const Item = ({ item }) => {
  return (
    <div className="border-2 rounded-lg shadow-md">
      <img src={item.img} alt="ClothAr" className="w-full h-96 sm:h-52 lg:h-96 rounded-lg" />
      <div className="p-5">
        <p className="text-lg font-bold">{item.name}</p>
        <p className="font-semibold">${item.price}</p>
        <p>
          Colores Disponibles: <span className="italic">{item.color}</span>
        </p>
        <a
          href="/product"
          className="mt-2 block bg-neutral-900 p-3 text-center text-white duration-300 hover:opacity-50"
        >
          Ver más detalles
        </a>
      </div>
    </div>
  );
};

export default Item;
