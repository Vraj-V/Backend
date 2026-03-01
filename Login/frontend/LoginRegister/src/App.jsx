import React from 'react'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Welcome from './Welcome'

const App = () => {
  return (
    <main>
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/welcome' element={<Welcome />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </main>
  )
}

export default App