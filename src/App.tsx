import { Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import ShopPage from "./page/shopPage/shopPage";
import DetailPage from "./page/detailPage/detailPage";
import HomePage from "./page/homePage/homePage";
import "./App.css";
import CartsPage from "./page/cartsPage/cartsPage";
import CatagoriesPage from "./page/catagoriesPage/catagoriesPage";
import Footer from "./component/footer/footer";
import AddPage from "./page/addPage/addPage";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addProduct" element={<AddPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/catagories" element={<CatagoriesPage />} />
        <Route path="/carts" element={<CartsPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
