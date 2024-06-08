import React, { useState } from 'react'
import Money from './Component/Money'
import Tracker from './Component/Tracker'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Money/>}/>
          <Route path='/tracker' element={<Tracker/>}/>
        </Routes>
      </Router>
      
      <ToastContainer position='top-center' />
    </>
  )
}

export default App