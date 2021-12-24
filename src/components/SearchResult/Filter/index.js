import { useDispatch, useSelector } from "react-redux";
import { setListSearchShopFilter } from "../../../actions/shop";
import entonnoir from "./entonoir.png";
import "./styles.scss";

const Filter = () => {
  const dispatch = useDispatch();

  const listsearchshop = useSelector((state) => state.shop.listsearchshop);

  const handleClick = (evt) => {
    console.log(`j'ai cliqué sur la catégorie : ${evt.target.value}`);

    //On reinitialise la liste de shop filtrée
    let listsearchshopfilter = listsearchshop;

    if (evt.target.value !== "Tous") {
      listsearchshopfilter = listsearchshop.filter(
        (shop) => shop.categories[0].name === evt.target.value
      );
    }

    dispatch(setListSearchShopFilter(listsearchshopfilter));
  };
  return (
    <div className="filter">
      <img className="entonnoir" src={entonnoir} alt="entonnoir" />

      <h3 className="title3"> Filtre </h3>
      <h3 className="title3"> Catégorie </h3>

      <form>
        <label className="searchresult__filter__container">
          Primeur
          <input
            className="defaultcheckbox"
            type="radio"
            name="filter"
            value="Primeur"
            onClick={handleClick}
          />
          <span className="checkmark"></span>
        </label>

        <label className="searchresult__filter__container">
          Boulangerie
          <input
            className="defaultcheckbox"
            type="radio"
            name="filter"
            value="Boulangerie"
            onClick={handleClick}
          />
          <span className="checkmark"></span>
        </label>

        <label className="searchresult__filter__container">
          Restaurant
          <input
            className="defaultcheckbox"
            type="radio"
            name="filter"
            value="Restaurant"
            onChange={handleClick}
          />
          <span className="checkmark"></span>
        </label>

        <label className="searchresult__filter__container">
          Tous
          <input
            className="defaultcheckbox"
            type="radio"
            name="filter"
            value="Tous"
            onChange={handleClick}
          />
          <span className="checkmark"></span>
        </label>
      </form>
    </div>
  );
};

export default Filter;
