import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import BarLoader from "react-spinners/BarLoader";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getItems = async () => {
      const data = await fetch("/items.json");
      const info = await data.json();

      if (id !== undefined) {
        const products = info.filter((item) => item.category === id);
        setItems(products);
      } else {
        setItems(info);
      }

      setLoader(false);
    };
    getItems();
  }, [id]);

  return (
    <>
      {loader ? (
        <div className="mt-24 flex justify-center">
          <BarLoader />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
