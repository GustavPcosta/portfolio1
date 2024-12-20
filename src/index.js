import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import MainRouts from './MainRouts';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'aos/dist/aos.css';
//import 'swiper/swiper-bundle.min.css';
import 'swiper/css/bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'glightbox/dist/css/glightbox.min.css';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <MainRouts/>
    </BrowserRouter>
  </React.StrictMode>
);


