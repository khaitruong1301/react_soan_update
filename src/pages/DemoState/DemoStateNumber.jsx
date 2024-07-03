import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountAction } from '../../store/reducers/countReducer';

const DemoStateNumber = () => {
    const { count } = useSelector(state => state.countReducer); //Lấy dữ liệu từ store về
    const dispatch = useDispatch();
    const handleChangeQuantity = (quantity) => {
        //Tạo action thủ công
        // const action = {
        //     type: 'countReducer/setCountAction',
        //     payload: quantity
        // }
        // hoặc tạo action payload thông qua rxslice action 2 cách tương đương nhau
        const action = setCountAction(quantity)
        dispatch(action);
    }
    
    return (
        <div className='container'>
            <h3 className='display-4'>Demo Increase decrease quantity</h3>
            <div className="flex items-center space-x-4">
                <button className='btn btn-danger' onClick={()=>{
                    handleChangeQuantity(1);
                }}>+</button>
                <h1 className='fs-1'>{count}</h1>
                <button className='btn btn-primary' onClick={()=>{
                    handleChangeQuantity(-1);
                }}>-</button>
            </div>
        </div>
    )
}

export default DemoStateNumber