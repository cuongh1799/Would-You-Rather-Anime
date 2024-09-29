import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import "./css/cardrightcss.css"
import "./css/cardleftcss.css"
import CardLeft from './Components/CardLeft.jsx'

createRoot(document.getElementById('root')).render(
  // UPDATE 28-9-2024, Disable strict mode because strict always render twice
  // leading to the random animeData be called twice
  // So when we run the app it change the anime for the first time, then  blink to second time
  
  // <StrictMode>
    <App />
  // </StrictMode>,
)
