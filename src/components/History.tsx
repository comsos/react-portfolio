import Fade from "react-reveal/Fade";

interface HistoryProps {
  mode: string;
}
//TODO: maybe a scroll down? with a divider and dots every experience or maybe just show? and on triangle angle wow rhyme??
export default function History({ mode }: HistoryProps) {
  return (
    <Fade bottom distance="10%">
      <div
        className={` container w-[80%] h-screen right-0 mr-24 xl:text-nav text-2xl font-nue mt-48 absolute md:text-xl ${mode == "light" ? "text-black" : "text-white"}`}
      >
        <div className="h-[36rem] no-scrollbar overflow-x-scroll border-solid border-red-950 w-full flex flex-row space-y-3">
          <div>
            <h1>Current</h1>
            <h5>Xurpas Enterprise (XAIL)</h5>
            <h6>Jr. Python Developer</h6>
          </div>
          <div>
            <h1>May 2024 - July 2024</h1>
            <h5>STMicroelectronics</h5>
            <h6>Full-Stack Web Developer Intern</h6>
          </div>
          <div>
            <h1>2022 - 2023</h1>
            <h5>Abakada Studios</h5>
            <h6>Jr. Web Developer</h6>
          </div>
        </div>
        <div
          className={`flex justify-center items-center pt-6 animate-bounce `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="24"
            fill="currentColor"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512.02 319.26"
          >
            <path d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z" />
          </svg>
        </div>
      </div>
    </Fade>
  );
}
