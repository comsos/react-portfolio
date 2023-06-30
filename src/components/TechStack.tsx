import reactLogo from '../assets/frontend/react.svg'
import css from '../assets/frontend/css.svg'
import React, { useState } from 'react'

interface BurgerProps{
    icon: any,
    child: any[]
}

export const TechStack = () => {
    const [open, setOpen] = useState(false)
    const [hoverFront,setHoverFront] = useState(false)

    const BurgerPart: React.FC<BurgerProps> = (props) => {
        const { icon,child } = props;
        const childIcons: any[] = child.map((child, index) => <img className="h-20 absolute mx-auto scale-0 group-hover:scale-100 ease-linear group-hover:translate-x-20 group-hover:translate-y-20 transition-all" src={child} alt={index.toString()} />)
        return (
          <div className=' flex flex-row mx-auto group'>
            <img className="h-20 mx-auto" src={icon} alt="buns" />
            {childIcons}
          </div>
        );
      };
  return (
    <div  className='h-screen bg-black py-24 min-w-screen my-auto'>
        <div className="flex flex-col space-y-24">
            <BurgerPart icon={reactLogo} child={[css,css,css]} />
            <BurgerPart icon={reactLogo} child={[css]} />
            <BurgerPart icon={reactLogo} child={[css]} />
            <BurgerPart icon={reactLogo} child={[css]} />
        </div>
    </div>

  )

}

