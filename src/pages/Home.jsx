import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import SEOContent from '../components/SEOContent';

const Home = () => {
    // Get top rated products for demo
    const topProducts = products.filter(p => p.rating > 4.5).slice(0, 4);
    const bestSellers = products.slice(0, 4); // Dummy best sellers
    const deals = products.filter(p => p.price < 2000).slice(0, 4);

    return (
        <div className="bg-gray-100 min-h-screen pb-10">
            <Hero />

            {/* Category Grid - Amazon style overlapping hero */}
            <div className="container mx-auto px-4 -mt-16 relative z-30 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white p-4 shadow-md flex flex-col h-[300px]">
                        <h3 className="text-xl font-bold mb-4">CCTV Cameras</h3>
                        <div className="flex-1 overflow-hidden flex items-center justify-center">
                            <img src="/images/9.png" alt="Cameras" className="max-h-[200px]" />
                        </div>
                        <Link to="/shop?category=Bullet Camera" className="text-blue-600 hover:text-orange-600 hover:underline text-sm font-medium mt-2">See more</Link>
                    </div>
                    <div className="bg-white p-4 shadow-md flex flex-col h-[300px]">
                        <h3 className="text-xl font-bold mb-4">DVR & NVR Systems</h3>
                        <div className="flex-1 overflow-hidden flex items-center justify-center">
                            <img src="/images/7.png" alt="DVR" className="max-h-[200px]" />
                        </div>
                        <Link to="/shop?category=NVR/DVR" className="text-blue-600 hover:text-orange-600 hover:underline text-sm font-medium mt-2">See more</Link>
                    </div>
                    <div className="bg-white p-4 shadow-md flex flex-col h-[300px]">
                        <h3 className="text-xl font-bold mb-4">Security Accessories</h3>
                        <div className="grid grid-cols-2 gap-2 flex-1">
                            <div className="flex flex-col">
                                <img src="/images/17.png" className="h-20 object-contain mx-auto" />
                                <span className="text-xs text-center text-gray-500">HDD</span>
                            </div>
                            <div className="flex flex-col">
                                <img src="/images/18.png" className="h-20 object-contain mx-auto" />
                                <span className="text-xs text-center text-gray-500">Cable</span>
                            </div>
                            <div className="flex flex-col">
                                <img src="/images/20.png" className="h-20 object-contain mx-auto" />
                                <span className="text-xs text-center text-gray-500">Power</span>
                            </div>
                        </div>
                        <Link to="/shop?category=Accessories" className="text-blue-600 hover:text-orange-600 hover:underline text-sm font-medium mt-2">See more</Link>
                    </div>
                    <div className="bg-white p-4 shadow-md flex flex-col h-[300px]">
                        <h3 className="text-xl font-bold mb-4">Installation Services</h3>
                        <div className="flex-1 overflow-hidden flex items-center justify-center relative">
                            <img src="/images/16.png" alt="Services" className="max-h-[200px] opacity-80" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-white/80 px-2 py-1 rounded shadow text-sm">Service Center</span>
                            </div>
                        </div>
                        <span className="text-sm mt-2 text-gray-700">Expert CP Plus & Hikvision Installation in Unnao</span>
                        <Link to="/shop" className="text-blue-600 hover:text-orange-600 hover:underline text-sm font-medium">Contact Us</Link>
                    </div>
                </div>
            </div>

            {/* Product Rows */}
            <div className="container mx-auto px-4 space-y-8">

                {/* Deal of the Day */}
                <div className="bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Todays Deals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {deals.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* Best Sellers */}
                <div className="bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Best Sellers in Surveillance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bestSellers.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                <div className="bg-white p-8 text-center border-t">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-2xl font-bold">Trusted Electronics Service Near Unnao</h2>
                        <p className="text-gray-600">
                            Vijay Electronics offers the best CCTV camera price in Unnao. We provide professional installation, repair, and maintenance services for CP Plus, Hikvision, and more.
                            Visit our store in Purani Bazar, Unnao for genuine products and warranty support.
                        </p>
                        <button className="bg-amazon-orange px-8 py-2 rounded-sm font-medium hover:bg-yellow-500">Call Now: 8090090051</button>
                    </div>
                </div>

            </div>

            <SEOContent />
        </div>
    );
};

export default Home;
