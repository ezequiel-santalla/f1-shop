import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Title from "./components/Title/Title"
import TeamNavBar from "./components/TeamNavBar/TeamNavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import { CartProvider } from "./context/CartContext"

const App = () => (
  <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Title />
        <TeamNavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/team/:idTeam" element={<ItemListContainer/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<h2>Checkout</h2>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </>
);

export default App;