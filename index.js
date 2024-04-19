const express = require('express');
const app = express();
require("dotenv").config()

const { connection } = require('./db');
const cors=require("cors")

app.use(express.json())
app.get("/",(req,res)=>{
    res.json("todo")
})
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');



app.use(cors())
app.use('/api/user', userRoutes);
app.use('/api/task', taskRoutes);

app.listen(process.env.PORT,async()=>{
    await connection
    console.log("database is conencted")
    console.log(`port ${process.env.PORT} running at the server`)
})


