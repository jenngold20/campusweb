import React, { useState} from "react";


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

  return (
    <div className="card">
      <div>
        <img src={icon} alt="icon"/>
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