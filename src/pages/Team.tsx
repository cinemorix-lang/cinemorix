import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import FloatingParticles from "@/components/FloatingParticles";
import SEO from "@/components/SEO";

const founders = [
  {
    name: "Jenil Patel",
    role: "Creative Director & Founder",
    bio: "Backed by 3+ years in the creative industry, Jenil builds powerful visual experiences through strategic design and innovation.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771059766/jenil_javu4p.png",
    socials: { instagram: "https://www.instagram.com/mr._.jenilpatel/", linkedin: "https://www.linkedin.com/in/jenil-patel-84477b273/" },
  },
  {
    name: "Pragat Gohil",
    role: "Technical Director & Founder",
    bio: "As a creative founder with 3+ years in the field, Pragat focuses on digital filmmaking and visual direction.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771059642/pragat_t3aetr.png",
    socials: { instagram: "https://www.instagram.com/pragaatt12/", linkedin: "https://www.linkedin.com/in/pragat-gohil-1a5b67341/" },
  },
  {
    name: "Vinay Chaurasiya",
    role: "Videography & Co-Founder",
    bio: "With 3+ years of hands-on experience in videography, Vinay brings stories to life through cinematic visuals, creative direction, and a sharp eye for detail.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771583549/vinay_lyqexj.png",
    socials: { instagram: "https://www.instagram.com/vinay_075/", linkedin: "#" },
  },
];

const teamMembers = [
  {
    name: "Manav Trivedi",
    role: "3d environment artist & level designers",
    tagline: "Building worlds, one polygon at a time",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771059320/manav_x1akid.png",
    socials: { instagram: "https://www.instagram.com/matrix___1406/", linkedin: "https://www.linkedin.com/in/manav-trivedi-898bb1214/" },
  },
  {
    name: "Sahil Navadiya",
    role: "3d environment artist & level designers",
    tagline: "Movement tells the story",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771059320/sahil_c2ypv8.png",
    socials: { instagram: "https://www.instagram.com/sahil_navadiya/", linkedin: "https://www.linkedin.com/in/sahil-navadiya-0a29453aa/" },
  },
  {
    name: "Shreya Patel",
    role: "3d Animator",
    tagline: "Every frame deserves perfect sound",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771064030/Shreya_arlka3.jpg",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Devang Limbachiya",
    role: "Graphics Designer & Motion Graphics",
    tagline: "Where raw becomes refined",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771060703/devang_cy2suj.png",
    socials: { instagram: "https://www.instagram.com/devangsss/", linkedin: "#" },
  },
  
];

const Team = () => {
  const renderedFounders = founders;
  const renderedTeamMembers = teamMembers;

  return (
    <div className="min-h-screen bg-background relative">
      <SEO pageKey="team" />
      <Navbar />

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingParticles count={30} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            The Creatives
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            Meet Our <span className="text-gradient-mint">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A diverse collective of artists, technicians, and visionaries united by
            a passion for creating extraordinary visual experiences.
          </motion.p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Leadership
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              The <span className="text-gradient-mint">Founders</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {renderedFounders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={index === 2 ? "lg:col-span-2 lg:flex lg:justify-center" : ""}
              >
                <GlassmorphicCard
                  hoverEffect="glow"
                  className={index === 2 ? "p-0 overflow-hidden w-full lg:max-w-[32rem]" : "p-0 overflow-hidden"}
                >
                  <div className="flex flex-col md:flex-row">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-full md:w-48 h-64 md:h-auto flex-shrink-0 overflow-hidden"
                    >
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r" />
                    </motion.div>
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                        {founder.name}
                      </h3>
                      <p className="text-primary text-sm mb-4">{founder.role}</p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {founder.bio}
                      </p>
                      <div className="flex gap-3">
                        <a
                          href={founder.socials.instagram}
                          className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                        <a
                          href={founder.socials.linkedin}
                          className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>

          {renderedFounders.length === 0 && (
            <p className="text-center text-sm text-muted-foreground">
              No founders available.
            </p>
          )}
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-24 bg-secondary/50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              The Collective
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Our <span className="text-gradient-mint">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderedTeamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={index === 3 ? "lg:col-start-2" : ""}
              >
                <GlassmorphicCard hoverEffect="lift" className="group p-0 overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Social icons on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center gap-3 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <a
                        href={member.socials.instagram}
                        className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a
                        href={member.socials.linkedin}
                        className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </motion.div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-xs uppercase tracking-wider mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm italic">
                      "{member.tagline}"
                    </p>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>

          {renderedTeamMembers.length === 0 && (
            <p className="text-center text-sm text-muted-foreground">
              No team members available.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
