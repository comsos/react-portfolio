import "./App.css";
import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { TechStack } from "./components/TechStack";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Ticker from "./components/Ticker";
import Fade from "react-reveal/Fade";
import Links from "./components/Links";
import Projects from "./components/Projects";
// import History from "./components/History";

function App() {
  const [mode, setMode] = useState("light");
  const dialogue: string[] = [
    "Ayanami.",
    "Where are we?",
    "This place is a sea of LCL.",
    "The primordial soup of life.",
    "A place with no AT Fields,",
    "where individual forms do not exist.",
    "An ambiguous world...",
    "where you cannot tell",
    "where you end and others begin.",
    "A world where",
    "you exist everywhere...",
    "and yet you're nowhere,",
    "all at once.",
    "Is this death?",
    "Not quite. This is a world",
    "where we are all one.",
    "This is the world you wished for.",
    "But this isn't right.",
    "This feels wrong.",
    "If you wish for others to exist,",
    "the walls of their hearts",
    "will separate them again.",
    "They will all feel fear once more.",
    "Okay then.",
    "Thank you.",
    "I only felt pain",
    "when I existed in that reality.",
    "So I thought",
    "it was alright to run away.",
    "But there was nothing good",
    "in the place I escaped to either.",
    "Because I didn't exist there,",
    "and so no one existed.",
    "Is it alright for the AT Field",
    "to cause you and others pain again?",
    "I don't mind.",
    "But what are",
    "the two of you within my heart?",
    "We are the hope...",
    "that people will one day",
    "be able to understand each other.",
    "And we are the words,",
    "I love you.",
    "But that's just a pretense.",
    "A selfish belief.",
    "Like some kind of prayer.",
    "It can't possibly last forever.",
    "Eventually, I'll be betrayed,",
    "and it will abandon me.",
    "But still, I want to see them again,",
    "because at the time,",
    "I know my feelings were real.",
    "Reality exists in a place unknown,",
    "and dreams exist within reality.",
    "And truth lies in your heart.",
    "The contents of a person's heart",
    "shapes their appearance.",
    "And new images will change",
    "their hearts and their forms.",
    "The power of imagination is",
    "the ability to create your own future,",
    "and the power to create",
    "your own flow of time.",
    "But if people don't act",
    "of their own free will,",
    "then nothing will change at all.",
    "So, you must regain your own",
    "lost form by your own volition.",
    "Even if it means",
    "your words become lost...",
    "or confused with",
    "the words of others.",
    "Anyone can return to human form...",
    "as long as they are able to imagine",
    "themselves within their own heart.",
    "Don't worry.",
    "All living creatures have the power",
    "to be brought back to life...",
    "and the will to go on living.",
    "Anywhere can be paradise,",
    "as long as you have the will to live.",
    "After all, you are alive,",
    "so you will always have",
    "the chance to be happy.",
    "As long as the Sun,",
    "the Moon, and the Earth exist,",
    "everything will be alright.",
    "Will you be alright?",
    "I still don't know",
    "where my happiness lies.",
    "I'll still think about",
    "why I'm here,",
    "and whether or not",
    "it was good to come back.",
    "But that's just",
    "stating the obvious over and over.",
    "I am myself.",
    "But, Mother...",
    "What will you do, Mother?",
    "When man created Evangelion,",
    "were we trying",
    "to create a clone of God?",
    "Yes. Humans can",
    "only exist on this earth,",
    "but the Evangelion",
    "can live forever...",
    "along with the human soul",
    "that dwells within.",
    "Even 5 billion years from now,",
    "when the Earth, the Moon,",
    "and the Sun are gone,",
    "Eva will exist.",
    "It will be lonely,",
    "but as long as",
    "one person still lives.",
    "It will be eternal proof",
    "that mankind ever existed.",
    "Goodbye, Mother.",
    "How disgusting.",
    "The End",
  ];
  return (
    <div className="flex-flex-col h-screen justify-between overflow-hidden">
      <Fade top distance="10%" duration={2000}>
        <BrowserRouter>
          <Header mode={mode} />
          <div
            className={`absolute w-screen h-screen z-[-10] ${mode == "light" ? "bg-[#e6e6e6]" : "bg-black"}`}
          >
            <button
              onClick={() => {
                mode == "light" ? setMode("dark") : setMode("light");
              }}
              className={`font-nue absolute right-0 mr-12 ${mode == "light" ? "text-black" : "text-white"} z-20`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
            <Routes>
              <Route path="/" element={<HeroSection mode={mode} />} />
              <Route path="/AboutMe" element={<AboutMe mode={mode} />} />
              <Route path="/TechStack" element={<TechStack mode={mode} />} />
              <Route path="/Projects" element={<Projects mode={mode} />} />
              {/* <Route path="/History" element={<History mode={mode} />} /> */}
              <Route path="/Links" element={<Links mode={mode} />} />
            </Routes>
          </div>
        </BrowserRouter>
        <div
          className={`border-b-8 mb-32 w-screen absolute h-20 bottom-0 ${mode == "light" ? "border-black" : "border-white"}`}
        />
        <div
          className={`font-nue absolute inset-x-0 bottom-0 flex flex-col justify-center text-center ${mode == "light" ? "text-black" : "text-white"}`}
        >
          <div className={`${mode == "light" ? "hidden" : ""}`}>
            <Ticker messages={dialogue} interval={2000} />
            <p className="text-[#e6e6e6]">
              Dialogues above is from{" "}
              <a
                href="https://youtu.be/hf1DkBQRQj4"
                target="_blank"
                className=" text-blue-700"
              >
                The Evagelion series.
              </a>{" "}
              (The Inspiration for this design)
            </p>
          </div>
          <p>
            Designed and Created by: Cosmos Grimaldo <br />
            Technologies used: Vite, React, TailwindCSS <br />
            <p className="flex flex-row justify-center text-center">
              2024
              <p className={`${mode == "light" ? "hidden" : ""}`}>
                ; take care of yourself, shinji
              </p>
            </p>
          </p>
        </div>
      </Fade>
    </div>
  );
}

export default App;
