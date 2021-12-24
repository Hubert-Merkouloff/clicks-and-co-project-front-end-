import "./styles.scss";
import dataList from "../../data/dataList";
import Carroussel from "./Carroussel";

const Hero = () => {
  const { homepagepicture } = dataList;

  return (
    <div className="heroContainer">
      <div className="heroContainer__carroussel">
        <Carroussel />
      
      <section className="">
        <div className="heroContainer__body">
          <aside className="heroContainer__blockText">
            <p className="heroContainer__element">
              Un lieu de rencontre et de partage avec vos commerçants de
              proximité
            </p>
            <p className="heroContainer__element">Des produits de qualité</p>
            <p className="heroContainer__element">
              Un moyen de lutte contre le gaspillage alimentaire
            </p>
          </aside>

          <img
            src={homepagepicture.picture}
            className="heroContainer__picture"
            alt="homepage"
          />
        </div>
      </section>
      </div>
      </div>
      
  );
};

export default Hero;
