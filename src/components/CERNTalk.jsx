import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { cern } from "../assets";

const CERN_VIDEO_URL = "https://videos.cern.ch/record/3014080";
const THUMBNAIL = "https://lh3.googleusercontent.com/d/1yLVBeBbiZ5-AXekg0NzRo76eY7Q7CC38";

const CERNTalk = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Conference Presentation</p>
        <h2 className={styles.sectionHeadText}>My Talk at CERN</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Presented research on a physics-accurate Digital Twin of the LHCb detector at CERN, Geneva, using Nvidia Omniverse — covering scene assembly, automated geometry pipelines, and live stakeholder demonstration.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-10 flex justify-center"
      >
        <a
          href={CERN_VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full max-w-4xl block"
        >
          {/* Thumbnail with play overlay */}
          <div className="relative overflow-hidden rounded-2xl border border-purple-900/30 shadow-card">
            <img
              src={THUMBNAIL}
              alt="CERN Digital Twin Talk"
              className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ maxHeight: "26rem", objectPosition: "center top" }}
              loading="lazy"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
                            group-hover:from-black/60 transition-colors duration-300" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm border border-white/30
                              flex items-center justify-center
                              group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                <svg className="w-9 h-9 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* CERN badge top-left */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-xl px-3 py-2">
              <img src={cern} alt="CERN" className="w-6 h-6 object-contain" />
              <span className="text-white text-xs font-semibold tracking-wide">CERN · 2024</span>
            </div>

            {/* Watch button bottom-right */}
            <div className="absolute bottom-4 right-4 inline-flex items-center gap-2
                            bg-purple-600/90 backdrop-blur-sm text-white text-sm font-semibold
                            px-4 py-2 rounded-xl
                            group-hover:bg-purple-500 transition-colors duration-200">
              Watch on CERN
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>

          {/* Info bar below thumbnail */}
          <div className="mt-4 bg-[#1d1836] rounded-xl px-6 py-4 border border-purple-900/20
                          flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <img src={cern} alt="CERN" className="w-5 h-5 object-contain opacity-80" />
              <span className="text-white font-semibold text-sm">
                Nvidia Omniverse Digital Twin for the LHCb Detector
              </span>
            </div>
            <span className="ml-auto text-secondary text-xs whitespace-nowrap">
              CERN, Geneva · 2024
            </span>
          </div>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(CERNTalk, "cern-talk");
