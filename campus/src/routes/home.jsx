import React, { useContext, useRef  } from "react";
import { ContextGlobal } from "../components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, newData, newData2 } = useContext(ContextGlobal);
  const conoceCursosRef = useRef(null);

  const scrollToConoceCursos = () => {
    conoceCursosRef.current.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <main className={theme}>
{/* <img src={campus} alt='LogoTecno'/> */}

<div className="ver-cursos">
<h1>
          <p>CAMPUS</p>
          <p>TECNO 3F</p>
        </h1>
  <p>¡Explorá el Futuro Tecnológico en Nuestro Campus Virtual!</p>
  <button onClick={scrollToConoceCursos}>Ver cursos</button></div>

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


<div className="conoce"  ref={conoceCursosRef}>
<p className="mini2">CURSOS</p>

<h2>Conocé los cursos</h2>

<nav className="mini-nav">
    <ul>
      <li ><a href="#ver-todos" className="verTodos">Ver Todos</a></li>
      <li><a href="#cursos">Cursos</a></li>
      <li><a href="#capacitaciones">Capacitaciones</a></li>
      <li><a href="#empresas">Empresas</a></li>
    </ul>
  </nav>

</div>

<div className="cursosDispo">
        {newData2}
</div>



    </main>
  );
};

export default Home;