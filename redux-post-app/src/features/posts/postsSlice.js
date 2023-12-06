import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: 'It is easy'
    },
    {
        id: '2',
        title: 'Subscribe',
        content: 'Learning react'
      
    },
        {
            id: '3',
            title: 'Subscribe',
            content: 'Like and Share this video'
        },
        {
            id:'4',
            title:'Views',
            content:'Likes, Shares this video'
        }

]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: { 
            reducer(state, action) {
            state.push(action.payload)
        },
        prepare(title,content){
            return{
                payload:{
                    id:nanoid(),
                    title,
                    content
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer