import React from 'react'
import TomatoHunt from './components/TomatoHunt'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    
    <BrowserRouter>
        <Routes>

            <Route path='/' element={<Home />}> </Route>
            <Route path='/login' element={<Login />}> </Route>
            <Route path='/signup' element={<Signup />}> </Route>
            <Route path='/TomatoHunt' element={<TomatoHunt />}> </Route>
        
        </Routes>
    </BrowserRouter>
    
  )
}

export default App