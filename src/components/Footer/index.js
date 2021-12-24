import "./styles.scss";
import { NavLink } from "react-router-dom";
import icon from "../Header/icon.png";

const Footer = () => (
  <footer className="footerContainer">
    <div className="footerContainer__containerDesktop">
      <img src={icon} alt="logo" className="footerContainer__logo" />
      <div className="footerContainer__container">
        <div className="footerContainer__column">
          <h3 className="footer__title">Services</h3>
          <ul className="menu">
            <li>
              <NavLink className="footerContainer__link" to="#">
                Restaurant
              </NavLink>
            </li>
            <li>
              <NavLink className="footerContainer__link" to="#">
                Boucherie
              </NavLink>
            </li>
            <li>
              <NavLink className="footerContainer__link" to="#">
                Primeur
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footerContainer__column">
          <h3 className="footer__title">A propos</h3>
          <ul className="menu">
            <li>
              <NavLink className="footerContainer__link" to="#">
                Nous rejoindre
              </NavLink>
            </li>
            <li>
              <NavLink className="footerContainer__link" to="#">
                Propriétés intellectuelles
              </NavLink>
            </li>
            <li>
              <NavLink className="footerContainer__link" to="#">
                Partenariat
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footerContainer__column">
          <h3 className="footer__title">Assistance</h3>
          <ul className="menu">
            <li>
              <NavLink className="footerContainer__link" to="#">
                Centre d'aide
              </NavLink>
            </li>
            <li>
              <NavLink className="footerContainer__link" to="#">
                Signaler un problème
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footerContainer__mentions">
      <p className="footerContainer__text">
        &copy;2021 - Clicks-N-Co - Confidentialité - Conditions générales
      </p>

      <ul className="footerContainer__social">
        <li className="inline">
          <NavLink className="footerlink" to="#">
            <i className="fab fa-twitter fa-3x"></i>
          </NavLink>
        </li>
        <li className="inline">
          <NavLink className="footerlink" to="#">
            <i className="fab fa-instagram fa-3x"></i>
          </NavLink>
        </li>
        <li className="inline">
          <NavLink className="footerlink" to="#">
            <i className="fab fa-facebook fa-3x"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
