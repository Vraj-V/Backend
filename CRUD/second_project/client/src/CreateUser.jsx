    import React, { useState,useEffect } from 'react'
    import { useNavigate } from 'react-router-dom'
    import axios from 'axios'
    const CreateUser = () => {
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
            try{
                await axios.post("http://localhost:5000/create",{
                    name : newUser.name,
                    age : newUser.age,
                    email : newUser.email
                })
                console.log("user created!")
                
            }catch(err){
                console.log(err)
            }
            finally{
                navigate("/")
            }
            setUser({
                    name:"",
                    email:"",
                    age:Number("0")
                })
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
                    <button className='mt-3 w-100 fw-bold btn btn-success'> Submit</button>

            </form>
            
            
            </div>
            </div>
    )
    }

    export default CreateUser