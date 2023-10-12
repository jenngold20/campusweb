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
      <img src={logotecno3f} alt='LogoTecno'/>
      <Link to="/">TECNO 3F</Link>
      <Link to="/">CURSOS</Link>
      <Link to="/">PREGUNTAS</Link>
      <Link to="/">REGISTRARSE</Link>
      <Link to="/">WEBCAMPUS</Link>
       {/* <Link to="/contact">Contacto</Link> */}
      <button onClick={handleClick}> {theme==="dark"?<BsLightbulbFill/>:<BsLightbulbOffFill/>}  </button>
    </nav>
  );
}

export default Navbar;