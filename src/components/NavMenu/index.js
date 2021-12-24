//import npm
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

// import Module for scope style component
import styles from "./NavMenu.module.scss";

//action
import { setIsActiveBurger, setIsClicked } from "../../actions/event";
import {
  logOut,
  redirection,
  setIsLogged,
  setUserPage,
} from "../../actions/user";
import Cart from "../Cart";

const NavMenu = () => {
  // redirection
  const navigate = useNavigate();

  //state
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.event.isActive);
  const isClicked = useSelector((state) => state.event.isClicked);
  const isLogin = useSelector((state) => state.user.isLogin);
  const isLogged = useSelector((state) => state.user.isLogged);

  const user = useSelector((state) => state.user.user);

  let firstname;
  let avatar;
  let roles;

  if (isLogged) {
    //const userObject = user.user;
    const { firstname: name, avatar: picture, roles: rolesadmin } = user;
    firstname = name;
    avatar = picture;
    roles = rolesadmin;
  }

  // className
  const classNameWindow = classNames(
    styles.navMenu__window,
    { [styles.slideIn]: isActive },
    { [styles.slideOut]: isClicked },
    { [styles.isActive]: isActive }
  );

  // Click on burger
  const setisActive = () => {
    dispatch(setIsActiveBurger());
    dispatch(setIsClicked(false));

    if (isActive) {
      dispatch(setIsClicked(true));
    }
  };

  // GO page Login
  const navigateLogin = () => {
    // S'assurer que isLogin est a true
    if (!isLogin) {
      dispatch(setUserPage());
    }
    navigate("/login");
    //Reset window burger
    dispatch(setIsActiveBurger());
  };

  //Go page Register

  const navvigateRegister = () => {
    if (isLogin) {
      dispatch(setUserPage());
    }
    navigate("/login");
    dispatch(setIsActiveBurger());
  };

  const handleLogOut = () => {
    dispatch(setIsLogged());
    dispatch(redirection());
    dispatch(logOut());
  };
  let srcPicture = `http://ec2-3-83-49-120.compute-1.amazonaws.com/projet-clicks-n-co/Clicks-N-Co/public/images/user/${avatar}`;
  return (
    <nav className={styles.navMenu}>
      <div className={styles.navMenu__alignment}>
        {firstname && (
          <div>
            {roles[0] === "ROLE_TRADER" && (
              <a
                href="http://ec2-3-83-49-120.compute-1.amazonaws.com/projet-clicks-n-co/Clicks-N-Co/public/"
                className={styles.navMenu__pro}
                target="_blank"
                rel="noopener noreferrer"
              >
                Espace Pro
              </a>
            )}
            {roles[0] === "ROLE_USER" && <Link to="/partner">Devenir Partenaire</Link>}
          </div>
        )}
        {!firstname && (
          <Link to="/partner" className={styles.navMenu__pro}>
            Devenir Partenaire
          </Link>
        )}
        <div className={styles.navMenu__cart}>
          <Cart />
        </div>
        <button className={styles.navMenu__card} onClick={setisActive}>
          <div className={styles.navMenu__burger}>
            <span className={styles.navMenu__span}></span>
            <span className={styles.navMenu__span}></span>
            <span className={styles.navMenu__span}></span>
          </div>
          {!firstname && <div className={styles.navMenu__icon}></div>}
          {firstname && (
            <div className={styles.navMenu__iconProfil}>
              <img src={srcPicture} alt="profil" />
            </div>
          )}
        </button>
      </div>
      <ul className={classNameWindow}>
        <li className={styles.navMenu__item}>
          {firstname && (
            <h1 className={styles.navMenu__title}>Bienvenue {firstname}</h1>
          )}
        </li>
        {!firstname && (
          <div>
            <NavLink to="/partner" className={styles.navMenu__link}>
              Devenir partenaire
            </NavLink>
            <li className={styles.navMenu__item}>
              <button onClick={navigateLogin}>Connexion</button>
            </li>
            <li className={styles.navMenu__item}>
              <button onClick={navvigateRegister}>Creer un compte</button>
            </li>
          </div>
        )}

        {firstname && (
          <div>
            <li className={styles.navmenu__item}>
              <Link to="/profil">Profil</Link>
            </li>
            <li className={styles.navmenu__item}>
              <NavLink to="#">Mes commandes</NavLink>
            </li>

            <li className={`${styles.navMenu__link} ${styles.navMenu__windowItem}`}>
              {roles[0] === "ROLE_TRADER" && (
                <a
                  href="http://ec2-3-83-49-120.compute-1.amazonaws.com/projet-clicks-n-co/Clicks-N-Co/public/"
                  className={styles.navMenu__pro}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Espace Pro
                </a>
              )}
              {roles[0] === "ROLE_USER" && (
                <Link to="/partner">Devenir Partenaire</Link>
              )}
            </li>
            <li className={`${styles.navMenu__item} ${styles.navMenu__logOut}`}>
              <button onClick={handleLogOut}>Deconnexion</button>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavMenu;
