import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * MediaGallery — a lightweight carousel for images and embedded videos.
 *
 * Props
 *   media  : Array<{ type: 'image'|'video', src: string, caption?: string }>
 *   title  : string  (optional header)
 */
const MediaGallery = ({ media = [], title }) => {
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState(1);

  if (!media.length) {
    return (
      <div className="flex items-center justify-center h-full text-secondary text-sm">
        No media available
      </div>
    );
  }

  const total = media.length;
  const item  = media[current];

  const go = (e, next) => {
    e.stopPropagation();
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const goNext = (e) => go(e, (current + 1) % total);
  const goPrev = (e) => go(e, (current - 1 + total) % total);

  return (
    <div className="flex flex-col h-full gap-2">
      {title && (
        <p className="text-xs text-secondary uppercase tracking-wider font-semibold px-1">
          {title}
        </p>
      )}

      {/* Slide area */}
      <div className="relative flex-1 rounded-xl overflow-hidden bg-black/40 min-h-0">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter:  (d) => ({ x: d * 60, opacity: 0 }),
              center: { x: 0,    opacity: 1 },
              exit:   (d) => ({ x: d * -60, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {item.type === "video" ? (
              <iframe
                src={item.src}
                className="w-full h-full"
                title={item.caption || `Video ${current + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={item.src}
                alt={item.caption || `Media ${current + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next arrows */}
        {total > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                         w-7 h-7 rounded-full bg-black/60 hover:bg-purple-700/80
                         text-white text-lg leading-none flex items-center justify-center
                         transition-colors duration-200"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                         w-7 h-7 rounded-full bg-black/60 hover:bg-purple-700/80
                         text-white text-lg leading-none flex items-center justify-center
                         transition-colors duration-200"
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}

        {/* Counter badge */}
        {total > 1 && (
          <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full z-10">
            {current + 1} / {total}
          </span>
        )}
      </div>

      {/* Caption */}
      {item.caption && (
        <p className="text-secondary text-xs text-center px-1 leading-snug">
          {item.caption}
        </p>
      )}

      {/* Dot indicators */}
      {total > 1 && (
        <div className="flex justify-center gap-1.5">
          {media.map((_, i) => (
            <button
              key={i}
              onClick={(e) => go(e, i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 bg-purple-500"
                  : "w-1.5 bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
