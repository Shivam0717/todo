const mongoose =require("mongoose")

const connect=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/todo")
        console.log("connected db");
    }
    catch{
        console.log("error db :"+ error);
    }
}
// export {connect}  //ES6 module is requird

module.exports=connect