import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Container from './Container'
import Form from './Form'
import Submit from './Submit'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/formulaire" element={<Form />} />
          <Route path="/submit" element={<Submit />} />
        </Route>
         <Route path="*" element={<Container />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
