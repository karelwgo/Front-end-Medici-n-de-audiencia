import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DropdownMenu from './MyDropdownMenu';

function Navbar({ usuario, imagenUsuario }) {
  const menuOptions = [ 
    { text: 'My Rating', href: '/main' },
    { text: 'Others Ratings', href: '/main' },
    { text: 'Web Rating', href: '/main' }
  ];

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Inicio</Link>
          </li>
          <DropdownMenu title="My Rating" options={menuOptions} />
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </ul>
        <div className="usuario-info">
          <span className="navbar-brand">{usuario}</span>
          <img src={imagenUsuario} alt="Imagen de Usuario" className="navbar-img" />
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  usuario: PropTypes.string.isRequired,
  imagenUsuario: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  usuario: 'Not user login',
  imagenUsuario: 'https://via.placeholder.com/150',
};

export default Navbar;

