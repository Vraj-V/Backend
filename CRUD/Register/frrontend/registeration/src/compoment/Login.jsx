import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(email === '' && password ==="" ){
        alert("Something went wrong")
        return ;
        }
        
          // Sign Up logic
    }
    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-5">
            <div className="card shadow p-4">
                <h3 className="text-center mb-3">
                Sign up
                </h3>
        <form onSubmit={handleSubmit}>
        
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary w-100">
                    Sign up
                </button>
                </form>
                <p className="text-center mt-3">
                Don`t have an account
                <button
                    className="btn btn-link"
                    onClick={() => {
                        navigate('/signup')
                    }}
                >Sing Up</button>
                </p>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Login