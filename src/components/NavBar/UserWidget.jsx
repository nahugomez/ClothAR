import React from "react";
import { Icon } from "@iconify/react";

const UserWidget = () => {
  return (
    <a href="/user" className="duration-300 hover:opacity-50">
      <Icon icon="bxs:user-circle" height={"48px"} width={"48px"} />
    </a>
  );
};

export default UserWidget;
