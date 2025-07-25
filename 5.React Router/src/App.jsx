import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Containers/Home'
import Webshop from './Containers/Webshop'
import CustomerProfile from './Containers/CustomerProfile'
import NotFound from './Containers/NotFound'
import Navbar from './Components/Navbar'
import Orders from './Containers/Customer/Orders'
import Information from './Containers/Customer/Information'

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webshop" element={<Webshop />} />
        <Route path="/espace-client/:id" element={<CustomerProfile />}>
          <Route path="/espace-client/:id/informations" element={<Information />} />
          <Route path="/espace-client/:id/commandes" element={<Orders />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App




