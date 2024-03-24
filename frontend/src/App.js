import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import SignNavbox from './components/SignNavbox'
import About from './components/About'
import AccountHome from './components/AccountHome'
import Income from './components/Income'
import Expenses from './components/Expenses'
import MyCoinAI from './components/MyCoinAI'
import NewTest from './components/NewTest'
import CreateIncome from './components/CreateIncome'
import UpdateIncome from './components/UpdateIncome'
import CreateExpenses from './components/CreateExpenses'
import UpdateExpenses from './components/UpdateExpenses'




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
            <Route path='/Expenses' element={<Expenses />}> </Route>
            <Route path='/MyCoinAI' element={<MyCoinAI />}> </Route>
            <Route path='/NewTest' element={<NewTest />}> </Route>
            <Route path='/CreateIncome' element={<CreateIncome />}> </Route>
            <Route path='/UpdateIncome/:id' element={<UpdateIncome />}> </Route>
            <Route path='/CreateExpenses' element={<CreateExpenses />}> </Route>
            <Route path='/UpdateExpenses/:id' element={<UpdateExpenses />}> </Route>
            

            
        
        </Routes>
    </BrowserRouter>
    
  )
}

export default App