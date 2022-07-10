import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { cartContext } from "../../context/CartContext/CustomProvider";

const CartWidget = () => {
  const { qty } = useContext(cartContext);
  return (
    <>
      <Link to={"/"} className="duration-300 hover:opacity-50">
        <Icon icon="ph:handbag-fill" height={"48px"} width={"48px"} />
      </Link>
      <p className="font-bold text-sm">{qty}</p>
    </>
  );
};

export default CartWidget;
