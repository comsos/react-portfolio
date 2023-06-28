import Particles from "react-particles";
import reactLogo from '../assets/react.svg'
import React, { useCallback, useState } from 'react'

export const TechStack = () => {
    const [hover,setHover] = useState(false)
  return (
    <div className="flex flex-col mx-auto mt-52 h-screen bg-[#111827]">
       <div className="mt-10 mx-auto">
           <div onMouseEnter={() => setHover(!hover)} className=" lg:mt-0 lg:col-span-5 lg:flex mx-auto h-60 ">
                <img className="h-60" src={reactLogo} alt="mockup" />
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex mx-auto my-auto h-60">
                <img className="h-60" src={reactLogo} alt="mockup" />
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex mx-auto my-auto h-60">
                <img className="h-60" src={reactLogo} alt="mockup" />
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex mx-auto my-auto h-60">
                <img className="h-60" src={reactLogo} alt="mockup" />
            </div>
       </div>
    </div>

  )
}
