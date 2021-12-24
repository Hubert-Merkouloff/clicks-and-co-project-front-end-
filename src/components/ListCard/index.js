import Card from "../Card";
import PropTypes from "prop-types";

import "./styles.scss";
import classNames from "classnames";

const ListCard = ({
  listcard,
  isHover,
  isAddButton,
  isAddress,
  isDescription,
  isPictureBehind,
  onClick,
  isList,
  isCategory 
}) => {

  const classNameContainerFlex = classNames("container-listcard", {"containerStart" : isList})
  return (
    <div className={classNameContainerFlex}>
      {listcard.map((card) => (
        <Card
          key={card.id}
          {...card}
          isHover={isHover}
          isAddButton={isAddButton}
          isAddress={isAddress}
          isDescription={isDescription}
          isPictureBehind={isPictureBehind}
          onClick={onClick}
          isCategory={isCategory}
        />
      ))}
    </div>
  );
};

ListCard.defaultProps = {
 isList : false
};

ListCard.propTypes = {
  listcard: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  isHover: PropTypes.bool,
  addButton: PropTypes.bool,
  isList: PropTypes.bool
};

export default ListCard;
