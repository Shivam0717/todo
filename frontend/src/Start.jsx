import { WidthFull } from "@mui/icons-material"
import "./Start.css"
import logo from "./logo.jpg"
import { Link, useNavigate } from "react-router-dom"

function START(){

    const navigate=useNavigate()

    //if user already logged than directly get data from local storage
    function startUser() {
        if( localStorage.getItem("newUser")!==null){
            navigate("/todolist")
        }
        else{
            navigate("/login")
        }
    }
    
    return(
        <>
        <section className=" container log  d-flex flex-column justify-content-center align-items-center">
            <img className="img" src={logo} alt="" />
            <div className="text-white fw-bold" style={{fontSize:"50px"}}>TO DO LIST </div>
            <div  className="text-white" style={{fontStyle:"italic"}}>"Design Your Own Day"</div>
            <button className='set set2  bg-white mx-5 mt-5 d-flex pt-1 justify-content-center' onClick={startUser} style={{height:"40px", width:"140px", borderRadius:"25px"}}> <span class="material-symbols-outlined fw-bold " style={{fontSize:"18px",    marginTop: "6px"}}>
logout
</span><p>Start</p> </button>
        </section>
        </>
    )
}
export{START}