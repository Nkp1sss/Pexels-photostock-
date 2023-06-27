import './Navbar.scss';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img className="navbar-logo__image" src={logo} width="50px" height="50px" alt="logo" />
        <p className="navbar-logo__title">Pexels</p>
      </Link>
    </nav>
  );
}

export default Navbar;
