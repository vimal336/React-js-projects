import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/CustomerSlice"

export const store = configureStore({
    devTools:true,
    reducer:{
        customer: customerReducer
    }
})