import Fade from "react-reveal/Fade";

interface LinksProps {
  mode: string;
}

export default function Links({ mode }: LinksProps) {
  return (
    <Fade top distance="10%">
      <div
        className={`flex flex-col justify-center items-center h-screen ${mode == "light" ? "text-black" : "text-white"}`}
      >
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6 7c0 .55.45 1 1 1h7.59l-8.88 8.88a.996.996 0 1 0 1.41 1.41L16 9.41V17c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1z"
            />
          </svg>
          <a
            href="https://www.linkedin.com/in/paulgrimaldo/"
            target="_blank"
            className="font-nue"
          >
            {" "}
            LinkedIn{" "}
          </a>
        </div>
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6 7c0 .55.45 1 1 1h7.59l-8.88 8.88a.996.996 0 1 0 1.41 1.41L16 9.41V17c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1z"
            />
          </svg>
          <a
            href="https://github.com/comsos"
            target="_blank"
            className="font-nue"
          >
            {" "}
            GitHub{" "}
          </a>
        </div>
      </div>
    </Fade>
  );
}
