import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetailByIdAsync } from '../../store/reducers/productReducer';

const Detail = () => {
  const {productDetail} = useSelector(state => state.productReducer);

  const {id} = useParams();
  const dispatch = useParams();
  

  const getProductDetail = async () => {
    
    const actionAsync = getProductDetailByIdAsync(id); 
    dispatch(actionAsync);

  }


  useEffect(() => {

    getProductDetail();
  },[id])



  return (
    <div>Detail</div>
  )
}

export default Detail


