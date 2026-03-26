import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './scenes/HomePage/index';
import Shop from './scenes/Shop';
import ProductDetails from './scenes/ProductDetails';
import Cart from './scenes/Cart';
import Shipping from './scenes/Shipping';
import Payment from './scenes/Payment';
import Review from './scenes/Review';
import Success from './scenes/Success';
import Wishlist from './scenes/Wishlist';
import { CartProvider } from './Contexts/CartContext';
import { WishlistProvider } from './Contexts/WishlistContext';
import MainLayout from './scenes/Routes/MainLayout';
import HeaderOnlyLayout from './scenes/Routes/HeaderOnly Layout';
import Login from './scenes/Login';
import { CategoryProvider } from './Contexts/CategoryContext';
import Contact from './scenes/Contact';
import NotFound from './scenes/NotFound';

function App() {


  return (
    <>
      <CartProvider>
        <WishlistProvider>
          <CategoryProvider>
            <Routes>
              {/* Pages with Header + Footer */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="shop" element={<Shop />} />
                <Route path="product" element={<ProductDetails />} />
                <Route path="cart" element={<Cart />} />
                <Route path="shipping" element={<Shipping />} />
                <Route path="payment" element={<Payment />} />
                <Route path="review" element={<Review />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="contact" element={<Contact />} />
              </Route>

              {/* Success page (Header only) */}
              <Route element={<HeaderOnlyLayout />}>
                <Route path="/success" element={<Success />} />
                <Route path="*" element={<NotFound />} />
              </Route>

              {/* Login page (No layout) */}
              <Route path="/login" element={<Login />} />

            </Routes>
          </CategoryProvider>
        </WishlistProvider>
      </CartProvider >
    </>
  );
}

export default App;
