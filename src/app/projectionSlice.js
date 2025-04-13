import { createSlice } from "@reduxjs/toolkit";

const currencySet = new Set(["INR", "USD"])
const categorySet = new Set(["","TREE", "PLANT", "SEEDS"])

const initialState = { currency: "INR", category: "" }

const projectionSlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        changeCurrency: (state, action) => {
            if (currencySet.has(action.payload.currency)) {
                state.currency = action.payload.currency
            }
        },
        changeCategory: (state, action) => {
            console.log('cate')
            if (categorySet.has(action.payload.category)) {
                state.category = action.payload.category
            }
        }
    }
})

export const { changeCurrency, changeCategory } = projectionSlice.actions
export default projectionSlice.reducer
