import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  arrProduct: [],
  productDetail: {

  }
}
const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setArrayProductAction: (state, action) => {
      state.arrProduct = action.payload
    },
    setProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    }
  }
});
export const { setArrayProductAction, setProductDetailAction } = productReducer.actions

export default productReducer.reducer
//---------------- Action async --------------------
export const getAllProductAsync = async (dispatch, getState) => {
  //Bước 1: Call api
  const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product`);
  const data = await res.json();
  //Bước 2: Sau khi lấy dữ liệu api tạo action payload
  const action = setArrayProductAction(data.content);
  //Bước 3: dispatch action payload
  dispatch(action);
}


export const getProductDetailByIdAsync = (id) => {

  return async (dispatch, getState) => {
    //Bước 1: Call api
    const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`);
    const data = await res.json();
    //Bước 2: Sau khi lấy dữ liệu api tạo action payload
    const action = setProductDetailAction(data.content);
    //Bước 3: dispatch action payload
    dispatch(action);
  }
}

