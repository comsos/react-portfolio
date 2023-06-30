import React from 'react'
import blackhole from '../assets/Black Hole.svg'
import '../App.css'

export default function Header() {
  return (
    <div className="flex flex-col fixed h-screen w-16 space-y-24 content-center top-24 left-6">
      <a href="https://flowbite.com/" className="flex items-center bg-white py-4 px-4">
        <img src={blackhole} className="h-8 mr-3 " alt="Flowbite Logo" />
      </a>
      <a href="https://flowbite.com/" className="flex items-center ">
        <img src={blackhole} className="h-8 mr-3 " alt="Flowbite Logo" />
      </a>
      <a href="https://flowbite.com/" className="flex items-center">
        <img src={blackhole} className="h-8 mr-3" alt="Flowbite Logo" />
      </a>
    </div>
      // <nav className=" bg-transparent lg:absolute left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 pt-32">
      //   <div className="max-w-screen-xl flex flex-col items-center space-x-48 mt-12 lg:mx-auto">
      //     <a href="https://flowbite.com/" className="flex items-center">
      //         <img src={reactLogo} className="h-8 mr-3" alt="Flowbite Logo" />
      //     </a>
      //     <a href="https://flowbite.com/" className="flex items-center">
      //         <img src={reactLogo} className="h-8 mr-3" alt="Flowbite Logo" />
      //     </a>
      //     <a href="https://flowbite.com/" className="flex items-center">
      //         <img src={reactLogo} className="h-8 mr-3" alt="Flowbite Logo" />
      //     </a>
      //     <a href="https://flowbite.com/" className="flex items-center">
      //         <img src={reactLogo} className="h-8 mr-3" alt="Flowbite Logo" />
      //     </a>
      //   </div>
      // </nav>

  )
}
