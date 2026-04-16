import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

/**
 * PostCard — card for a LinkedIn post.
 *
 * Props: { id, description, thumbnail, url, platform, date, index }
 */
const PostCard = ({ description, thumbnail, url, date, index = 0 }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.65)}
      className="group bg-[#1d1836] rounded-2xl overflow-hidden border border-blue-900/20
                 hover:border-blue-500/50 transition-all duration-300 shadow-card
                 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-48">
        <img
          src={thumbnail}
          alt="LinkedIn Post"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* LinkedIn badge */}
        <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#0077B5]/90 backdrop-blur-sm
                         text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {date && (
          <span className="text-[11px] text-secondary">{date}</span>
        )}

        <p className="text-secondary text-[13px] leading-relaxed line-clamp-4 flex-1">
          {description}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 bg-[#0077B5]
                     text-white text-sm font-semibold px-5 py-2.5 rounded-xl w-fit
                     hover:bg-[#006097] hover:shadow-lg hover:shadow-blue-500/25
                     transition-all duration-200 active:scale-95"
          onClick={(e) => e.stopPropagation()}
        >
          View Post
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default PostCard;
