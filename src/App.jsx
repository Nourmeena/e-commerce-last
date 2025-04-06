import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Whishlist from "./pages/Whishlist";
import Product from "./pages/Product";
import Allproduct from "./pages/Allproduct";
import BestSelling from "./pages/BestSelling";
import Footer from "./components/Footer/Footer";
import { ShopContextProvider } from "./context/ShopContext";
import { WhishlistContextProvider } from "./context/WhishlistContext";
import ShopCategory from "./pages/ShopCategory";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Checkout from "./pages/Checkout";
import Login from "./components/Registeration/Login";
import MyAccount from "./components/MyAccount/MyAccount";

function App() {
  return (
    
      <ShopContextProvider>
        <WhishlistContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Allproduct" element={<Allproduct />} />
            <Route path="/BestSelling" element={<BestSelling />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Whishlist" element={<Whishlist />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/Product/:id" element={<Product />} />
            <Route
              path="/Cosmetics"
              element={
                <ShopCategory
                  banner="Cosmetics Collection"
                  category="Cosmetics"
                />
              }
            />
            <Route
              path="/Shoes"
              element={
                <ShopCategory banner="Shoes Collection" category="Shoes" />
              }
            />
            <Route
              path="/Sports"
              element={
                <ShopCategory banner="Sports Collection" category="Sports" />
              }
            />
            <Route
              path="/Accessories"
              element={
                <ShopCategory
                  banner="Accessories Collection"
                  category="Accessories"
                />
              }
            />
            <Route
              path="/Kids"
              element={
                <ShopCategory
                  banner="Kids & Toys Collection"
                  category="Kids & Toys"
                />
              }
            />
            <Route
              path="/Women"
              element={
                <ShopCategory
                  banner="Women's Fashion"
                  category="Women's Fashion"
                />
              }
            />
            <Route
              path="/Men"
              element={
                <ShopCategory banner="Men' Fashion" category="Men's Fashion" />
              }
            />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </WhishlistContextProvider>
      </ShopContextProvider>
    
  );
}

export default App;
