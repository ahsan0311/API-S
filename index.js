import express from 'express';
import dotenv from "dotenv";
import { comments } from './all-api/comments.js';
import {  post } from './all-api/post.js';
import {  album } from './all-api/album.js';
import {  todos } from './all-api/todos.js';
import {  photos } from './all-api/photos.js';
import {  users } from './all-api/users.js';

const app = express();
dotenv.config()

const PORT =  process.env.PORT


app.get ("/" , (req, res) =>{
    res.status(200).send ("Welcome to api page")
})

app.get("/post" , (req, res) =>{
    res.send({ status : 200 , massage : "Welcome to post api" , post : post})
})

app.get ("/comments" , (req, res) =>{
    res.send({status: 200 , message : "Welcome to comments api" , comments: comments})
})

app.get ("/album" , (req, res) =>{
    res.send({status: 200 , message : "Welcome to album api" , comments: album})
})

app.get ("/photos" , (req, res) =>{
    res.send({status: 200 , message : "Welcome to photos api" , comments: photos})
})

app.get ("/todos" , (req, res) =>{
    res.send({status: 200 , message : "Welcome to todos api" , comments: todos})
})

app.get ("/users" , (req, res) =>{
    res.send({status: 200 , message : "Welcome to users api" , comments: users})
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})