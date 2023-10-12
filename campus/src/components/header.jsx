import React from 'react';
import { Link } from 'react-router-dom'; 
import logotecno3f from './assets/logotecno3f.png';


function Header() {
  return (
    <nav className="navbar">
       <Link to="/">
        <img src={logotecno3f} alt="Logo Tecno 3F" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/tecno3f">Tecno 3F</Link>
        </li>
        <li className="nav-item">
          <Link to="/cursos">Cursos</Link>
        </li>
        <li className="nav-item">
          <Link to="/preguntas">Preguntas</Link>
        </li>
        <li className="nav-item">
          <Link to="/registrarse">Registrarse</Link>
        </li>
        <li className="nav-item">
          <Link to="/webcampus">WebCampus</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
