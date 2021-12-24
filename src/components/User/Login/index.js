//npm
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./styles.scss";
import { loginSchema } from "../../../SchemaValidation/user";
import Field from "../../Field";

import { login } from "../../../actions/user";
import { setFieldError } from "../../../actions/field";

const Login = () => {
  //state
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.field.errors);
  const field = useSelector((state) => state.field);
  const { emailValue, passwordValue } = field;

  const onSubmit = async (evt) => {
    evt.preventDefault();

    const user = {
      email: emailValue,
      password: passwordValue,
    };

    const isFormValid = await loginSchema.isValid(user, {
      abortEarly: false, // prevent aborting validation
    });

    if (isFormValid) {
      // continue submission
      console.log("Formulaire soumis");
      dispatch(login());
    } else {
      // check field is incorrect
      loginSchema.validate(user, { abortEarly: false }).catch((err) => {
        // recuperer message erreur
        const errors = err.inner.reduce((acc, error) => {
          return {
            ...acc,
            [error.path]: error.message,
          };
        }, {});

        //save message erreur
        dispatch(setFieldError(errors));
      });
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="login">
      <fieldset className="field">
        <legend className="hideItem">Contacte</legend>
        <Field
          placeholder="Email"
          name="emailValue"
          label="email"
          type="email"
          icon="fas fa-envelope"
          hasError={errors.email}
        />
      </fieldset>
      <fieldset>
        <legend className="hideItem">Mot de passe</legend>
        <Field
          placeholder="Mot de passe"
          name="passwordValue"
          label="passworld"
          type="password"
          icon="fas fa-lock"
          hasError={errors.password}
        />
      </fieldset>

      <div className="login__blockButton">
        <Link to="#" className="login__forgotPassworld ">
          Mot de passe oublié ?{" "}
        </Link>
        <button type="submit" className="login__button">
          Se connecter
        </button>
      </div>
    </form>
  );
};

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
