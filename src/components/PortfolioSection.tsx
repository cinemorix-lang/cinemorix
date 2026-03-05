import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  category: string;
  type: "image" | "video";
  mediaUrl: string;
  thumbnailUrl?: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Aahar Organic Spices",
    category: "Brand Identity",
    type: "image",
    mediaUrl:
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158588/Aahar_hkmrdx.jpg",
    description:
      "Organic spice brand identity blending tradition and freshness, featuring mortar, leaves, earthy colors, and culturally rooted Devanagari typography.",
  },
  {
    title: "AETHERLOCK MK-I (Steampunk Sniper Rifle)",
    category: "3D Prop Modeling",
    type: "video",
    mediaUrl:
      "https://res.cloudinary.com/dywgvus16/video/upload/v1772514762/mechanical_sniper_turtantable_gttpc3.mp4",
    description:
      "Steampunk sniper rifle blending arcane energy, precision engineering, and cinematic realism.",
  },
  {
    title: "Environment Design",
    category: "3D Environment Design",
    type: "video",
    mediaUrl:
      "https://res.cloudinary.com/dywgvus16/video/upload/v1771509276/3D_game_environment_ewxen1.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771240208/4_o7tndz.jpg",
    description:
      "Cinematic medieval castle environment surrounded by snowy mountains, night lighting, and atmospheric mood, designed for fantasy games and storytelling scenes.",
  },
  {
    title: "Sacred Geometry of Silence",
    category: "Digital Artwork Design",
    type: "image",
    mediaUrl:
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771230497/digital_painting_t7kuom.png",
    description:
      "A vibrant geometric digital artwork portraying a meditative fox monk and a spiritual sage, blending mosaic textures with contemporary illustration style, symbolizing wisdom, mindfulness, and inner balance.",
  },
  {
    title: "Fabulla Packaging Design",
    category: "Packaging Design",
    type: "image",
    mediaUrl:
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158606/packging2_xbmqvc.jpg",
    description:
      "Elegant blush-toned packaging design featuring premium boxes, shopping bag, and stationery, crafted to reflect luxury branding, sophistication, and refined product presentation.",
  },
  {
    title: "CGI Integration and VFX",
    category: "CGI Integration and VFX",
    type: "video",
    mediaUrl:
      "https://res.cloudinary.com/dywgvus16/video/upload/v1772513957/Live_CGI_introgation_gwozvn.mp4",
    description:
      "Cinematic CGI integration with seamless, realistic, high-impact visual effects.",
  },
];

const PortfolioSection = () => {
  const [activeItem, setActiveItem] = useState<Project | null>(null);

  const closeModal = () => setActiveItem(null);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Our <span className="text-gradient-mint">Portfolio</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setActiveItem(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveItem(project);
              }}
            >
              {/* Media */}
              {project.type === "video" ? (
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.mediaUrl}
                  poster={project.thumbnailUrl}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              ) : (
                <img
                  src={project.mediaUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                {/* Show play icon only for video */}
                {project.type === "video" && (
                  <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center mb-4">
                    <Play className="w-6 h-6 text-primary ml-0.5" />
                  </div>
                )}

                <h3 className="font-display text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-primary text-sm mt-1">{project.category}</p>

                <p className="text-xs text-muted-foreground mt-2">
                  {project.type === "video" ? "Click to play" : "Click to view"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for BOTH image + video */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl bg-background rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] min-h-[420px]">
              {/* Left: Media */}
              <div className="w-full bg-black">
                {activeItem.type === "video" ? (
                  <video
                    src={activeItem.mediaUrl}
                    poster={activeItem.thumbnailUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full max-h-[80vh] object-contain bg-black"
                  />
                ) : (
                  <img
                    src={activeItem.mediaUrl}
                    alt={activeItem.title}
                    className="w-full h-full max-h-[80vh] object-contain bg-black"
                  />
                )}
              </div>

              {/* Right: Text */}
              <div className="p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-border flex flex-col items-start justify-start text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                  {activeItem.category}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;