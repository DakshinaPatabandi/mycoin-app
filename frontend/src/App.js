import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import AccountHome from './components/AccountHome'
import Income from './components/Income'
import Expenses from './components/Expenses'
import MyCoinAI from './components/MyCoinAI'

import CreateIncome from './components/CreateIncome'
import UpdateIncome from './components/UpdateIncome'
import CreateExpenses from './components/CreateExpenses'
import UpdateExpenses from './components/UpdateExpenses'

import HomeNew from './components/HomeNew'
import Features from './components/Features'
import Register from './components/Register'
import Benifits from './components/Benifits'
import Footer from './components/Footer'




import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"








const App = () => {
  return (
    
    <BrowserRouter>
        <Routes>


            <Route path='/login' element={<Login />}> </Route>
            <Route path='/signup' element={<Signup />}> </Route>
            <Route path='/AccountHome' element={<AccountHome />}> </Route>
            <Route path='/Income' element={<Income />}> </Route>
            <Route path='/Expenses' element={<Expenses />}> </Route>
            <Route path='/MyCoinAI' element={<MyCoinAI />}> </Route>

            <Route path='/CreateIncome' element={<CreateIncome />}> </Route>
            <Route path='/UpdateIncome/:id' element={<UpdateIncome />}> </Route>
            <Route path='/CreateExpenses' element={<CreateExpenses />}> </Route>
            <Route path='/UpdateExpenses/:id' element={<UpdateExpenses />}> </Route>
            
            <Route path='/' element={<HomeNew />}> </Route>
            <Route path='/Features' element={<Features />}> </Route>
            <Route path='/Register' element={<Register />}> </Route> 
            <Route path='/Benifits' element={<Benifits />}> </Route>
            <Route path='/Footer' element={<Footer />}> </Route>


            

            
        
        </Routes>
    </BrowserRouter>
    
  )
}

export default App