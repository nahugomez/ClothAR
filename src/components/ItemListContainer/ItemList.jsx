import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className=" my-12 mx-auto grid w-4/5 grid-cols-3 gap-x-7 gap-y-10">
      {items.map((item) => {
        return <Item item={item} key={item.id}/>;
      })}
    </div>
  );
};

export default ItemList;
