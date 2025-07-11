import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/e-commerce-last/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
