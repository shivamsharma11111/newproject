import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/SwiperMin.css'; 
import '../src/css/Jew.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
