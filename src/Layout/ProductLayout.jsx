import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const products = [
  { name: 'Product 3', price: 4999 },
  { name: 'Product 2', price: 3999 },
  { name: 'Product 1', price: 2999 },
];

const ProductLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-md">
            <h2 className="text-xl font-bold mb-4"> 
            <i className='fa fa-home me-2'></i>
             Dashboard</h2>
        <nav>
          <NavLink to="/product-management" className="block py-2 px-4 rounded hover:bg-gray-200 bg-orange-300 text-white">Products</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6" style={{height:600}}>
        <Outlet />
       </main>
    </div>
  );
};

export default ProductLayout;
