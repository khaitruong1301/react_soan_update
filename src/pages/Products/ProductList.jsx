import React from 'react';

const products = [
  { name: 'Product 3', price: 4999,img:'http://picsum.photos/id/50/100/100',type:'A'},
  { name: 'Product 2', price: 3999 ,img:'http://picsum.photos/id/51/100/100',type:'B'},
  { name: 'Product 1', price: 2999,img:'http://picsum.photos/id/52/100/100' ,type:'A'},
];

const ProductList = () => {
  return (
    <div>
      <nav className="text-sm text-gray-500 mb-1">
            <a href="#" className="hover:underline">Products</a> &gt;
            <a href="#" className="hover:underline"> List</a>
          </nav>
       <button class="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mb-2">New product</button>
       <div className="mb-4">
          <input
            type="text"
            className="border p-2 rounded inline "
            placeholder="Search products..."
            value={''}
            onChange={(e) => setSearchTerm('')}
          />
             <button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">Search </button>
        </div>

      {/* Product Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="form-checkbox" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">img</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">type</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={product.img} width={50} height={50} alt='...' />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.type}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-orange-600 hover:text-orange-900">Edit</a>
                  <a href="#" className="text-orange-600 hover:text-orange-900 mx-2">| Delete</a>
                  <a href="#" className="text-orange-600 hover:text-orange-900 mx-2">| View detail</a>

                </td>
            
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="text-sm text-gray-700">
            Showing
            <span className="font-medium"> 1 </span>
            to
            <span className="font-medium"> 3 </span>
            of
            <span className="font-medium"> 3 </span>
            results
          </div>
          <div>
            <label>
              Per page:
              <select className="ml-2 form-select">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
