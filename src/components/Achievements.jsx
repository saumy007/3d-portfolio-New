import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const AchievementCard = ({ index, title, organization, date, description, icon, iconBg, link, linkLabel, highlight }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.12, 0.65)}
    className={`relative p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] ${
      highlight
        ? "bg-gradient-to-br from-[#1d1836] to-[#0d0b1e] border border-purple-500/40 shadow-lg shadow-purple-900/20"
        : "bg-tertiary border border-white/5 hover:border-purple-500/20"
    }`}
  >
    {highlight && (
      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-blue-500
                      text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
        ★ Featured
      </div>
    )}

    <div className="flex items-center gap-4">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
        style={{ background: iconBg }}
      >
        <img src={icon} alt={organization} className="w-8 h-8 object-contain rounded-sm" />
      </div>
      <div className="min-w-0">
        <h3 className="text-white font-bold text-[16px] leading-tight pr-8">{title}</h3>
        <p className="text-purple-300 text-[12px] font-semibold mt-0.5 truncate">{organization}</p>
        <span className="text-secondary text-[11px]">{date}</span>
      </div>
    </div>

    <p className="text-white/70 text-[13px] leading-relaxed flex-1">{description}</p>

    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start flex items-center gap-1.5 text-[12px] text-emerald-300 hover:text-white
                   bg-emerald-600/10 hover:bg-emerald-600/25 border border-emerald-500/30
                   px-3 py-1.5 rounded-full transition-all duration-200"
      >
        {linkLabel || "View"}
      </a>
    )}
  </motion.div>
);

const Achievements = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I've accomplished</p>
      <h2 className={styles.sectionHeadText}>Achievements</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[14px] max-w-2xl"
    >
      Key milestones across research internships, industry roles, and community contributions.
    </motion.p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((item, i) => (
        <AchievementCard key={i} index={i} {...item} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Achievements, "achievements");
