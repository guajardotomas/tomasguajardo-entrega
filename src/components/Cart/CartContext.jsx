import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => {
    return useContext(CartContext);
};

const CartProvider = ({ children }) =>{
    const [ cart, setCart ] = useState(() =>{
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() =>{
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart]);

    const addToCart = (item,quantity = 1) => {
        setCart((prevCart) =>{
            const existingItem = prevCart.find((i) =>i.id === item.id);

            if(existingItem){
                return prevCart.map((i) =>
                    i.id === item.id
                        ?{...i,quantity: i.quantity + quantity, price: item.price} : i
                );
            }

            return[...prevCart,{...item,quantity,price:item.price }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) =>{
            if(typeof item.price !== "number" || typeof item.quantity !== "number"){
                console.error("precio o cantidad no son validos", item);
                return total;
            }
            return total + item.price * item.quantity;
        },0);
    };

    return(
        <CartContext.Provider value={{ cart,addToCart,removeFromCart, clearCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );   
};

export default CartProvider;