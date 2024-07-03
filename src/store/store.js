
import { configureStore } from '@reduxjs/toolkit';
import countReducer from './reducers/countReducer'
export const store = configureStore({
    reducer: {
        //Nơi liệt kê các state của ứng dụng
        countReducer: countReducer
    }

})


