import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: "lift" | "scale" | "glow" | "tilt" | "none";
  delay?: number;
}

const GlassmorphicCard = ({
  children,
  className = "",
  hoverEffect = "lift",
  delay = 0,
}: GlassmorphicCardProps) => {
  const hoverVariants = {
    lift: {
      y: -10,
      boxShadow: "0 20px 40px hsl(156 33% 72% / 0.15)",
    },
    scale: {
      scale: 1.03,
      boxShadow: "0 10px 30px hsl(156 33% 72% / 0.1)",
    },
    glow: {
      boxShadow: "0 0 40px hsl(156 33% 72% / 0.2), 0 0 80px hsl(156 33% 72% / 0.1)",
    },
    tilt: {
      rotateX: 5,
      rotateY: 5,
      boxShadow: "0 20px 40px hsl(200 16% 5% / 0.4)",
    },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hoverVariants[hoverEffect]}
      className={cn(
        "relative rounded-xl overflow-hidden",
        "bg-card/50 backdrop-blur-md",
        "border border-border hover:border-primary/30",
        "transition-all duration-500",
        className
      )}
    >
      {/* Inner glow on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      </div>
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassmorphicCard;
