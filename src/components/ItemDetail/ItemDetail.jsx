import React, { useEffect, useState } from 'react';
import { useCart } from "../Cart/CartContext.jsx";

import { useParams } from 'react-router-dom';
import { getProductById } from '../../Data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({product: 0, stock: 0});
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

     useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const [quantity, setQuantity] = useState(1);
    const decrementQuantity = () => {
        if(quantity > 1 ){ 
            setQuantity(quantity - 1)
        }
    }
    const incrementQuantity = () => {
        if(quantity < product.stock){ //
            setQuantity(quantity + 1)
        }
    }

    const precioTotal = product.price * quantity;

    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='container mx-auto max-w-[1170px] py-20'>
            <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    <img src={product.img} alt="Imagen del producto" className='w-full rounded-[20px]'/>
                </div>
                <div>
                    <h1 className='text-[45px] font-medium uppercase'>{product.name}</h1>
                    <p className='text-[20px] my-[20px]'>{product.despcription}</p>
                    <div>
                        <h3>Tallas disponibles:</h3>
                        <ul className='flex'>
                            {product.sizes.map((size, index) => (
                                <li key={index} className='text-[20px] my-[20px] border-[1px] w-[50px] flex justify-center mx-[10px]'>{size}</li>
                            ))}
                        </ul>
                    </div>
                    <p className='text-[20px] my-[20px]'>Stock: {product.stock}</p>

                    <div className='flex'>
                        <button onClick={decrementQuantity} className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> - </button>
                        <p className='text-[20px] px-[10px]'>{quantity}</p>
                        <button onClick={incrementQuantity} className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> + </button>
                    </div>
                    
                    <p className='text-[20px] my-[20px]'>Precio: ${product.price} por unidad</p>

                    <p className='text-[20px] my-[20px]'>Precio Total: ${precioTotal}</p>
                    
                    <button className='bg-[#7c8796] text-[#ffffff] text-[20px] px-[20px] py-[5px] hover:bg-[#2e3030] rounded-md'>
                        <span>Comprar</span>
                        <ion-icon name="cash-outline" className="text-24px"></ion-icon>
                        </button>
                    <button className='bg-[#7c8796] text-[#ffffff] text-[20px] px-[20px] py-[5px] hover:bg-[#2e3030] rounded-md' onClick={() => addToCart(product,quantity)} >
                        <span> Agregar al carrito </span>
                        <ion-icon name="cart-outline" className="text-24px"></ion-icon>
                        </button>
                </div>
            </div>
        </div>
    );
}