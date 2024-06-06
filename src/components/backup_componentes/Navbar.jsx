import React from 'react';

function Navbar({ usuario }) {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Rating</a>
            </li>
          </ul>
          <div className="usuario-info">
            <span>{usuario.nombre}</span>
            <img src={usuario.imagen} alt="Imagen de Usuario" />
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;