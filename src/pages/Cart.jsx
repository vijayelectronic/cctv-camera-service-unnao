import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart = () => {
    const { cart, updateQty, removeFromCart, getCartTotal, getCartCount } = useCart();

    if (cart.length === 0) {
        return (
            <div className="bg-gray-100 min-h-screen p-8">
                <div className="bg-white p-8 max-w-4xl mx-auto shadow-sm text-center">
                    <h1 className="text-2xl font-bold mb-4">Your Amazon Cart is empty.</h1>
                    <p className="mb-6 text-sm">Check your Saved for Later items below or continue shopping.</p>
                    <Link to="/" className="bg-amazon-orange px-6 py-2 rounded-md font-medium text-sm">Continue Shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen p-4 md:p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Cart Items */}
                <div className="lg:col-span-3 bg-white p-6 shadow-sm">
                    <h1 className="text-2xl font-medium border-b pb-4 mb-4 flex justify-between">
                        <span>Shopping Cart</span>
                        <span className="text-sm font-normal text-gray-500">Price</span>
                    </h1>

                    <div className="space-y-6">
                        {cart.map(item => (
                            <div key={item.id} className="flex gap-4 border-b pb-6 last:border-0 last:pb-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <Link to={`/product/${item.id}`} className="text-lg font-medium text-blue-700 hover:underline line-clamp-2">
                                                {item.title}
                                            </Link>
                                            <div className="text-xs text-green-700 my-1">In Stock</div>
                                            <div className="text-xs text-gray-500 mb-1">Eligible for FREE Shipping</div>
                                            <div className="text-xs mb-2">
                                                <span className="font-bold">Brand:</span> {item.brand}
                                            </div>

                                            <div className="flex items-center gap-4 mt-2">
                                                <div className="flex items-center border rounded shadow-sm bg-gray-50">
                                                    <button onClick={() => updateQty(item.id, -1)} className="p-1 px-2 hover:bg-gray-200"><Minus size={14} /></button>
                                                    <span className="px-2 text-sm font-medium">{item.qty}</span>
                                                    <button onClick={() => updateQty(item.id, 1)} className="p-1 px-2 hover:bg-gray-200"><Plus size={14} /></button>
                                                </div>
                                                <div className="h-4 border-l border-gray-300"></div>
                                                <button onClick={() => removeFromCart(item.id)} className="text-sm text-blue-600 hover:underline hover:text-red-700">Delete</button>
                                            </div>
                                        </div>
                                        <div className="text-right font-bold text-lg">
                                            ₹{item.price.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-right mt-4 text-lg">
                        Subtotal ({getCartCount()} items): <span className="font-bold">₹{getCartTotal().toLocaleString()}</span>
                    </div>
                </div>

                {/* Checkout Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 shadow-sm sticky top-24">
                        <div className="text-lg mb-4">
                            Subtotal ({getCartCount()} items): <span className="font-bold">₹{getCartTotal().toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-4 text-sm">
                            <input type="checkbox" id="gift" />
                            <label htmlFor="gift">This order contains a gift</label>
                        </div>
                        <button className="w-full bg-amazon-orange hover:bg-yellow-500 py-2 rounded-md shadow-sm border border-yellow-500 text-sm font-medium mb-4">
                            Proceed to Buy
                        </button>

                        {/* Mock Checkout Form */}
                        <div className="border-t pt-4 mt-4 text-sm bg-gray-50 p-2 rounded">
                            <h4 className="font-bold mb-2">Shipping Details (Mock)</h4>
                            <input type="text" placeholder="Full Name" className="w-full border p-1 mb-2 rounded" />
                            <textarea placeholder="Address" className="w-full border p-1 mb-2 rounded" rows="2"></textarea>
                            <select className="w-full border p-1 rounded">
                                <option>Cash on Delivery</option>
                                <option>UPI</option>
                                <option>Card</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cart;
