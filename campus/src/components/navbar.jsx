import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import { BsLightbulbFill, BsLightbulbOffFill} from 'react-icons/bs';
import logotecno3f from "../images/logotecno3f.png"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { setTheme, theme } = useContext(ContextGlobal);

  const handleClick = (e) => {
    e.preventDefault();
      theme === "" ? setTheme("dark") : setTheme("");
  };

  return (
    <nav className={theme}>
      <div className="logoheader">
      <img src={logotecno3f} alt='LogoTecno'/></div>
      <div className="nav1">
      <Link to="/">TECNO 3F</Link>
      <Link to="/">CURSOS</Link>
      <Link to="/">PREGUNTAS</Link></div>
      <div className="nav2">
      <Link to="/">REGISTRARSE</Link></div>
      <div className="nav3">
      <Link to="/">WEBCAMPUS</Link></div>
       {/* <Link to="/contact">Contacto</Link> */}
      <button onClick={handleClick}> {theme==="dark"?<BsLightbulbFill/>:<BsLightbulbOffFill/>}  </button>
    </nav>
  );
}

export default Navbar;