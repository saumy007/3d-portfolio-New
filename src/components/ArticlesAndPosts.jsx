import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { articles, posts } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { textVariant, staggerContainer } from "../utils/motion";
import ToggleTabs from "./reusable/ToggleTabs";
import ArticleCard from "./reusable/ArticleCard";
import PostCard from "./reusable/PostCard";

const TABS = [
  { id: "articles", label: "Articles", icon: "✍️" },
  { id: "posts",    label: "Posts",    icon: "💬" },
];

const ArticlesAndPosts = () => {
  const [activeTab, setActiveTab] = useState("articles");

  return (
    <>
      {/* Section heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Thoughts & Updates</p>
        <h2 className={styles.sectionHeadText}>Articles &amp; Posts</h2>
      </motion.div>

      {/* Tab toggle */}
      <motion.div
        variants={textVariant(0.1)}
        className="mt-8 flex justify-center"
      >
        <ToggleTabs
          tabs={TABS}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </motion.div>

      {/* Content area */}
      <AnimatePresence mode="wait">
        {activeTab === "articles" ? (
          <motion.div
            key="articles"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 max-w-4xl mx-auto"
          >
            {articles.map((article, i) => (
              <ArticleCard key={article.id} {...article} index={i} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="posts"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {posts.map((post, i) => (
              <PostCard key={post.id} {...post} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(ArticlesAndPosts, "articles");
