const { registerUser, loginUser, logout } = require("./controller")

const router = require("express").Router()

router.post("/signup",registerUser).post("/login",loginUser).post("/logout",logout)
// console.log("yoo"); 
module.exports=router