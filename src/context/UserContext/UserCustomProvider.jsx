import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth } from "../../firebase/firebase";
import { database } from "../../firebase/firebase";
import Swal from "sweetalert2";

export const userContext = createContext();
const { Provider } = userContext;

const UserCustomProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const createUser = (name, email, phone, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const userDoc = doc(database, "users", auth.currentUser.uid);
        const data = {
          name,
          phone,
          email,
        };
        setDoc(userDoc, { ...data, created: serverTimestamp() }); // Devuelve una promesa vacía, no es necesario el uso de then/catch
        Swal.fire({
          title: "Usuario creado con éxito",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        Swal.fire({
          title: "Algo ocurrió mal",
          icon: "error",
        });
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  });

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Se cerró la sesión satisfactoriamente",
          text: "Esperamos volver a verte pronto :)",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Algo salió mal",
          text: error.message,
          icon: "error",
        });
      });
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Swal.fire({
          title: "Inicio de sesión exitoso",
          text: "Ya puede realizar sus compras :)",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Algo salío mal",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <>
      <Provider value={{ createUser, logoutUser, loginUser, logged }}>
        {children}
      </Provider>
    </>
  );
};

export default UserCustomProvider;
