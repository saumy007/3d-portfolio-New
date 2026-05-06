import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

/**
 * ArticleCard — card for a Medium article.
 *
 * Props: { id, title, description, thumbnail, url, platform, date, readTime, index }
 */
const ArticleCard = ({
  title,
  description,
  thumbnail,
  url,
  date,
  readTime,
  index = 0,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.65)}
      className="group bg-[#1d1836] rounded-2xl overflow-hidden border border-purple-900/20
                 hover:border-purple-500/50 transition-all duration-300 shadow-card
                 flex flex-col"
    >
      {/* Thumbnail */}
      {thumbnail && (
        <div className="relative overflow-hidden border-b border-purple-900/30"
             style={{ minHeight: "12rem", background: "#0d0b1e" }}>
          <img
            src={thumbnail}
            alt={title}
            className="w-full object-contain group-hover:scale-105 transition-transform duration-500"
            style={{ maxHeight: "14rem", width: "100%", display: "block" }}
            loading="lazy"
          />
          <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white
                           text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
            Medium
          </span>
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-center gap-2 text-[11px] text-secondary">
          <span>{date}</span>
          {readTime && (
            <>
              <span className="opacity-40">·</span>
              <span>{readTime}</span>
            </>
          )}
        </div>

        <h3 className="text-white font-bold text-[16px] leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>

        <p className="text-secondary text-[13px] leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600
                     text-white text-sm font-semibold px-5 py-2.5 rounded-xl w-fit
                     hover:from-purple-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-purple-500/25
                     transition-all duration-200 active:scale-95"
          onClick={(e) => e.stopPropagation()}
        >
          Read Article
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
