import React, { useCallback, useState } from 'react'
import Fade from "react-reveal/Fade";

interface HeroSectionProps {
    mode: string;
  }

export const HeroSection = ({mode}: HeroSectionProps) => {
  return (
    <Fade top distance='10%'>
        <div className={` container text-right right-0 mr-24 text-3xl mt-48 absolute ${mode == 'light' ? 'text-black' : 'text-white'}`}>
            Transforming ideas <br/> into stunning websites <br/>that leave a lasting impression
        </div>
    </Fade>
  )
}
