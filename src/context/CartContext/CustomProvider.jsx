import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CustomProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    // Se utiliza useEffect para mantener actualizada la cantidad, cada vez que se actualice el array products.
    const getCurrentQty = () => {
      let qtyProducts = 0;
      products.forEach((elem) => (qtyProducts += elem.qty));
      setQty(qtyProducts);
    };
    getCurrentQty();
    console.log(products);
  }, [products]);

  const IsInProducts = (product) => {
    return products.some((elem) => elem.id === product.id);
  };

  // Función creada, pero aún no implementada
  const clearProducts = () => { 
    setProducts([]);
    setQty(0);
  };

  const addProduct = (product) => {
    const duplicated = IsInProducts(product);
    if (duplicated) {
      const founded = products.find((elem) => elem.id === product.id); // Nos quedamos con el objeto que esté ya en el array products
      const index = products.indexOf(founded); // Encontramos el index del producto duplicado
      const aux = [...products]; // Hacemos una copia de products, para modificar el producto duplicado
      aux[index].qty += product.qty; // Añadimos la cantidad nueva, a la cantidad anterior
      setProducts(aux);
    } else {
      setProducts([...products, product]);
    }
  };

  // Función creada, pero aún no implementada
  const deleteProduct = (product) => {
    // Filter invertido, nos quedamos con los objetos que no tengan el ID del producto a eliminar
    const copyProducts = products.filter((elem) => elem.id !== product.id); 
    setProducts(copyProducts);
  };

  return (
    <>
      <Provider
        value={{ addProduct, deleteProduct, IsInProducts, clearProducts, qty }}
      >
        {children}
      </Provider>
    </>
  );
};

export default CustomProvider;
