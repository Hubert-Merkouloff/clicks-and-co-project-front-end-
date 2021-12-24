import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import "nprogress/nprogress.css";


//css
import './styles/index.scss';
import "bulma/css/bulma.css";

//views

import User from './views/User';
import Layout from './views/Layout';
import Homepage from './views/Homepage';
import Searchpage from './views/Searchpage';
import Shoppage from './views/Shoppage';
import Profil from './views/Profil';
import NotFound from './views/NotFound';
import Partner from './views/Partner';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>

          <Route path='*' element={<NotFound />} />
          <Route element={<Layout />}>            
            <Route path="/" element={<Homepage />} />
            <Route path="/search/:city_slug" element={<Searchpage />} />
            <Route path="/shop/:name_slug" element={<Shoppage />} />
            <Route path="/profil" element={<Profil />} />
            
          </Route>

          <Route path="/login" element={<User />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
