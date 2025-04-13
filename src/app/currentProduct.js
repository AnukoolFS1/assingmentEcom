import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "name": "",
    "imageTree": "",
    "imagePlant": "",
    "treeFamily": "",
    "rating": NaN,
    "boughts": NaN,
    "amount": NaN,
    "discount": NaN,
    "age": "",
    "about": "",
    "id": NaN
}

const currentProduct = createSlice({
    name: "product",
    initialState,
    reducers: {
        changeCurrentProduct: (state, action) => {
            if (currencySet.has(action.payload.currency)) {
                state.currency = action.payload.currency
            }
        }
    }
})

export const { changeCurrentProduct } = currentProduct.actions
export default currentProduct.reducer