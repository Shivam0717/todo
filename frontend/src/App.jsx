import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y,Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import TASKINPUT from './TaskInput';
import { TASKLIST } from './taskList';
import { Login } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { data, load, loggedOut } from './Redux/Action';
import { useNavigate } from 'react-router';

function App() {

 
   
  const weath=useSelector((state)=>state.weath.weather)
  let isdata=useSelector((state)=>state.weath.isdata)
  let isloading=useSelector((state)=>state.weath.isloading)
  
  const[weather,setweather]=useState({
    place:[],
    tim:"",
    temp:[],
    text:"",
    img:"",
   
  })
  

  const dispatch=useDispatch()
  const navigate= useNavigate()

  // Getting all users and current user from localstorage

  const newUser=JSON.parse(localStorage.getItem('newUser'))
  const allUser=JSON.parse(localStorage.getItem('user'))

  //Dispatching city to redux store
  useEffect(() => {
    dispatch(data(newUser.city))
    dispatch(load())

  },[]);
  

  //getting weather data
  useEffect(()=>{
    console.log(weath[0]);
    if(weath[0]!==undefined){
      setweather({
        place : [weath[0][0].location.name,weath[0][0].location.region,weath[0][0].location.country,],
        temp:[weath[0][0].current.temp_c+" C",weath[0][0].current.temp_f+ " F"],
        text:weath[0][0].current.condition.text,
        img:weath[0][0].current.condition.icon,
       
    
    })

    }
    
  },[isdata])

 
  let newAll=[]

  //logout function
  function logout(){
  
    const x=JSON.parse(localStorage.getItem("newUser"))
  
    newAll= allUser.map(el => {
      if(el.name==x.name){
        
        return(x)
      }
      else{
        return(el)
      }
    });

    dispatch(loggedOut())
    localStorage.setItem("user",JSON.stringify(newAll))
    console.log(newAll,"3");
    localStorage.removeItem("newUser")
    navigate("/")

  }

  return (   
    <>
       <section className="container container1 border d-flex p-0" >
        <div className='left  p-0 h-100'>
          <div className='left-up py-4 ps-2 border-bottom d-flex'>
            <div className='rounded-circle  ms-3 d-flex align-items-center justify-content-center' style={{height:"67px",width:"69px"}}> <span class="material-symbols-outlined fw-bold " style={{fontSize:"55px"}}>
account_circle
</span></div>
            <div className='mx-2 py-2' >
              <span className='fw-bold  '  style={{fontSize:"16px",fontStyle:"italic"}} >Welcome,</span>
              <p className='' style={{fontSize:"16px", fontFamily: "Lucida Console"}}>{newUser.name}</p>
            </div>
           
          </div>
          <div className="left-down py-4  d-flex flex-column justify-content-between" style={{height:"420px", paddingLeft:"30px"}}>
            <div className='hh'>
            <span className='mx-5 '  style={{fontSize:"25px", fontWeight:"bold",}}>Pr<span style={{ borderBottom:"2px solid white"}}>ioriti</span>es </span>
            <div className=' traf mx-5 mt-4'>
            <div className='d-flex' style={{height:"35px"}}> <div className='bg-danger mt-2 mx-2 rounded-circle' style={{height:"10px", width:"10px"}}></div>  <div className='mx-2'  style={{fontFamily: "Lucida Console"}}>High</div></div>
            <div className='d-flex' style={{height:"35px"}}><div  className='bg-warning mt-2 mx-2 rounded-circle' style={{height:"10px", width:"10px"}}></div>  <div className='mx-2' style={{fontFamily: "Lucida Console"}}>Medium</div></div>
            <div className='d-flex' style={{height:"35px"}}><div  className='bg-success mt-2 mx-2 rounded-circle' style={{height:"10px", width:"10px"}}></div>  <div className='mx-2' style={{fontFamily: "Lucida Console"}}>Low</div></div>
            </div>
            
            </div>

            <div className='bttt'>
              <button className='set set1 bg-white  d-flex pt-1 justify-content-center' onClick={logout} style={{height:"40px", width:"140px", borderRadius:"25px", marginLeft:"30px"}}> <span class="material-symbols-outlined fw-bold " style={{fontSize:"18px",    marginTop: "6px"}}>
logout
</span><p className='lout'>Logout</p> </button>
           
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='right px-5 py-4 border-start'>

          {/* right top */}
          <div className='right-top w-100 d-flex justify-content-between'>
          <div className='quote  ' >
            <span className='lets' style={{fontSize:"30px", fontWeight:"bold"}}>Lets Focus buddy,
            </span>
            <p className=' lets mt-0 pt-0' style={{fontSize:"20px" , fontFamily: "Lucida Console"}}>Make a Goal</p>
            
          </div>

          <div className='weather d-flex gap-2'>
            <div style={{width:"70px"}}>
              <div><img src={weather.img} alt=""  style={{height:"50px",width:"60px !important"}}/></div>
              <div className='mx-2 tw fw-bold' style={{fontSize:"14px"}}>{weather.text}</div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <p className='m-0' style={{fontSize:"20px", fontWeight:"bold"}}>{weather.temp[0]}</p>
              <p style={{fontSize:"13px"}}>({newUser.city})</p>
            </div>
          </div>
          </div>

          {/* right bottom  */}
         <TASKINPUT></TASKINPUT>
         <TASKLIST></TASKLIST>
         <div className=' prr w-100  align-items-center justify-content-center' style={{display:"none"}}>

         <button className='set set1 bg-white mx-5  pt-1 justify-content-center' onClick={logout} style={{height:"40px", width:"140px", borderRadius:"25px", display:"none"}}> <span class="material-symbols-outlined fw-bold " style={{fontSize:"18px",    marginTop: "6px"}}>
logout
</span><p >Logout</p> </button>
         </div>
        
<div className=' mt-4 prr w-100  align-items-center justify-content-center' style={{display:"none"}}>
  <div>
<span className='mx-5 '  style={{fontSize:"25px", fontWeight:"bold",}}>Pr<span style={{ borderBottom:"2px solid white"}}>ioriti</span>es </span>
            
            <div className='d-flex pt-2 justify-content-center' style={{height:"35px"}}> <div className='bg-danger mt-2 mx-2 rounded-circle' style={{height:"10px", width:"10px"}}></div>  <div className='mx-2'  style={{fontFamily: "Lucida Console"}}>High</div></div>
            <div className='d-flex pt-2 justify-content-center' style={{height:"35px"}}><div  className='bg-warning mt-2 mx-2 rounded-circle' style={{height:"10px", width:"10px"}}></div>  <div className='mx-2' style={{fontFamily: "Lucida Console"}}>Medium</div></div>
            <div className='d-flex pt-2 justify-content-center' style={{height:"35px"}}><div  className='bg-success mt-2 mx-2 rounded-circle' style={{height:"10px", width:"10px"}}></div>  <div className='mx-2' style={{fontFamily: "Lucida Console"}}>Low</div></div>
            </div>
</div>
        </div>
       </section>
    </>
  )
}

export default App
