import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from "./compoment/Login";
import Registration from "./compoment/Registration";
const App = () => {
  
  return (
    <div className="container mt-5">
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registration />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;