import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  setDoc,
  doc,
  serverTimestamp,
  collection,
  addDoc,
  getDoc,
} from "firebase/firestore";
import { auth } from "../../firebase/firebase";
import { database } from "../../firebase/firebase";
import Swal from "sweetalert2";

export const userContext = createContext();
const { Provider } = userContext;

const UserCustomProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({});

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
        setUser({ id: auth.currentUser.uid, ...data });
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
      setUser({});
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
        const docRef = doc(database, "users", auth.currentUser.uid);
        getDoc(docRef)
          .then((result) => {
            console.log(result);
            setUser(result.data());
          })
          .catch((error) => {
            console.log(error.message);
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

  const endPurchase = (products, total) => {
    const salesRef = collection(database, "sales");
    const data = {
      buyer: { ...user },
      items: { products, date: serverTimestamp(), total: total },
    };
    addDoc(salesRef, data)
      .then((docsRef) => {
        Swal.fire({
          title: "Tu compra finalizó con éxito.",
          text: `Tu número de compra es: ${docsRef.id}`,
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Algo salió mal.",
          icon: "error",
        });
      });
  };

  return (
    <>
      <Provider
        value={{ createUser, logoutUser, loginUser, logged, endPurchase }}
      >
        {children}
      </Provider>
    </>
  );
};

export default UserCustomProvider;
