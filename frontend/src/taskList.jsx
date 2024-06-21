import { useDispatch, useSelector } from "react-redux"
import "./taskList.css"
import { addNew, deleteData, editData } from "./Redux/Action";
import { useEffect, useState } from "react";

function TASKLIST(){
    
    const [isedit,setisedit]=useState(true)

    const[icon,setIcon]=useState({
        success:"block",
        edit:"block",
        delete:"block",
        editted:"none"
    })


    const data = useSelector((state)=>state.task.tasks)
    console.log(data,"sasuke");

    const [lists, setlist] = useState([]);

    //if user tas data already exist it will render single time
    useEffect(() => {

        setlist(data);
      }, [data]);

    const dispatch=useDispatch()


    //delete task dispatching
    function deleteTask(x){
        console.log("1");
        dispatch(deleteData(x))
       
    }

    //change in the list 
    function changeList(a,key){
        console.log(key);
        console.log(a);
        const updatedTasks = lists.map(k =>
            k.id === key ? { ...k, list: a } : k
          );
          setlist(updatedTasks);
      
    }
    function donechange(){
        console.log(lists,"1");
        
        dispatch(editData(lists))
        
    }

   
    return(
        <>
        <hr className="text-white, bg-white" style={{height:"5px", }}/>
        <div className="pt-1 pb-3 fw-bold d-flex justify-content-between"><span><span className="fw-bold pb-1  border-success" style={{borderBottom:"3px solid green", width:"50px"}}>Today's</span> Task</span> <button className='rounded-circle py-2 me-4' onClick={()=>{setisedit(false); setIcon({...icon,success:"none",delete:"none",editted:"block",edit:"none"})}}  style={{width:"30px", height:"30px", border:"none", display:icon.edit, backgroundColor:"transparent"}}><span class="material-symbols-outlined text-success  " style={{fontSize:"23px"}}>
edit
</span></button>
<button className='rounded-circle py-1 ' onClick={()=>{setisedit(true); setIcon({...icon,success:"block",delete:"block",editted:"none",edit:"block"}); donechange()}}   style={{backgroundColor:"transparent",width:"70px", height:"30px", border:"none", display:icon.editted, }}><span class="badge text-bg-danger">Done</span></button>

</div>
        <div className="mostly-customized-scrollbar" style={{maxHeight:"500px"}}>
        {lists==undefined?"": lists.map((x,i)=>{
            return(
                
                <>
            
                 <div className='right-bottom w-100 py-2 'style={{paddingLeft:"20px", paddingRight:"20px"}}>
            <div className='border d-flex align-items-center ps-4 pe-2 justify-content-between bg-white' style={{width:"100%",height:"50px", borderRadius:"50px"}}>
              <div className='d-flex'>
             
              <div className=' mx-2 rounded-circle' style={{height:"10px", width:"10px",backgroundColor:x.pr}} ></div>
              </div>
              <input type="text" className='task bg-white fw-bold px-3' placeholder='Enter the task' value={x.list}  style={{border:"none",width:"85%", fontSize:"13px", fontFamily: '"Arial", "Helvetica", "sans-serif"', letterSpacing:"2px"}} disabled={isedit} onChange={(e)=>changeList(e.target.value,x.id)}/>
              {/* <button className='rounded-circle py-2 bg-white' onClick={()=>colorCh(i)}    style={{width:"30px", height:"30px", border:"none", display:icon.success}}>
              <span class="material-symbols-outlined text-success"  style={{fontSize:"20px"}}>
check_circle

</span></button> */}

<button className='rounded-circle py-2 bg-white' onClick={()=>deleteTask(x)}  style={{width:"30px", height:"30px", border:"none", display:icon.delete}}><span class="material-symbols-outlined text-danger  " style={{fontSize:"20px"}}>
delete
</span></button>



            </div>
          </div>
                </>
            )
            
        })}
        </div>
        </>
    )
}
export{TASKLIST}