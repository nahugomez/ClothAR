import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext/CustomProvider";
import { userContext } from "../../context/UserContext/UserCustomProvider";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Cart = () => {
  const { products, deleteProduct, clearProducts, totalPrice, setProducts } =
    useContext(cartContext);
  const { logged, endPurchase } = useContext(userContext);

  return (
    <div>
      {products.length === 0 ? (
        <div className="mt-24 text-center text-xl">
          <p>No hay productos</p>
          <Link to={"/"} className="font-bold">
            Click aquí para seguir comprando
          </Link>
        </div>
      ) : (
        <div className="container mx-auto my-5 flex flex-col gap-y-5 px-5">
          {products.map((product) => {
            return (
              <div key="" className="flex w-full items-center justify-between rounded-lg border">
                <img
                  src={product.img}
                  alt="ClothAR"
                  className=" h-48 w-48 rounded-l-lg"
                />
                <div>
                  <p className="text-xl font-bold">{product.name}</p>
                  <p>Precio por Unidad: ${product.price}</p>
                  <p>Cantidad:{product.qty}</p>
                </div>
                <button
                  className="p-5 text-3xl font-black duration-300 hover:opacity-60"
                  onClick={() => deleteProduct(product.id)}
                >
                  X
                </button>
              </div>
            );
          })}
          <p>
            Total a pagar: <span className="font-bold">${totalPrice}</span>
          </p>
          <button
            className="w-full rounded-lg bg-neutral-900 p-3 text-center text-white duration-300 hover:opacity-50"
            onClick={() => {
              clearProducts();
            }}
          >
            Eliminar todos los productos del carrito
          </button>
          {logged ? (
            <button
              className="w-full rounded-lg bg-neutral-900 p-3 text-center text-white duration-300 hover:opacity-50"
              onClick={() => {
                endPurchase(products, totalPrice);
                setProducts([]);
              }}
            >
              Finalizar compra
            </button>
          ) : (
            <Link to={"/user"} className="text-bold text-neutral-700">
              Necesita estar registrado para finalizar la compra. Click aquí para registrarse.
            </Link>
          )}
          {totalPrice >= 5000 ? (
            <div className="flex items-center gap-x-3 text-green-600">
              <Icon
                icon="material-symbols:local-shipping-rounded"
                width="48"
                height="48"
              />
              <p>Con su compra tiene envío gratis (Válido para todo el país)</p>
            </div>
          ) : (
            <div className="flex items-center gap-x-3 text-neutral-700">
              <Icon
                icon="material-symbols:local-shipping-rounded"
                width="48"
                height="48"
              />
              <Link to={"/"}>
                Siga comprando para acceder al envío gratis (Compras mayores a
                $5000)
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
