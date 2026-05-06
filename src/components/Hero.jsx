import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const MobileHeroVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
    {/* Outer slow-rotating ring */}
    <div
      className="absolute rounded-full border border-purple-500/20"
      style={{
        width: "min(420px, 90vw)",
        height: "min(420px, 90vw)",
        animation: "spin 18s linear infinite",
      }}
    />
    {/* Middle ring */}
    <div
      className="absolute rounded-full border border-indigo-500/15"
      style={{
        width: "min(300px, 70vw)",
        height: "min(300px, 70vw)",
        animation: "spin 12s linear infinite reverse",
      }}
    />
    {/* Core glow */}
    <div
      className="absolute rounded-full"
      style={{
        width: "min(200px, 50vw)",
        height: "min(200px, 50vw)",
        background:
          "radial-gradient(circle, rgba(145,94,255,0.25) 0%, rgba(99,102,241,0.12) 50%, transparent 75%)",
        animation: "pulse 3s ease-in-out infinite",
      }}
    />
    {/* Small orbiting dot */}
    <div
      className="absolute"
      style={{
        width: "min(300px, 70vw)",
        height: "min(300px, 70vw)",
        animation: "spin 8s linear infinite",
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-lg"
        style={{ boxShadow: "0 0 12px 4px rgba(167,139,250,0.6)" }}
      />
    </div>
    {/* Tech label floats */}
    {[
      { label: "AI", pos: "top-[22%] left-[15%]", delay: "0s" },
      { label: "Robotics", pos: "top-[18%] right-[12%]", delay: "0.4s" },
      { label: "XR / VR", pos: "bottom-[26%] left-[10%]", delay: "0.8s" },
      { label: "Isaac Sim", pos: "bottom-[22%] right-[10%]", delay: "1.2s" },
    ].map(({ label, pos, delay }) => (
      <span
        key={label}
        className={`absolute ${pos} text-[11px] font-semibold text-purple-300/70 tracking-widest uppercase`}
        style={{ animation: `fadeFloat 4s ease-in-out infinite`, animationDelay: delay }}
      >
        {label}
      </span>
    ))}
  </div>
);

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <br />{" "}
            <span className="text-[#915eff]">Saumy Sharma</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg`}>
            Innovative and passionate Software Engineer &amp; Researcher with
            diverse experience in AI, Robotics, and XR technologies.
          </p>
        </div>
      </div>

      {isMobile ? (
        <MobileHeroVisual />
      ) : (
        /* Canvas gets touch-action: pan-y so mobile users can still scroll
           if they somehow hit a viewport between the detection thresholds */
        <div style={{ touchAction: "pan-y" }} className="w-full h-full">
          <ComputersCanvas />
        </div>
      )}

      <div className="absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-2 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
