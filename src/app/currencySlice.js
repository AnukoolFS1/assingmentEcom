import { createSlice } from "@reduxjs/toolkit";

const currencySet = new Set(["INR", "USD"])

const initialState = { currency: "INR" }

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        changeCurrency: (state, action) => {
            console.log(action.payload.currency)
            console.log(currencySet.has(action.payload.currency))
            if (currencySet.has(action.payload.currency)) {
                state.currency = action.payload.currency
            }
        }
    }
})

export const { changeCurrency } = currencySlice.actions
export default currencySlice.reducer
