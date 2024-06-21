const mong=require("mongoose")
const {Schema}=mong

const userSchema= new Schema({
    name: {type:String,required:true},
    password: {type:String, required:true},
    tasks:{type:[Object]},
   
    token:String,
 
})

const Users=mong.model("user",userSchema)
module.exports=Users