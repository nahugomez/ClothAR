import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import ItemDetail from "./ItemDetail";

const ItemListDetail = () => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getItem = async () => {
      const data = await fetch("/item.json");
      const listItems = await data.json();
      setItem(listItems);
      setLoader(false);
    };
    setTimeout(getItem, 2000);
  }, []);

  return (
    <>
      {loader ? (
        <div className="mt-24 flex justify-center">
          <BarLoader />
        </div>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemListDetail;
