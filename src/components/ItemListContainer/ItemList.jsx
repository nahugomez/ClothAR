import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="mt-8">
      <h2 className="text-center text-2xl font-bold">Productos Destacados</h2>
      <div className="mx-5 grid gap-y-5 sm:grid-cols-3 sm:gap-x-5">
        {items.map((item, id) => {
          return <Item key={id} item={item}></Item>;
        })}
      </div>
    </div>
  );
};

export default ItemList;
