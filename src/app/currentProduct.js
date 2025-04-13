import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: {
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
}

const currentProduct = createSlice({
    name: "product",
    initialState,
    reducers: {
        changeCurrentProduct: (state, action) => {
            state.product = action.payload.product
        }
    }
})

export const { changeCurrentProduct } = currentProduct.actions
export default currentProduct.reducer