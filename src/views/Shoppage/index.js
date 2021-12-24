//import { useEffect } from "react";
import {useSelector } from "react-redux";
//import { useParams } from "react-router"; 

// import ListMiniRestaurantCard from '../../components/ListMiniRestaurantCard';
import Card from "../../components/Card";

import ListCard from "../../components/ListCard";


import "./styles.scss";

const Shoppage = () => {
  //state

  //! DELETE NEXT LIGNE ?
  //const { name_slug } = useParams();
  const listshopitem = useSelector((state) => state.shop.listshopitem);



  console.log("listshopitem: " + listshopitem);

  const productList = listshopitem.products;

  const onClick = () => {
    console.log("le click est désactivé sur ce type de card");
  };

  return (
    <div className="shoppage">
      <section className="hero is-fullheight-with-navbar green">
        <div className="container-shop">
          {listshopitem.id > 0 && (
            <Card
              {...listshopitem}
              isHover={false}
              isPictureBehind={true}
              isDescription={true}
            />
          )}
        </div>

        <div className="container-shop-item">
          {listshopitem.id > 0 && (
            <ListCard
              listcard={productList}
              isHover={false}
              isAddButton={true}
              isDescription={true}
              onClick={onClick}
              
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Shoppage;
