import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Title from "./components/Title/Title"
import TeamNavBar from "./components/TeamNavBar/TeamNavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

const App = () => (
  <>
    <BrowserRouter>
      <NavBar />
      <Title />
      <TeamNavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/team/:idTeam" element={<ItemListContainer/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </>
);

export default App;