import './navbar.css'

const NavBar = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li><a className='navA' href="#ourServices">Home</a></li>
          <li><a className='navA' href="#aboutUs">Sobre</a></li>
          <li><a className='navA' href="#reviews">Contato</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar