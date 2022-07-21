import React from "react";

const UserLogged = ({ logoutUser }) => {
  return (
    <div className="m-5 border p-5">
      <p className="mb-3 text-center text-3xl font-bold">Ya estás logueado.</p>
      <button
        onClick={logoutUser}
        className="w-full rounded-lg bg-neutral-900 p-3 text-center text-white duration-300 hover:opacity-50"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default UserLogged;
