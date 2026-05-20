import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { hobbiesData } from "../constants/index";
import { fadeIn, textVariant, staggerContainer, zoomIn } from "../utils/motion";

/* ─── Education timeline item ──────────────────────────────────────── */
const EducationItem = ({ item, index, isLast }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.7)}
    className="relative flex gap-6"
  >
    {/* Left spine */}
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-500/20 flex-shrink-0 mt-1" />
      {!isLast && (
        <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-500/60 to-transparent mt-2" />
      )}
    </div>

    {/* Content card */}
    <div className="pb-10 flex-1">
      <div className="bg-[#1d1836] border border-purple-900/25 hover:border-purple-500/40
                      rounded-2xl p-6 transition-colors duration-300 shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h3 className="text-white font-bold text-[18px] leading-snug">{item.degree}</h3>
            <p className="text-purple-300 font-semibold text-[14px] mt-0.5">{item.institution}</p>
            <p className="text-secondary text-[13px]">{item.location}</p>
          </div>
          <span className="bg-purple-900/40 border border-purple-700/40 text-purple-200
                           text-[12px] font-semibold px-3 py-1 rounded-full whitespace-nowrap self-start">
            {item.duration}
          </span>
        </div>

        <p className="text-white/70 text-[14px] mt-4 leading-relaxed">{item.description}</p>

        {item.highlights?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.highlights.map((h) => (
              <span
                key={h}
                className="bg-black/30 border border-white/10 text-white/60
                           text-[12px] px-3 py-0.5 rounded-full"
              >
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

/* ─── Interest card ─────────────────────────────────────────────────── */
const InterestCard = ({ item, index }) => (
  <motion.div
    variants={zoomIn(index * 0.08, 0.5)}
    className="bg-[#1d1836] border border-purple-900/20 hover:border-purple-500/50
               rounded-2xl p-6 flex flex-col items-center text-center gap-3
               hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
  >
    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
      {item.icon}
    </span>
    <h4 className="text-white font-bold text-[16px]">{item.title}</h4>
    <p className="text-secondary text-[13px] leading-relaxed">{item.description}</p>
  </motion.div>
);

/* ─── Full Hobbies page ─────────────────────────────────────────────── */
const Hobbies = () => {
  const { personalStory, education, interests, aboutMe } = hobbiesData;

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* ── Hero banner ─────────────────────────────────────────────── */}
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="relative w-full overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(128,78,238,0.18) 0%, transparent 70%), #050816",
          minHeight: 280,
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-48 h-48 bg-indigo-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-16 pt-28 pb-16 text-center">
          <motion.p
            variants={textVariant(0)}
            className="text-sm text-purple-400 uppercase tracking-widest font-semibold mb-3"
          >
            Beyond the Code
          </motion.p>
          <motion.h1
            variants={textVariant(0.1)}
            className="font-black text-white text-[42px] sm:text-[56px] leading-tight"
          >
            The Human Behind the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Engineer
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            className="text-secondary text-[16px] mt-4 max-w-xl mx-auto leading-relaxed"
          >
            {aboutMe}
          </motion.p>

          {/* Back to portfolio link */}
          <motion.div variants={fadeIn("up", "tween", 0.35, 0.7)} className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-purple-500/50 hover:border-purple-400
                         text-purple-300 hover:text-white text-sm font-medium px-5 py-2.5 rounded-full
                         transition-all duration-200 hover:bg-purple-900/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Personal Story ───────────────────────────────────────────── */}
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto px-6 sm:px-16 py-16"
      >
        <motion.div variants={textVariant()} className="mb-10">
          <p className="text-sm text-purple-400 uppercase tracking-widest font-semibold">
            My Story
          </p>
          <h2 className="text-white font-black text-[32px] sm:text-[40px] mt-1">
            How It All Started
          </h2>
        </motion.div>

        <div className="space-y-5">
          {personalStory.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeIn("up", "spring", i * 0.12, 0.7)}
              className="text-white/75 text-[16px] leading-[1.9] max-w-3xl"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </motion.section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 sm:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent" />
      </div>

      {/* ── Education Timeline ───────────────────────────────────────── */}
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-4xl mx-auto px-6 sm:px-16 py-16"
      >
        <motion.div variants={textVariant()} className="mb-12">
          <p className="text-sm text-purple-400 uppercase tracking-widest font-semibold">
            Academic Journey
          </p>
          <h2 className="text-white font-black text-[32px] sm:text-[40px] mt-1">
            Education
          </h2>
        </motion.div>

        <div>
          {education.map((item, i) => (
            <EducationItem
              key={i}
              item={item}
              index={i}
              isLast={i === education.length - 1}
            />
          ))}
        </div>
      </motion.section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 sm:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent" />
      </div>

      {/* ── Interests Grid ───────────────────────────────────────────── */}
      <motion.section
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-4xl mx-auto px-6 sm:px-16 py-16"
      >
        <motion.div variants={textVariant()} className="mb-10">
          <p className="text-sm text-purple-400 uppercase tracking-widest font-semibold">
            What I Love
          </p>
          <h2 className="text-white font-black text-[32px] sm:text-[40px] mt-1">
            Hobbies &amp; Interests
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {interests.map((item, i) => (
            <InterestCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </motion.section>

      {/* ── Footer CTA ───────────────────────────────────────────────── */}
      <div className="text-center pb-16 px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600
                     text-white font-semibold px-8 py-3 rounded-full text-[15px]
                     hover:from-purple-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-purple-500/25
                     transition-all duration-200 active:scale-95"
        >
          See My Work
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hobbies;
