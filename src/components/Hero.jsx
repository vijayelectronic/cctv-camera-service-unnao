import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        bg: "bg-gradient-to-r from-gray-900 to-gray-800",
        title: "Best CCTV Camera Price in Unnao",
        subtitle: "CP Plus Authorized Dealer & Service Center",
        cta: "Shop Now",
        link: "/shop",
        image: "/images/1.png" // Using one of the product images as hero element
    },
    {
        bg: "bg-gradient-to-r from-blue-900 to-slate-800",
        title: "Secure Your Home & Business",
        subtitle: "Professional Installation Services Available",
        cta: "View Services",
        link: "/shop?category=Service",
        image: "/images/2.png"
    },
    {
        bg: "bg-gradient-to-r from-green-900 to-emerald-900",
        title: "Up to 50% Off on Brands",
        subtitle: "Hikvision, Dahua, Godrej & More",
        cta: "See Deals",
        link: "/shop",
        image: "/images/3.png"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-[1500px] mx-auto">
            <div className="relative h-[250px] md:h-[400px] bg-gray-200 overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'} ${slide.bg}`}
                    >
                        <div className="h-full container mx-auto px-6 md:px-12 flex items-center justify-between">
                            <div className="text-white max-w-lg z-20">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{slide.title}</h2>
                                <p className="text-lg md:text-xl mb-6 text-gray-200">{slide.subtitle}</p>
                                <Link to={slide.link} className="inline-block bg-amazon-orange text-gray-900 font-bold py-2 px-6 rounded-sm hover:bg-yellow-500 transition">
                                    {slide.cta}
                                </Link>
                            </div>
                            <div className="hidden md:block h-3/4 relative z-10">
                                {/* Decorative image styling */}
                                <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full"></div>
                                <img src={slide.image} alt="Hero" className="h-full object-contain relative drop-shadow-2xl" />
                            </div>
                        </div>
                        {/* Overlay gradient for fade effect at bottom like Amazon */}
                        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent z-20"></div>
                    </div>
                ))}

                <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 hover:bg-white/20 rounded-sm">
                    <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 hover:bg-white/20 rounded-sm">
                    <ChevronRight className="w-8 h-8 text-white" />
                </button>
            </div>
        </div>
    );
};

export default Hero;
