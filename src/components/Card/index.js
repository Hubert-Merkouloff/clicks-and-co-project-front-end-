// import npm
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

//component
import LoginButton from "../Button/LoginButton";

//action
import { addNewItem, addQuantity } from "../../actions/cart";

import "./styles.scss";

//helper prop for styles

//isAddButton => ajouter article sur card produit
//isCount => show/hide counter for add/remove quantity in cart
//isPictureBehind => show results in search page
//isPicture show/hide big picture
//isHover => add a styles for hover

// id & name_slug => use for redirection

const Card = ({
  name,
  description,
  address,
  avatar,
  picture,
  price,
  city,
  isHover,
  onClick,
  name_slug,
  id,
  quantity,
  addItem,
  removeItem,
  isPictureBehind,
  isDescription, 
  isAddress, 
  isAddButton,
  isCount,
  isPicture,
  isCategory,
}) => {
  //state
  const dispatch = useDispatch();
  const details = useSelector((state) => state.cart.details);
  const isArticle = useSelector((state) => state.event.isArticle);

  // classNames
  const classNameCardIsHover = classNames("card", { "with-hover": isHover });
  const classNameIsArticle = classNames("media-content", {
    "media-contentArticle": isArticle,
  });

  const classNameContainerCardIsPictureBehind = classNames("containerCard", {
    "extra-margin": isPictureBehind,
  });

  //state
  //TODO
  //const quantity= useSelector((state) => state.cart.details);

  const addOrder = () => {
    console.log("j ajoute un produit " + id + " dans mon panier.");

    const finder = details.find(({ id: idcart }) => idcart === id);

    if (finder === undefined) {
      console.log("le produit n'existe pas dans le panier, on ajoute ! ");
      dispatch(addNewItem({ id: id, name: name, price: price, quantity: 1 }));
    } else {
      dispatch(addQuantity(id));
    }
  };

  const handleClick = (evt) => {
    onClick(id, name_slug);
  };

  // La card représente un article si le addbutton est actif. Si addbutton est inactif, il s'agit d'un shop.

  let srcPicture = `http://ec2-3-83-49-120.compute-1.amazonaws.com/projet-clicks-n-co/Clicks-N-Co/public/images/shop/${picture}`;

  if (isAddButton) {
    srcPicture = `http://ec2-3-83-49-120.compute-1.amazonaws.com/projet-clicks-n-co/Clicks-N-Co/public/images/product/${picture}`;
  }

  if (isCategory) {
    srcPicture = `http://ec2-3-83-49-120.compute-1.amazonaws.com/projet-clicks-n-co/Clicks-N-Co/public/images/category/${picture}`;
  }

  return (
    <div className={classNameContainerCardIsPictureBehind}>
      <div to="#" className={classNameCardIsHover} onClick={handleClick}>
        {isPicture && !isPictureBehind && (
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={srcPicture} alt="Placeholder " />
            </figure>
          </div>
        )}

        <div className="card-content">
          <div className="media">
            <div className="media-left ">
              <figure className="image is-128*128 containerCard__avatar">
                <img className="" src={srcPicture} alt="avatar" />
              </figure>
            </div>
            <div className={classNameIsArticle}>
              <p className="containerCard__title left">{name}</p>

              {isAddress && <p className="left">{address}</p>}
              {isDescription && <p className="left">{description}</p>}
              {price && <span className="containerCard__price">{price}€</span>}
              <p className="containerCard__city">{city}</p>
            </div>
          </div>
          {isAddButton && (
            <div className="containerCard__button">
              {!isCount && (
                <LoginButton nameButton="+" isCard onClick={addOrder} />
              )}
              {isCount && (
                <div>
                  <LoginButton nameButton="+" isCard onClick={addItem} />
                  <span className="containerCard__counter">{quantity}</span>
                  <LoginButton nameButton="-" isCard onClick={removeItem} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {isPicture && isPictureBehind && (
        <div className="card-image--behind">
          <figure className="image is-4by3">
            <img src={srcPicture} alt="Placeholder " />
          </figure>
        </div>
      )}
    </div>
  );
};

Card.defaultProps = {
  isPicture: true,
  isAddButton: false,
  isCount: false,
  isHover: true,
  isAddress: false,
  isDescription: false,
  isCategory: false,
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  addrress: PropTypes.string,
  avatar: PropTypes.string,
  picture: PropTypes.string,
  price: PropTypes.number,
  name_slug: PropTypes.string,
  id: PropTypes.number,
  quantity: PropTypes.number,
  isPicture: PropTypes.bool,
  isHover: PropTypes.bool,
  isAddButton: PropTypes.bool,
  isCount: PropTypes.bool,
  address: PropTypes.string,
  isAddress: PropTypes.bool,
  isDescription: PropTypes.bool,
  isCategory: PropTypes.bool,
};

export default Card;
