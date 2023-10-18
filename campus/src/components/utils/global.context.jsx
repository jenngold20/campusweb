import { createContext, useState, useEffect, useMemo } from "react";
import Card from "../card";
import Card2 from "../card2";



export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [fav, setFav] = useState([]);

  const datosEjemplo = [
    {
      id: 1,
      icon: 0,      
      title: "Instructores/as",
      description: "Destacan por su compromiso y capacidad de transmitir conocimientos de manera clara y efectiva.",
    },
    {
      id: 2,
      icon: 0,
      title: "Clases Online",
      description: "Aprende conocimientos tecnológicos de forma dinámica y flexible desde cualquier lugar.",
    },
    {
      id: 3,
      icon: 0,
      title: "Proyectos",
      description: "Fomentamos la colaboración y el trabajo en equipo a través de proyectos y actividades grupales.",
    },
    {
      id: 4,
      icon: 0,
      title: "Material Online",
      description: "Accede a todas las presentaciones, videos, lecturas y ejercicios en cualquier momento.",
    },
    
  ];
  

  const cursosCard = [
    {
      id: 1,
      icon: 0,      
      title: "Curso de Marketing Digital",
      description: "Si tenes tu propio negocio y querés incorporar herramientas para saber comunicarlo, este curso es para vos.",
    },
    {
      id: 2,
      icon: 0,
      title: "Laboratorio de Impresión 3D",
      description: "Te invitamos a que aprendas todas las herramientas técnicas necesarias para introducirte en el mundo de la impresión 3D.",
    },
    {
      id: 3,
      icon: 0,
      title: "INTRODUCCIÓN A BASES DE DATOS sql",
      description: "Introducción a Bases de Datos SQL, el lenguaje más utilizado en el manejo y manipulación de datos en Internet.",
    },
    {
      id: 4,
      icon: 0,
      title: "Programación orientada al desarrollo web",
      description: "Si te gustaría aprender a programar y adentrarte en el mundo del desarrollo de sitios web, esta es tu oportunidad.",
    },
    {
      id: 5,
      icon: 0,
      title: "INTRODUCCIÓN A LA PROGRAMACIÓN DE VIDEOJUEGOS",
      description: "Si te gustaría aprender a programar y adentrarte en el mundo del desarrollo de sitios web, esta es tu oportunidad.",
    },
    {
      id: 6,
      icon: 0,
      title: "INTRODUCCIÓN A LA ROBÓTICA Y ARDUINO",
      description: "Si te gustaría aprender a programar y adentrarte en el mundo del desarrollo de sitios web, esta es tu oportunidad.",
    },


    
  ];

  useEffect(() => {
    setData(datosEjemplo);
  }, []);

  useEffect(() => {
    setData2(cursosCard);
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

  const newData2 = useMemo(() => {
    console.log('Processing data...');
    return data2.map(item2 => (
      <Card2
        key={item2.id}
        icon={item2.icon}
        title={item2.title}
        description={item2.description}
      />
    ));
  }, [data2]);


  return (
    <ContextGlobal.Provider value={{ theme, setTheme, data, data2, fav, setFav, newData, newData2}}>
      {children}
    </ContextGlobal.Provider>
  );
};

