import React, { useContext } from "react";
import { ContextGlobal } from "../components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, newData } = useContext(ContextGlobal);

  return (
    <main className={theme}>
{/* <img src={campus} alt='LogoTecno'/> */}

<div className="ver-cursos">
<h1>
          <p>CAMPUS</p>
          <p>TECNO 3F</p>
        </h1>
  <p>¡Explorá el Futuro Tecnológico en Nuestro Campus Virtual!</p>
  <button>Ver cursos</button></div>

<div className="sobreCampus">
  <p className="mini">SOBRE EL CAMPUS</p>
  <h2>
  Les damos la bienvenida al Campus Tecno3F
  </h2>
<p className="informacion">Te ayudamos a empezar tu proceso de aprendizaje más rápido con itinerarios personalizados que podrás recorrer paso a paso, accediendo a los mejores contenidos, recomendados por expertos.</p>
</div>

<div className="infocards">
      <div className="card-grid">
        {newData}
      </div>
</div>


    </main>
  );
};

export default Home;