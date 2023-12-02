import { useSelector } from "react-redux";

const PostList = () => {

const posts = useSelector((state) => state.posts)

const renderedPosts = post.map

return (
  <section>
    <h2>Posts</h2>
    {renderedPosts}
  </section>
)


}

export default PostList

