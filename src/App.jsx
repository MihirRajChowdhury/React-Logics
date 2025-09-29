import {BrowserRouter, Route, Routes, } from "react-router-dom"
import React, { useContext, useState } from "react";
const DashBoard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

import { Suspense } from "react";
import { CountContext } from "./context";

function App() {
const [count,setCount] = useState(0);

  return (
    <>
    <CountContext.Provider value={count}>
    <Count setCount={setCount}/>
    </CountContext.Provider>

    </>
  )
}

export default App
function Count({setCount}){
  return <div>
    <CountRender />
    <Button  setCount={setCount} />
  </div>
}

function CountRender(){
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}


function Button({setCount}){
  const count = useContext(CountContext)

  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}


// function AppBar(){
//     const navigate = useNavigate()
//   return <>

//       <button onClick={()=>navigate("/")}>Landing</button>
//       <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
//   </>
// }



// function Routing(){
//   return 
//   (
//     <>

//     <BrowserRouter>
//     <AppBar/>
//     <Routes>
//     <Route path="/dashboard" element={<Suspense fallback="...loading"><DashBoard/> </Suspense>} />
//     <Route path="/" element={<Suspense fallback="...loading"><Landing/> </Suspense>} />
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

