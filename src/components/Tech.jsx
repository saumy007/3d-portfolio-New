import { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) =>
        isMobile ? (
          <div
            key={technology.name}
            className="w-20 h-20 flex flex-col items-center justify-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-tertiary flex items-center justify-center
                            border border-purple-500/20 shadow-md">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-secondary text-[10px] text-center leading-tight">
              {technology.name}
            </span>
          </div>
        ) : (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        )
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
