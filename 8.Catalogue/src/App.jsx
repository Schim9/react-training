import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Component/HomePage'
import Catalogue from './Component/Catalogue'
import Panier from './Component/Panier'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/panier" element={<Panier />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
