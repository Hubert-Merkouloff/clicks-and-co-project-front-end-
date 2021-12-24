import Field from '../../Field';
import './styles.scss';
import {registerSchema} from '../../../SchemaValidation/user'
import { useSelector, useDispatch } from "react-redux";
import { setFieldError } from "../../../actions/field";
import { register } from '../../../actions/user';

const Register = () => { 

  //state
   const errors = useSelector((state) => state.field.errors);
  const dispatch = useDispatch();
  const field = useSelector((state) => state.field);
  const {
    emailValue,
    passwordValue,
    firstNameValue,
    lastNameValue,
    cityValue,
    zipcodeValue,
    phoneValue,
    confirmPasswordValue,
  } = field;

  const onSubmit = async (evt) => {
    evt.preventDefault();
    console.log("click");
    const user = {
      firstname: firstNameValue,
      lastname: lastNameValue,
      city: cityValue,
      zipcode: zipcodeValue,
      email: emailValue,
      phone: phoneValue,
      password: passwordValue,
      confirmPassword: confirmPasswordValue,
    };

    console.log(user);

    const isFormValid = await registerSchema.isValid(user, {
      abortEarly: false, // prevent aborting validation
    });

    console.log(`isvalid : ${isFormValid}`);

    if (isFormValid) {
      // continue submission
      console.log("Formulaire soumis");
      dispatch(register())
    } else {
      // check field is incorrect
      registerSchema.validate(user, { abortEarly: false }).catch((err) => {
        console.log(err.inner);
        const errors = err.inner.reduce((acc, error) => {
          return {
            ...acc,
            [error.path]: error.message,
          };
        }, {});
        //console.log(errors)

        dispatch(setFieldError(errors));
      });
    }
  };
return (
  <form className="register" onSubmit={onSubmit}>
    <fieldset className="field">
      <legend className="hideItem"> Identité </legend>
      <div className="field">
        <Field
          placeholder="Prenom"
          name="firstNameValue"
          label="prenom"
          icon="fas fa-user-tie"
          hasError={errors.firstname}
        />
      </div>

      <div className="field">
        <Field
          placeholder="Nom"
          name="lastNameValue"
          label="nom"
          icon="fas fa-user-tie"
          hasError={errors.lastname}
        />
      </div>
    </fieldset>
    <fieldset className="field">
      <legend className="hideItem">Lieux de résidence</legend>
      <div className='field'>
        <Field
          placeholder="Addresse"
          name="addresseValue"
          label="address"
          icon="fas fa-city"
          hasError={errors.address}
        />
      </div>
      <div className="field">
        <Field
          placeholder="Ville"
          name="cityValue"
          label="prenom"
          icon="fas fa-city"
          hasError={errors.city}
        />
      </div>

      <Field
        placeholder="Code postale"
        name="zipcodeValue"
        label="zipcode"
        icon="fas fa-city"
        hasError={errors.zipcode}
      />
    </fieldset>
    <fieldset className="field">
      <legend className="hideItem">Contacte</legend>
      <div className="field">
        <Field
          placeholder="Email"
          name="emailValue"
          label="email"
          type="email"
          icon="fas fa-envelope"
          hasError={errors.email}
        />
      </div>
      <Field
        placeholder="numero de telephone"
        name="phoneValue"
        label="email"
        type="tel"
        icon="fas fa-mobile-alt"
        hasError={errors.phone}
      />
    </fieldset>
    <fieldset className="field">
      <legend className="hideItem">Mot de passe</legend>
      <div className="field">
        <Field
          placeholder="Mot de passe"
          name="passwordValue"
          label="passworld"
          type="password"
          icon="fas fa-lock"
          hasError={errors.password}
        />
      </div>
      <Field
        placeholder="Confirme mot de passe"
        name="confirmPasswordValue"
        label="passworld"
        type="password"
        icon="fas fa-lock"
        hasError={errors.confirmPassword}
      />
    </fieldset>
    <div className="login__blockButton">
      <button type="submit" className="login__button ">
        Créer un compte
      </button>
    </div>
  </form>
);
}

export default Register;
