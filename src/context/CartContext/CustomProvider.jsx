import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CustomProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getCurrentQty = () => {
      let qtyProducts = 0;
      products.forEach((elem) => (qtyProducts += elem.qty));
      setQty(qtyProducts);
    };
    getCurrentQty();
    const getTotalPrice = () => {
      let price = 0;
      products.forEach((elem) => (price += elem.price * elem.qty));
      setTotalPrice(price);
    };
    getTotalPrice();
  }, [products]);

  const IsInProducts = (product) => {
    return products.some((elem) => elem.name === product.name);
  };

  const clearProducts = () => {
    setProducts([]);
    setQty(0);
  };

  const addProduct = (product) => {
    const duplicated = IsInProducts(product);
    if (duplicated) {
      const founded = products.find((elem) => elem.name === product.name);
      const index = products.indexOf(founded);
      const aux = [...products];
      aux[index].qty += product.qty;
      setProducts(aux);
    } else {
      setProducts([...products, product]);
    }
  };

  const deleteProduct = (id) => {
    const copyProducts = products.filter((elem) => elem.id !== id);
    setProducts(copyProducts);
  };

  return (
    <>
      <Provider
        value={{
          products,
          addProduct,
          deleteProduct,
          clearProducts,
          qty,
          totalPrice,
        }}
      >
        {children}
      </Provider>
    </>
  );
};

export default CustomProvider;
