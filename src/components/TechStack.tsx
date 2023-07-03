import reactLogo from '../assets/frontend/react.svg'
import css from '../assets/frontend/css.svg'
import html from '../assets/frontend/html.svg'
import javascript from '../assets/frontend/javascript.svg'
import tailwind from '../assets/frontend/tailwind.svg'
import React, { useState, } from 'react'

interface BurgerProps{
    icon: any
    child: any[]

}
interface BurgerChildProps{
    childIcon: any
    xIndex: string
    yIndex: string
    isClicked: boolean

}

export const TechStack = () => {

    const BurgerChild: React.FC<BurgerChildProps> = (props) => {
        const { childIcon,yIndex,xIndex,isClicked = false } = props
        return(
            <img className={`${isClicked ?  `{mx-auto transition-transform transform ease-linear ${xIndex} ${yIndex} scale-100 }` : 
            `{mx-auto transition-transform transform ease-linear translate-x-0 translate-y-0 scale-0 }`} h-20 absolute `}  src={childIcon} />
        );

    };
    const BurgerPart: React.FC<BurgerProps> = (props) => {

        const { icon,child } = props;
        const [clicked, setClicked] = useState(false)
        const children: any[] = child.map((child) => <BurgerChild childIcon={child.icon} xIndex={child.xIndex} yIndex={child.yIndex} isClicked={clicked} />)
        return (
          <div className=' flex flex-row mx-auto group'>
            <img onClick={() => setClicked(!clicked)} className={`h-20 mx-auto ${clicked ? "grayscale-0" : "grayscale"} hover:grayscale-0`} src={icon} />
            {children}
          </div>
        );
      };
  return (
    <div  className=' snap-start min-h-screen bg-transparent absolute right-0 mr-11 min-w-screen translate- '>
        <div className="flex flex-col py-24 space-y-24">
            <div className="text-4xl font-extrabold tracking-tight leading-none text-white">
                Tech Stack
            </div>
            <BurgerPart icon={reactLogo} 
            child={
                [{'icon': css, 'xIndex':'translate-x-60', 'yIndex': '-translate-y-48'},
                {'icon': html, 'xIndex': 'translate-x-52', 'yIndex': 'translate-y-8'},
                {'icon': javascript, 'xIndex': 'translate-x-56', 'yIndex': 'translate-y-48'},
                {'icon': reactLogo, 'xIndex': '-translate-x-52', 'yIndex': '-translate-y-8'},
                {'icon': tailwind, 'xIndex': '-translate-x-52', 'yIndex': 'translate-y-24'},                
                ]}
            />
            <BurgerPart icon={reactLogo} 
            child={
                [{'icon': css, 'xIndex':'translate-x-60', 'yIndex': '-translate-y-48'},
                {'icon': html, 'xIndex': 'translate-x-52', 'yIndex': 'translate-y-8'},
                {'icon': javascript, 'xIndex': 'translate-x-56', 'yIndex': 'translate-y-48'},
                {'icon': reactLogo, 'xIndex': '-translate-x-52', 'yIndex': '-translate-y-8'},
                {'icon': tailwind, 'xIndex': '-translate-x-52', 'yIndex': 'translate-y-24'},                
                ]}
            />
                        <BurgerPart icon={reactLogo} 
            child={
                [{'icon': css, 'xIndex':'translate-x-60', 'yIndex': '-translate-y-48'},
                {'icon': html, 'xIndex': 'translate-x-52', 'yIndex': 'translate-y-8'},
                {'icon': javascript, 'xIndex': 'translate-x-56', 'yIndex': 'translate-y-48'},
                {'icon': reactLogo, 'xIndex': '-translate-x-52', 'yIndex': '-translate-y-8'},
                {'icon': tailwind, 'xIndex': '-translate-x-52', 'yIndex': 'translate-y-24'},                
                ]}
            />

        </div>
    </div>

  )

}

