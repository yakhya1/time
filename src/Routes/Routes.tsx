import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../Components/Home/Home';
import Start from '../Components/Start/Start';
import SignUp from '../Components/Autho/SignUp';
import SignIn from '../Components/Autho/SignIn';
import Tasks from '../Components/Tasks/Tasks';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/auth' element={<SignIn/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
    </Routes>
  )
}

export default Routers