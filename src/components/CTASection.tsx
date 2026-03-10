import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/data/siteContent";

const CTASection = () => {
  const cta = homeContent.cta;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            {cta.subtitle}
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6">
            {cta.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            {cta.description}
          </p>
          <motion.a
            href={cta.ctaLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-gradient-mint text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            {cta.ctaLabel}
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
