import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




import { redirection, setUserPage } from "../../actions/user";
import "./styles.scss";

// component
import LoginComponent from "../../components/User/Login";
import RegisterComponent from "../../components/User/Register";
import logo from "../../components/Header/icon.png";
import LoginButton from "../../components/Button/LoginButton";
import { deleteField, deleteFieldError} from "../../actions/field";
import FlashMessage from "../../components/FlashMessage";
import { useEffect } from "react";

const Login = () => {
  
  //state
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const isRedirection = useSelector((state) => state.user.isRedirection);
  const navigate = useNavigate();

    useEffect(() => {
      if(isRedirection) {
        dispatch(redirection())
      }
     dispatch(deleteField())
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  // par defaut isRedirection false
  // quand isRedirection = true on redirige sur la derniere page visiter
  if (isRedirection) {
    console.log("redirection");
    navigate(-1);
    // -1 : retour en arrière dans l'historique
  }

  // change views login/register (isLoggin)
  const handleViews = () => {
    dispatch(deleteFieldError());
    dispatch(deleteField())
    dispatch(setUserPage());
  };

  //const message = useSelector((state) => state.user.message);

  return (
    <div className="user">
      <div className="user__container">
        <Link to="/" className="user__logo">
          <img src={logo} alt="Clicks and co" />
        </Link>

        <FlashMessage />

        <h2 className="user__subtitle">
          {isLogin ? "Déjà client ?" : "Nouveau client ?"}
        </h2>
        {isLogin && <LoginComponent />}

        {!isLogin && <RegisterComponent />}
      </div>

      <div className=" user__container user__registerContainer">
        <h2 className="user__subtitle">
          {isLogin ? "Nouveau client ?" : "Dejà client ?"}
        </h2>

        {/* button pour gérer l'affichage  */}
        {isLogin && (
          <LoginButton nameButton="Créer un compte" onClick={handleViews} />
        )}
        {!isLogin && (
          <LoginButton nameButton="Se connecter" onClick={handleViews} />
        )}
      </div>
    </div>
  );
};

export default Login;
