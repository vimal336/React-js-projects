import { useSelector } from "react-redux";

const PostList = () => {

const posts = useSelecter((state) => state.posts)

const renderedPosts = posts.map(post => (

  <article key={posts.id}>
    <h3>{posts.title}</h3>
    <p>{posts.content.substring(0, 100)}</p>
  </article>
))

return (
  <section>
    <h2></h2>
  </section>
)


}

export default PostList

