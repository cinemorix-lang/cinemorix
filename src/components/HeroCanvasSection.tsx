import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

interface HeroCanvasSectionProps {
  frameImages: string[];
}

const HeroCanvasSection = ({ frameImages }: HeroCanvasSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload all frame images
  useEffect(() => {
    if (frameImages.length === 0) return;

    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    frameImages.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        loadedImages[index] = img;
        loadedCount++;
        if (loadedCount === frameImages.length) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === frameImages.length) {
          setImages(loadedImages.filter(Boolean));
          setIsLoaded(true);
        }
      };
      img.src = src;
    });
  }, [frameImages]);

  // Draw frame on canvas based on scroll
  const drawFrame = useCallback(
    (progress: number) => {
      const canvas = canvasRef.current;
      if (!canvas || images.length === 0) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const frameIndex = Math.min(
        Math.floor(progress * images.length),
        images.length - 1
      );
      const img = images[frameIndex];

      if (!img) return;

      // Clear and draw
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate cover fit
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth, drawHeight, drawX, drawY;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
        drawX = (canvas.width - drawWidth) / 2;
        drawY = 0;
      } else {
        drawWidth = canvas.width;
        drawHeight = img.height * (canvas.width / img.width);
        drawX = 0;
        drawY = (canvas.height - drawHeight) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    },
    [images]
  );

  // Subscribe to scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      drawFrame(value);
    });

    return () => unsubscribe();
  }, [scrollYProgress, drawFrame]);

  // Resize canvas
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawFrame(scrollYProgress.get());
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame, scrollYProgress]);

  // Fallback headline text for when no images are provided
  const headlineText = "CINEMORIX IS THE REAL VISUALISE YOUR VISION • ";

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${Math.max(frameImages.length * 10, 300)}vh` }}
    >
      {/* Sticky container for canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas for frame animation */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Fallback gradient background when no frames */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
        )}

        {/* Cinematic overlay */}
        <div className="absolute inset-0 cinematic-overlay pointer-events-none" />

        {/* Infinite scrolling headline */}
        <div className="absolute bottom-0 left-0 right-0 py-8 overflow-hidden bg-gradient-to-t from-background/90 to-transparent">
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
                className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold text-foreground/10 mx-4"
              >
                {headlineText}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-muted-foreground text-xs tracking-widest uppercase">
              Scroll to explore
            </span>
            <div className="w-5 h-8 border-2 border-primary/40 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-1.5 bg-primary rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCanvasSection;
