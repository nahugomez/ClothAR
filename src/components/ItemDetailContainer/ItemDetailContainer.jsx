import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../firebase/firebase";

const ItemListDetail = () => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getItem = () => {
      const docRef = doc(database, "products", id);
      getDoc(docRef)
        .then((result) => {
          setItem(result.data());
        })
        .finally(() => {
          setLoader(false);
        });
    };
    getItem();
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
