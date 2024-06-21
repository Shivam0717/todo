
import { configureStore } from "@reduxjs/toolkit";
import { taskAction, weathreducer } from "../Reducer";

const store=configureStore({
    reducer:{
        task:taskAction,
        weath:weathreducer
    }
})

export default store