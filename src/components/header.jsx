import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-kasa.svg'
import "../styles/_header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="header__logo" />
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'header__link active' : 'header__link'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'header__link active' : 'header__link'
          }
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header