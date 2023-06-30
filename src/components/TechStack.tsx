import reactLogo from '../assets/frontend/react.svg'
import css from '../assets/frontend/css.svg'
import html from '../assets/frontend/html.svg'
import javascript from '../assets/frontend/javascript.svg'
import tailwind from '../assets/frontend/tailwind.svg'
import React, { useState, } from 'react'

interface BurgerProps{
    icon: any,
    child: any[]
}

export const TechStack = () => {

    const BurgerPart: React.FC<BurgerProps> = (props) => {
        const [counter, setCounter] = useState(1)
        
        const { icon,child } = props;
        const childIcons: any[] = child.map((child,index) => <img className={`h-20 absolute mx-auto scale-0 group-hover:scale-100 ease-linear group-hover:translate-x-60
            group-hover:translate-y-${(counter * 20).toString()} transition-all`}  src={child} alt={counter.toString()} />)
        return (
          <div className=' flex flex-row mx-auto group'>
            <img className="h-20 mx-auto grayscale hover:grayscale-0" src={icon} alt="buns" />
            {childIcons}
          </div>
        );
      };
  return (
    <div  className=' snap-start min-h-screen bg-black min-w-screen'>
        <div className="flex flex-col py-24 space-y-24">
            <div className="text-4xl font-extrabold tracking-tight leading-none text-white">
                Tech Stack
            </div>
            <BurgerPart icon={reactLogo} child={[css,javascript,html]} />
            <BurgerPart icon={reactLogo} child={[css]} />
            <BurgerPart icon={reactLogo} child={[css]} />
            <BurgerPart icon={reactLogo} child={[css]} />
        </div>
    </div>

  )

}

