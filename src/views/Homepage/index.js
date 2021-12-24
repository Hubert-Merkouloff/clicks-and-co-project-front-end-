import "./styles.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCategories, getListRandomShop } from "../../actions/shop";
import { searchShopItems, setCurrentShop } from "../../actions/shop";
import { useNavigate } from "react-router-dom";

// components
import Hero from "../../components/Hero";

import ListCard from "../../components/ListCard";


//import NProgress from "nprogress";

//import Cart from '../../components/Cart';

const Homepage = () => {
  //state
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("récupération de la liste des shops aléatoires depuis l'api");
    dispatch(getListRandomShop());

    dispatch(getListCategories());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listrandomshop = useSelector((state) => state.shop.listrandomshop);

  const listcategories = useSelector((state) => state.shop.listcategories);

  const navigate = useNavigate();

  const test = (id, name_slug) => {
    console.log("recup event");

    //on met à jour le state la propriété currentShop

    console.log(id);
    dispatch(setCurrentShop(id));

    console.log("on cherche les produits du shop cliqué");

    dispatch(searchShopItems());

    // Je redirige vers la page shop/slug
    navigate(`/shop/${name_slug}`);
  };

  const searchByCategory = (id) => {


    let category = listcategories.find((category) => { return category.id === id})

    let category_name = category.name;
    navigate(`/search/${category_name}`);
    
  }


  
  return (
    <div className="homepage">
      <div className="homepage__containerHero">
        <Hero />
      </div>
      <div className="homepage__shop">
        <h2 className="homepage__title homepage__title--shop">
          Vos commerçants préférés :
        </h2>
        <ListCard
          listcard={listrandomshop}
          isAddButton={false}
          isAddress={true}
          isDescription={true}
          onClick={test}
        />
      </div>
      <div className="homepage__category">
        <h2 className="homepage__title homepage__title--category"> Nos catégories : </h2>
        <ListCard
          listcard={listcategories}
          isAddButton={false}
          isAddress={false}
          isDescription={true}
          isCategory={true}   
          isHover={true}
          onClick={searchByCategory}       
        />
      </div>
    </div>
  );
};

export default Homepage;
