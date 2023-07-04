import Fade from "react-reveal/Fade";

interface AboutMeProps {
    mode: string;
  }
export default function AboutMe({mode} : AboutMeProps) {
  return (
    <Fade bottom distance='10%'>
        <div className={`absolute text-2xl text-${mode == 'light' ? 'black' : 'white' } text- font-nue text-right right-0 max-h-screen mt-48 mr-8`}>
            A computer science student <br/> 
            and a full-time developer <br/>
            based in the Philippines <br/>
            believing that designs should not <br/>
            be limiting and instead be inspiring. <br/>
            Trying to expand my horizons <br/>
            by having my own ventures.
        </div>
    </Fade>
  )
}
