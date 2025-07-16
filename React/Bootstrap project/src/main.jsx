import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//import-> dependences daadwerkelijk gebruiken
// {pak alleen dit stukje functie met muis hover zie je wat het doet}

//create-> pak een div en zet er react in, geef mij een element met de naam root en koppel dit aan deze inhoud

//app.jsx is de website. gestructurrd als eigen react component.