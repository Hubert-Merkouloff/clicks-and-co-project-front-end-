import SearchResult from "../../components/SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { searchShopItems, setCurrentShop } from "../../actions/shop";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { setFieldValue } from "../../actions/field";
import { searchShop } from "../../actions/shop";

import "./styles.scss";
import Spinner from "../../components/Spinner";


const Searchpage = () => {
  //state
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  let { city_slug } = useParams();
  console.log(city_slug);

  useEffect(() => {
    dispatch(setFieldValue("searchValue", city_slug));
    dispatch(searchShop());

 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city_slug]);


  useEffect(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [location],
  );

  const searchTheShop = (id, name_slug) => {
    console.log("recup event");

    //on met à jour le state la propriété currentShop

    console.log(id);
    dispatch(setCurrentShop(id));

    console.log("on cherche les produits du shop cliqué");

    dispatch(searchShopItems());

    // Je redirige vers la page shop/slug
    navigate(`/shop/${name_slug}`);
  };

  let loading = useSelector((state) => state.shop.loading);

  return (
    <div className="searchpage">
      <section className="hero is-fullheight-with-navbar green">
        {loading && <Spinner />}
        {!loading && <SearchResult onClick={searchTheShop} />}
      </section>
    </div>
  );
};

export default Searchpage;
