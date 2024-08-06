import { Link } from 'react-router-dom'
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="UseStateHook">UseState</Link></li>
        <li className="navbar-item"><Link to="UseReduce">UseReduce</Link></li>
        <li className="navbar-item"><Link to="UseeffectHook">UseeffectHook</Link></li>
        <li className="navbar-item"><Link to="UseLayoutEff">UseLayout</Link></li>
        <li className="navbar-item"><Link to="UserefHook">UseRef</Link></li>
        <li className="navbar-item"><Link to="UseMemoHook">UseMemo</Link></li>
        <li className="navbar-item"><Link to="UseCallBack">UseCallBack</Link></li>
        <li className="navbar-item"><Link to="Todos">Todos</Link></li>
        <li className="navbar-item"><Link to="Axios">Axios</Link></li>
        <li className="navbar-item"><Link to="UsersCard">UsersCard</Link></li>
        <li className="navbar-item"><Link to="Quotes">Quotes</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar