import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';

import './index.css'
import './stylesheets/colors.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>  
)
