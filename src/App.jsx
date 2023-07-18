import { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom"
import Home from './pages/Home'
import Seller from './pages/Seller'
import Auction from './pages/Auction'

function App() {

  return (
    <>  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/auction" element={<Auction />} />
    </Routes> 
    </>
  )
}

export default App
