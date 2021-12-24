//npm
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

//action
import { setIsActiveBasKet } from "../../actions/event";

// component
import basketShopLogo from "./basketShopLogo.svg";
import CartItem from "../CartItem";

import styles from "./Cart.module.scss";
import LoginButton from "../Button/LoginButton";
import { sendCart } from "../../actions/cart";

const Cart = () => {

   const navigate = useNavigate();
  //state
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cart.details);
  const isActivCart = useSelector((state) => state.event.isActivCart);
    const userLogged = useSelector((state) => state.user.isLogged);

  const cartCounter = cartDetails.length;

  let total = 0;
  for (let index = 0; index < cartCounter; index++) {
    total += cartDetails[index].quantity * cartDetails[index].price;
  }
  // Limit to 2 decimal numbers
  total = (Math.round(total * 100) / 100).toFixed(2);

  const classNameWindow = classNames(styles.basketShop__window, {
    [styles.isActive]: isActivCart,
  });

  const setisActive = () => {
    console.log("basketShop");
    dispatch(setIsActiveBasKet());


  };

  const handleSendCart = () => {
    console.log("send pannier");
        if (userLogged === true) {
          dispatch(sendCart(total));
        }

        if (userLogged === false) {
          navigate(`/login`);
        }
  };

  return (
    <div className={styles.basketShop}>
      <button onClick={setisActive} className={styles.basketShop__button}>
        <img src={basketShopLogo} alt="pannier logo" />
        {cartCounter > 0 && (
          <p className={styles.basketShop__counter}> {cartCounter} </p>
        )}
      </button>

      <div className={classNameWindow}>
        <table className="table is-fullwidth">
          <thead>
            <tr className={styles.header}>
              <th>Désignation</th>

              <th className="hideMobile">Prix unitaire</th>
              <th>Total</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {cartDetails.map((cartItem) => (
              <CartItem {...cartItem} key={cartItem.id} />
            ))}
          </tbody>
        </table>

        <div className={styles.basketShop__submit}>
          {cartCounter > 0 && (
            <div>
              <p>Total: {total} €</p>
              <LoginButton
                nameButton="Valider"
                isButtonForm
                onClick={handleSendCart}
              />
            </div>
          )}

          {cartCounter === 0 && (
            <div className={styles.basketShop__submit}>
              <p> Votre panier est vide. </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
