const express = require('express')
const mongoose =require('mongoose')
const routes=require('./routes/TodoRoutes')
require('dotenv').config()
const cors=require("cors")
const app=express()
const PORT= process.env.port||5000
app.use(express.json())
app.use(cors())
mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log(`Connected to mongodb`))
.catch((err)=>console.log(err))

app.use(routes)
app.listen(PORT,()=>console.log(`Listening on :${PORT}`));

