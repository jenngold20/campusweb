import React, { useState} from "react";
// import School from "../images/school.png";
// import Create from "../images/create.png";
// import Language from "../images/language.png";
// import Group from "../images/group.png";

import { useNavigate } from "react-router-dom";
const Card = ({ icon, title, description, id}) => {

  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(true);
  // const { fav, setFav } = useContext(ContextGlobal);

  const handleClick = () => {
    navigate(`${id}`);
  };

  // const addFav = () => {
  //   setIsFav(!isFav)
    
  //   if (isFav) {

  //     if (fav.length === 0) {

  //       setFav([...fav, id])

  //     } else if (fav.find(numero => numero === id) === undefined) {
  //       setFav([...fav, id])
  //     }
  //   } else {

  //     fav.splice(fav.indexOf(id), 1)
  //     setFav([...fav])
  //     }
  // };
  // const iconImage = icon === "school" ? School : null; // Agrega más casos según tus iconos
  // const iconImage = icon === "language" ? Language : null; // Agrega más casos según tus iconos

 // Importa dinámicamente la imagen basada en el nombre del icono
 
 const iconImage = import(`../images/${icon}.png`).then((image) => {
  // Cuando la imagen se cargue, puedes usarla
  return image.default;
});


  return (
    <div className="card">
      <div>
      <img src={icon} alt="icon" />
      <h3 onClick={handleClick}>{title}</h3>
        <p>{description}</p>
      </div>
{/* 
      {!favorite
      ?
      <FontAwesomeIcon onClick={addFav} className={!isFav?"isFav":"noFav"} icon={faHeart} />
      :
      <FontAwesomeIcon className="isFav" icon={faHeart} />
      }
       */}
    </div>
  );
};

export default Card;