import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {Routes, Route} from 'react-router-dom'
import Login from './Login'
const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/home' element={<h1>Home  Page</h1>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  )
}

export default App