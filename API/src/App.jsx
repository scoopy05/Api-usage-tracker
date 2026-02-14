import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage'
import Auth from './pages/auth'
import Dashboardlayout from './pages/dashboard/dashboardlayout';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
   
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/auth/:mode" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboardlayout />} />

      </Routes>
    </BrowserRouter>
    
    
      
    </>
  )
}

export default App
