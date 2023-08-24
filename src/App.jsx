import { useState } from 'react'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Route, Routes, Link } from "react-router-dom"
import Home from './pages/Home'
import Seller from './pages/Seller'
import Auction from './pages/Auction'

function App() {
  const activeChain = "goerli";

  return (
    <>  
    <ThirdwebProvider activeChain={activeChain}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/auction" element={<Auction />} />
    </Routes> 
    </ThirdwebProvider>
    </>
  )
}

export default App
