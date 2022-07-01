import React from "react";
import { Icon } from "@iconify/react";

const CartWidget = ({ styles }) => {
  return (
    <a href="/cart" className={styles}>
      <Icon icon="ph:handbag-fill" height={"48px"} width={"48px"} />
    </a>
  );
};

export default CartWidget;
