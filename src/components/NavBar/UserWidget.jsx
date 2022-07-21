import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const UserWidget = () => {
  return (
    <Link to={"/user"} className="hover:opacity-50 duration-300">
      <Icon icon="bxs:user-circle" height={"48px"} width={"48px"} />
    </Link>
  );
};

export default UserWidget;
