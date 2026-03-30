import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      // Sign Up logic
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Perform sign-up API call here
      console.log("Signing up with:", { name, email, password });
    } else {
      // Login logic
      // Perform login API call here
      console.log("Logging in with:", { email, password });
    }
    localStorage.setItem("user", JSON.stringify({name, email}));
  }

  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h3 className="text-center mb-3">
              {isLogin ? "Login" : "Sign Up"}
            </h3>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control"  placeholder="Enter name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
                </div>
              )}

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

              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            <p className="text-center mt-3">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                className="btn btn-link"
                onClick={() => {
                  return setIsLogin(!isLogin)
                  }}
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;