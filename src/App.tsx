import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { HeroSection } from './components/HeroSection'
import { TechStack } from './components/TechStack'

function App() {

  return (
      <div>
        <Header />
        <HeroSection />
        <TechStack />
      </div>
  )
}

export default App
