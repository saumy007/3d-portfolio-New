import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'
import { useState } from 'react'

const ProjectCard =({index, name, description, tags, image, source_code_link, video_link})=>{
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.65)}>
      <Tilt
        options={{max:45, scale:1, speed: 450}}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover roundex-2xl' />
          <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
            {video_link && (
              <div
                onClick={()=> window.open(video_link, )}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
                title="Watch video"
              >
                <span className='text-white text-lg'>▶</span>
              </div>
            )}
            <div
              onClick={()=> window.open(source_code_link, )}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              title="View code"
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          { tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          )) }
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Robotics", "AR VR", "ML AI LLM"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-3 justify-center sm:justify-start'>
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold text-[14px] transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white'
                : 'bg-tertiary text-secondary hover:text-white'
            }`}
            variants={fadeIn("right", "spring", 0.1, 0.75)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        { filteredProjects.map((project, index)=>(
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        )) }

      </div>
    </>

  )
}

export default SectionWrapper(Works, "work");