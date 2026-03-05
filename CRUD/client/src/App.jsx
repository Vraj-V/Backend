import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [user,setUser] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/getUsers/")
    .then((result)=>{
      console.log(result);
      setUser(result.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div>
      
    </div>
  )
}

export default App
