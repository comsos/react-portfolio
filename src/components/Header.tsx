import React from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'

export default function Header() {
  return (
      <nav className=" bg-transparent lg:absolute left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 pt-32">
        <div className="max-w-screen-xl flex flex-col items-center space-x-48 mt-12 lg:mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
              <img src={reactLogo} className="h-8 mr-3" alt="Flowbite Logo" />
          </a>
          <a href="https://flowbite.com/" className="flex items-center">
              <img src={reactLogo} className="h-8 mr-3" alt="Flowbite Logo" />
          </a>
          <a href="https://flowbite.com/" className="flex items-center">
              <img src={reactLogo} className="h-8 mr-3" alt="Flowbite Logo" />
          </a>
          <a href="https://flowbite.com/" className="flex items-center">
              <img src={reactLogo} className="h-8 mr-3" alt="Flowbite Logo" />
          </a>
        </div>
      </nav>

  )
}
