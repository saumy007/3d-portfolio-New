import { motion } from "framer-motion";

/**
 * ToggleTabs — animated pill-style tab switcher.
 *
 * Props
 *   tabs      : Array<{ id: string, label: string, icon?: string }>
 *   activeTab : string
 *   onChange  : (id: string) => void
 */
const ToggleTabs = ({ tabs = [], activeTab, onChange }) => {
  return (
    <div className="flex items-center gap-1 bg-[#1a1535] rounded-full p-1 w-fit shadow-inner">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold
                        transition-colors duration-200 focus:outline-none
                        ${isActive ? "text-white" : "text-secondary hover:text-white"}`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {tab.icon && (
              <span className="relative z-10 text-base">{tab.icon}</span>
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ToggleTabs;
