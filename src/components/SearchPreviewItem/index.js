import './styles.scss';
import { useNavigate} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { searchShop } from '../../actions/shop';
import { setFieldValue } from '../../actions/field';


const SearchPreviewItem = ({ name}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
    

  const applyFieldValue = () => {
    
    dispatch(setFieldValue("searchValue", name));
    dispatch(searchShop());
    navigate(`/search/${name}`); 
     
        
  }

 
    return (
      <div 
        onClick={applyFieldValue}    
      >
        <div className="previewItem">
          <p className="name">{name}</p>          
        </div>
        
      </div>
    );
  };

  export default SearchPreviewItem;