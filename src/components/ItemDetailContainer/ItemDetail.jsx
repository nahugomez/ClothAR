import { Icon } from "@iconify/react";
import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext/CustomProvider";

const ItemDetail = ({ item }) => {
  const [amount, setAmount] = useState(0);

  const { addProduct } = useContext(cartContext);

  const onAdd = (units) => {
    const product = { ...item, qty: units };
    addProduct(product);
    setAmount(units);
  };

  return (
    <>
      <div className="mx-auto my-10 grid w-4/5 grid-cols-2 gap-x-10">
        <img
          src={item.img}
          alt="Accesorio de ClothAR"
          className="h-96 w-full rounded-lg"
        />
        <div className="flex flex-col gap-y-3 self-center">
          <p className="text-3xl font-bold">{item.name}</p>
          <p className="text-xl font-semibold italic">${item.price}</p>
          <p>Artículos Disponibles: {item.stock}</p>
          <p>Color: {item.color}</p>
          {amount === 0 ? (
            <ItemCount stock={item.stock} onAdd={onAdd} />
          ) : (
            <Link to="/cart">
              <button className="mt-3 w-full rounded-lg bg-neutral-900 p-3 text-center text-white duration-300 hover:opacity-50">
                Finalizar compra
              </button>
            </Link>
          )}
          <div className="flex items-center gap-x-3 text-green-600">
            <Icon
              icon="material-symbols:local-shipping-rounded"
              width="48"
              height="48"
            />
            <p>Envío gratis a todo el país a partir de $5000</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Icon icon="ant-design:credit-card-filled" width="48" height="48" />
            <p>Hasta 3 cuotas sin interés con cualquier tarjeta de crédito</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
