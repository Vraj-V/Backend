import React, { useEffect, useState } from 'react'
import Create from '../components/Create'
import axios from 'axios';
import { BsCircleFill, BsFillTrashFill,BsFillCheckCircleFill } from 'react-icons/bs';
const Home = () => {
    const [todos,setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/get')
        .then(response => {
            setTodos(response.data);
        }).catch(error => {
            console.error('Error fetching todos:', error);
        });
        
    }, []);

    const handleEdit = (id) => {
        console.log('Edit todo with id:', id);
        axios.put('http://localhost:3000/update/' + id)
        .then(result => {
            location.reload()
            
        }).catch(error => {
            console.error('Error updating todo:', error);
        });
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/delete/' + id)
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