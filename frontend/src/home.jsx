import { useState } from "react"
import "./home.css"
import { Toaster, toast } from 'sonner';
import { Navigate, useNavigate } from "react-router";

function HOME(){
    const [disp,setDisp]=useState("none ")
    const [log,setLog]=useState("flex")

    const [user,setuser]=useState({
        name:"",
        password:""
    })

    const [login,setlogin]=useState({
        name:"",
        password:"",
        city:""
    })

    //getting users from loacalstorage
    let allUsers=[]
    const [confr,setconfr]=useState("")
    if(localStorage.getItem('user')!==null){
         allUsers=JSON.parse(localStorage.getItem('user'))
    }
   

    //sign-in newuser (if user already signed than it will give msg)
    function signed (){
        if(user.name!=="",user.password!==""){
            if(user.password==confr){

                allUsers.forEach((x)=>{
                    console.log(x);                   
                    
                 if(x.name==user.name){
                        toast.error("User already exist")
                    }
                                   
                })

                console.log(allUsers);
                const pass=user.password
                
                allUsers.push({...user,password:pass})
            
                localStorage.setItem('user', JSON.stringify(allUsers));
                console.log("signed user");
                setLog("flex")
                setDisp("none")
                setuser({
                    name:"",
                    password:""
                })
                setconfr("")
            }
            else{
                toast.error('Password not matched', { duration: 2000 });
            }
        }
        else{
           
            toast.error("Please fill all the details", { duration: 2000 });
        }
        
    }


    const navigate=useNavigate()

    //logging a new user
    function logAnUser(){
        if(login.name!==""&&login.password!==""){
            
        console.log(login);
       
        allUsers.forEach((x)=>{
              
            if(x.name==login.name&&x.password==login.password){
                console.log("byee");
                const q={...x,city:login.city}
                console.log(q,"34");
                localStorage.setItem("newUser",JSON.stringify(q))
                navigate("/todolist")
            }
            else{
                toast.error("details incorrect")
                
            }
           
        })        
        
    }
    else{
        
        toast.error("Please fill all the details", { duration: 2000 });
    }
        
    }



    
    return(
        <>
         <Toaster position="top-center"  toastOptions={{
    style: {
      color: 'red',
    },
   
  }} />
        <section className="container-fluid d-flex  justify-content-center  mt-5 w-25 py-1 gap-3" style={{height:"70px", backgroundColor:"black"}}>
            <div><span class="material-symbols-outlined mt-3 fw-bold text-white" style={{fontSize:"30px"}}>
format_list_bulleted
</span></div>
<div className="mt-2"><p style={{fontWeight:"bold", fontSize:"30px", fontFamily: "Lucida Console", color:"white"}}>To-Do</p></div>
        </section>
        <section className="container container2 flex-column justify-content-between mt-2 w-25 py-4 " style={{height:"500px", display:log}}>
            <div className="w-100 text-center fw-bold " style={{fontSize:"35px"}}> L<span className="py-1" style={{ borderBottom:"3px solid white"}}>ogi</span>n </div>
            <div className="w-100">
            <div className="w-100 d-flex flex-column align-items-center"><p className="ms-4 mb-1 fw-bold"  style={{textAlign:"left !important",width:"80%"}}>Username</p> <input className="px-3"      value={login.name} placeholder="Enter Your Username"  type="text" style={{width:"80%" ,  height:"40px", borderRadius:"25px", fontSize:"13px"}}         onChange={(e)=>(setlogin({...login,name:e.target.value}))} /></div>
            <div className="w-100 d-flex flex-column align-items-center mt-3"><p className="ms-4 mb-1 fw-bold"  style={{textAlign:"left !important",width:"80%"}}>Password</p> <input className="px-3" value={login.password} placeholder="Enter Your Password"  type="password" style={{width:"80%" ,  height:"40px", borderRadius:"25px", fontSize:"13px"}} onChange={(e)=>{setlogin({...login,password:e.target.value})}} /></div>
            <div className="w-100 d-flex flex-column align-items-center mt-3"><p className="ms-4 mb-1 fw-bold"  style={{textAlign:"left !important",width:"80%"}}>City </p> <input className="px-3"    value={login.city} placeholder="Enter Your City"  type="text" style={{width:"80%" ,  height:"40px", borderRadius:"25px", fontSize:"13px"}}             onChange={(e)=>(setlogin({...login,city:e.target.value}))} /></div>
            </div>
            <div className="w-100 d-flex justify-content-center">
            <button className='set bg-white  d-flex pt-1 justify-content-center fw-bold' onClick={logAnUser} style={{height:"40px", width:"140px", borderRadius:"10px"}}> <p>Login</p> </button>
            </div>
            <div className="w-100 text-center">
                <span>Not have an account? <a className="text-primary" onClick={()=>{setlogin({...user,name:"",password:""});setLog("none");setDisp("flex");}} >SignUp</a></span>
            </div>
        </section>

        {/* signup */}
        <section className="container container2 flex-column justify-content-between mt-2 w-25 py-4 " style={{height:"500px", display:disp}}>
            <div className="w-100 text-center fw-bold " style={{fontSize:"35px"}}> S<span className="py-1" style={{ borderBottom:"3px solid white"}}>ignu</span>p </div>
            <div className="w-100">
            <div className="w-100 d-flex flex-column align-items-center"><p className="ms-4 mb-1 fw-bold"  style={{textAlign:"left !important",width:"80%"}}>Username</p> <input className="px-3"      placeholder="Enter Your Username" value={user.name} type="text" style={{width:"80%" ,  height:"40px", borderRadius:"25px", fontSize:"13px"}} onChange={(e)=>setuser({...user,name:e.target.value})}/></div>
            <div className="w-100 d-flex flex-column align-items-center mt-3"><p className="ms-4 mb-1 fw-bold"  style={{textAlign:"left !important",width:"80%"}}>Password</p> <input className="px-3" placeholder="Enter Your Password" value={user.password}  type="password" style={{width:"80%" ,  height:"40px", borderRadius:"25px", fontSize:"13px"}} onChange={(e)=>setuser({...user,password:e.target.value})}/></div>
            <div className="w-100 d-flex flex-column align-items-center mt-3"><p className="ms-4 mb-1 fw-bold"  style={{textAlign:"left !important",width:"80%"}}>Confirm Password</p> <input className="px-3" placeholder="Enter Your Password Again" value={confr}  type="password" style={{width:"80%" ,  height:"40px", borderRadius:"25px", fontSize:"13px"}} onChange={(e)=>setconfr(e.target.value)} /></div>
            </div>
            <div className="w-100 d-flex justify-content-center">
            <button className='set bg-white  d-flex pt-1 justify-content-center fw-bold'onClick={signed} style={{height:"40px", width:"140px", borderRadius:"10px"}}> <p>Signup</p> </button>
            </div>
            
            <div className="w-100 text-center">
                <span>Already have an account? <a className="text-primary"  onClick={()=>{; setDisp("none");setLog("flex")}}>Login</a></span>
            </div>
           
        </section>
        
        </>
    )
}
export{HOME}