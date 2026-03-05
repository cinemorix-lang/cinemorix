import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Box,
  Layers,
  Sparkles,
  UserRound,
  Trees,
  Play,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Wand2,
  MonitorPlay,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import FloatingParticles from "@/components/FloatingParticles";

type MediaItem = {
  id: number;
  title: string;
  description: string;
  software: string;
  thumbnail: string;
  type: "image" | "video";
  mediaUrl: string; // image url for image type, video url for video type
  mediaItems?: {
    type: "image" | "video";
    url: string;
  }[];
};

const videos: MediaItem[] = [
  {
    id: 1,
    title: "3D Prop Modeling",
    description: "3D prop modeling involves creating detailed digital objects for games, films, and visualizations to enhance realism and storytelling.",
    software: "Maya, Substance Painter",
    thumbnail: "https://res.cloudinary.com/dywgvus16/image/upload/v1772514957/2_ivqvfw.jpg",
    type: "video",
    mediaUrl: "https://res.cloudinary.com/dywgvus16/video/upload/v1771231798/camara_Camera_1_FullQuality_kal9vm.mp4",
    mediaItems: [
      {
        type: "video",
        url: "https://res.cloudinary.com/dywgvus16/video/upload/v1772514762/mechanical_sniper_turtantable_gttpc3.mp4",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dywgvus16/video/upload/v1771394560/1-Camera_ayro31.mp4",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dywgvus16/video/upload/v1771400765/Untitled-Camera_ddwhen.mp4",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dywgvus16/video/upload/v1771394560/gas_pump_octlqb.mp4",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dywgvus16/video/upload/v1771394563/1_cfhasp.mp4",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dywgvus16/video/upload/f_mp4,vc_h264/v1771394561/1-Camera_001_vtnqbg.mp4",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dywgvus16/video/upload/v1772690037/machine_gun_te7h0w.mp4",
      },
      
      
    ],
  },
{
    id: 2,
    title: "3D Product Modeling",
    description: "3D product modeling involves creating detailed digital objects for games, films, and visualizations to enhance realism and storytelling.",
    software: "Maya, Substance Painter",
    thumbnail: "https://res.cloudinary.com/dywgvus16/image/upload/v1771234476/product_modeling_ygqmn7.jpg",
    type: "image",
    mediaUrl: "https://res.cloudinary.com/dywgvus16/image/upload/v1771572396/3.3_vwp5ul.png",
    mediaItems: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dywgvus16/image/upload/v1771572396/3.3_vwp5ul.png",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dywgvus16/image/upload/v1771573312/Product_Reshoot___Slow_cinematic_camera_movement_around_a_centered_black_ALPHA_bottle__Start_with_a_jfonfw.png",
      },
    ],
  },

  {
    id: 3,
    title: "3D Environment Design",
    description: "3D environment design involves creating immersive digital landscapes for games, films, and visualizations to enhance realism and storytelling.",
    software: "Maya, Substance Painter",
    thumbnail:
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771240208/4_o7tndz.jpg",
    type: "video",
    mediaUrl:
      "https://res.cloudinary.com/dywgvus16/video/upload/v1771240164/Jenilpatel_Lowpoly3d_1_1_ajom0g.mp4",
    mediaItems: [
      {
        type: "video",
        url: "https://res.cloudinary.com/dywgvus16/video/upload/v1771240164/Jenilpatel_Lowpoly3d_1_1_ajom0g.mp4",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dywgvus16/video/upload/v1771509276/3D_game_environment_ewxen1.mp4",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dywgvus16/video/upload/v1771566821/paga_env_juximw.mp4",
      },
    ],
  },
];

const services = [
  {
    icon: Box,
    title: "3D Modeling",
    description: "High-fidelity 3D models for products, architecture, and characters.",
  },
  {
    icon: Layers,
    title: "Texturing & Materials",
    description: "Photorealistic textures and advanced material systems.",
  },
  {
    icon: MonitorPlay,
    title: "Animation",
    description: "Character, mechanical, and motion graphics animation.",
  },
  {
    icon: Sparkles,
    title: "VFX & Compositing",
    description: "Visual effects integration and seamless compositing.",
  },
  {
    icon: UserRound,
    title: "3D Character & 3D Mascot",
    description: "High-quality 3D character and mascot design for various applications.",
  },
  {
    icon: Trees,
    title: "3D Environment Design",
    description: "High-quality 3D environment design for various applications.",
  },
];

const workflow = [
  { icon: Wand2, title: "Concept & Storyboard", description: "Planning the visual narrative" },
  { icon: Box, title: "3D Modeling", description: "Building digital assets" },
  { icon: Layers, title: "Texturing & Rigging", description: "Adding materials and controls" },
  { icon: Clapperboard, title: "Animation", description: "Bringing models to life" },
  { icon: Sparkles, title: "Rendering & Post", description: "Final output and polish" },
];

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => setCurrentIndex(index);
  const next = () => goTo((currentIndex + 1) % videos.length);
  const prev = () => goTo((currentIndex - 1 + videos.length) % videos.length);

  const currentItem = videos[currentIndex];

  const closeModal = () => {
    setActiveItem(null);
    setActiveMediaIndex(0);
  };

  const getMediaList = (item: MediaItem) => item.mediaItems ?? [{ type: item.type, url: item.mediaUrl }];
  const activeMediaList = activeItem ? getMediaList(activeItem) : [];
  const currentActiveMedia = activeMediaList[activeMediaIndex];
  const openAdjacentMedia = (direction: "prev" | "next") => {
    if (activeMediaList.length <= 1) return;
    setActiveMediaIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % activeMediaList.length
        : (prevIndex - 1 + activeMediaList.length) % activeMediaList.length
    );
  };

  // Keyboard navigation + close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Click on slide opens modal for both image and video
  const handleSlideClick = () => {
    setActiveMediaIndex(0);
    setActiveItem(currentItem);
  };

  const openAdjacentProject = (direction: "prev" | "next") => {
    if (!activeItem) return;
    const activeProjectIndex = videos.findIndex((item) => item.id === activeItem.id);
    if (activeProjectIndex === -1) return;

    const targetIndex =
      direction === "next"
        ? (activeProjectIndex + 1) % videos.length
        : (activeProjectIndex - 1 + videos.length) % videos.length;

    setActiveItem(videos[targetIndex]);
    setCurrentIndex(targetIndex);
    setActiveMediaIndex(0);
  };

  return (
    <>
      <div
        ref={sliderRef}
        className="relative w-full aspect-video max-h-[78vh] rounded-2xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleSlideClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleSlideClick();
        }}
      >
        {/* Main slide */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0"
        >
          <img
            src={currentItem.thumbnail}
            alt={currentItem.title}
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
          {/* ✅ Play button for video: opens selected project section */}
          {currentItem.type === "video" && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation(); // prevent slide click
                setActiveMediaIndex(0);
                setActiveItem(currentItem);
              }}
              className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-6"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 text-primary ml-1" />
            </motion.button>
          )}

          <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
            {currentItem.title}
          </h3>
          <p className="text-muted-foreground max-w-md mb-4">
            {currentItem.description}
          </p>

          <div className="flex gap-4 text-sm items-center justify-center">
            <span className="text-muted-foreground">{currentItem.software}</span>
            <span className="text-primary font-medium">
              {currentItem.type === "video" ? "Click play to watch" : "Click to view"}
            </span>
          </div>
        </motion.div>

        {/* Navigation arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Progress dots (no duration class usage) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                goTo(index);
              }}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ✅ Modal for BOTH image + video */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-7xl bg-background rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative bg-black flex items-center justify-center min-h-[380px] md:min-h-[620px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />

                {currentActiveMedia?.type === "video" ? (
                  <video
                    src={currentActiveMedia.url}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full max-h-[88vh] object-contain"
                  />
                ) : (
                  <img
                    src={currentActiveMedia?.url}
                    alt={activeItem.title}
                    className="w-full h-full max-h-[88vh] object-contain"
                  />
                )}

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/70 backdrop-blur-sm border border-border text-foreground">
                    {currentActiveMedia?.type === "video" ? "Video" : "Image"}
                  </span>
                  {activeMediaList.length > 1 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 border border-primary/40 text-primary">
                      {activeMediaIndex + 1} / {activeMediaList.length}
                    </span>
                  )}
                </div>

                {activeMediaList.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/60 backdrop-blur-sm px-2 py-2 rounded-xl border border-border">
                    <button
                      onClick={() => openAdjacentMedia("prev")}
                      className="w-8 h-8 rounded-md bg-secondary/70 border border-border flex items-center justify-center text-foreground hover:text-primary"
                      aria-label="Previous media"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {activeMediaList.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveMediaIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          index === activeMediaIndex
                            ? "bg-primary w-7"
                            : "bg-muted-foreground/50 hover:bg-muted-foreground"
                        }`}
                        aria-label={`Open media ${index + 1}`}
                      />
                    ))}

                    <button
                      onClick={() => openAdjacentMedia("next")}
                      className="w-8 h-8 rounded-md bg-secondary/70 border border-border flex items-center justify-center text-foreground hover:text-primary"
                      aria-label="Next media"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8 border-t md:border-t-0 md:border-l border-border bg-secondary/30 flex flex-col justify-start items-start text-left">
                <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-3">
                  Project Details
                </span>

                <div className="flex items-center gap-2 mb-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openAdjacentProject("prev");
                    }}
                    className="bg-secondary/60 text-foreground px-3 py-1 rounded-md hover:bg-secondary transition-colors"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openAdjacentProject("next");
                    }}
                    className="bg-secondary/60 text-foreground px-3 py-1 rounded-md hover:bg-secondary transition-colors"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-muted-foreground mb-4">
                  Project ID: <span className="text-foreground font-medium">{activeItem.id}</span>
                </p>

                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">{activeItem.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{activeItem.description}</p>
                <div className="px-4 py-2 rounded-lg bg-background border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Software Used</p>
                  <p className="text-primary font-medium">{activeItem.software}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ModelingAnimation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <FloatingParticles count={15} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Digital Craftsmanship
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            3D Modeling & <span className="text-gradient-mint">Animation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Bringing imagination to life through stunning 3D visuals, character animation,
            and photorealistic rendering.
          </motion.p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Showcase
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Featured <span className="text-gradient-mint">Work</span>
            </h2>
          </motion.div>

          <VideoSlider />
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
              3D <span className="text-gradient-mint">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <GlassmorphicCard key={service.title} hoverEffect="glow" delay={index * 0.1}>
                <div className="p-8 flex gap-6">
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </motion.div>
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
              3D <span className="text-gradient-mint">Workflow</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
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

export default ModelingAnimation;