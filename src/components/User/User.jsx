import React, { useContext, useState } from "react";
import { userContext } from "../../context/UserContext/UserCustomProvider";
import UserLogged from "./UserLogged";
import UserUnlogged from "./UserUnlogged";

const User = () => {
  const { createUser, logoutUser, loginUser, logged } = useContext(userContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handlerSignup = (event) => {
    createUser(name, email, phone, password);
    event.target.reset();
    event.preventDefault();
  };

  const handlerSignin = (event) => {
    loginUser(email, password);
    event.target.reset();
    event.preventDefault();
  };

  return (
    <>
      <div>
        {logged ? (
          <UserLogged logoutUser={logoutUser} />
        ) : (
          <UserUnlogged
            handlerSignup={handlerSignup}
            handlerSignin={handlerSignin}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setPassword={setPassword}
          />
        )}
      </div>
    </>
  );
};

export default User;
