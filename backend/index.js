const express = require("express")
const cors= require ("cors")
const port= 2000
const app=express()
const connectDb= require("./db")
const routers = require("./route")
const cookieParser=require("cookie-parser")
connectDb() 

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.use(express.json())

app.use(cookieParser()); 
app.use("/api", routers) 

app.listen(port,()=>console.log("server running",port))
