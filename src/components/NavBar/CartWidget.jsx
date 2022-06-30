import React from "react";
import { Icon } from "@iconify/react";

const CartWidget = () => {
  return (
    <a href="/cart" className="duration-300 hover:opacity-50">
      <Icon icon="ph:handbag-fill" height={"48px"} width={"48px"} />
    </a>
  );
};

export default CartWidget;
