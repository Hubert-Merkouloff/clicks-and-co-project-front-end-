import { useSelector} from "react-redux";

import ListCard from "../ListCard";

import Filter from "./Filter";
import "./styles.scss";

const SearchResult = ({ onClick }) => {
  const listsearchshopfilter = useSelector(
    (state) => state.shop.listsearchshopfilter
  );

  const submitedValue = useSelector((state) => state.shop.submitedValue);

  const resultnumber = listsearchshopfilter.length;
  console.log("nombre de résultat trouvé " + resultnumber);

  let title = "";

  if (resultnumber === 1) {
    title = `Vous avez ${resultnumber} résultat à ${submitedValue}.`;
  } else if (resultnumber > 1) {
    title = `Vous avez ${resultnumber} résultats à ${submitedValue}.`;
  } else {
    title = `Aucun résultat pour la recherche demandée.`;
  }

  return (
    <div className="searchresult">
      <div className="searchresult__filter">
        <Filter />
      </div>

      <div>
        {submitedValue ? <h2 className="title"> {title} </h2> : ""}

        <div className="searchlist">
          {resultnumber > 0 && (
            <ListCard
              listcard={listsearchshopfilter}
              isPictureBehind={true}
              isPicture={true}
              isAddress={true}
              onClick={onClick}
              isList={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
