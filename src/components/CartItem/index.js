import { useDispatch } from "react-redux";
// components
import Card from "../Card";

//actions
import { addQuantity, removeQuantity } from "../../actions/cart";

import "./styles.scss";

const CartItem = ({ id, name, price, quantity}) => {
  //state
  const dispatch = useDispatch();

  const addItem = () => {
    console.log("j ajoute de la quantite sur " + id + name);
    dispatch(addQuantity(id));
  };

  const removeItem = () => {
    console.log("je retire de la quantite sur " + id + name);
    dispatch(removeQuantity(id));
  };

  const onClick = () => {
    console.log("click desactive sur les cartitem");
  };

  const total = price * quantity;

  return (
    <tr className="order">
      <th>
        <Card
          
          id={id}
          isPicture={false}
          name={name}
          isAddButton
          isCount
          addItem={addItem}
          removeItem={removeItem}
          onClick={onClick}
          quantity={quantity}
        />
      </th>

      <th> {price}€</th>
      <th> {total}€</th>
    </tr>
  );
};

export default CartItem;
