import React, { useState } from 'react'
import blackhole from '../assets/Black Hole.svg'
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import {Link} from "react-router-dom"
import '../App.css'

type Mode = {
  mode: string
}

export default function Header(props: Mode) {
  const [mode, setMode] = useState(props.mode)
  return (
    <div className=" font-nue text-black mt-10 ml-10 absolute ">
      <Fade top distance='10%'>
        <h1 className=' text-3xl '>Cosmos Grimaldo</h1>
        <Typewriter
              options={{
                  loop: true,
              }}
              onInit={(typewriter) => {
                  typewriter
                      .typeString("Shopify")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("ERPNext")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Full-Stack")
                      .pauseFor(1000)
                      .start();
              }}
          />
          <ul>
            <li key='TechStack'>
              <Link to={"/"}>Home</Link>
            </li>
            <li key='TechStack'>
              <Link to={"/TechStack"}>TechStack</Link>
            </li>

          </ul>
      </Fade>
      <button onClick={() => {mode =='dark' ? setMode('light') : setMode('dark')} }>{ mode.charAt(0).toUpperCase() + mode.slice(1) }</button>
    </div>
  )
}
