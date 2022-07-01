import { Icon } from "@iconify/react";
import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const showCart = (amount) => {
    console.log(`Se compró ${amount}`);
  };

  return (
    <>
      <div className=" my-5 mx-auto w-10/12 rounded-lg border-2 shadow-xl sm:flex sm:items-center">
        <img
          src={item.img}
          alt="ClothAr"
          className=" max-h-[500px] w-full rounded-lg sm:w-1/2"
        />
        <div className="p-3">
          <p className="text-xl font-bold">{item.name}</p>
          <p>Colores Disponibles: {item.color}</p>
          <p>Precio: {item.price}</p>
          <ItemCount stock={item.stock} funct={showCart} />

          <div className="flex items-center justify-center gap-x-3">
            <Icon
              icon="material-symbols:local-shipping-sharp"
              width={48}
              height={48}
            />
            <p>
              Envío gratis a partir de los{" "}
              <span className="font-bold">$7500</span>
            </p>
          </div>
          <div>
            <p className="text-center font-bold text-green-700">
              Pagá con tarjeta hasta 6 cuotas sin interés
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
