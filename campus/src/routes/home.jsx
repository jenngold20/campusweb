import React, { useContext } from "react";
import { ContextGlobal } from "../components/utils/global.context";
import campus from "../images/campus.png"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, newData } = useContext(ContextGlobal);

  return (
    <main className={theme}>
<img src={campus} alt='LogoTecno'/>

<div className="ver-cursos">
  <h1>CAMPUS TECNO 3F</h1>
  <p>¡Explorá el Futuro Tecnológico en Nuestro Campus Virtual!</p>
  <button>Ver cursos</button></div>
      <div className="card-grid">
        {newData}
      </div>
    </main>
  );
};

export default Home;