import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import BarLoader from "react-spinners/BarLoader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetch("/items.json");
      const listItems = await data.json();
      setItems(listItems);
      setLoader(false);
    };
    setTimeout(getItems, 3000);
  }, []);

  return <>{loader ? <div className="flex justify-center mt-24"><BarLoader /></div> : <ItemList items={items} />}</>;
};

export default ItemListContainer;
