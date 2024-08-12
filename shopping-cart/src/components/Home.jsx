import { useState } from "react"
import  data from "../assets/product.json"
import Product from "./Product";

const Home = () => {
  const [products] = useState(data);
  return (
    <div className="product-container">
      {products.map(()=>(
        <Product key={product.id} product = {product}/>
      ))}
    </div>
  )
}

export default Home