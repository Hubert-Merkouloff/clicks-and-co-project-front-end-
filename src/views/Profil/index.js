import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsProfilModify } from "../../actions/event";

import { setFieldProfilValue } from "../../actions/field";
import { setProfil } from "../../actions/user";
import PutProfil from "../../components/User/PutProfil";
import "./styles.scss";

const Profil = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const {
    firstname,
    lastname,
    email,
    phone,
    address,
    zip_code,
    city,
    id,
    avatar,
  } = user;
const isProfilModify = useSelector((state) => state.event.isProfilModify);
  useEffect(() => {
    if (!firstname) {
      navigate("/");
    }
    dispatch(
      setFieldProfilValue(
        firstname,
        lastname,
        email,
        phone,
        address,
        zip_code,
        city
      )
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const handleSetProfil = () => {
    console.log("profil");
    console.log(id);

    dispatch(setProfil());
    if (isProfilModify) {

      dispatch(setIsProfilModify());
    } 
      
  };
  let srcPicture = `http://ec2-3-83-49-120.compute-1.amazonaws.com/projet-clicks-n-co/Clicks-N-Co/public/images/user/${avatar}`;
  return (
    <div className="profil">
      <h1 className="profil__title">Information personneles </h1>
      <div className="profil__avatar">
        <img src={srcPicture} alt="profil" />
      </div>
      <PutProfil
        title="Nom"
        value={lastname}
        nameValue={"lastNameValue"}
        onClick={handleSetProfil}
        isHide={false}
      />
      <PutProfil
        title={"Prenom"}
        value={firstname}
        nameValue={"firstNameValue"}
        onClick={handleSetProfil}
      />
      <PutProfil
        title={"Adresse e-mail"}
        value={email}
        nameValue={"emailValue"}
        onClick={handleSetProfil}
      />
      <PutProfil
        title={"Numéros de telephone"}
        value={phone}
        nameValue={"phoneValue"}
        onClick={handleSetProfil}
      />
      <PutProfil
        title={"Adresse"}
        value={address}
        nameValue={"addresseValue"}
      />
      <PutProfil
        title={"Code postale"}
        value={zip_code}
        nameValue={"zipcodeValue"}
        onClick={handleSetProfil}
      />
      <PutProfil
        title={"Ville"}
        value={city}
        nameValue={"cityValue"}
        onClick={handleSetProfil}
      />
      <button className="profil__button" onClick={handleSetProfil}>
        Enregistrer
      </button>
    </div>
  );
};

export default Profil;
