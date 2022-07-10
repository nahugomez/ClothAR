import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import CustomProvider from "./context/CartContext/CustomProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
