import { brands, categories } from '../data/products';
import { Star } from 'lucide-react';

const Sidebar = ({ filters, setFilters }) => {
    const handleCategoryChange = (cat) => {
        setFilters(prev => ({ ...prev, category: cat === prev.category ? '' : cat }));
    };

    const handleBrandChange = (brand) => {
        setFilters(prev => {
            const newBrands = prev.brands.includes(brand)
                ? prev.brands.filter(b => b !== brand)
                : [...prev.brands, brand];
            return { ...prev, brands: newBrands };
        });
    };

    const handleRatingChange = (rating) => {
        setFilters(prev => ({ ...prev, minRating: rating }));
    };

    return (
        <aside className="w-full md:w-64 flex-shrink-0 border-r pr-4 space-y-6">
            {/* Categories */}
            <div>
                <h3 className="font-bold text-sm mb-2">Department</h3>
                <ul className="text-sm space-y-1 ml-1">
                    <li
                        className={`cursor-pointer hover:text-amazon-orange ${filters.category === '' ? 'font-bold text-amazon-orange' : ''}`}
                        onClick={() => handleCategoryChange('')}
                    >
                        Any Department
                    </li>
                    {categories.map(cat => (
                        <li
                            key={cat}
                            className={`cursor-pointer hover:text-amazon-orange ${filters.category === cat ? 'font-bold text-amazon-orange' : ''}`}
                            onClick={() => handleCategoryChange(cat)}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Brands */}
            <div>
                <h3 className="font-bold text-sm mb-2">Brands</h3>
                <ul className="text-sm space-y-1 ml-1">
                    {brands.map(brand => (
                        <li key={brand} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id={brand}
                                checked={filters.brands.includes(brand)}
                                onChange={() => handleBrandChange(brand)}
                                className="rounded text-amazon-orange focus:ring-amazon-orange"
                            />
                            <label htmlFor={brand} className="cursor-pointer hover:text-amazon-orange">{brand}</label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Reviews */}
            <div>
                <h3 className="font-bold text-sm mb-2">Customer Review</h3>
                <ul className="ml-1 space-y-1">
                    {[4, 3, 2, 1].map(star => (
                        <li
                            key={star}
                            className="flex items-center gap-1 cursor-pointer hover:text-amazon-orange"
                            onClick={() => handleRatingChange(star)}
                        >
                            <div className="flex text-amazon-orange">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < star ? 'fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <span className="text-sm">& Up</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price */}
            <div>
                <h3 className="font-bold text-sm mb-2">Price</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    ₹<input
                        type="number"
                        placeholder="Min"
                        className="w-16 border rounded px-1"
                        value={filters.minPrice}
                        onChange={(e) => setFilters(prev => ({ ...prev, minPrice: Number(e.target.value) }))}
                    />
                    -
                    ₹<input
                        type="number"
                        placeholder="Max"
                        className="w-16 border rounded px-1"
                        value={filters.maxPrice}
                        onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
                    />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
