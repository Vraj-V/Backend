import React, { useState } from 'react'
import axios from 'axios'


const Create = ({ todos ,setTodos }) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => { 
    e.preventDefault()

    axios.post('http://localhost:3000/add', { task: input })
    .then(response => {
        location.reload()
      console.log('Todo added:', response.data)
    })
    .catch(error => {
      console.error('Error adding todo:', error)
    })
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <form className='create-form' onSubmit={handleSubmit}>
      <input type="text" name='todo' value={input} onChange={handleChange} />
      <button className='btn' type='submit'>Add</button>
    </form>
  )
}

export default Create