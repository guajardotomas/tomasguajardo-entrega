import React, { useState } from 'react'; 
import './Navbar.css';
import { Link } from "react-router-dom";
import { useCart } from '../Cart/CartContext';

export default function Navbar() {
    const Medusa = './medusa_black.png';  
    const { cart, clearCart } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCartMenu = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <header className="nav">
            <div className="w-12">
                <ul>
                    <img src={Medusa} alt="Logo" id="home" />
                </ul>
            </div>
            <nav>
                <ul className="flex items-center justify-around gap-12">
                    <li className="font-bold hover:bg-slate-300 transition-all ease-linear px-2 py-1 rounded-xl hover:text-white uppercase">
                        <Link to="/Home">Home</Link>
                    </li>
                    <li className="font-bold hover:bg-slate-300 transition-all ease-linear px-2 py-1 rounded-xl hover:text-white uppercase">
                        <Link to="/Products">Products</Link>
                    </li>
                    <li className="font-bold hover:bg-slate-300 transition-all ease-linear px-2 py-1 rounded-xl hover:text-white uppercase">
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li className="font-bold hover:bg-slate-300 transition-all ease-linear px-2 py-1 rounded-xl hover:text-white uppercase">
                        <Link to="/Account">Account</Link>
                    </li>
                </ul>
            </nav>
            <div className='relative'>
                <button 
                    onClick={toggleCartMenu} 
                    className='text-black hover:text-gray-600'
                    aria-label="Toggle cart menu"
                >
                     🛒 ({totalItems})
                </button>
                {isCartOpen && (
                    <div className='absolute right-0 mt-2 bg-white shadow-md border p-4 w-64'>
                        <h3 className='font-semibold mb-4'>Producto añadido</h3>
                        <ul className='space-y-2'>
                            {cart.map((item) => (
                                <li key={item.id} className='flex justify-between'>
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>${item.price * item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                        <div className='mt-4'>
                            <button 
                                onClick={clearCart} 
                                className='w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
                                Vaciar Carrito
                            </button>
                            <Link to="/cart" className='block text-center mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700'>
                                Ver Carrito
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

