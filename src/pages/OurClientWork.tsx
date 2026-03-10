import { motion } from "framer-motion";
import { Building2, Briefcase, BadgeCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import FloatingParticles from "@/components/FloatingParticles";
import SEO from "@/components/SEO";

const clientWorks = [
  {
    client: "Fabulla Diamonds",
    project: "Brand Identity & Packaging",
    service: "Graphics Design",
    result: "Improved shelf visibility and stronger brand recall.",
  },
  {
    client: "Lotus Cafe",
    project: "Social Media Post Series",
    service: "Social Media Creatives",
    result: "Increased engagement, stronger brand presence, and consistent visual identity across social platforms.",
  },
  {
    client: "JB Films & Production",
    project: "Logo design & Logo Animation",
    service: "Brand Identity",
    result: "Delivered a strong visual identity that enhanced brand recognition and professionalism across digital platforms.",
  },
];

const OurClientWork = () => {
  const renderedClientWorks = clientWorks;

  return (
    <div className="min-h-screen bg-background">
      <SEO pageKey="client-work" />
      <Navbar />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <FloatingParticles count={14} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Portfolio Highlights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            Our Client <span className="text-gradient-mint">Work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            A collection of selected projects delivered for brands across design,
            3D, and video production.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Case Studies
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Trusted by <span className="text-gradient-mint">Clients</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderedClientWorks.map((item, index) => (
              <GlassmorphicCard key={item.client + item.project} hoverEffect="lift" delay={index * 0.08}>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-4 h-4 text-primary" />
                    <p className="text-xs uppercase tracking-[0.18em] text-primary">{item.client}</p>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {item.project}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>{item.service}</span>
                  </div>

                  <div className="rounded-lg border border-border bg-background/70 p-4 flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item.result}</p>
                  </div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>

          {renderedClientWorks.length === 0 && (
            <p className="mt-6 text-center text-sm text-muted-foreground">
              No client work records available.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurClientWork;
