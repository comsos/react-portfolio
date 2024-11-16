import { useEffect } from 'react'
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom"
import '../App.css'

interface HeaderProps {
    mode: string;
}

export default function Header({ mode }: HeaderProps) {
    useEffect(() => {
    }, [mode]);
    return (
        <div className={`font-nue absolute ${mode == 'light' ? 'text-black' : 'text-white'} `}>
            <div className='h-screen w-screen flex items-center sm:hidden bg-black text-white text-5xl'>
                <div className='text-center '> This Portfolio is currently not available on mobile view. </div>
            </div>
            <div className='mt-10 ml-10'>
                <h1 className={`text-name md:text-5xl`}  >Cosmos</h1>
                <div className={`text-3xl`}>
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
                </div>
                <ul className='pt-24 text-nav'>
                    <li key='TechStack'>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li key='AboutMe'>
                        <Link to={"/AboutMe"}>About Me</Link>
                    </li>
                    <li key='TechStack'>
                        <Link to={"/TechStack"}>Tech Stack</Link>
                    </li>
                    <li key='Projects'>
                        <Link to={"/Projects"}>Projects</Link>
                    </li>
                    <li key='Links'>
                        <Link to={"/Links"}>Links</Link>
                    </li>
                </ul>
            </div>


        </div>
    )
}
