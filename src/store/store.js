
import { configureStore } from '@reduxjs/toolkit';
import countReducer from './reducers/countReducer'
import productReducer from './reducers/productReducer';
export const store = configureStore({
    reducer: {
        //Nơi liệt kê các state của ứng dụng
        countReducer: countReducer,
        productReducer
    }

})


