import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/header.scss'; 

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/Home">John Doe</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/Home" activeClassName="active">Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Services" activeClassName="active">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Projects" activeClassName="active">Réalisations</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Blog" activeClassName="active">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact" activeClassName="active">Me contacter</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;