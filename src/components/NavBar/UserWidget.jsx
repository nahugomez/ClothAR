import React from "react";
import { Icon } from "@iconify/react";

const UserWidget = ({ styles }) => {
  return (
    <a href="/user" className={styles}>
      <Icon icon="bxs:user-circle" height={"48px"} width={"48px"} />
    </a>
  );
};

export default UserWidget;
