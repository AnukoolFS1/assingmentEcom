import { configureStore } from "@reduxjs/toolkit";
import currencyReducers from './currencySlice'
const store = configureStore({
    reducer: {
        currency: currencyReducers
    }
})

export default store