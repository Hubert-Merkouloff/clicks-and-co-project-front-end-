// import { Link } from 'react-router-dom';
import './styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { searchShopItems, setCurrentShop } from '../../actions/shop';


const RestaurantCard = ( { id, name, address, avatar, picture, name_slug }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();




  const handleClick = (evt) => {
    
    console.log("je click sur un magasin ")


    //on met à jour le state la propriété currentShop
    dispatch(setCurrentShop(id));

    console.log("on cherche les produits du shop cliqué");    

    dispatch(searchShopItems());

    // Je redirige vers la page shop/slug
    navigate(`/shop/${name_slug}`);
  }

return (

<div to="#" className="link-shop" onClick={handleClick}>
 <div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-left ">
        <figure className="image ">
          <img className="avatar" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="cardtitle left">{name}</p>
        <p className="cardaddrress left">{address}</p>
      </div>
    </div>           
   </div>
 </div>

  <div className="card-image-shop">
    <figure className="image is-4by3">
      <img src={picture} alt="Placeholder "/>
    </figure>
  </div>

 </div>
 

);
};

RestaurantCard.defaultProps = {
  avatar: "https://bulma.io/images/placeholders/96x96.png"
  
};
  
  RestaurantCard.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    
    
  };


export default RestaurantCard;



