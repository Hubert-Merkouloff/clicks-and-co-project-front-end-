import './styles.scss';

import { useSelector} from "react-redux";


const FlashMessage = () => { 
const message = useSelector((state) => state.event.message);
const errorMessage = useSelector((state) => state.event.errorMessage);
  //const isRedirection = useSelector((state) => state.user.isRedirection);

return (
  <div className="flashMessage">
    {errorMessage && <p className="flashMessage__error">{errorMessage}</p>}

    {message && <p className="flashMessage__success">{message}</p>}
  </div>
);
}

export default FlashMessage;
