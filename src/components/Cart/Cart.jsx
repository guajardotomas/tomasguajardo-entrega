import { useCart } from '../Cart/CartContext';

export default function CartPage() {
    const { cart, removeFromCart, getTotalPrice } = useCart();

    return (
        <div className="container mx-auto p-4 pt-40">
            <h2 className="text-2xl font-semibold mb-4">Carrito de compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center">
                                <div>
                                    <p>{item.name} x{item.quantity}</p>
                                    <p>Precio: ${item.price} | Total: ${item.price * item.quantity}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:bg-red-900 hover:text-white rounded-lg px-3"
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h3 className="font-semibold text-xl">Total: ${getTotalPrice()}</h3>
                        <button className=" px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                            Finalizar compra
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
