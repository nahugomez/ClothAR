import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import BarLoader from "react-spinners/BarLoader";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebase/firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getItems = () => {
      const productsCollection = collection(database, "products");
      const searched = id !== undefined ? query(productsCollection, where("category", "==", id)) : productsCollection;
      getDocs(searched)
      .then((result)=>{
        const productList = result.docs.map((product)=> {
          return {
            ...product.data(),
            id: product.id,
            route: `/item/${product.id}`
          }
        });
        setItems(productList); 
      })
      .finally(() => {
        setLoader(false);
      });
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