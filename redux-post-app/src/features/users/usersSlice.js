import { createSlice } from "@reduxjs/toolkit";

const initialState =[

    {id:'0', name: 'vimal'},
    {id:'1', name: 'Ravi'},
    {id:'2', name: 'Ram'},

]

const userSlice = createSlice({

    name: 'users',
    initialState,
    reducers
})