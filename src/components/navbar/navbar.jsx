import './navbar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li><Link className='navA' to="/">Home</Link></li>
          <li><Link className='navA' to="/sobre">Sobre</Link></li>
          <li><Link className='navA' to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar