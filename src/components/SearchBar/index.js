import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Field from "../Field";
import "./styles.scss";

import { addDataCity } from "../../actions/search";
import SearchPreviewList from "../SearchPreviewList";

const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SearchValue = useSelector((state) => state.field.searchValue);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log("on dispatch searchshop");
    //dispatch(searchShop());

    // IL faudrait ajouter une condition si pas sur page de recherche alors :    
    
    if (SearchValue) {
      navigate(`/search/${SearchValue}`);
    } else {
      navigate(`/search/Paris`);
    }

    // pas besoin de donner en argument la valeur evt.target.value
    //la valeur est déjà dans le state.field.value
  };

  const previewOnChange = (searchvalue) => {
    console.log(searchvalue);
    dispatch(addDataCity(searchvalue));
  };

  return (
    <div className="searchBar">
      <form className="searchBar__form" onSubmit={handleSubmit}>
        <div className="searchBar__field">
          <Field
            name="searchValue"
            label="search"
            placeholder="Boulangerie, lieux ..."
            isRadius
            previewOnChange={previewOnChange}
          />
        </div>
      
        <button className="button searchBar__button" onClick={handleSubmit}>
          <i className="fas fa-search fa-2px"></i>
        </button>
      </form>
      <div className="searchBar__list">
          <SearchPreviewList />
        </div>
    </div>
  );
};

export default Searchbar;
