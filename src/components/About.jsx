import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  console.log(title);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-cneter">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        varients={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Saumy Sharma, a software engineer driven by a passion for physical AI, AR/VR, and simulation technologies. I create immersive, interactive applications that blend technical precision with creative storytelling, always with a strong focus on user engagement.
        <br /><br />
        My work is rooted in curiosity and continuous learning — exploring new ways to push the boundaries of what's possible in modern software development. Coming from a diverse background, I bring a broad perspective to problem-solving and innovation.
        <br /><br />
        I'm particularly motivated to collaborate with teams that are not only advancing technology but also building solutions that make a meaningful impact on society.
      </motion.p>

      <motion.a
        href="https://drive.google.com/file/d/1keBbvYzpu1JOj9Mjzojxx5v_bp6Vf8md/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-6 inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
      >
        Download My Resume
      </motion.a>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
