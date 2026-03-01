import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <section className='d-flex justify-content-center align-items-center bg-white flex-column vh-100'>
        <h1>Home</h1>

    <div className='d-flex justify-content-between gap-5'>

        <Link to='/register' className='mt-5'>
            <button className='btn btn-success w-100 rounded'>Register</button>
        </Link>

        
        <Link to='/login' className='mt-5'>
            <button className='btn btn-success w-100 rounded'>Login</button>
        </Link>
    </div>
    </section>
  )
}

export default Home