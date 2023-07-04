import React from 'react'
import renu from '../assets/projects/renu.png'
import Fade from "react-reveal/Fade";

interface ProjectsProps{
    mode: string
}

export default function Projects({mode}: ProjectsProps) {
  return (
    <Fade bottom distance='10%'>
        <div>
            <div className={` container text-right right-0 mr-24 text-nav mt-48 absolute ${mode == 'light' ? 'text-black' : 'text-white'}`}>
                Some projects are not shown due to confidentiality. <br/> 
                I've helped create several ERP systems for the these industries: <br/>
                Insurance Company, Government and Small Businesses
            </div>
            <div className='flex flex-col justify-center items-center h-screen grid-cols-1 grid-rows-2'>
                <img src={renu} alt="renu" className='h-48' />
                <div className="flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 7c0 .55.45 1 1 1h7.59l-8.88 8.88a.996.996 0 1 0 1.41 1.41L16 9.41V17c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1z"/></svg>
                    <a href='renunaturals.com' target='_blank' className={`text-center font-nue text-nav ${mode == 'light' ? 'text-black' : 'text-white'}`}>Renu Naturals</a>
                </div>
                
            </div>
        </div>
    </Fade>
  )
}
