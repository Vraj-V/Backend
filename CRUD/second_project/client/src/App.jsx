import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes,Route} from 'react-router-dom'
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      
      
      <Routes>
        <Route path='/' element= {<User />}></Route>
        <Route path='/createUser' element= {<CreateUser />}></Route>
        <Route path='/updateUser/:id' element= {<UpdateUser />}></Route>

      </Routes>
      
      
      </div> 

    </>
  )
}

export default App
