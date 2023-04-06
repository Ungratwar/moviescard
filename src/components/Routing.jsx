import React from 'react'
import {Routes,Route} from  "react-router-dom";
import Home from "./Home"
import Viewdetails from './Viewdetails';
const Routing = () => {
  return (
   <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/viewdetails/:movieId" element={<Viewdetails/>}></Route>
   </Routes>
  )
}

export default Routing;