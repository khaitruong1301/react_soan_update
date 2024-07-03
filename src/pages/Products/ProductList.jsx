import React, { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';



const ProductList = () => {
  const [inputSearch,setInputSearch] = useState(''); //Sử dụng để lấy dữ liệu từ ô input text (ô tìm kiếm)
  const [products,setProducts] = useState([]); //products là state được lấy từ api về thông qua keyword
  //Lấy giá trị từ param trên url thông qua searchParam.get('ten_tham_so')
  const [searchParam, setSearchParam] = useSearchParams(); //Sử dụng useSearchParam để lấy giá trị từ url hoặc set giá trị ?param cho url (ví dụ:domain.com?param=abc)
  const keyword = searchParam.get('keyword');


  const getProductByKeyword = async () => {
    if (keyword) {
      let res = await fetch(`https://apitraining.cybersoft.edu.vn/api/ProductApi/getall?keyword=${keyword}`);
      const data = await res.json();
      console.log(data)
      setProducts(data)
    }
  }
  useEffect(() => {
    //call api lần đầu tiên sau khi trang load và sẽ call lại mỗi khi url thay đổi giá trị param
    getProductByKeyword()
  }, [keyword])

  return (
    <div>
      <nav className="text-sm text-gray-500 mb-1">
        <NavLink to="./product-management" className="hover:underline">Products</NavLink> &gt;
      </nav>
      <NavLink className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mb-5 inline-block" to="./product"  state={{demo:123}}>New product</NavLink>
      <form className="mb-4" onSubmit={(e) => {
        e.preventDefault();
        //Hàm setSearchParam dùng để gán lại giá trị trên url
        setSearchParam({
          keyword:inputSearch
        })

      }}>
        <input
          type="text"
          className="border p-2 rounded inline "
          placeholder="Search products..."
          onChange={(e) => { 
            setInputSearch(e.target.value)
          }}
        />
        <button type="button" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2" >Search </button>


      </form>

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
            {products.splice(0,10).map((product, index) => (
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
                  <NavLink to={`./product/${product.id}`} className="text-orange-600 hover:text-orange-900">Edit</NavLink>

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
