import { useSelector } from "react-redux";

const PostList = () ={

const posts = useSelecter((state) => state.posts)

const renderedPosts = posts.map()

return (

)

}

export default

