import React, { useCallback, useState } from 'react'

import herosvg from '../assets/herosvg.svg'
import mouse from '../assets/mouse.svg'

import Typewriter from "typewriter-effect";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const HeroSection = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    const [mode, setMode] = useState('dark')


  return (
        <section className=" bg-transparent min-h-screen min-w-screen">
                <Particles
                    className='min-h-screen min-w-screen absolute'
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fullScreen:{
                            enable: true,
                            zIndex: -1
                        },
                        background: {
                            color: {
                                value: "#111827",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 1,
                            },
                            shape: {
                                type: "square",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: false,
                        pauseOnOutsideViewport: true
                    }}
                />
            <div className="flex lg:flex-row min-h-screen min-w-screen">
                <div className=" mx-auto my-auto py-auto ">
                    {/* <button onClick={() => setMode('light')}>Light</button> */}
                    <h1 className={`max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white`}>
                        Hi! I'm cosmos, I am a
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
                        Developer
                    </h1>
                </div>
                <div className="mx-auto my-auto ">
                    <img src={herosvg} alt="mockup"/>
                </div>                
            </div>
            <div className='bg-gradient-to-t from-black to-transparent pb-[10rem]'>
                <div className="mt-[-10rem]">
                    <img className='place-content-center mx-auto animate-bounce' src={mouse} alt="mockup"/>  
                </div>
            </div>
        </section>


  )
}
