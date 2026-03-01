import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import TodoModel from './Models/Todo.js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const TodoModel = require('./Models/Todo.js')

const app = express()
app.use(cors())
app.use(express.json())

const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todoapp'
mongoose.connect(mongoURI)

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add',(req,res)=>{
    const task = req.body.task
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})


app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.delete('/delete/:id', (req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})