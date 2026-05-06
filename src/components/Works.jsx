import { useState } from 'react'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { motion, AnimatePresence } from 'framer-motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'

/* ── Video modal ─────────────────────────────────────────────────────── */
const VideoModal = ({ embedUrl, title, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ background: "rgba(0,0,0,0.9)" }}
    onClick={onClose}
  >
    <div
      className="relative w-full max-w-3xl bg-[#0d0b1e] border border-purple-500/30 rounded-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
        <h3 className="text-white font-semibold text-[15px] truncate pr-4">{title}</h3>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-secondary
                     hover:text-white flex items-center justify-center transition-all flex-shrink-0"
        >
          ✕
        </button>
      </div>
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  </div>
)

/* ── Project card ────────────────────────────────────────────────────── */
const ProjectCard = ({ index, name, description, tags, image, source_code_link, video_embed }) => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <AnimatePresence>
        {showVideo && (
          <VideoModal embedUrl={video_embed} title={name} onClose={() => setShowVideo(false)} />
        )}
      </AnimatePresence>

      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.65)}>
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 flex justify-between items-start m-3">
              {video_embed && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center
                             cursor-pointer hover:scale-110 transition-transform"
                  title="Watch video"
                >
                  <span className="text-white text-lg">▶</span>
                </button>
              )}
              {source_code_link && (
                <button
                  onClick={() => window.open(source_code_link, '_blank')}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center
                             cursor-pointer hover:scale-110 transition-transform ml-auto"
                  title="View code"
                >
                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[22px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  )
}

/* ── Section ─────────────────────────────────────────────────────────── */
const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const categories = ["All", "Robotics", "AR VR", "ML AI LLM"]

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-3 justify-center sm:justify-start">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg font-semibold text-[14px] transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white'
                : 'bg-tertiary text-secondary hover:text-white'
            }`}
            variants={fadeIn("right", "spring", 0.1, 0.75)}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")
