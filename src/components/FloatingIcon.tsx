import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  Icon: LucideIcon;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  delay?: number;
}

const positionClasses = {
  "top-left": "top-4 left-4 md:top-20 md:left-20",
  "top-right": "top-4 right-4 md:top-20 md:right-20",
  "bottom-left": "bottom-4 left-4 md:bottom-20 md:left-20",
  "bottom-right": "bottom-4 right-4 md:bottom-20 md:right-20",
};

const FloatingIcon = ({ Icon, position, delay = 0 }: FloatingIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute ${positionClasses[position]} z-0 hidden sm:block`}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />

        {/* Icon container */}
        <div className="relative w-12 h-12 md:w-20 md:h-20 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 md:w-10 md:h-10 text-primary/60" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingIcon;
