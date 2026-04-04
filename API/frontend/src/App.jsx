import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Auth from './pages/auth'
import Dashboardlayout from './pages/dashboard/dashboardlayout';
import Overview from './pages/dashboard/overview';
import Usage from './pages/dashboard/usage';
import Api from './pages/dashboard/api';
import Documentation from "./pages/Documentation";

import ApiKeys from './pages/dashboard/ApiKeys';


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
               <Route path="api" element={<Api/>} />
              
               <Route path="keys" element={<ApiKeys />} />
               
               
           </Route>
           <Route path="docs" element={<Documentation />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App