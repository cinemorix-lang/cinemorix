import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 0.3], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Headline text for infinite scroll
  const headlineText = "VISUALISE YOUR VISION.";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <img
          src={heroBg}
          alt="Cinematic studio"
          className="w-full h-full object-cover scale-110"
          loading="eager"
        />
        <div className="absolute inset-0 cinematic-overlay" />
        
        {/* Additional gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full border border-primary/20 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[15%] w-48 h-48 rounded-full border border-primary/10 pointer-events-none"
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ y: textY, opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          Creative Film Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-6"
        >
          We Craft
          <br />
          <motion.span 
            className="text-gradient-mint inline-block"
            animate={{
              textShadow: [
                "0 0 20px hsl(156 33% 72% / 0.3)",
                "0 0 40px hsl(156 33% 72% / 0.5)",
                "0 0 20px hsl(156 33% 72% / 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Cinematic
          </motion.span> Stories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        >
          From concept to screen, we bring your vision to life with stunning visuals
          and compelling narratives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-mint text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:shadow-[0_0_30px_hsl(156_33%_72%/0.3)] transition-all duration-300"
          >
            View Our Work
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-primary/30 text-primary px-8 py-3.5 rounded-md font-semibold text-base hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            Our Services
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Infinite scrolling headline at bottom */}
      <div className="absolute bottom-0 left-0 right-0 py-8 overflow-hidden bg-gradient-to-t from-background to-transparent">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mx-4"
            >
              {headlineText}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator removed */}
    </section>
  );
};

export default HeroSection;
