import reactLogo from '../assets/frontend/react.svg'
import css from '../assets/frontend/css.svg'
import html from '../assets/frontend/html.svg'
import javascript from '../assets/frontend/javascript.svg'
import tailwind from '../assets/frontend/tailwind.svg'
import django from '../assets/frameworks/django.svg'
import flask from '../assets/frameworks/flask.svg'
import spring from '../assets/frameworks/spring.svg'
import erpnext from '../assets/frameworks/erpnext.svg'
import React, { useState, } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Fade from "react-reveal/Fade";

export default function FrontEnd() {
  return (
    <div>TechStack</div>
  )
}



export const TechStack = () => {
  return (
    <Fade left distance='10%'>
        <div className="flex flex-col absolute space-y-2">
             <div className="flex flex-row h-20 space-x-4">
                <img src={html} alt="react" />
                <img src={css} alt="react" />
                <img src={tailwind} alt="react" />
                <img src={javascript} alt="react" />
                <img src={reactLogo} alt="react" />
            </div> 
            <div className="flex flex-row h-20 space-x-4">
                <img src={reactLogo} alt="react" />
                <img src={reactLogo} alt="react" />
            </div>
        </div>
    </Fade>

  )

}

