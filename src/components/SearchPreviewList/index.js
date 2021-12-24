import { useSelector } from "react-redux";
import SearchPreviewItem from "../SearchPreviewItem";
import "./styles.scss";

const SearchPreviewList = () => {
  const cityList = useSelector((state) => state.search.cityList);

  const numberCities = cityList.length;

  return (
    numberCities > 0 && (
      <div className="searchPreviewList">
        {cityList.map((city, index) => (
          <SearchPreviewItem name={city} key={index} />
        ))}
      </div>
    )
  );
};

export default SearchPreviewList;
