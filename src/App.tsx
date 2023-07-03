import { useState } from 'react'
import './App.css'
import  { HeroSection }  from './components/HeroSection'
import  { TechStack }  from './components/TechStack'
import Header from "./components/Header"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header mode='dark' />
      <Routes>
          <Route path="/TechStack" element={ <TechStack/> }/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
