import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ProductPage from "./components/Products/Products.jsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";
import Account from "./components/Account/Account.jsx";
import ProductsCategory from "./components/Category/Category.jsx";
import CartProvider from './components/Cart/CartContext.jsx';
import CartPage from "./components/Cart/Cart.jsx";


function App() {
  return (
    <>
        <BrowserRouter>
        <CartProvider>
         <Navbar/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/products" element={<ProductPage/>}/>
                    <Route path='/category/:categoryId' element={<ProductsCategory />} />
                    <Route path='/products/:productId' element={<ItemDetail/>}/>
                    <Route path='/account' element={<Account/>}/>
                    <Route path="/Cart" element={<CartPage />} />
                </Routes>
            <Footer/>
          </CartProvider>  
        </BrowserRouter>
    </>
  )
}

export default App;
