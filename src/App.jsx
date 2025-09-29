import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import React from "react";
const DashBoard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

import { Suspense } from "react";

function App() {


  return (
    <>

    <BrowserRouter>
    <AppBar/>
    <Routes>
    <Route path="/dashboard" element={<Suspense fallback="...loading"><DashBoard/> </Suspense>} />
    <Route path="/" element={<Suspense fallback="...loading"><Landing/> </Suspense>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

function AppBar(){
    const navigate = useNavigate()
  return <>

      <button onClick={()=>navigate("/")}>Landing</button>
      <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
  </>
}

