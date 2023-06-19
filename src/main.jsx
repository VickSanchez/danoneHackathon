import React from 'react'
import ReactDOM from 'react-dom/client'
import "primereact/resources/primereact.min.css";   
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
