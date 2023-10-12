import React, { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "../components/utils/global.context";
import logotecno3f from "../images/logotecno3f.png"
const Card = ({ name, username, id, favorite}) => {

  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(true);
  // const { fav, setFav } = useContext(ContextGlobal);

  const handleClick = () => {
    navigate(`/dentist/${id}`);
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
        <img src={logotecno3f} alt="logo"/>
        <h3 onClick={handleClick}>{name}</h3>
        <p>{username}</p>
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