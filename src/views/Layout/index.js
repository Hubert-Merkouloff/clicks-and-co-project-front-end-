import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FlashMessage from '../../components/FlashMessage'

import './styles.scss';

const Layout = () => {
const message = useSelector((state) => state.event.message);
const errorMessage = useSelector((state) => state.event.errorMessage);

const flashMessage = message || errorMessage




  
  return (
    <div className="layout" >
      <Header />
      { flashMessage && 
      <div className='layout__message'>
        <FlashMessage />
      </div>
      }
      

      <div className="layout__content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
export default Layout;
