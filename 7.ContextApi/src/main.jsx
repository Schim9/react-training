import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeProvider from './Context/ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
  // On enveloppe l'application avec le ThemeProvider
  // pour que le contexte soit accessible dans toute l'application.
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)



