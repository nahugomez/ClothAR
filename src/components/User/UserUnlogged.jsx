import React from "react";

const UserUnlogged = ({handlerSignup, handlerSignin, setName, setEmail, setPhone, setPassword}) => {
  return (
    <>
      <form
        onSubmit={handlerSignup}
        className="mx-5 mt-5 flex flex-col border p-5 shadow-lg"
      >
        <p className="mb-3 text-center text-3xl font-bold">Registrarse</p>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={(event) => setName(event.target.value)}
          className="mb-3 border p-2"
        />
        <input
          type="email"
          placeholder="Ingrese su mail"
          onChange={(event) => setEmail(event.target.value)}
          className="mb-3 border p-2"
        />
        <input
          type="number"
          placeholder="Ingrese su número de teléfono"
          onChange={(event) => setPhone(event.target.value)}
          className="mb-3 border p-2"
        />
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          onChange={(event) => setPassword(event.target.value)}
          className="mb-3 border p-2"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-neutral-900 p-3 text-center text-white duration-300 hover:opacity-50"
        >
          Crear usuario
        </button>
      </form>
      <form
        onSubmit={handlerSignin}
        className="mx-5 mt-5 flex flex-col border p-5 shadow-lg"
      >
        <p className="mb-3 text-center text-3xl font-bold">Iniciar Sesión</p>
        <input
          type="email"
          placeholder="Ingrese su mail"
          onChange={(event) => setEmail(event.target.value)}
          className="mb-3 border p-2"
        />
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          onChange={(event) => setPassword(event.target.value)}
          className="mb-3 border p-2"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-neutral-900 p-3 text-center text-white duration-300 hover:opacity-50"
        >
          Crear usuario
        </button>
      </form>
    </>
  );
};

export default UserUnlogged;
