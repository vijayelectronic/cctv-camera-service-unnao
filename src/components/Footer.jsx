import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-amazon-light text-white">
            <div
                className="bg-gray-700 hover:bg-gray-600 text-center py-4 text-sm cursor-pointer transition"
                onClick={scrollToTop}
            >
                Back to top
            </div>

            <div className="container mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700">
                <div>
                    <h3 className="font-bold mb-4">Get to Know Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/" className="hover:underline">About Us</Link></li>
                        <li><Link to="/" className="hover:underline">Careers</Link></li>
                        <li><Link to="/" className="hover:underline">Press Releases</Link></li>
                        <li><Link to="/" className="hover:underline">Vijay Electronics Science</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Connect with Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Make Money with Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/" className="hover:underline">Sell on Vijay Electronics</Link></li>
                        <li><Link to="/" className="hover:underline">Protect Your Brand</Link></li>
                        <li><Link to="/" className="hover:underline">Become an Affiliate</Link></li>
                        <li><Link to="/" className="hover:underline">Fulfilment by Vijay Electronics</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Let Us Help You</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/" className="hover:underline">COVID-19 and Vijay Electronics</Link></li>
                        <li><Link to="/" className="hover:underline">Your Account</Link></li>
                        <li><Link to="/" className="hover:underline">Returns Centre</Link></li>
                        <li><Link to="/" className="hover:underline">100% Purchase Protection</Link></li>
                        <li><Link to="/" className="hover:underline">Help</Link></li>
                    </ul>
                </div>
            </div>

            <div className="py-8 bg-amazon text-center border-t border-gray-700">
                <div className="flex justify-center items-center gap-8 mb-4">
                    <span className="text-2xl font-bold">Vijay Electronics</span>
                </div>
                <div className="text-xs text-gray-400">
                    <p>© 2025 Vijay Electronics, Inc. or its affiliates. Purani Bazar, Unnao.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
