import { useState } from 'react'
import './App.css'
import  { HeroSection }  from './components/HeroSection'
import Fade from "react-reveal/Fade";
import  { TechStack }  from './components/TechStack'
import Header from "./components/Header"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import AboutMe from './components/AboutMe';

function App() {
  const [mode, setMode] = useState('light')
  return (
    <div className='flex-flex-col h-screen justify-between'>
      <Fade top distance='10%' duration={2000}>
          <BrowserRouter>
            <Header mode={mode} />
            <div className={`absolute w-screen h-screen z-[-10] ${mode == 'light' ? 'bg-[#e6e6e6]' : 'bg-black'}`}>
              <button onClick={() => {mode == 'light' ? setMode('dark') : setMode('light')} } className={`font-nue absolute right-0 mr-12 ${mode == 'light' ? 'text-black' : 'text-white'} z-20`}>{ mode.charAt(0).toUpperCase() + mode.slice(1)}</button>
                <Routes>
                  <Route path="/" element={ <HeroSection mode={mode}/> }/>
                  <Route path="/AboutMe" element={ <AboutMe mode={mode}/> }>
                  </Route>
                  <Route path="/TechStack" element={ <TechStack/> }/>
                </Routes>
              </div>
          </BrowserRouter>
          <div className={`border-b-8 mb-32 w-screen absolute h-20 bottom-0 ${mode == 'light' ? 'border-black' : 'border-white'}`}/>
          <p className={`font-nue absolute inset-x-0 bottom-0 flex justify-center text-center ${mode == 'light' ? 'text-black' : 'text-white'}`}>
            Designed and Created by: Cosmos Grimaldo <br/>
            Technologies used: React, TailwindCSS <br/>
            2023
          </p>
      </Fade>
      
    </div>
  )
}

export default App
