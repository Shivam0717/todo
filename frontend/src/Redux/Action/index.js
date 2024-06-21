export const ADD_TASK="addtask"
export const DELETE_TASK="deletetask"
export const EDIT_TASK="edittask"
export const CLEAR="clear"
export const LOAD="load"
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
import axios from "axios";


export function addNew(a){
    console.log(a);
    return{
        payload:a,
        type:ADD_TASK
    }
}

export function deleteData(a){
    console.log(a,"2");
    return{
        payload:a,
        type:DELETE_TASK
    }
}
export function editData(a){
    console.log(a);
    return{
        payload:a,
        type:EDIT_TASK
    }
}

export function loggedOut(){
    return{
        type:CLEAR
    }
}

export function load(){
    return{
        type:LOAD
    }
}


//fetching data from weather API

export const data=(a)=>{return( async(dispatch)=>{
    // dispatch({type:FETCH_DATA})
    try {
        const p=`http://api.weatherapi.com/v1/current.json?key=2183c815cc374ce2a1393221240504&q=${a}&aqi=no`
        const b=await axios.get(p)
        const c=b.data
        console.log(c);
        dispatch({type:FETCH_DATA_FAIL,payload:[c]})
       
    } catch (error) {
        
        console.log("error");
    }
}
)
}
export const done=()=>{
    return{
        type:FETCH_DATA_SUCCESS
    }
}