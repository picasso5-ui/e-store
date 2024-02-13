import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Register from "./components/Register";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
