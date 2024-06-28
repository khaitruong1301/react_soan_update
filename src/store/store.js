import {configureStores} from '@reduxjs/toolkit' ;


export const store = configureStores({
    numberState: (state = 1) => state
})      