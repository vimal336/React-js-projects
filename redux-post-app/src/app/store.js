import { configureStore  } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice'
import { Reducer } from "react";


export const store = configureStore({
    reducer:{
      posts : postsReducer
      
    }
})