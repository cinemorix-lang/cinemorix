import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Film, Video, Camera, Music, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import FloatingParticles from "@/components/FloatingParticles";
import SEO from "@/components/SEO";

type MediaItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  mediaType: "video" | "image";
  mediaUrl: string;
  software: string;
  mediaItems?: string[];
};

const videos: MediaItem[] = [
  {
    id: 1,
    title: "Infographic Video Production",
    description: "Clear, engaging visuals transforming complex data into stories.",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dywgvus16/video/upload/v1772458519/Infographics_Explainers_vm3eop.mp4",
    software: "After Effects",
    mediaItems: [
      "https://res.cloudinary.com/dywgvus16/video/upload/v1772458519/Infographics_Explainers_vm3eop.mp4",
      
    ],
  },
  {
    id: 2,
    title: "Social Media Creative Reels",
    description: "High-impact, engaging reels designed for brand growth.",
    category: "Social Media Reels",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dywgvus16/video/upload/v1772458634/video_2025-09-14_10-30-49_jpryim.mp4",
    software: "After Effects • Premiere Pro",
    mediaItems: [
      "https://res.cloudinary.com/dywgvus16/video/upload/v1772458634/video_2025-09-14_10-30-49_jpryim.mp4",
      "https://res.cloudinary.com/dywgvus16/video/upload/v1772514440/infographics_rjhs5j.mp4", 
    ],
  },
  {
    id: 3,
    title: "Commercial Editing",
    description: "High-impact brand storytelling through cinematic, strategic commercial editing.",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dywgvus16/video/upload/v1772513421/20260214_CarryOn0006_1_gdxigz.mp4",
    software: "Premiere Pro • After Effects • Davinci Resolve",
    mediaItems: ["https://res.cloudinary.com/dywgvus16/video/upload/v1772513421/20260214_CarryOn0006_1_gdxigz.mp4"],
  },
  {
    id: 4,
    title: "CGI Integration and VFX",
    description: "Cinematic CGI integration with seamless, realistic, high-impact visual effects.",
    category: "CGI Integration and VFX",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dywgvus16/video/upload/v1772513957/Live_CGI_introgation_gwozvn.mp4",
    software: "Autodesk Maya • After Effects • Nuke",
    mediaItems: ["https://res.cloudinary.com/dywgvus16/video/upload/v1772513957/Live_CGI_introgation_gwozvn.mp4"],
  },
];

const services = [
  {
    icon: Film,
    title: "Film Production",
    description: "End-to-end film production from concept to final delivery.",
  },
  {
    icon: Camera,
    title: "Cinematography",
    description: "Award-winning directors of photography and cutting-edge equipment.",
  },
  {
    icon: Video,
    title: "Post Production",
    description: "Editing, color grading, VFX, and finishing services.",
  },
  {
    icon: Music,
    title: "Sound Design",
    description: "Immersive audio landscapes and professional sound mixing.",
  },
];

const workflow = [
  { icon: Film, title: "Pre-Production", description: "Script, storyboard, casting, location scouting" },
  { icon: Camera, title: "Production", description: "Principal photography with full crew" },
  { icon: Video, title: "Post-Production", description: "Editing, color, sound, VFX" },
  { icon: Music, title: "Delivery", description: "Final master and distribution formats" },
];

const VideoGallerySlider = ({ items }: { items: MediaItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo, setActiveVideo] = useState<MediaItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const goTo = (index: number) => setCurrentIndex(index);
  const next = () => goTo((currentIndex + 1) % items.length);
  const prev = () => goTo((currentIndex - 1 + items.length) % items.length);
  const getVideoList = (item: MediaItem) =>
    item.mediaItems && item.mediaItems.length > 0 ? item.mediaItems : [item.mediaUrl];
  const activeVideoList = activeVideo ? getVideoList(activeVideo) : [];
  const currentActiveVideoUrl = activeVideoList[activeMediaIndex];

  const closeViewer = () => {
    setActiveVideo(null);
    setActiveMediaIndex(0);
  };

  const openAdjacentProject = (direction: "prev" | "next") => {
    if (!activeVideo) return;
    const activeProjectIndex = items.findIndex((item) => item.id === activeVideo.id);
    if (activeProjectIndex === -1) return;

    const targetIndex =
      direction === "next"
        ? (activeProjectIndex + 1) % items.length
        : (activeProjectIndex - 1 + items.length) % items.length;

    setCurrentIndex(targetIndex);
      setActiveVideo(items[targetIndex]);
    setActiveMediaIndex(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
      if (e.key === "Escape") closeViewer();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items.length]);

  const currentVideo = items[currentIndex];

  if (!currentVideo) {
    return <p className="text-center text-slate-400">No video portfolio records found.</p>;
  }

  return (
    <>
      <div
        className="relative w-full aspect-video max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] rounded-2xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0"
        >
          <img
            src={currentVideo.thumbnail}
            alt={currentVideo.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-background/70 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
        >
          {/* ✅ Play button opens modal */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveMediaIndex(0);
              setActiveVideo(currentVideo);
            }}
            className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-6"
          >
            <Play className="w-8 h-8 text-primary ml-1" />
          </motion.button>

          <span className="text-primary text-xs uppercase tracking-wider mb-2">
            {currentVideo.category}
          </span>

          <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
            {currentVideo.title}
          </h3>

          <p className="text-muted-foreground max-w-md">
            {currentVideo.description}
          </p>
        </motion.div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next video"
        >
          <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ✅ Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={closeViewer}
        >
          <div
            className="relative w-full max-w-7xl bg-background rounded-xl overflow-hidden my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeViewer}
              className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close media viewer"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative bg-black flex items-center justify-center min-h-[280px] sm:min-h-[360px] lg:min-h-[620px] overflow-hidden">
                <video
                  src={currentActiveVideoUrl}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full max-h-[60vh] sm:max-h-[75vh] lg:max-h-[88vh] object-contain bg-black"
                />

                {activeVideoList.length > 1 && (
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-2 bg-background/60 backdrop-blur-sm px-2 sm:px-2 py-1 sm:py-2 rounded-xl border border-border">
                    <button
                      onClick={() =>
                        setActiveMediaIndex((prevIndex) =>
                          (prevIndex - 1 + activeVideoList.length) % activeVideoList.length
                        )
                      }
                      className="w-7 sm:w-8 h-7 sm:h-8 rounded-md bg-secondary/70 border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                      aria-label="Previous video"
                    >
                      <ChevronLeft className="w-3 sm:w-4 h-3 sm:h-4" />
                    </button>

                    {activeVideoList.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveMediaIndex(index)}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                          index === activeMediaIndex
                            ? "bg-primary w-5 sm:w-7"
                            : "bg-muted-foreground/50 hover:bg-muted-foreground"
                        }`}
                        aria-label={`Open video ${index + 1}`}
                      />
                    ))}

                    <button
                      onClick={() => setActiveMediaIndex((prevIndex) => (prevIndex + 1) % activeVideoList.length)}
                      className="w-7 sm:w-8 h-7 sm:h-8 rounded-md bg-secondary/70 border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                      aria-label="Next video"
                    >
                      <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-border bg-secondary/30 flex flex-col justify-start items-start text-left max-h-[50vh] lg:max-h-[620px] overflow-y-auto">
                <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-3">
                  Project Details
                </span>

                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <button
                    onClick={() => openAdjacentProject("prev")}
                    className="bg-secondary/60 text-foreground px-3 py-1 rounded-md hover:bg-secondary transition-colors text-sm"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => openAdjacentProject("next")}
                    className="bg-secondary/60 text-foreground px-3 py-1 rounded-md hover:bg-secondary transition-colors text-sm"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-muted-foreground mb-4">
                  Project ID: <span className="text-foreground font-medium">{activeVideo.id}</span>
                </p>

                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">{activeVideo.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 sm:mb-8">{activeVideo.description}</p>

                <div className="px-4 py-2 rounded-lg bg-background border border-border w-full">
                  <p className="text-xs text-muted-foreground mb-1">Software Used</p>
                  <p className="text-primary font-medium text-sm">{activeVideo.software}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const VideoProduction = () => {
  const renderedVideos: MediaItem[] = videos;

  return (
    <div className="min-h-screen bg-background">
      <SEO pageKey="video-production" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <FloatingParticles count={15} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Cinematic Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            Video <span className="text-gradient-mint">Production</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            From concept to screen, we create compelling visual stories that captivate
            audiences and leave lasting impressions.
          </motion.p>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Our Work
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Video <span className="text-gradient-mint">Gallery</span>
            </h2>
          </motion.div>

          <VideoGallerySlider items={renderedVideos} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              What We Offer
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Video <span className="text-gradient-mint">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <GlassmorphicCard key={service.title} hoverEffect="glow" delay={index * 0.1}>
                <div className="p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Our Pipeline
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Production <span className="text-gradient-mint">Workflow</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflow.map((step, index) => (
              <GlassmorphicCard key={step.title} hoverEffect="lift" delay={index * 0.1}>
                <motion.div whileHover={{ y: -5 }} className="p-7 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-primary text-sm font-semibold tracking-wider">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoProduction;
