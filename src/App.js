import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import CategoryIndexPage from "./pages/CategoryIndexPage";
import ProductIndexPage from "./pages/ProductIndexPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ContactoPage from "./pages/ContactoPage";
import CategoryDetailsPage from "./pages/CategoryDetailsPage";
import CartPage from "./pages/CartPage";
import CartState from "./context/cart/cartState";
import ProductState from "./context/product/productState";

function App() {
  return (
      <CartState>
          <ProductState>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<IndexPage/>}/>
                      <Route path="categorias" index element={<CategoryIndexPage/>} />
                      <Route path="categorias/:id" element={<CategoryDetailsPage/>} />
                      <Route path="productos" index element={<ProductIndexPage/>} />
                      <Route path="productos/:id" element={<ProductDetailsPage/>} />
                      <Route path="contacto" element={<ContactoPage/>} />
                      <Route path="cart" element={<CartPage/>} />
                  </Routes>
              </BrowserRouter>
          </ProductState>
      </CartState>
  );
}

export default App;
