import './Navbar.scss';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Searchbar from '../Searchbar/Searchbar';

function Navbar() {
  const [isHeaderScrolled, setHeaderScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setHeaderScrolled(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const condition = isHeaderScrolled || location.pathname !== '/';

  return (
    <nav className={'navbar ' + (condition ? 'fixed' : '')}>
      <Link to="/" className={'navbar-logo ' + (condition ? 'scrolled' : '')}>
        <img className="navbar-logo__image" src={logo} width="50px" height="50px" alt="logo" />
        <p className="navbar-logo__title">Pexels</p>
      </Link>
      {condition && <Searchbar />}
    </nav>
  );
}

export default Navbar;
