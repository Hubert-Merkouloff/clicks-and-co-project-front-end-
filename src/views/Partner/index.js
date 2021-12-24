import { Link } from "react-router-dom";
import "./styles.scss";

// component

import RegisterProComponent from "../../components/User/RegisterPro";
import logo from "../../components/Header/icon.png";




const Partner = () => {
  
  //state


  

  return (
    <div className="user">
      <div className="user__container">
        <Link to="/" className="user__logo">
          <img src={logo} alt="Clicks and co" />
        </Link>
        

        <h2 className="user__subtitle">
           Devenir partenaire ?
        </h2>        

        <RegisterProComponent />
      </div>

    </div>
  );
};

export default Partner;
