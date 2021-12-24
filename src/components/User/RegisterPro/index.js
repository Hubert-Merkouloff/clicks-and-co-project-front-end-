import Field from '../../Field';
import './styles.scss';
import { useSelector } from "react-redux";

const RegisterPro = () => { 

  //state
   const errors = useSelector((state) => state.field.errors);
  // const dispatch = useDispatch();
  
  const onSubmit = async (evt) => {
    evt.preventDefault();
    console.log("le registerpro n'est pas activé");
    

       
  };
return (
  <form className="register" onSubmit={onSubmit}>
    <fieldset className="field">
      <legend className="hideItem"> Identité </legend>


      <div className="field">

        <Field
          placeholder="Nom"
          name="firstNameValue"
          label="name"
          icon="fas fa-user-tie"
          hasError={errors.firstname}
        />
      </div>

      <div className="field">
        <Field
          placeholder="Prenom"
          name="lastNameValue"
          label="prenom"
          icon="fas fa-user-tie"
          hasError={errors.lastname}
        />
      </div>      
      <div className="field">
        
        <Field
          placeholder="SIREN"
          name="SIREN"
          label="SIREN"
          icon="fas fa-user-tie"
          hasError={errors.firstname}
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
        Créer un compte Pro
      </button>
    </div>
  </form>
);
}

export default RegisterPro;
