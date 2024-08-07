import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const customerSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers:{
        addCustomerAction(state, action){
           state.push(action.payload)
        }
    }

})

export const {addCustomerAction} = customerSlice.actions;
export default customerSlice.reducer