import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: '¿Está seguro de que desea eliminar todos los productos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000',
      cancelButtonColor: '#000',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        setProducts([]);
        setQty(0);
        Swal.fire(
          'Los productos fueron eliminados'
        )
      }
    })
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
    
    Swal.fire({
      title: '¿Está seguro de que desea eliminar este producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000',
      cancelButtonColor: '#000',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        const copyProducts = products.filter((elem) => elem.id !== id);
        setProducts(copyProducts);
        Swal.fire(
          'El producto fue eliminado'
        )
      }
    })
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
          setProducts
        }}
      >
        {children}
      </Provider>
    </>
  );
};

export default CustomProvider;
