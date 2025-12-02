import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  Icon: LucideIcon;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  delay?: number;
}

const positionClasses = {
  "top-left": "top-20 left-4 md:top-32 md:left-20",
  "top-right": "top-20 right-4 md:top-32 md:right-20",
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
      <div className="relative">
        {/* Glow effect */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-accent/20 rounded-full blur-xl"
        />

        {/* Icon container */}
        <motion.div
          className="relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg"
          animate={{
            boxShadow: [
              "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              "0 10px 30px -3px rgba(249, 115, 22, 0.5)",
              "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-4 h-4 md:w-6 md:h-6 text-primary/60" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FloatingIcon;
