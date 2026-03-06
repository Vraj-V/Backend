import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [user,setUser] = useState([])
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  
  
  useEffect(()=>{
      axios.get("http://localhost:3000/getUsers/")
      .then((result)=>{
        setUser(result.data)
      })
      .catch((err)=>{
        console.log(err); 
      })
  },[])


  const handleSubmit = async (e)=>{
  e.preventDefault();
  // console.log(name," ", age)
    if(name.trim() === "" || age.trim() === ""){
      alert("Please fill the form!")
      return;
    }
    // console.log(name," ", age)

    try{
      const sendData =await axios.post("http://localhost:3000/createUser", {name,age})
      console.log(sendData.data);
      console.log("data send successfully");

    }
    catch(err){
      console.log(err);
      alert(err.response.data.message)
    }
    setName("");
    setAge("");
  }

  return (
    <div className='main'>
      <div className='flex'>

      {user.map((users)=>{
        return <div key={users._id}>
          <h1>Your Name:  <span className='spanning'> {users.name} |</span>  Your Age:<span className='age'> {users.age} </span></h1>
        </div>
      })}
      </div>

      <form action="" method='post' onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text"
        name='name'
        id='name'
        autoComplete='off'
        value={name}
        onChange={(e)=>{
          setName(e.target.value);
        }} />
  <br />
<label htmlFor="name">Age: </label>
        <input type="text"
        name='age'
        id='age'
        value={age}
        autoComplete='off'
        onChange={(e)=>{
          setAge(e.target.value);
        }} />
  <br />
    <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default App
