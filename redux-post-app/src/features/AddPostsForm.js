import { useState  } from "react";

const AddPostsForm = () => {

const [title, setTitle] = useState('')
const [content, setContent] = useState('')

  return (
    <section>
        <h2> Add a New Post </h2>
        <form>
          <input
          type = "text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={}
          />
        </form>
    </section>
  )

}


export default AddPostsForm