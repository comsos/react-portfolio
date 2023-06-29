import reactLogo from '../assets/frontend/react.svg'
import css from '../assets/frontend/css.svg'
import React, { useState } from 'react'
import { visibilityChangeEvent } from 'tsparticles-engine'

export const TechStack = () => {
    const [open, setOpen] = useState(false)
    const [hoverFront,setHoverFront] = useState(false)

  return (
    <div  className={`flex ${open ? "flex-col " : ""} mx-auto h-screen bg-black py-24`}>
       <div onMouseEnter={() => setOpen(true)} className={`py-10 mx-auto `}>
           <div onMouseEnter={() => setHoverFront(true)} onMouseLeave={() => setHoverFront(false) } className=" lg:mt-0 lg:col-span-5 lg:flex mx-auto h-48">
                <div className="flex flex-row">
                    <img className="h-48 mx-auto" src={reactLogo} alt="mockup" />
                    <img className={`h-48 mx-auto ${hoverFront ? '' : 'hidden'} absolute`} src={css} alt="mockup" />
                </div>

            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex mx-auto my-auto h-48 ">
                <img className="h-48 mx-auto" src={reactLogo} alt="mockup" />
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex mx-auto my-auto h-48 ">
                <img className="h-48 mx-auto" src={reactLogo} alt="mockup" />
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex mx-auto my-auto h-48 ">
                <img className="h-48 mx-auto" src={reactLogo} alt="mockup" />
            </div>
       </div>
    </div>

  )
}
