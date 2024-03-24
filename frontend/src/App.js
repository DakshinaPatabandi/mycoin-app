import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SignNavbox from './components/SignNavbox'
import About from './components/About'
import AccountHome from './components/AccountHome'
import Income from './components/Income'
import Expences from './components/Expences'
import MyCoinAI from './components/MyCoinAI'
import NewTest from './components/NewTest'



const App = () => {
  return (
    
    <BrowserRouter>
        <Routes>

            <Route path='/' element={<Home />}> </Route>           
            <Route path='/login' element={<Login />}> </Route>
            <Route path='/signup' element={<Signup />}> </Route>
            <Route path='/SignNavbox' element={<SignNavbox />}> </Route>
            <Route path='/About' element={<About />}> </Route>
            <Route path='/AccountHome' element={<AccountHome />}> </Route>
            <Route path='/Income' element={<Income />}> </Route>
            <Route path='/Expences' element={<Expences />}> </Route>
            <Route path='/MyCoinAI' element={<MyCoinAI />}> </Route>
            <Route path='/NewTest' element={<NewTest />}> </Route>

            
        
        </Routes>
    </BrowserRouter>
    
  )
}

export default App