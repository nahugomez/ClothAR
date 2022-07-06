import { useState } from "react";

const ItemCount = ({ stock, funct }) => {
  const [units, setUnits] = useState(1);
  const [current, setCurrent] = useState(stock);

  const addUnits = () => {
    if (units < current) {
      setUnits(units + 1);
    }
  };

  const discountUnits = () => {
    if (units > 1) {
      setUnits(units - 1);
    }
  };

  const handlerClick = () => {
    setCurrent(current - units);
    setUnits(1);
    funct(units);
  };

  return (
    <div className="">
      <div className="flex justify-between rounded border-2 border-black p-1">
        <button onClick={discountUnits}>
          <span className="text-xl font-bold">-</span>{" "}
        </button>
        <p className="text-xl font-bold">{units}</p>
        <button onClick={addUnits}>
          <span className="text-xl font-bold">+</span>
        </button>
      </div>
      {current === 0 ? (
        <p>No hay stock del producto</p>
      ) : (
        <button
          onClick={handlerClick}
          className="mt-3 w-full rounded-lg bg-neutral-900 p-3 text-center text-white duration-300 hover:opacity-50"
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
};

export default ItemCount;
