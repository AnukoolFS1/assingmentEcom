import { configureStore } from "@reduxjs/toolkit";
import currencyReducers from './projectionSlice';
import currentProductReducer from "./currentProduct"


const store = configureStore({
    reducer: {
        projection: currencyReducers,
        product: currentProductReducer
    }
})

export default store