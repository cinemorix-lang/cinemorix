import { motion } from "framer-motion";
import { Palette, PenTool, Layout, Eye, Layers, Sparkles, X, ChevronLeft, ChevronRight, Share2, Package, FileImage } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import FloatingParticles from "@/components/FloatingParticles";
import SEO from "@/components/SEO";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Logo Design, Style Guides, Brand Guidelines, and Visual Systems.",
  },
  {
    icon: PenTool,
    title: "Digital Artwork",
    description: "Custom illustrations and artwork for all digital platforms.",
  },
  {
    icon: Layout,
    title: "Event Graphic & Motion Design",
    description: "Custom graphics and motion design for events, conferences, and live presentations.",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description: "Social Media, Poster, Social Media Graphics and Infographics Design.",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Packaging, Label, and Product Design.",
  },
  {
    icon: FileImage,
    title: "Printed Poster Design",
    description: "Printed posters, flyers, and other promotional materials.",
  },

];

const workflow = [
  { icon: Sparkles, title: "Discovery", description: "Understanding your vision and goals" },
  { icon: PenTool, title: "Concept", description: "Sketching and initial design exploration" },
  { icon: Layers, title: "Development", description: "Refining and perfecting the design" },
  { icon: Eye, title: "Delivery", description: "Final assets and implementation support" },
];

type PortfolioItem = {
  title: string;
  category: string;
  images: string[];
  mediaItems?: {
    type: "image" | "video";
    url: string;
  }[];
  description: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "Tech Startup Branding",
    category: "Brand Identity",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158588/Aahar_hkmrdx.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158585/Lotus_cafe_sxubwx.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158583/Fabulla_slj7kf.jpg",
      "https://res.cloudinary.com/dmcff5mci/image/upload/v1771322830/1st_PAGE_rzhquf.png",
    ],
    mediaItems: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dywgvus16/image/upload/v1771158588/Aahar_hkmrdx.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dywgvus16/image/upload/v1771158585/Lotus_cafe_sxubwx.png",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dywgvus16/image/upload/v1771158583/Fabulla_slj7kf.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dmcff5mci/image/upload/v1771322830/1st_PAGE_rzhquf.png",
      },
    ],
    description:
      "Complete brand identity system including logo, typography and visual guidelines.",
  },
  {
    title: "E-commerce Platform & Showcase Your Products",
    category: "Packaging Design",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158642/Mockup_ybqsaf.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158614/packging_ivmyaq.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158606/packging2_xbmqvc.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771321806/Wax-Candle_Mockup_kp2ipq.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771323341/Paper-BagMockup_ctaapm.jpg",
    ],
    description:
      "User-centered interface design for seamless browsing, product discovery, and checkout flow.",
  },
  {
    title: "Festival Poster Series",
    category: "Poster Design",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158608/3_page_gxmfnw.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158607/social_media_poster_ulbzck.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771323342/Free_Outdoor_Banner_Mockup_zcapgr.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771323340/sundhagar_poster_w16gix.jpg",
    ],
    description:
      "Campaign-focused visual storytelling assets designed for social and digital launches.",
  },
  {
    title: "Social Media Campaign",
    category: "Social Media Design",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158606/5page_twcq4q.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771159096/39616501_8748687_u5h1kj.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771323341/SOCIAL_MEDIA_POSTS_pwq0ux.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771323341/SOCIAL_MEDIA_POSTS_2_b4dyak.jpg",
    ],
    description:
      "Campaign-focused visual storytelling assets designed for social and digital launches.",
  },
  {
    title: "Movie Poster Series",
    category: "Movie Poster Design",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771158607/Poster_D_Adajan_CM_Surat__Jenil_Patel_rs9bjx.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771159326/black-panther-web_bfjeel.jpg",
    ],
    description:
      "Campaign-focused visual storytelling assets designed for social and digital launches.",
  },
  {
    title: "Digital Artwork Series",
    category: "Digital Artwork Design",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771230497/digital_painting_t7kuom.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771230497/animal_mandala_bcbhkn.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771230496/7564727_nhmtqd.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1771230496/drowing3_dzrzge.png",
    ],
    description:
      "Campaign-focused visual storytelling assets designed for social and digital launches.",
  },
];

const GraphicsDesign = () => {
  const renderedItems: PortfolioItem[] = portfolioItems;

  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const getMediaList = (item: PortfolioItem) =>
    item.mediaItems && item.mediaItems.length > 0
      ? item.mediaItems
      : item.images.map((image) => ({ type: "image" as const, url: image }));

  const activeMediaList = activeItem ? getMediaList(activeItem) : [];
  const currentMedia = activeMediaList[currentMediaIndex];

  const openItem = (index: number) => {
    setActiveIndex(index);
    setActiveItem(renderedItems[index]);
    setCurrentMediaIndex(0);
  };

  const goToItem = (index: number) => {
    const totalItems = renderedItems.length;
    const nextIndex = (index + totalItems) % totalItems;
    setActiveIndex(nextIndex);
    setActiveItem(renderedItems[nextIndex]);
    setCurrentMediaIndex(0);
  };

  const nextCategory = () => {
    if (activeIndex === null) return;
    goToItem(activeIndex + 1);
  };

  const prevCategory = () => {
    if (activeIndex === null) return;
    goToItem(activeIndex - 1);
  };

  const nextMedia = () => {
    if (activeMediaList.length === 0) return;
    setCurrentMediaIndex((prev) => (prev + 1) % activeMediaList.length);
  };

  const prevMedia = () => {
    if (activeMediaList.length === 0) return;
    setCurrentMediaIndex((prev) => (prev - 1 + activeMediaList.length) % activeMediaList.length);
  };

  const closeModal = () => {
    setActiveItem(null);
    setActiveIndex(null);
  };

  // Close modal on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (!activeItem) return;
      if (e.key === "ArrowLeft") {
        if (activeMediaList.length === 0) return;
        setCurrentMediaIndex((prev) => (prev - 1 + activeMediaList.length) % activeMediaList.length);
      }
      if (e.key === "ArrowRight") {
        if (activeMediaList.length === 0) return;
        setCurrentMediaIndex((prev) => (prev + 1) % activeMediaList.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeItem, activeMediaList.length]);

  return (
    <div className="min-h-screen bg-background">
      <SEO pageKey="graphics-design" />
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
            Creative Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            Graphics <span className="text-gradient-mint">Design</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            From brand identity to digital campaigns, we create visuals that captivate and communicate
            your message with precision and artistry.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Our Work
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Featured <span className="text-gradient-mint">Projects</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderedItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, rotate: Math.random() > 0.5 ? 1 : -1 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openItem(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openItem(index);
                  }
                }}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-primary text-xs uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {renderedItems.length === 0 && (
            <p className="mt-6 text-center text-sm text-muted-foreground">
              No graphics projects available.
            </p>
          )}
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
              Our <span className="text-gradient-mint">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <GlassmorphicCard
                key={service.title}
                hoverEffect="glow"
                delay={index * 0.1}
                className="group"
              >
                <div className="p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-shadow duration-300 group-hover:shadow-lg">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      <span className="inline-block bg-gradient-to-r from-primary/30 via-primary/20 to-transparent px-2 py-1 rounded-md text-white font-semibold transition-colors group-hover:from-primary/50 group-hover:via-primary/40">
                        {service.title}
                      </span>
                    </h3>
                    <p className="text-muted-foreground transition-transform duration-200 group-hover:-translate-y-1 group-hover:text-foreground">
                      {service.description}
                    </p>
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
              How We Work
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Our <span className="text-gradient-mint">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, index) => (
              <GlassmorphicCard key={step.title} hoverEffect="lift" delay={index * 0.1}>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-primary text-xs font-semibold tracking-wider">
                    Step {index + 1}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* ✅ Project Modal – Left Work / Right Text */}
{activeItem && (
  <div
    className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-4"
    onClick={closeModal}
  >
    <div
      className="relative w-full max-w-7xl max-h-[92vh] bg-background rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
      onClick={(e) => e.stopPropagation()}
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
        aria-label="Close"
      >
        <X size={18} />
      </button>

      {/* LEFT SIDE — MEDIA OUTPUT */}
      <div className="relative bg-black flex items-center justify-center min-h-[46vh] md:min-h-[70vh] p-6 md:p-8">
        <div className="flex items-center justify-center w-full h-full">
          {currentMedia?.type === "video" ? (
            <video
              src={currentMedia.url}
              controls
              autoPlay
              playsInline
              className="w-full h-full max-h-[82vh] object-contain"
            />
          ) : (
            <img
              src={currentMedia?.url}
              alt={activeItem.title}
              className="w-full h-full max-h-[82vh] object-contain"
            />
          )}
        </div>

        {activeMediaList.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/60 backdrop-blur-sm px-2 py-2 rounded-xl border border-border">
            <button
              onClick={prevMedia}
              className="w-8 h-8 rounded-md bg-secondary/70 border border-border flex items-center justify-center text-foreground hover:text-primary"
              aria-label="Previous media"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {activeMediaList.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMediaIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentMediaIndex
                    ? "bg-primary w-7"
                    : "bg-muted-foreground/50 hover:bg-muted-foreground"
                }`}
                aria-label={`Open media ${index + 1}`}
              />
            ))}

            <button
              onClick={nextMedia}
              className="w-8 h-8 rounded-md bg-secondary/70 border border-border flex items-center justify-center text-foreground hover:text-primary"
              aria-label="Next media"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* RIGHT SIDE — TEXT CONTENT */}
      <div className="p-6 md:p-8 pt-10 flex flex-col justify-start overflow-y-auto">
        <span className="text-primary text-xs uppercase tracking-wider mb-2">
          {activeItem.category}
        </span>

        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={prevCategory}
            className="bg-secondary/60 text-foreground px-3 py-1 rounded-md hover:bg-secondary"
            aria-label="Previous category"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextCategory}
            className="bg-secondary/60 text-foreground px-3 py-1 rounded-md hover:bg-secondary"
            aria-label="Next category"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <p className="text-xs text-muted-foreground mb-2">
          {currentMediaIndex + 1} / {activeMediaList.length}
        </p>

        <h3 className="font-display text-2xl font-bold mb-4">
          {activeItem.title}
        </h3>

        <p className="text-muted-foreground mb-6">{activeItem.description}</p>

      
      </div>
    </div>
  </div>
)}
    </div>
  );
  };
export default GraphicsDesign;