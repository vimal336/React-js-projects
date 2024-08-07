import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">Electronics</div>
      <ul>
        <li>
          <Link to = {"/"}>Home</Link>
        </li>
        <li>
        <Link to = {"/Cart"}>View Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header