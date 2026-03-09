import React,{useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UpdateUser = () => {
  const {id} = useParams();

   const [user,setUser] = useState({
              name:"",
              email:"",
              age:0
          })
          const navigate = useNavigate();
          
          const handleChange = (e)=>{
              const {name,value} = e.target;
              setUser({...user,[name]:value})
              console.log(user);
          }


          const handleSubmit = async (e)=>{
            e.preventDefault();
            const newUser = {
                ...user,
                age: Number(user.age)
            };
            console.log(newUser)
          
          
          
          
            }


  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <form action="" method='post' onSubmit={handleSubmit}>
                <h2>Add User: </h2>
                    <div className="mb-2 mt-4">
                        <label htmlFor="">Name: </label>
                        <input type="text"
                        name='name'
                        id='name'
                        value={user.name}
                        onChange={(e)=>{
                            handleChange(e)
                        }}
                        className='input form-control'
                        placeholder='Enter name'/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Email: </label>
                        <input type="text"
                        name='email'
                        id='email'
                        value={user.email}
                        onChange={(e)=>{
                            handleChange(e)
                        }}
                        className='input form-control'
                        placeholder='Enter Email'/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Age: </label>
                        <input
                        name='age'
                        id='age'
                        type="number"
                        value={user.age}
                        onChange={(e)=>{
                            handleChange(e)
                        }}
                        className='input form-control'
                        placeholder='Enter Age'/>
                    </div>
                    <button className='mt-3 w-100 fw-bold btn btn-success'> Update</button>

            </form>
            
            
            </div>
            </div>
  )
}

export default UpdateUser