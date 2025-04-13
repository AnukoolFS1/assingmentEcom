import { createSlice } from "@reduxjs/toolkit";

const currencySet = new Set("INR", "USD")

const initialState = { currency: "INR" }

const currencySlice = createSlice({
    name: "Currency",
    initialState,
    reducers: {
        setCurrency: (state, action) => {
            if (currencySet.has(action.payload.currency)) {
                state.currency = action.payload.currency
            }
        }
    }
})

export const { setCurrency } = currencySlice.actions
export default currencySlice.reducer
