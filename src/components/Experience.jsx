import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import MediaGallery from "./reusable/MediaGallery";

/* ─── single flip card ───────────────────────────────────────────────── */
const ExperienceFlipCard = ({ experience, index }) => {
  const [flipped, setFlipped] = useState(false);

  const frontPoints = experience.points.slice(0, 3);
  const extraPoints = experience.points.slice(3);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.18, 0.7)}
      className="flip-card-scene w-full"
      style={{ height: 500 }}
    >
      <div
        className={`flip-card-inner ${flipped ? "is-flipped" : ""}`}
        style={{ height: 500 }}
      >
        {/* ── FRONT ────────────────────────────────────────────────────── */}
        <div
          className="flip-card-face cursor-pointer select-none"
          onClick={() => setFlipped(true)}
          style={{
            background: "linear-gradient(145deg, #1d1836 0%, #0d0b1e 100%)",
            border: "1px solid rgba(128,78,238,0.18)",
          }}
        >
          {/* Top strip */}
          <div className="flex items-start justify-between px-6 pt-6">
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ background: experience.iconBg }}
            >
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-8 h-8 object-contain"
              />
            </div>
            {/* Date badge */}
            <span className="bg-purple-900/40 text-purple-300 text-[11px] font-semibold
                             px-3 py-1 rounded-full border border-purple-700/40 mt-1">
              {experience.date}
            </span>
          </div>

          {/* Titles */}
          <div className="px-6 mt-4">
            <h3 className="text-white font-bold text-[20px] leading-snug">
              {experience.title}
            </h3>
            <p className="text-purple-300 text-[14px] font-semibold mt-1">
              {experience.company_name}
            </p>
          </div>

          {/* Key points */}
          <ul className="px-6 mt-4 space-y-2 card-scroll overflow-y-auto" style={{ maxHeight: 210 }}>
            {frontPoints.map((pt, i) => (
              <li
                key={i}
                className="flex gap-2 text-[13px] text-white/80 leading-snug"
              >
                <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
                <span>{pt}</span>
              </li>
            ))}
            {extraPoints.length > 0 && (
              <li className="text-[12px] text-secondary italic">
                +{extraPoints.length} more — flip to see media & details
              </li>
            )}
          </ul>

          {/* CTA */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center">
            <span
              className="flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/40
                         border border-purple-500/40 text-purple-200 text-[13px] font-medium
                         px-5 py-2 rounded-full transition-all duration-200"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </span>
          </div>
        </div>

        {/* ── BACK ─────────────────────────────────────────────────────── */}
        <div
          className="flip-card-face flip-card-face--back flex flex-col"
          style={{
            background: "linear-gradient(145deg, #120e2a 0%, #0d1020 100%)",
            border: "1px solid rgba(99,102,241,0.3)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3 flex-shrink-0
                          border-b border-white/5">
            <div>
              <p className="text-purple-300 text-[12px] font-semibold uppercase tracking-wider">
                {experience.company_name}
              </p>
              <p className="text-white/60 text-[11px] mt-0.5">{experience.date}</p>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
              className="flex items-center gap-1.5 text-[12px] text-secondary hover:text-white
                         bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full
                         transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          </div>

          {/* Media gallery — takes the majority of the height */}
          <div className="flex-1 px-4 pt-3 pb-2 min-h-0">
            <MediaGallery media={experience.media} title="Work Highlights" />
          </div>

          {/* Extra bullet points */}
          {extraPoints.length > 0 && (
            <ul className="px-5 pb-4 space-y-1 card-scroll overflow-y-auto flex-shrink-0"
                style={{ maxHeight: 80 }}>
              {extraPoints.map((pt, i) => (
                <li key={i} className="flex gap-2 text-[12px] text-white/70 leading-snug">
                  <span className="text-indigo-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── section ────────────────────────────────────────────────────────── */
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <p className="mt-3 text-secondary text-[14px]">
        Click any card to flip it and see work highlights &amp; media.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, i) => (
          <ExperienceFlipCard key={`exp-${i}`} experience={exp} index={i} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
