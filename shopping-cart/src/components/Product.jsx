/* eslint-disable react/prop-types */
const Product = ({product}) => {
  return (
    <div className="product" >
        <div className="img">
            <img src={product.picture} alt={product.name} />
        </div>
        <div className="details">
        <h3>{product.name}</h3>
        <p>Price Rs:{product.amount}</p>
        <button>Add to Cart</button>
        </div>
      
    </div>
  )
};

export default Product