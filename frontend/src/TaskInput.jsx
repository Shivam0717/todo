import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addNew } from "./Redux/Action";
import "./taskinp.css"
import { Toaster, toast } from "sonner";

function TASKINPUT(){
    const [task,setTask]=useState("")
    console.log(task);


    const [note,setNote]=useState("none")

   

    //show message if prority is not selected
    const handleClick = () => {
      if(pri==""){
        setNote("block");
        setTimeout(() => {
          setNote("none");
        }, 2000); 
      }
    
    };

    const [pri,setPri]=useState("")
    const [sel,setsel]=useState("")
    console.log(sel);
    

    const dispatch=useDispatch()

    function genRadom() {
      return Math.floor(1000 + Math.random() * 9000);
  }

    //add to list (task is sent to action in redux)
    function addToList(){
        const key=`u${genRadom()}`
        if(pri!==""){
          dispatch(addNew({task:task, priority:pri, key:key}))
          toast.success("Task added")
        setTask("")
        setPri("")
        setsel("")
        }
        
    }

    //on pressing enter task will be sent
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        
          event.preventDefault();
          addToList()
      }
  };

    return(
        <>
        <Toaster position="top-center"  toastOptions={{
    style: {
      color: 'green',
    },
   
  }} />
         <div className='right-bottom w-100 pt-3 pb-3 px-3 '>
            <div className='border d-flex align-items-center px-4 justify-content-between bg-white' style={{width:"100%",height:"50px", borderRadius:"50px", position:"relative"}}>
              <div className="p-1 bg-danger text-white text-center" style={{position:"absolute", top:"40px" ,left:"0px", fontSize:"14px", display:note, border:"2px black solid"}}><p className="m-0">Select Priority Above</p> 
              <div className='d-flex w-100 justify-content-center'>
              <div className='bg-danger   prior border border-white mx-2 rounded-circle' style={{height:"10px", width:"10px", border:sel=="red"?"2px solid black":"none"}} onClick={()=>{setPri("#d9534f"); setsel("red")}}></div>
              <div className='bg-success  prior border border-white mx-2 rounded-circle' style={{height:"10px", width:"10px", border:sel=="green"?"2px solid black":"none"}} onClick={()=>{setPri("#5cb85c"); setsel("green")}}></div>
              <div className='bg-warning  prior border border-white mx-2 rounded-circle' style={{height:"10px", width:"10px", border:sel=="yellow"?"2px solid black":"none"}} onClick={()=>{setPri("#f0ad4e"); setsel("yellow")}}></div>
              </div>
              </div>
              <div className='d-flex'>
              <div className='bg-danger   prior  mx-2 rounded-circle' style={{height:"10px", width:"10px", border:sel=="red"?"2px solid black":"none"}} onClick={()=>{setPri("#d9534f"); setsel("red")}}></div>
              <div className='bg-success  prior  mx-2 rounded-circle' style={{height:"10px", width:"10px", border:sel=="green"?"2px solid black":"none"}} onClick={()=>{setPri("#5cb85c"); setsel("green")}}></div>
              <div className='bg-warning  prior  mx-2 rounded-circle' style={{height:"10px", width:"10px", border:sel=="yellow"?"2px solid black":"none"}} onClick={()=>{setPri("#f0ad4e"); setsel("yellow")}}></div>
              </div>
              <input type="text" className='task  px-3' onKeyDown={handleKeyPress} placeholder='Enter the task' value={task} style={{width:"75%",border:"none"}} onChange={(e)=>{setTask(e.target.value)}}/>
              <button className='rounded-circle py-1 bg-white'   onClick={()=>{addToList(); handleClick()}} style={{width:"30px", height:"30px", border:"none"}}><span class="material-symbols-outlined text-danger fw-bolder " style={{fontSize:"25px"}}>
add
</span></button>



            </div>
          </div>
          
        </>
    )
}
export default TASKINPUT