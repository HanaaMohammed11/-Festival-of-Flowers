import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
import Plants from './Pages/plants/Plants';
import NavBar from './Components/Nav/NavBar';

function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/plants' element={<Plants />}/>
    </Routes>
  
    </>
  )
}

export default App;
