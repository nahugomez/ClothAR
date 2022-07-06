import { Icon } from "@iconify/react";
import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

  const onAdd = (units) => {
    console.log(`El usuario compró ${units} artículos!`);
  }

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
          <ItemCount stock={item.stock} funct={onAdd}/>
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
