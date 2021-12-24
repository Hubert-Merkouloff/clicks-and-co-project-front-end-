import icon from "./icon.png";
import { NavLink } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router";

import "./styles.scss";

//component
import NavMenu from "../NavMenu";
import SearchBar from "../SearchBar";

//actions
//import { setFieldValue } from "../../actions/field";
//import { searchShop } from "../../actions/shop";

const Header = () => {
 // const dispatch = useDispatch();
  //const navigate = useNavigate();
  
//! need check

/*   const handleSearch = (city) => {
    dispatch(setFieldValue("searchValue", city));
    dispatch(searchShop());
    navigate(`/search/${city}`);
  };  */ 



  return (
    <header className="header">
      <div className="header__flex">
        <NavLink to="/">
          <img src={icon} alt="logo" className="header__logo" />
        </NavLink>
        <div className="header__searchBar">
          <SearchBar />
        </div>
        <NavMenu />
      </div>
      <div className="header__searchBarMobile">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
