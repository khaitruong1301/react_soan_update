import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState([])
    const getApi = async () => {
        const res = await fetch('https://apistore.cybersoft.edu.vn/api/Product');
        const data = await res.json();
        setProducts(data.content);
        console.log(data);
    }

    useEffect(() => {
        //Call api ngay sau khi component load xong (Mounting component)
        getApi()
    },[])


    return (
        <div className="container mx-auto">

            <button type="button" onClick={(e)=>{
                getApi()
            }}>Get Api</button>


            <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
            <div className="flex flex-wrap -mx-4 mx-auto">
                {products.map(product => (
                    <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6 ">
                        <div className="bg-white p-2 rounded-lg shadow-lg pb-3">
                            <img src={product.image} alt={product.title} className="w-full   rounded-t-lg " />
                            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                            <p className="text-gray-700 mb-4">{product.price} $</p>
                            <NavLink to={`/detail/${product.id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ">
                                <i className='fa fa-cart-plus'></i> Add to cart
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Products