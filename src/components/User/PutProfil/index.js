import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setIsProfilModify } from "../../../actions/event";
import Field from "../../Field";
import "./styles.scss";

const PutProfil = ({ title, value, nameValue, onClick,isHide}) => {
  const dispatch = useDispatch();
  const isProfilModify = useSelector(
    (state) => state.event.isProfilModify
  );

  const handleClick = (evt) => {
    evt.preventDefault();
    console.log("evt target est ");
    console.log(evt.target[0].value);
    onClick();
  };

  const handleViewClick = () => {
    dispatch(setIsProfilModify())
  };

  const classNameHide = classNames("putProfil__button", {'hideItem':isHide});

  return (
    <div className="putProfil">
      <div className="putProfil__block">
        <span className="putProfil__title">{title}</span>
        <span className="putProfil__value">{value}</span>
        {isProfilModify && (
          <form onSubmit={handleClick}>
            <Field name={nameValue} label={title} value={value} />
            
          </form>
        )}
      </div>
      <button className={classNameHide} onClick={handleViewClick}>
        Modifier
      </button>
    </div>
  );
};
PutProfil.defaultProps = {
  isHide: true
};

PutProfil.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onClickView: PropTypes.func,
  isHide: PropTypes.bool
};

export default PutProfil;
