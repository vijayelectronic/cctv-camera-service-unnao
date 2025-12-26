import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const searchCategory = searchParams.get('category') || '';
    const searchText = searchParams.get('search') || '';

    const [filters, setFilters] = useState({
        category: searchCategory,
        brands: [],
        minPrice: '',
        maxPrice: '',
        minRating: 0
    });

    const [sort, setSort] = useState('featured');

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Search
            if (searchText && !product.title.toLowerCase().includes(searchText.toLowerCase())) return false;

            // Category
            if (filters.category && product.category !== filters.category) return false;

            // Brand
            if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false;

            // Price
            if (filters.minPrice && product.price < filters.minPrice) return false;
            if (filters.maxPrice && product.price > filters.maxPrice) return false;

            // Rating
            if (filters.minRating && product.rating < filters.minRating) return false;

            return true;
        }).sort((a, b) => {
            if (sort === 'lowToHigh') return a.price - b.price;
            if (sort === 'highToLow') return b.price - a.price;
            if (sort === 'rating') return b.rating - a.rating;
            return 0; // Featured
        });
    }, [filters, sort, searchText]);

    return (
        <div className="bg-white min-h-screen">
            {/* Header Bar for Shop */}
            <div className="shadow-sm border-b py-3 px-4 mb-4 flex justify-between items-center container mx-auto bg-white">
                <div className="text-sm">
                    <span className="font-bold">{filteredProducts.length}</span> results for <span className="text-amazon-orange font-bold">"{searchText || filters.category || 'All Products'}"</span>
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-sm">Sort by:</label>
                    <select
                        className="border rounded p-1 text-sm focus:outline-amazon-orange"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="featured">Featured</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                        <option value="rating">Avg. Customer Review</option>
                    </select>
                </div>
            </div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 pb-10">
                <Sidebar filters={filters} setFilters={setFilters} />

                <div className="flex-1">
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            <h2 className="text-2xl font-bold mb-2">No products found</h2>
                            <p>Try clearing filters or changing your search.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
