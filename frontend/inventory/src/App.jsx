
import './App.css'
import Register from './components/register'
import Login from './components/login'
import Dash from './components/dashboard'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Orders from './components/orders'
import Profile from './components/profile'

function App() {
 return(
   <>
   
   <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/dashboard' element={<Dash/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/order_details' element={<Orders/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
   </Router>
    </>
 )
}

export default App
