import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        axios.post("http://localhost:5000/login",{Email,Password})
        .then(res => {
            console.log(res)
            if(res.data === "Success"){
                navigate('/welcome')
            }else{
                navigate('/login')
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form action="post" onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <label htmlFor="email"> <strong>Email:</strong> </label>
                        <input type='email' placeholder='Enter the email' autoComplete='off' name='email'
                        className='form-control rounded-0' value={Email} onChange={(e)=>{
                            setEmail(e.target.value);
                        }} required/>
                    </div>

                    
                    <div className='mb-3'>
                        <label htmlFor="password"> <strong>Password:</strong> </label>
                        <input type='password' placeholder='Enter the password' autoComplete='off' name='password'
                        value={Password} onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        className='form-control rounded-0' required/>
                    </div>


                    
                    <button className='btn btn-success w-100 rounded-0'  type='submit'> Login</button>
                    
                </form>
                    <p className='mt-3'>Don`t have an account</p>
                    <Link to='/register'>
                        <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</button>
                    </Link>
            </div>

        </div>
    </div>
  )
}

export default Login