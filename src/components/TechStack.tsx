import react from '../assets/frontend/react.svg'
import css from '../assets/frontend/css.svg'
import html from '../assets/frontend/html.svg'
import javascript from '../assets/frontend/javascript.svg'
import tailwind from '../assets/frontend/tailwind.svg'
import typescript from '../assets/frontend/typescript.svg'

import csharp from '../assets/backend/csharp.svg'
import java from '../assets/backend/java.svg'
import python from '../assets/backend/python.svg'

import mongodb from '../assets/database/mongodb.svg'
import mysql from '../assets/database/mysql.svg'
import postgresql from '../assets/database/postgresql.svg'
import mariadb from '../assets/database/mariadb.svg'

import django from '../assets/frameworks/django.svg'
import flask from '../assets/frameworks/flask.svg'
import spring from '../assets/frameworks/spring.svg'
import erpnext from '../assets/frameworks/erpnext.svg'
import vue from '../assets/frameworks/vue.svg'

import linux from '../assets/os/linux.svg'

import docker from '../assets/tools/docker.svg'
import git from '../assets/tools/git.svg'
import npm from '../assets/tools/npm.svg'
import postman from '../assets/tools/postman.svg'
import powershell from '../assets/tools/powershell.svg'
import vscode from '../assets/tools/vscode.svg'
import vite from '../assets/tools/vite.svg'

import Fade from "react-reveal/Fade";

interface TechStackProps {
  mode: string;
}

export const TechStack = ({mode}: TechStackProps) => {
  return (
    <Fade left distance='10%'>
        <div className="flex flex-col justify-center items-center h-screen text-center mt-[-3rem] lg:text-3xl md:text-nav">
              <div className="flex flex-col mb-6">
                <h1 className={` ${mode == 'light' ? 'text-black' : 'text-white' } `}>Front End</h1>
                  <div className="flex flex-row space-x-4 ">
                      <img className='xl:h-14 lg:h-8 sm:h-8' src={html} alt="react" />
                      <img className='xl:h-14 lg:h-8 sm:h-8' src={css} alt="css" />
                      <img className='xl:h-14 lg:h-8 sm:h-8' src={tailwind} alt="tailwind" />
                      <img className='xl:h-14 lg:h-8 sm:h-8' src={javascript} alt="js" />
                      <img className='xl:h-14 lg:h-8 sm:h-8' src={typescript} alt="typescript" />
                      <img className='xl:h-14 lg:h-8 sm:h-8' src={react} alt="react" />
                  </div>
             </div>
             <div className="flex flex-col mb-6">
                  <h1 className={` ${mode == 'light' ? 'text-black' : 'text-white' } `}>Back End</h1>
                  <div className="flex flex-row space-x-4 ">
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={python} alt="react" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={csharp} alt="react" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={java} alt="react" />
                  </div>
              </div>
              <div className="flex flex-col mb-6">
                  <h1 className={` ${mode == 'light' ? 'text-black' : 'text-white' } `}>Database</h1>
                  <div className="flex flex-row space-x-4 ">
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={mongodb} alt="mongodb" />
                    <img className='xl:h-14 lg:h-8 sm:h-8 border-slate-800 bg-slate-800 rounded-lg' src={mysql} alt="mysql" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={postgresql} alt="postgresql" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={mariadb} alt="mariadb" />
                  </div>
              </div>
              <div className="flex flex-col mb-6">
                  <h1 className={` ${mode == 'light' ? 'text-black' : 'text-white' } `}>Frameworks</h1>
                  <div className="flex flex-row space-x-4 ">
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={erpnext} alt="erpnext" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={django} alt="spring" />
                    <img className='xl:h-14 lg:h-8 sm:h-8 border border-slate-800 bg-slate-800 rounded-full' src={flask} alt="react" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={spring} alt="spring" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={vue} alt="vue" />
                  </div>
              </div>
              <div className="flex flex-col mb-6">
                  <h1 className={` ${mode == 'light' ? 'text-black' : 'text-white' } `}>Tools</h1>
                  <div className="flex flex-row space-x-4 ">
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={vite} alt="vite" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={git} alt="git" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={npm} alt="npm" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={powershell} alt="powershell" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={vscode} alt="vscode" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={docker} alt="docker" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={postman} alt="docker" />
                    <img className='xl:h-14 lg:h-8 sm:h-8' src={linux} alt="docker" />
                  </div>
              </div>
        </div>
    </Fade>

  )

}

