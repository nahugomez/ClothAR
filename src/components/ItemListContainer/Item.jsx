import React from "react";

const Item = ({ item }) => {
  return (
    <div className="rounded-lg border-2 shadow-md">
      <img
        src={item.img}
        alt="ClothAr"
        className="h-96 w-full rounded-lg sm:h-52 lg:h-96"
      />
      <div className="p-5">
        <p className="text-lg font-bold">{item.name}</p>
        <p className="font-semibold">${item.price}</p>
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
