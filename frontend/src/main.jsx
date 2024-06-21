import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/Store/index.js'
import { HOME } from './home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { START } from './Start.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
     
     
       <Provider store={store}> 

       <BrowserRouter>
       <Routes>
              <Route path='/' element={<START></START>}> </Route>
              <Route path='/login' element={<HOME></HOME>}></Route>
              <Route path='/todolist' element={<App></App>}></Route>
              
       </Routes>
       </BrowserRouter>
       
       </Provider>
      
   
  
 
 
)
