import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductAsync } from '../store/reducers/productReducer';
const Home = () => {

    //Dùng useSelector để lấy arrProduct từ productReducer về
    const {arrProduct} = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const getAllProduct = async () => {
        //Import action async từ file ngoài vào component (logic api đã được tách ra file khác)
        const actionAsync = getAllProductAsync;
        //Dispatch để thực thi action async
        dispatch(actionAsync);
    }
    useEffect(()=>{
        //Gọi api
        getAllProduct();
    },[])


    
    return (
        <div className='container'>
            <h3 className='display-4'>Shoes shop</h3>
            <div className='row'>
                {arrProduct.map((item,index)=>{ 
                    return <div className='col-3 mt-2' key={index}>
                        <div className="card">
                            <img src={item.image} alt='...' />
                            <div className='card-body'>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <button className='btn btn-dark'><i className='fa fa-cart-plus'></i> Add to cart</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home