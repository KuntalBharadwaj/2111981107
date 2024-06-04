import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './Pages/Product'
import SpecificProduct from './Pages/SpecificProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Product/>}/>
        <Route path={"/Product/:id"} element={<SpecificProduct/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
