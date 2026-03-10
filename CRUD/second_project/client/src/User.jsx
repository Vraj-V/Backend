import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const User = () => {
    const [user,setUser] = useState([])

    const fetchUser = async ()=>{
        try{
            const result = await  axios.get("http://localhost:5000/user")
            const response = await result.data;
            setUser(response);
            // console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }


    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/delete/${id}`);
            console.log("user deleted");
            fetchUser();
        }catch(err){
            console.log(err);
            }
    }




    useEffect(  ()=>{
        fetchUser();
    },[])
  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
        <div className='w-auto bg-white rounded p-3'>
            <Link to="/createUser" className='btn btn-success'   >Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Email </th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((u)=>{
                        return <tr key={u._id}>
                            <td >{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.age}</td>
                            <td>
            <Link to={`/updateUser/${u._id}`}   className='btn btn-warning '>Update</Link>
                                <span>  </span>
                                <button className='btn btn-danger' onClick={()=>{
                    handleDelete(u._id)
                                }}>Delete</button></td>
                        </tr>
                    })}
                </tbody>

            </table>


        </div>
    </div>
  )
}

export default User