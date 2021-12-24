import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";

const LoginButton = ({
  nameButton,
  isButtonForm,
  onClick,
  isCard,
  islogOut,
}) => {
  // Emit evenement
  const handleClick = (evt) => {
    evt.preventDefault();
    onClick();
  };

  //className
  const classNameButton = classNames(
    "loginbutton__button",
    { "loginbutton__button--login": isButtonForm },
    { "loginbutton__button--register": !isButtonForm },
    { "loginbutton__button--card": isCard },
    { "loginbutton__button--logout": islogOut }
  );

  return (
    <button className={classNameButton} onClick={handleClick}>
      {nameButton}
    </button>
  );
};

LoginButton.defaultProps = {
  isButtonForm: false,
  isCard: false,
  islogOut: false
};

LoginButton.propTypes = {
  nameButton: PropTypes.string.isRequired,
  isButtonForm: PropTypes.bool,
  onClick: PropTypes.func,
  isCard: PropTypes.bool,
  islogOut: PropTypes.bool
};

export default LoginButton;
