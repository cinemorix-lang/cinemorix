import { motion } from "framer-motion";
import {
  Film,
  Palette,
  Monitor,
  Package,
  Megaphone,
  Presentation,
  Gamepad2,
  Layers
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Brand Strategy & Identity",
    description:
      "We craft meaningful brand identities through research, positioning, and visual storytelling for consistent brand growth.",
  },
  {
    icon: Film,
    title: "Video Editing & Production",
    description:
      "We produce cinematic, high-impact videos designed to capture attention and elevate your brand storytelling.",
  },
  {
    icon: Palette,
    title: "Social Media Creatives",
    description:
      "We create scroll-stopping visuals and content that strengthen brand presence and increase audience engagement.",
  },
  {
    icon: Monitor,
    title: "3D Design & Animation",
    description:
      "We create realistic 3D visuals, animations, and product renders that bring ideas and concepts to life.",
  },
  {
    icon: Package,
    title: "Product Design & Mockups",
    description:
      "We design and mockup products with attention to detail, ensuring they look and feel perfect before production.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Creatives",
    description:
      "We design performance-focused creatives that support advertising campaigns and drive measurable results.",
  },
  {
    icon: Presentation,
    title: "Presentation & Pitch Deck Design",
    description:
      "We design compelling presentation decks and pitch materials that clearly communicate your vision and drive stakeholder buy-in.",
  },
  {
    icon: Gamepad2,
    title: "Game Assets & Visual Design",
    description:
      "We design high-quality game assets and visual elements that bring immersive worlds to life.",
  },
  {
    icon: Layers,
    title: "Startup Branding Package",
    description:
      "We design comprehensive branding packages for startups, including logos, color palettes, and brand guidelines.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ServicesSection = () => {
  const renderedServices = services;

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Our <span className="text-gradient-mint">Services</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {renderedServices.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-[var(--shadow-mint)]"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {renderedServices.length === 0 && (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            No services available.
          </p>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
