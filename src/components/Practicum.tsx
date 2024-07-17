import arrow from '../assets/down-arrow-svgrepo-com.svg'
import Fade from 'react-reveal/Fade';

interface ProjectsProps {
    mode: string
}

export default function Projects({ mode }: ProjectsProps) {
    return (
        <Fade bottom distance='10%'>
            <div className={` container w-[80%] h-screen right-0 mr-24 xl:text-nav text-2xl font-nue mt-48 absolute md:text-xl ${mode == 'light' ? 'text-black' : 'text-white'}`}>
                <div className='h-[36rem] no-scrollbar overflow-x-scroll'>
                    <h1 className=' font-bold'>About the Host Company.</h1>
                    <br />
                    <div className={`text-right`}>
                        <div className="flex justify-center items-center">
                            <img className='h-[24rem]' src="https://download.logo.wine/logo/STMicroelectronics/STMicroelectronics-Logo.wine.png" alt="TEST" />
                        </div>
                        STMicroelectronics, commonly referred to as ST, is a multinational electronics and semiconductor
                        manufacturer headquartered in Geneva, Switzerland.
                        The company was established in 1987 through the merger of Italian company
                        SGS Microelettronica and French company Thomson Semiconducteurs, combining the technological expertise and resources of both firms.
                    </div>
                    <br />
                    <h1 className=' font-bold'>Roles and Responsibility</h1>
                    <br />
                    <div className="text-right">
                        During my stay in STMicroelectronics, I am asigned the role of a Developer. <br />
                        My responisiblity is to develop internal applications that will streamline office processes. <br />
                    </div>
                    <br />
                    <h1 className=' font-bold'>Project</h1>
                    <br />
                    <div className="text-right">
                        The assigned project to me is to develop their internal Timekeeping Correction web application. <br />
                        This will serve as a portal for their employees to correct their time-ins and time-outs. <br />
                        Due to confidentiality reason, this portfolio will not showcase this project.
                    </div>
                    <br />
                    <h1 className=' font-bold'>Technologies Used</h1>
                    <br />
                    <div className="text-right">
                        <div className="flex justify-center items-center pb-8">
                            <img className='h-[24rem]' src="https://www.jamiemaguire.net/wp-content/uploads/2017/03/icon-aspnetmvc.png" alt="TEST" />
                        </div>
                        The main technology used is .NET MVC for faster Development as it already have all the tools that a developer needs in developing web applications. Languages used are: C# for the Backend, JavaScript for the Frontend. <br /> Other frontend technologies used are: HTML for structuring and CSS for styling.
                    </div>
                    <br />
                    <h1 className=' font-bold'>Learning and Growth</h1>
                    <br />
                    <div className="text-right">
                        Despite being the only intern in this project, I learned proper communication in the workplace as well as collaboration as I do not only help myself, but my classmates as well. What I really enjoyed the most is the new tools or nuget packages that are introduced to me by my senior developer that will definitely help me in the future. 
                    </div>
                    <br />
                    <h1 className=' font-bold'>Key Takeaways</h1>
                    <br />
                    <div className="text-right">
                        As a person with prior experience in the IT Industry as a Full-Stack web developer, my key takeaway in this internship is that there will always be a room for improvement. There are a lot of things that I still dont know that my senior developer at STMicroelectronics taught me. 
                        I still learned a lot despite knowing the tricks of the trade and that made me improve as a student as well as a developer.
                        <br />
                        <br />
                        I believe that if start from scratch again where I do not have prior experience and I do my internship in STMicroelectronics, It'll greatly boost my skills as an aspiring developer. The learning opportunities in this company is great because of exposure in the workplace.
                    </div>
                    <br />
                    <h1 className=' font-bold'>Achievement</h1>
                    <br />
                    <div className="text-right">
                    <div className="flex justify-center items-center pb-8">
                            <img className='h-[24rem]' src="https://cdn.discordapp.com/attachments/797412736971046955/1263149739705110599/IMG_2898.jpg?ex=66992f5e&is=6697ddde&hm=c049fd5cae2c16365572d9a394cf4fa74f93617fa91d041c5629f53770fb1529&" alt="TEST" />
                        </div>
                        During our final presentation report, I was awarded as the best presenter. The presentation is about my project in the company which is a Timekeeping Correction Request Web Application.
                    </div>
                </div>
                <div className={`flex justify-center items-center pt-6 animate-bounce `} >
                    {/* <img className={`animate-bounce h-8`} src={arrow} alt="arrow" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="currentColor" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512.02 319.26"><path d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z"/></svg>
                </div>
            </div>
            
        </Fade>
    )
}

