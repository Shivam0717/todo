const Users = require("./model")

const bcrypt=require("bcrypt")
require("dotenv").config()
const jwt=require("jsonwebtoken")


const registerUser=async(req,res)=>{
    console.log("fdg");
    try{
        const {name, password}=req.body
        const existingUser=await Users.findOne({name})
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exist"
            })
        }
        else{
        
            const hashpass= await bcrypt.hash(password,10)

            const newUser=new Users({
                name,
                password:hashpass

            })
        const savedUSer = await newUser.save()
        res.status(200).json({
            success:true,
            message:"User registered",
            user:savedUSer
        })
        
        }
    }

    catch(error){
        console.log(error);
        res.send(error)
    }
}

const loginUser=async(req,res)=>{
    try {

        const {name,password}=req.body
        const user=await Users.findOne({name})
        if(!user){
            res.status(400).json("user does not exist")
        }
        else{
            const pass= await bcrypt.compare(password,user.password);
            if(!pass){
                res.status(400).json({success:false,message:"password is incorrect"})

            }
            else{
               
                const token =jwt.sign(
                    {userid : user._id},
                    process.env.JWT_SECRET_KEY
                )

                user.token=token
                const savedUser= await user.save()
                res.cookie("token",token,{
                    httpOnly:true, 
                    expires:new Date(Date.now()+600000)
                }
            )
            console.log("hjghg");
            res.status(200).json({success:true,message:"Login successfull", user: savedUser})
            }
        }
        
    } catch (error) {
        console.log(error);
        res.send(error)
        
    }
    
    
}

const logout=async(req,res)=>{
    const {name,tasks}=req.body
    const user=await Users.findOne({name})
    if(user){
        user.token=""
        res.clearCookie("token")
        await user.save() 
        res.status(200).json({success:true,message:"Logged out successfully",user:""})
    }
    
}

module.exports={registerUser,loginUser,logout}