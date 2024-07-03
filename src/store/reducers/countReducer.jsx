//rxslice: Để tạo redux slice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count:1 //state default
}
const countReducer = createSlice({
  name: 'countReducer', //reducer name
  initialState,
  reducers: {
    setCountAction: (state,action) => { //(1)
        state.count = state.count + action.payload;
    } 
  }
});
export const {setCountAction} = countReducer.actions 
/*
 (1) hàm setCountAction tạo ra 
 actionPayload = {
                  type: 'countReducer/setCountAction',
                  payload: 1 hoặc -1
                }
*/
export default countReducer.reducer

