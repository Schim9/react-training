
import { createRoot } from 'react-dom/client'
import PanierProvider from './Contexte/PanierProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <PanierProvider>
        <App />
    </PanierProvider>

)
