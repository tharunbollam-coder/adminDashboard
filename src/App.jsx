import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Favourites from "./components/Favourites";
import OrderLists from "./components/OrderLists";
import Inbox from "./components/Inbox";
import ProductStock from "./components/ProductStock";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="flex w-full">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <div className="w-full bg-[#F5F6FA]">
         
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/orderlists" element={<OrderLists />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/productstock" element={<ProductStock />} />
            </Routes>
          
        </div>
      </div>
    </div>
  );
}

export default App;
