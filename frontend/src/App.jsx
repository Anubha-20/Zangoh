//import { useState } from 'react'

import './App.css'
//import Nav from './components/commons/Navbar'
import Landing from './components/Landing/landing'
import Header from './components/commons/header'
import MyAccount from './components/Pages/myAccount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    <>
       <BrowserRouter>
         <Header />
         <br/>
         <br/>
         <br/>
         <br/>
         <Routes>
          {/* <Route path="/" element={<h1>...product listing</h1>}/> */}
          <Route path="/" element={<Landing/>}/>
          <Route path="/MyAccount" element={<MyAccount/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
