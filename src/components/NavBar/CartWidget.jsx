import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const CartWidget = () => {
  return (
    <Link to={"/"} className="duration-300 hover:opacity-50">
      <Icon icon="ph:handbag-fill" height={"48px"} width={"48px"} />
    </Link>
  );
};

export default CartWidget;
