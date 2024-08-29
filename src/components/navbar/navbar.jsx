import './navbar.css'

const NavBar = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li><a className='navA' href="/">Home</a></li>
          <li><a className='navA' href="/sobre">Sobre</a></li>
          <li><a className='navA' href="/contato">Contato</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar