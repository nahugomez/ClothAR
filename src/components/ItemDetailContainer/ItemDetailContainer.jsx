import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemListDetail = () => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getItems = async () => {
      const data = await fetch("/items.json");
      const info = await data.json();

      const product = info.find((item) => item.id == id);

      setItem(product);
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
        <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemListDetail;
