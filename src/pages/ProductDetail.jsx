import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useState } from 'react';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();
    const [mainImage, setMainImage] = useState(product?.image);

    if (!product) return <div className="p-10 text-center">Product not found</div>;

    return (
        <div className="bg-white min-h-screen pb-10">
            {/* Breadcrumb - Optional */}
            <div className="bg-gray-100 py-2 px-4 text-xs text-gray-500 mb-4">
                Home / {product.category} / {product.brand} / {product.title}
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

                {/* Gallery */}
                <div className="lg:col-span-5 flex gap-4">
                    <div className="flex flex-col gap-2">
                        {[product.image, product.image, product.image].map((img, idx) => (
                            <button
                                key={idx}
                                className={`border rounded p-1 hover:shadow-md ${mainImage === img ? 'ring-2 ring-amazon-orange' : ''}`}
                                onMouseEnter={() => setMainImage(img)}
                            >
                                <img src={img} className="w-12 h-12 object-contain" alt="thumb" />
                            </button>
                        ))}
                    </div>
                    <div className="flex-1 border rounded flex items-center justify-center p-4 relative group overflow-hidden bg-white">
                        <img
                            src={mainImage || product.image}
                            className="max-h-[400px] object-contain transition-transform duration-500 group-hover:scale-150 cursor-crosshair mix-blend-multiply"
                            alt={product.title}
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="lg:col-span-4 space-y-4">
                    <h1 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
                        {product.title}
                    </h1>
                    <Link to="/shop" className="text-blue-600 hover:text-orange-700 hover:underline text-sm">Visit the {product.brand} Store</Link>

                    <div className="flex items-center gap-2">
                        <div className="flex text-amazon-orange text-sm">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                        </div>
                        <span className="text-blue-600 text-sm hover:underline">{product.reviews} ratings</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-sm text-blue-600 hover:underline">Search this page</span>
                    </div>

                    <hr className="border-gray-200" />

                    <div>
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-red-700 text-xl font-light">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
                            <span className="text-xs align-top">₹</span>
                            <span className="text-3xl font-medium text-gray-900">{product.price.toLocaleString()}</span>
                        </div>
                        <div className="text-gray-500 text-sm mb-2">
                            M.R.P.: <span className="line-through">₹{product.originalPrice.toLocaleString()}</span>
                        </div>
                        <div className="text-xs text-gray-700">Inclusive of all taxes</div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-3 gap-2 text-center text-xs text-blue-900">
                        <div className="flex flex-col items-center p-2">
                            <div className="bg-gray-100 rounded-full p-2 mb-1"><RotateCcw size={16} /></div>
                            <span>7 days Replacement</span>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <div className="bg-gray-100 rounded-full p-2 mb-1"><Truck size={16} /></div>
                            <span>Free Delivery</span>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <div className="bg-gray-100 rounded-full p-2 mb-1"><ShieldCheck size={16} /></div>
                            <span>1 Year Warranty</span>
                        </div>
                    </div>

                    <hr className="border-gray-200 my-2" />

                    <div className="space-y-2">
                        <h3 className="font-bold text-sm">About this item</h3>
                        <ul className="list-disc pl-5 text-sm space-y-1 text-gray-800">
                            <li>{product.description}</li>
                            <li>Brand: {product.brand}</li>
                            <li>Category: {product.category}</li>
                            {Object.entries(product.specs).map(([key, val]) => (
                                <li key={key} className="capitalize">{key}: {val}</li>
                            ))}
                            <li>Best CCTV camera price in Unnao at Vijay Electronics.</li>
                        </ul>
                    </div>
                </div>

                {/* Buy Box */}
                <div className="lg:col-span-3">
                    <div className="border rounded-md p-4 shadow-sm bg-white">
                        <div className="text-3xl font-medium mb-2">₹{product.price.toLocaleString()}</div>

                        <div className="text-sm text-emerald-700 font-medium mb-4">In Stock.</div>

                        <div className="text-xs text-gray-600 mb-4">
                            Sold by <span className="text-blue-600">Vijay Electronics</span> and Delivered by Amazon.
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={() => addToCart(product)}
                                className="w-full bg-amazon-orange hover:bg-yellow-500 rounded-full py-2 text-sm text-gray-900 shadow-sm border border-yellow-500"
                            >
                                Add to Cart
                            </button>
                            <button className="w-full bg-amazon-accent hover:bg-orange-400 rounded-full py-2 text-sm text-gray-900 shadow-sm border border-orange-400">
                                Buy Now
                            </button>
                        </div>

                        <div className="mt-4 text-xs text-gray-500 flex items-center gap-1">
                            <ShieldCheck size={14} className="text-gray-400" />
                            <span>Secure transaction</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;
