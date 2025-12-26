import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { getCartCount } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
            setIsOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-amazon shadow-lg text-white">
            {/* Top Bar */}
            <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold flex flex-col leading-none">
                    <span>Vijay</span>
                    <span className="text-sm font-normal text-amazon-accent">Electronics</span>
                </Link>

                {/* Search Bar - Desktop */}
                <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-4">
                    <div className="flex w-full rounded-md overflow-hidden bg-white">
                        <select className="px-2 bg-gray-100 border-r text-gray-700 text-xs border-gray-300 focus:outline-none">
                            <option>All</option>
                            <option>Cameras</option>
                            <option>DVR/NVR</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search CCTV Cameras..."
                            className="flex-1 px-4 py-2 text-gray-900 focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="bg-amazon-orange hover:bg-yellow-500 px-5 flex items-center justify-center">
                            <Search className="w-5 h-5 text-amazon" />
                        </button>
                    </div>
                </form>

                {/* Icons */}
                <div className="flex items-center gap-6">
                    <Link to="/admin" className="hidden md:block hover:border border-transparent p-1">
                        <div className="text-xs text-gray-300">Hello, Admin</div>
                        <div className="font-bold text-sm">Dashboard</div>
                    </Link>

                    <Link to="/cart" className="flex items-end gap-1 hover:border border-transparent p-1 relative">
                        <ShoppingCart className="w-8 h-8" />
                        <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-amazon-orange text-amazon text-xs font-bold px-1 rounded-full">
                            {getCartCount()}
                        </span>
                        <span className="font-bold text-sm hidden md:block">Cart</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Search & Menu */}
            {isOpen && (
                <div className="md:hidden bg-amazon-light p-4 space-y-4">
                    <form onSubmit={handleSearch} className="flex rounded-md overflow-hidden bg-white">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 px-4 py-2 text-gray-900 focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="bg-amazon-orange px-4">
                            <Search className="w-5 h-5 text-gray-900" />
                        </button>
                    </form>
                    <nav className="flex flex-col gap-2 text-white">
                        <Link to="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-700">Home</Link>
                        <Link to="/shop" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-700">All Products</Link>
                        <Link to="/shop?category=Bullet Camera" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-700">Bullet Cameras</Link>
                        <Link to="/shop?category=Dome Camera" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-700">Dome Cameras</Link>
                        <Link to="/admin" onClick={() => setIsOpen(false)} className="py-2">Admin Panel</Link>
                    </nav>
                </div>
            )}

            {/* Bottom Nav */}
            <div className="bg-amazon-light text-white text-sm py-2 px-4 hidden md:flex gap-6 overflow-x-auto">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1 font-bold">
                    <Menu className="w-4 h-4" /> All
                </button>
                <Link to="/shop" className="hover:underline">Best Sellers</Link>
                <Link to="/shop" className="hover:underline">Mobiles</Link>
                <Link to="/shop?category=Bullet Camera" className="hover:underline">Bullet Cameras</Link>
                <Link to="/shop?category=Dome Camera" className="hover:underline">Dome Cameras</Link>
                <Link to="/shop" className="hover:underline">New Releases</Link>
                <Link to="/shop" className="hover:underline">Customer Service</Link>
            </div>
        </header>
    );
};

export default Navbar;
