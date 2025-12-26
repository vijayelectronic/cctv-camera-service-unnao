import { Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="bg-white border rounded-sm overflow-hidden hover:shadow-lg transition flex flex-col h-full">
            <Link to={`/product/${product.id}`} className="flex justify-center p-6 bg-gray-50 h-56 items-center">
                <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain mix-blend-multiply" />
            </Link>

            <div className="p-4 flex flex-col flex-1">
                <Link to={`/product/${product.id}`} className="text-gray-900 font-medium hover:text-amazon-orange hover:underline line-clamp-2 mb-1">
                    {product.title}
                </Link>

                <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-amazon-orange">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                        ))}
                    </div>
                    <span className="text-blue-600 text-sm hover:underline">{product.reviews}</span>
                </div>

                <div className="mt-auto">
                    <div className="flex items-baseline gap-2">
                        <span className="text-xs align-top">₹</span>
                        <span className="text-2xl font-medium">{product.price.toLocaleString()}</span>
                        <span className="text-gray-500 text-sm line-through">M.R.P: ₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-gray-500 mb-2">
                        Save ₹{(product.originalPrice - product.price).toLocaleString()} ({(100 - (product.price / product.originalPrice * 100)).toFixed(0)}%)
                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-amazon-orange hover:bg-yellow-500 text-gray-900 text-sm font-medium py-1.5 rounded-full border border-yellow-500 cursor-pointer shadow-sm active:bg-yellow-600"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
