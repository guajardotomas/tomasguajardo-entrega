import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import ProductPage from "./Components/Products/Products.jsx";
import ItemDetail from './Components/ItemDetail/ItemDetail.jsx';
import Account from './Components/Account/Account.jsx';
import ProductsCategory from './Components/Category/Category.jsx';
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
