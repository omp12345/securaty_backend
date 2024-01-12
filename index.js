const express = require('express');
const app = express();
require("dotenv").config()


const {connection}=require("./db.js")
app.use(express.json())


app.use(express.json())
const userRoutes = require('./routes/userRoutes');
const { upload_FileRoute } = require('./routes/file.routes.js');

const cors=require("cors")
app.use(cors())
app.get("/",(req,res)=>{
    res.send("welcome to mobigic")
})
const { auth } = require('./middleware/auth.middleware.js');

app.use('/api/user', userRoutes);
app.use("/uploadfiles",upload_FileRoute);



app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT,async()=>{
    await connection
    console.log("database is conencted")
    console.log(`port ${process.env.PORT} running at the server`)
})


