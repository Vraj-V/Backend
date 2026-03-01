import React, { useEffect, useState } from 'react'
import Create from '../components/Create'
import axios from 'axios';
import { BsCircleFill, BsFillTrashFill,BsFillCheckCircleFill } from 'react-icons/bs';
import API_URL from '../config'
const Home = () => {
    const [todos,setTodos] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/get`)
        .then(response => {
            setTodos(response.data);
        }).catch(error => {
            console.error('Error fetching todos:', error);
        });
        
    }, []);

    const handleEdit = (id) => {
        console.log('Edit todo with id:', id);
        axios.put(`${API_URL}/update/` + id)
        .then(result => {
            location.reload()
            
        }).catch(error => {
            console.error('Error updating todo:', error);
        });
    }

    const handleDelete = (id) => {
        axios.delete(`${API_URL}/delete/` + id)
        .then(result => {
            location.reload()
            
        }).catch(error => {
            console.error('Error updating todo:', error);
        });
    }
  return (
    <section className='home'>
        <h1>Welcome to the Todo List Page</h1>
        
        <Create todos={todos} setTodos={setTodos} />
        
        <br />
        {
            todos.length === 0 ? <div><h2>No record</h2></div>
            :todos.map((todo, idx) =>(
                <div key={idx} className='task'>
                    <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                        {todo.done ?
                            <BsFillCheckCircleFill className='icon'/>
                            : <BsCircleFill className='icon'/>
                        }
                        
                        <p className={todo.done ? "line_through" : ""}>{todo.task}</p>

                    </div>
                    <div>
                        <span> <BsFillTrashFill className='icon' onClick={()=>handleDelete(todo._id)}/> </span>
                    </div>
                </div>
                
            ))
        }
        
    </section>
  )
}

export default Home