import { useSelector } from "react-redux";

const PostList = () => {

const posts = useSelecter((state) => state.posts)

const renderedPosts = posts.map()

return (
  <article key={posts.id}>
    <h3>{posts.title}</h3>
    <h3></h3>
  </article>
)

}

export default PostList

