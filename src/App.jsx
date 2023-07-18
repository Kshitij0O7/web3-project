import { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom"
import Home from './pages/Home'
import Seller from './pages/Seller'
function App() {

  return (
    <>  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seller" element={<Seller />} />
    </Routes> 
    </>
  )
}

export default App
