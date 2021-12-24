import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import "./styles.scss";
import { setFieldValue } from "../../actions/field";


// isHide gére l'affichage du label par defaul il est caché
const Field = ({
  type,
  placeholder,
  name,
  icon,
  label,
  isHide,
  isRadius,
  hasError,
  previewOnChange,
}) => {
  const dispatch = useDispatch();
  const fieldValue = useSelector((state) => state.field[name]);
  const errors = useSelector((state) => state.field.errors);

  console.log(errors);

  //className
  const classNameIcon = classNames({ "control has-icons-left": icon });
  const classNameHide = classNames({ hideItem: isHide });


  const classNameError = classNames("input fields__input", {"is-danger" : hasError}, {"is-radius" : isRadius}  )

  
  //function
  const handleChange = (event) => {
    dispatch(setFieldValue(name, event.target.value));
    previewOnChange(event.target.value);
  };

  return (
    <div className="fields">
      <label className={classNameHide}> {label}</label>
      <div className={classNameIcon}>
        <input
          placeholder={placeholder}
          name={name}
          type={type}
          value={fieldValue}
          className={classNameError}
          onChange={handleChange}
        />
        {hasError && <p className="help is-danger"> {hasError}</p>}
        {icon && (
          <span className="icon is-small is-left">
            <i className={icon}></i>
          </span>
        )}
      </div>
    </div>
  );
};

Field.defaultProps = {
  type: "text",
  placeholder: "",
  isHide: true,
  isRadius: false,
  previewOnChange: function () {
    console.log("no preview");
  },
};

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  isHide: PropTypes.bool,
  isRadius: PropTypes.bool,
  hasError: PropTypes.string
};

export default Field;
