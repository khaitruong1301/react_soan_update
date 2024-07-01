import React, { useEffect, useReducer, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const product = {
    name: "Nike Pegasus 41",
    description: "Men's Road Running Shoes",
    price: "3,829,000₫",
    images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300/FF0000/FFFFFF',
        'https://via.placeholder.com/300/00FF00/FFFFFF',
        'https://via.placeholder.com/300/0000FF/FFFFFF',
        'https://via.placeholder.com/300/FFFF00/FFFFFF',
    ],
    sizes: ["EU 40", "EU 40.5", "EU 41", "EU 42", "EU 42.5", "EU 43", "EU 44", "EU 44.5", "EU 45", "EU 45.5", "EU 46", "EU 47", "EU 47.5"]
};

const ProductDetail = (props) => {
    const { id } = useParams();

    const [selectedSize, setSelectedSize] = useState(42);
    const [productDetail, setProductDetail] = useState({});
    const [selectedImage, setSelectedImage] = useState();
    const getProductDetailApi = async () => {
        const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`);
        const data = await res.json();
        //Set state cho productDetail sau khi lấy dữ liệu từ api về
        setProductDetail(data.content);
        //Set state cho image khi ảnh chi tiết được chọn
        setSelectedImage(data.content.image);
    }
    useEffect(() => {
        getProductDetailApi()
    }, [id]) //Thêm dependency id để khi id(param url) thay đổi thì hàm getProductDetail sẽ tự chạy lại với id param mới
    return (
        <div className=" mx-auto items-start min-h-screen ">
            <div className="flex flex-col md:flex-row bg-white p-4 rounded-lg mx-auto w-2/3">
                {/* Image Gallery */}
                <div className="flex flex-col items-end md:items-end ">
                    <img src={productDetail.image} alt="Selected" className="rounded-lg mb-4" style={{ transform: selectedImage, height: 300 }} />
                    <div className="flex space-x-2">
                        {productDetail.detaildetailedImages?.map((item, index) => (
                            <img
                                key={index}
                                src={productDetail.image}
                                alt={`Thumbnail ${index}`}
                                style={{ transform: item }}
                                className={`w-16 h-16 rounded-lg cursor-pointer`}
                                onClick={() => setSelectedImage(item)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className=" ml-14 p-4 w-1/2 ">
                    <h2 className="text-5xl text-black-500 uppercase font-bold">{productDetail.name}</h2>
                    {/* <h1 className="mt-2">{productDetail.shortDescription}</h1> */}
                    <p className="text-gray-600 mt-2">{productDetail.description}</p>
                    <p className="text-2xl text-red-500 mt-2 font-bold">{productDetail.price} $</p>
                    {/* Size Options */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Select Size</h3>
                        <div className="grid grid-cols-12 gap-2 mt-2">
                            {productDetail.size?.map((size, index) => (
                                <button
                                    key={index}
                                    className={`p-2 border rounded-lg ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4">
                        <button className=" p-3 bg-black text-white rounded-lg mb-2 hover:bg-gray-800">Add to cart <i className='fa fa-cart-plus'></i> </button>
                        <button className="p-3 bg-white border rounded-lg hover:bg-gray-100 mx-2">Favourite</button>
                    </div>

                    {/* Product Information */}
                    <div className="mt-4 bg-gray-100 p-3 rounded-lg">
                        <p className="text-gray-600">This product is made with at least 20% recycled content by weight.</p>
                    </div>
                </div>
                <div>

                </div>

            </div>
            <div className='w-2/3 mx-auto'>
                <h2 className="text-2xl font-bold mb-4">Reated Product</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {productDetail.relatedProducts?.map((product, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                            <img src={product.image} alt={product.name} className="w-full rounded-lg mb-4" />
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            <p className="text-gray-600">{product.shortDescription}</p>
                            <p className="text-2xl text-red-500 mt-2 font-bold">{product.price} $</p>

                            {/* Khi click vào link này thì chính component này sẽ render lại (vì vậy nếu để dependency [] thì sẽ chỉ render 1 lần) => vì vậy phải cài đặt id param làm dependency để khi click link useEffect tự chạy lại với id mới */}
                            
                            <NavLink to={`/detail/${product.id}`} alt={product.title} className={'bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block mt-2'}>View detail</NavLink>
                       
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;
