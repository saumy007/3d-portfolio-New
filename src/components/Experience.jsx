import { useState } from "react";
import { motion } from "framer-motion";

import { styles }      from "../styles";
import { experiences } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import MediaGallery from "./reusable/MediaGallery";

/* ── Work-highlights modal (image gallery → inline video player) ────── */
const WorkHighlightsModal = ({ items, onClose }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.9)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto card-scroll
                    bg-[#0d0b1e] border border-purple-500/30 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <h3 className="text-white font-bold text-[18px]">
            {activeVideo ? "Video Player" : "Work Highlights"}
          </h3>
          <div className="flex items-center gap-2">
            {activeVideo && (
              <button
                onClick={() => setActiveVideo(null)}
                className="text-[12px] text-secondary hover:text-white bg-white/5
                           hover:bg-white/10 px-3 py-1.5 rounded-full transition-all"
              >
                ← Gallery
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-secondary
                         hover:text-white flex items-center justify-center transition-all"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* ── video player ── */}
          {activeVideo ? (
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={activeVideo}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Work video"
              />
            </div>
          ) : (
            /* ── image gallery ── */
            <div className="space-y-5">
              {items.map((item, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-white/10">
                  {/* thumbnail + play overlay */}
                  <div className="relative bg-[#080615]" style={{ minHeight: "13rem" }}>
                    <img
                      src={item.image}
                      alt={item.title || item.description}
                      className="w-full"
                      style={{
                        display: "block",
                        maxHeight: "14rem",
                        objectFit: item.objectFit || "cover",
                        width: "100%",
                      }}
                      loading="lazy"
                    />
                    {item.videoEmbed && (
                      <button
                        onClick={() => setActiveVideo(item.videoEmbed)}
                        className="absolute inset-0 flex items-center justify-center
                                   bg-black/30 hover:bg-black/50 transition-all group"
                        aria-label="Play video"
                      >
                        <div className="w-14 h-14 rounded-full bg-white/20 group-hover:bg-purple-600/70
                                        flex items-center justify-center transition-all duration-200 shadow-lg">
                          <span className="text-white text-2xl ml-1">▶</span>
                        </div>
                      </button>
                    )}
                  </div>
                  <div className="px-4 py-3 bg-white/[0.03]">
                    {item.title && (
                      <p className="text-purple-300 text-[12px] font-semibold mb-1">{item.title}</p>
                    )}
                    <p className="text-white/70 text-[13px] leading-snug">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Single flip card ────────────────────────────────────────────────── */
const ExperienceFlipCard = ({ experience, index }) => {
  const [flipped, setFlipped]     = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const frontPoints = experience.points.slice(0, 3);
  const extraPoints = experience.points.slice(3);
  const hasPopup    = experience.viewVideos && experience.viewVideos.length > 0;
  const hasReport   = !!experience.reportUrl;

  return (
    <>
      {showPopup && (
        <WorkHighlightsModal
          items={experience.viewVideos}
          onClose={() => setShowPopup(false)}
        />
      )}

      <motion.div
        variants={fadeIn("up", "spring", index * 0.18, 0.7)}
        className="flip-card-scene w-full"
        style={{ height: 520 }}
      >
        <div className={`flip-card-inner ${flipped ? "is-flipped" : ""}`} style={{ height: 520 }}>

          {/* ── FRONT ─────────────────────────────────────────────── */}
          <div
            className="flip-card-face cursor-pointer select-none"
            onClick={() => setFlipped(true)}
            style={{
              background: "linear-gradient(145deg, #1d1836 0%, #0d0b1e 100%)",
              border: "1px solid rgba(128,78,238,0.18)",
            }}
          >
            {/* icon + date */}
            <div className="flex items-start justify-between px-6 pt-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                style={{ background: experience.iconBg }}
              >
                <img src={experience.icon} alt={experience.company_name} className="w-8 h-8 object-contain" />
              </div>
              <span className="bg-purple-900/40 text-purple-300 text-[11px] font-semibold
                               px-3 py-1 rounded-full border border-purple-700/40 mt-1">
                {experience.date}
              </span>
            </div>

            {/* titles */}
            <div className="px-6 mt-4">
              <h3 className="text-white font-bold text-[19px] leading-snug">{experience.title}</h3>
              <p className="text-purple-300 text-[13px] font-semibold mt-1">{experience.company_name}</p>
            </div>

            {/* bullet points */}
            <ul className="px-6 mt-4 space-y-2 card-scroll overflow-y-auto" style={{ maxHeight: 195 }}>
              {frontPoints.map((pt, i) => (
                <li key={i} className="flex gap-2 text-[13px] text-white/80 leading-snug">
                  <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
                  <span>{pt}</span>
                </li>
              ))}
              {extraPoints.length > 0 && (
                <li className="text-[12px] text-secondary italic">
                  +{extraPoints.length} more — flip to see media &amp; details
                </li>
              )}
            </ul>

            {/* CTA buttons */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 flex-wrap px-4">
              {hasPopup && (
                <span
                  onClick={(e) => { e.stopPropagation(); setShowPopup(true); }}
                  className="flex items-center gap-1.5 bg-indigo-600/20 hover:bg-indigo-600/40
                             border border-indigo-500/40 text-indigo-200 text-[12px] font-medium
                             px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
                >
                  🎬 View Videos
                </span>
              )}
              <span className="flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/40
                               border border-purple-500/40 text-purple-200 text-[12px] font-medium
                               px-4 py-2 rounded-full transition-all duration-200">
                Flip for Media ↩
              </span>
            </div>
          </div>

          {/* ── BACK ──────────────────────────────────────────────── */}
          <div
            className="flip-card-face flip-card-face--back flex flex-col"
            style={{
              background: "linear-gradient(145deg, #120e2a 0%, #0d1020 100%)",
              border: "1px solid rgba(99,102,241,0.3)",
            }}
          >
            {/* back header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3 flex-shrink-0 border-b border-white/5">
              <div>
                <p className="text-purple-300 text-[12px] font-semibold uppercase tracking-wider">
                  {experience.company_name}
                </p>
                <p className="text-white/50 text-[11px] mt-0.5">{experience.date}</p>
              </div>
              <div className="flex items-center gap-2">
                {hasReport && (
                  <a
                    href={experience.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-[11px] text-emerald-300 hover:text-white
                               bg-emerald-600/10 hover:bg-emerald-600/25 border border-emerald-500/30
                               px-3 py-1.5 rounded-full transition-all duration-200"
                  >
                    📄 View Report
                  </a>
                )}
                <button
                  onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
                  className="flex items-center gap-1.5 text-[12px] text-secondary hover:text-white
                             bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back
                </button>
              </div>
            </div>

            {/* media gallery */}
            <div className="flex-1 px-4 pt-3 pb-2 min-h-0">
              <MediaGallery media={experience.media} title="Work Highlights" />
            </div>

            {/* extra bullet points */}
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
    </>
  );
};

/* ── Section ─────────────────────────────────────────────────────────── */
const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience</h2>
    </motion.div>

    <p className="mt-3 text-secondary text-[14px]">
      Click a card to flip it and explore media highlights.
    </p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {experiences.map((exp, i) => (
        <ExperienceFlipCard key={`exp-${i}`} experience={exp} index={i} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, "experience");
