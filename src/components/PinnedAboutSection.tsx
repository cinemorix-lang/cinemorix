import { motion, useScroll, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface AboutPanel {
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  slider?: {
    icon: string; // ✅ Cloudinary PNG URL
    name: string;
    description: string;
  }[];
}

const panels: AboutPanel[] = [
  {
    tag: "ABOUT CINEMORIX",
    title: "LET'S BRING YOUR\nVISION TO LIFE",
    titleHighlight: "CINEMORIX",
    description:
      "",
  },
  {
    tag: "CINEMORIX VISUALIZE YOUR VISION",
    title: "Cinemorix Is Your",
    titleHighlight: "Creative Partner",
    description: "",
  },
  {
    tag: "Technology",
    title: "Powered by",
    titleHighlight: "Innovation",
    description:
      "We leverage cutting-edge technology and industry-leading tools to deliver cinematic excellence.",
    slider: [
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771575266/adobe-photoshop-icon_uu1mno.png",
        name: "Adobe Photoshop",
        description: "Professional photo edition & compositing",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771575266/adobe-illustrator-icon_koigeh.png",
        name: "Adobe Illustrator",
        description: "Vector graphics & illustration",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771575072/adobe-premiere-pro-icon_achasc.png",
        name: "Adobe Premiere",
        description: "Color grading & editing",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771576800/764-7646559_davinci-resolve-4-davinci-resolve-icon-png_hshuvx.png",
        name: "DaVinci Resolve",
        description: "Professional color grading, editing & finishing",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771575072/adobe-after-effects-icon_u0isqz.png",
        name: "After Effects",
        description: "Motion graphics & VFX",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771575072/adobe-audition-icon_nq2brc.png",
        name: "Adobe Audition",
        description: "Sound design & mixing",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771575072/autodesk-maya-icon_pbzyha.png",
        name: "Autodesk Maya",
        description: "3D modeling & animation",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771576305/adobe-substance-3d-painter-icon_tc9itl.png",
        name: "Substance Painter",
        description: "Texturing and material painting for 3D assets",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771576305/adobe-substance-3d-stager-icon_wwyvz4.png",
        name: "Substance 3D Stager",
        description: "Scene composition, lighting and look development",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771576305/maya-software_pmak6e.png",
        name: "Arnold Renderer",
        description: "High-quality rendering for cinematic output",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771576440/5592-2021-04-25043208-1619339528228_cogjde.ico",
        name: "Marmoset Toolbag 5",
        description: "Real-time rendering, baking and portfolio presentation",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771575488/unreal-engine-white-icon_nsmkq4.png",
        name: "Unreal Engine",
        description: "Real-time visuals",
      },
      {
        icon: "https://res.cloudinary.com/dywgvus16/image/upload/v1771575581/pngegg_izfptc.png",
        name: "Maxon Zbrush",
        description: "Digital sculpting & 3D modeling",
      },
    ],
  },
];

const FloatingCircle = ({
  size,
  delay,
  x,
  y,
}: {
  size: number;
  delay: number;
  x: string;
  y: string;
}) => (
  <div
    style={{ left: x, top: y, width: size, height: size }}
    className="absolute rounded-full border border-primary/20 pointer-events-none opacity-12"
  />
);

const FloatingLine = ({
  delay,
  rotation,
  x,
  y,
}: {
  delay: number;
  rotation: number;
  x: string;
  y: string;
}) => (
  <div
    style={{ left: x, top: y, rotate: `${rotation}deg` }}
    className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent pointer-events-none opacity-15"
  />
);

const TechSlider = ({ items }: { items: AboutPanel["slider"] }) => {
  if (!items) return null;

  const fallbackIcon =
    "https://res.cloudinary.com/dywgvus16/image/upload/v1771575266/adobe-photoshop-icon_uu1mno.png";
  const cardStep = 208;
  const slideDistance = items.length * cardStep;
  const slideDuration = Math.max(25, items.length * 2);

  return (
    <div className="group relative overflow-hidden">
      <motion.div
        animate={{ x: [0, -slideDistance] }}
        transition={{
          x: { duration: slideDuration, repeat: Infinity, ease: "linear" },
        }}
        className="flex gap-4"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex-shrink-0 w-48 p-5 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="mb-3 flex items-center justify-start">
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackIcon;
                }}
              />
            </div>

            <h4 className="font-display font-semibold text-foreground mb-1">
              {item.name || "Software"}
            </h4>
            <p className="text-muted-foreground text-xs">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};

const PinnedAboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative" style={{ height: "300vh" }}>
      {panels.map((panel, index) => {
        const panelProgress = index / panels.length;
        const nextPanelProgress = (index + 1) / panels.length;

        return (
          <PinnedPanel
            key={index}
            panel={panel}
            index={index}
            scrollYProgress={scrollYProgress}
            startProgress={panelProgress}
            endProgress={nextPanelProgress}
          />
        );
      })}
    </section>
  );
};

const PinnedPanel = ({
  panel,
  index,
  scrollYProgress,
  startProgress,
  endProgress,
}: {
  panel: AboutPanel;
  index: number;
  scrollYProgress: MotionValue<number>;
  startProgress: number;
  endProgress: number;
}) => {
  return (
    <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f1f1f]" />

      {/* Decorative elements */}
      <FloatingCircle size={300} delay={0.2} x="10%" y="20%" />
      <FloatingCircle size={150} delay={0.4} x="80%" y="60%" />
      <FloatingCircle size={200} delay={0.3} x="70%" y="15%" />
      <FloatingLine delay={0.5} rotation={45} x="15%" y="70%" />
      <FloatingLine delay={0.6} rotation={-30} x="85%" y="25%" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          className="absolute w-1 h-1 rounded-full bg-primary opacity-20"
        />
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side */}
          {index === 0 || index === 1 ? (
            <div className="group transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4 rounded-lg">
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
                {panel.tag}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {panel.title}
                <br />
                <span className="inline-block bg-gradient-to-r from-primary/30 via-primary/20 to-transparent px-2 py-1 rounded-md text-white font-semibold transition-colors group-hover:from-primary/50 group-hover:via-primary/40">
                  {panel.titleHighlight}
                </span>
              </h2>
            </div>
          ) : (
            <div>
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
                {panel.tag}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {panel.title}
                <br />
                <span className="text-gradient-mint">{panel.titleHighlight}</span>
              </h2>
            </div>
          )}

          {/* Right side */}
          {index === 0 ? (
            <div className="space-y-8">
              <div className="grid gap-4">
                {panel.slider?.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-md transition-all duration-300 hover:scale-102 hover:shadow-lg bg-card/30"
                  >
                    <h4 className="font-display text-lg font-semibold mb-1">
                      <span className="inline-block bg-gradient-to-r from-primary/30 via-primary/20 to-transparent px-2 py-1 rounded-md text-white font-semibold">
                        {item.name}
                      </span>
                    </h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>

              {panel.slider && <TechSlider items={panel.slider} />}

              <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Cinemorix, we craft visuals that do not just look stunning they
                  leave a lasting impact. Whether it's building a powerful brand
                  presence, creating captivating motion visuals, or transforming
                  ideas into immersive experiences, we bring creativity and precision
                  to every project.
                </p>
              </div>
            </div>
          ) : index === 1 ? (
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {panel.description}
              </p>
              <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Driven by innovation and fueled by excellence, we turn concepts into
                  reality with seamless execution and compelling storytelling. If
                  you're looking to elevate your brand, engage your audience, and
                  make a statement.
                </p>
              </div>
            </div>
          ) : (
            <div>
               <div className="p-6 mb-5 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {panel.description}
              </p>
              </div>
              {panel.slider && <TechSlider items={panel.slider} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PinnedAboutSection;