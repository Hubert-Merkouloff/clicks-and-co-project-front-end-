
import { Link } from "react-router-dom";



import "./styles.scss";

// component

import logo from "../../components/Header/icon.png";


const NotFound = () => {
  
  
  

  return (
    <div className="notfound">

      <div className="notfound__link">       
        <Link to="/" className="user__logo">
          <img src={logo} alt="Clicks and co" />
        </Link>
      </div>
      
      <div className="notfound__picture">
      </div>

      <div className="notfound__description">
        <p> Oups, le magasin a l'air abandonné. Pour retourner à l'accueil, c'est par ici : </p>
      </div>
      <Link to="/" className="notfound__bouton">
      Retour à l'accueil
      </Link>

 
     
        
    </div>
  );
};

export default NotFound;
