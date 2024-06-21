import { ADD_TASK, CLEAR, DELETE_TASK,EDIT_TASK,FETCH_DATA, FETCH_DATA_FAIL, FETCH_DATA_SUCCESS, LOAD } from "../Action";

const allTasks={
    tasks:[],
    x:false,
    got:false
}

const intitstate={
    weather:[],
    isloading:false,
    isdata:false
}

//reducer function for task
export function taskAction(state=allTasks,action){
   
   switch (action.type) {

    case ADD_TASK:
        
            let v={...state,tasks:[...state.tasks,{list:action.payload.task,pr:action.payload.priority,id:action.payload.key}],x:true}
        let c=JSON.parse(localStorage.getItem("newUser"))
        console.log(c,"hgh");

        localStorage.setItem("newUser",JSON.stringify({...c,work:v.tasks}))
        return{...state,tasks:[...state.tasks,{list:action.payload.task,pr:action.payload.priority,id:action.payload.key}],x:true}
        
         
        
        
    case CLEAR:

        return{...state,tasks:[]}
        
    case DELETE_TASK:
        console.log(action.payload.list);
        const a= state.tasks.filter((l)=>{

            if(l.list!==action.payload.list){
        return(l)
        }
       })
        // console.log(a,"naruto");

       let p=JSON.parse(localStorage.getItem("newUser"))

       localStorage.setItem("newUser",JSON.stringify({...p,work:a}))
   
        return{...state,tasks:a}


    case EDIT_TASK:
         console.log(action.payload,"edit");
         let x=JSON.parse(localStorage.getItem("newUser"))
         localStorage.setItem("newUser",JSON.stringify({...x,work:action.payload}))
         return{...state,tasks:action.payload}

    case LOAD:    
        if(localStorage.getItem("newUser")!==null ){
  
            if(JSON.parse(localStorage.getItem("newUser")).work!==undefined ){  //yaha prblm aari thi ki first time task enter krne pe show ni hora tha and state.tasks undefined aa rha tha  //coz yaha == null bhi krdiya tha and OR lgaya tha AND lgana tha
        
                console.log(state,"pooooo");
                return{...state,tasks:JSON.parse(localStorage.getItem("newUser")).work,got:true}
               }
        
           }
   }

     //yeh cheez verecel me run ni hori thi//
  
   
//    if(localStorage.getItem("newUser")!==null ){
  
//     if(JSON.parse(localStorage.getItem("newUser")).work!==undefined ){  //yaha prblm aari thi ki first time task enter krne pe show ni hora tha and state.tasks undefined aa rha tha  //coz yaha == null bhi krdiya tha and OR lgaya tha AND lgana tha

//         console.log(state,"pooooo");
//         return{...state,tasks:JSON.parse(localStorage.getItem("newUser")).work,got:true}
//        }

//    }

   console.log(state)
    return state;
}


//reducer for weather
export function weathreducer(state=intitstate,action){
    if(action.type==FETCH_DATA){   
        console.log("sasuke");
        return({...intitstate,isloading:true,isdata:false})
    }
    if(action.type==FETCH_DATA_FAIL){
        console.log(action.payload);
        return({...intitstate,weather:[action.payload],isloading:false,isdata:true})
    }
    if(action.type==FETCH_DATA_SUCCESS){
        return({...intitstate,isdata:false})
    }
    if(action.type==CLEAR){
        return({...intitstate,weather:[]})
    }
   
    return state;
}