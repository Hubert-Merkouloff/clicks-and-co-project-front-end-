import './styles.scss';

import PropTypes from 'prop-types';


const CategoryCard = ({name, picture}) => (


    <div className="card only-desktop">
  <div className="card-image">
    <figure className="image is-5by4">
      <img src={picture} alt="Placeholder "/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">  
      <div className="media-content">
        <p className="categorytitle center">{name}</p>        
      </div>
    </div>           
   </div>
 </div>

);


  
CategoryCard.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    
    
  };


export default CategoryCard;