import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Admin = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <Link to="/" className="bg-gray-800 text-white px-4 py-2 rounded">Back to Shop</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded shadow-sm border-l-4 border-amazon-orange">
                        <h3 className="text-gray-500 font-bold text-sm uppercase">Total Products</h3>
                        <p className="text-3xl font-bold mt-2">{products.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-sm border-l-4 border-blue-500">
                        <h3 className="text-gray-500 font-bold text-sm uppercase">Total Orders</h3>
                        <p className="text-3xl font-bold mt-2">12</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-sm border-l-4 border-green-500">
                        <h3 className="text-gray-500 font-bold text-sm uppercase">Revenue</h3>
                        <p className="text-3xl font-bold mt-2">₹45,200</p>
                    </div>
                </div>

                <div className="bg-white rounded shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b flex justify-between items-center">
                        <h2 className="font-bold text-lg">Product Inventory</h2>
                        <button className="bg-amazon-orange px-4 py-1 text-sm font-medium rounded">Add Product</button>
                    </div>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600 text-sm">
                                <th className="p-4 border-b">ID</th>
                                <th className="p-4 border-b">Product</th>
                                <th className="p-4 border-b">Category</th>
                                <th className="p-4 border-b">Price</th>
                                <th className="p-4 border-b">Stock</th>
                                <th className="p-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {products.map(product => (
                                <tr key={product.id} className="hover:bg-gray-50">
                                    <td className="p-4 border-b text-gray-500">#{product.id}</td>
                                    <td className="p-4 border-b font-medium">{product.title}</td>
                                    <td className="p-4 border-b">{product.category}</td>
                                    <td className="p-4 border-b">₹{product.price}</td>
                                    <td className="p-4 border-b text-green-600">In Stock</td>
                                    <td className="p-4 border-b">
                                        <button className="text-blue-600 hover:underline mr-2">Edit</button>
                                        <button className="text-red-600 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;
