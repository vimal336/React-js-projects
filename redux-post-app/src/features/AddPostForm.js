import { useState  } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {

const dispatch = useDispatch() 
const [title, setTitle] = useState('')
const [content, setContent] = useState('')

const onTitleChanged = e => setTitle(e.target.value)
const onContentChanged = e => setContent(e.target.value)

const 

  return (
    <section>
        <h2> Add a New Post </h2>
        <form>
          <input
          type = "text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          />
          <label htmlFor="postContent">Content:</label>
          <textarea
           id="postContent"
           name="postContent"
           value={content}
           onChange={onContentChanged}
          />
        </form>
    </section>
  )

}


export default AddPostForm