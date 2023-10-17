import { createContext, useState, useEffect, useMemo } from "react";
import Card from "../card";


export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("");
  const [data, setData] = useState([]);
  const [fav, setFav] = useState([]);

  // Define tus datos de ejemplo aquí
  const datosEjemplo = [
    {
      id: 1,
      icon: "school.png",      
      title: "Instructores/as",
      description: "Destacan por su compromiso y capacidad de transmitir conocimientos de manera clara y efectiva.",
    },
    {
      id: 2,
      icon: "language",
      title: "Clases Online",
      description: "Aprende conocimientos tecnológicos de forma dinámica y flexible desde cualquier lugar.",
    },
    {
      id: 3,
      icon: "create",
      title: "Proyectos",
      description: "Fomentamos la colaboración y el trabajo en equipo a través de proyectos y actividades grupales.",
    },
    {
      id: 4,
      icon: "group",
      title: "Material Online",
      description: "Accede a todas las presentaciones, videos, lecturas y ejercicios en cualquier momento.",
    },
    
  ];
  

  useEffect(() => {
    setData(datosEjemplo);
  }, []);

  const newData = useMemo(() => {
    console.log('Processing data...');
    return data.map(item => (
      <Card
        key={item.id}
        icon={item.icon}
        title={item.title}
        description={item.description}
      />
    ));
  }, [data]);

  return (
    <ContextGlobal.Provider value={{ theme, setTheme, data, fav, setFav, newData }}>
      {children}
    </ContextGlobal.Provider>
  );
};

