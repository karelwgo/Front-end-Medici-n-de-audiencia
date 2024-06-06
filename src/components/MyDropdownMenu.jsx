import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DropdownMenu({ title, options }) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {title}
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {options.map((option, index) => (
          <li key={index}>
            <Link className="dropdown-item" to={option.href}>{option.text}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ).isRequired
};

export default DropdownMenu;
