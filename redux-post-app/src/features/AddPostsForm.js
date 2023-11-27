import { useState  } from "react";

const AddPostsForm = () => {

const [title, setTitle] = useState('')
const [content, setContent] = useState('')

  return (
    <section>
        <h2> Add a New Post </h2>
        <form>
          <dl class="row">
            <dt class="col-sm-3">Term</dt>
            <dd class="col-sm-9">definition</dd>
            <dt class="col-sm-3">Term</dt>
            <dd class="col-sm-9">definition</dd>
            <dt class="col-sm-3 text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit.</dt>
            <dd class="col-sm-9">Term</dd>
            <dt class="col-sm-3">Nesting</dt>
            <dd class="col-sm-9">
              <dl class="row">
                <dt class="col-sm-4">Nested title</dt>
                <dd class="col-sm-8">Nested definition</dd>
              </dl>
            </dd>
          </dl>
          
        </form>
    </section>
  )

}


export default AddPostsForm