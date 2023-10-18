import React, { useState} from "react";


import { useNavigate } from "react-router-dom";
const Card2 = ({ icon, title, description, id}) => {

  const navigate = useNavigate();


  const handleClick = () => {
    navigate(`${id}`);
  };


  return (
    <div className="card2">
      <div>
      <img src={icon} alt="icon" />
      <h3 onClick={handleClick}>{title}</h3>
        <p>{description}</p>
        <button className="verMas">Ver más</button> <button className="inscribirme">Inscribirme</button>
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

export default Card2;