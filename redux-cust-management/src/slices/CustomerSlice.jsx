import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const customerSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers:{
        addCustomerAction(state, action){
           state.push(action.payload)
        },
        deleteCustomer(state, action){
                  const deleteIndex = action.payload;
                  return state.filter((val, index)=> index !== deleteIndex)
         }
    }

})

export const {addCustomerAction, deleteCustomer} = customerSlice.actions;
export default customerSlice.reducer