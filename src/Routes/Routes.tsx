import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../Components/Home/Home';

const Routers = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default Routers