import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage'
import Auth from './pages/auth'
import Dashboardlayout from './pages/dashboard/dashboardlayout';
import Overview from './pages/dashboard/overview';
import Usage from './pages/dashboard/usage';
import Api from './pages/dashboard/API';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
   
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/auth/:mode" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboardlayout />}>
             <Route index element={<Overview />} />
             <Route path="usage" element={<Usage />} />
             <Route path="api" element={<Api />} />
         </Route>

      </Routes>
    </BrowserRouter>
    
    
      
    </>
  )
}

export default App
