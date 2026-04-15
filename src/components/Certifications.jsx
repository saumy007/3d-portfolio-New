import { motion } from "framer-motion";
import { styles } from "../styles";
import { certifications } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const CertificationCard = ({ index, title, issuer, date, credentialUrl, skills, logo }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.65)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-gradient-to-r from-pink-500 to-blue-500 p-[1px] rounded-[20px] shadow-card relative"
      >
        <div
          className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[300px] flex flex-col justify-between relative"
        >
          {logo && (
            <div className="absolute bottom-6 right-6 w-[80px] h-[80px] rounded-full bg-white p-2 flex items-center justify-center shadow-lg">
              <img src={logo} alt={issuer} className="w-full h-full object-contain" />
            </div>
          )}

          <div>
            <h3 className="text-white font-bold text-[22px]">{title}</h3>
            <p className="text-secondary text-[16px] font-semibold mt-2">{issuer}</p>
            <p className="text-secondary text-[14px] mt-1">{date}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-black-100 text-pink-text-gradient text-[12px] px-3 py-1 rounded-full border border-pink-500"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-white text-black py-2 px-6 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300 w-fit"
          >
            Verify Credential
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Qualifications</p>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
