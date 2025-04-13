import { configureStore } from "@reduxjs/toolkit";
import currencyReducers from './projectionSlice'
const store = configureStore({
    reducer: {
        projection: currencyReducers
    }
})

export default store