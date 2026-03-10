export const homeContent = {
  hero: {
    subtitle: "Creative Film Studio",
    title: "We Craft Cinematic Stories",
    description:
      "From concept to screen, we bring your vision to life with stunning visuals and compelling narratives.",
    imageUrl: "",
    ctaLabel: "View Our Work",
    ctaLink: "#portfolio",
    headlineText: "VISUALISE YOUR VISION.",
  },
  cta: {
    subtitle: "Let's Collaborate",
    title: "Ready to Create Something Extraordinary?",
    description:
      "Whether it's a feature film, commercial, or branded content - we're here to bring your vision to the screen.",
    ctaLabel: "Start a Project",
    ctaLink: "mailto:hello@cinemorix.com",
  },
  footer: {
    description:
      "Premium creative studio crafting cinematic stories that captivate and inspire audiences worldwide.",
    email: "cinemorix@gmail.com",
    phonePrimary: "+91 7096306862",
    phoneSecondary: "+91 99135 04212",
    addressLine1: "Creative Studio Lane",
    addressLine2: "Surat, Gujarat, India",
  },
};

export type SeoEntry = {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogImage?: string;
};

export const seoContent: Record<string, SeoEntry> = {
  home: {
    metaTitle: "Cinemorix | 3D Design, CGI & Video Production Studio India",
    metaDescription:
      "Cinemorix: Leading cinematic creative studio in India specializing in 3D design, CGI, VFX, motion graphics, branding and video production services.",
    metaKeywords:
      "Cinemorix, cinematic creative studio, video production studio, motion graphics studio, VFX studio, branding agency, 3D design studio, CGI studio, creative studio in India, creative studio in Surat",
  },
  "graphics-design": {
    metaTitle: "Graphics Design Services | Cinemorix",
    metaDescription:
      "Brand identity, social media creatives, poster design, packaging design, and digital artwork by Cinemorix.",
    metaKeywords:
      "graphics design, brand identity, social media design, poster design, packaging design, digital artwork",
  },
  "3d-animation": {
    metaTitle: "3D Modeling and Animation Services | Cinemorix",
    metaDescription:
      "High-quality 3D modeling, animation, product visualization, and environment design services by Cinemorix.",
    metaKeywords:
      "3d modeling, 3d animation, product visualization, environment design, cinematic animation",
  },
  "video-production": {
    metaTitle: "Video Production Services | Cinemorix",
    metaDescription:
      "Concept to final cut video production, editing, CGI integration, and VFX services for brands and campaigns.",
    metaKeywords:
      "video production, video editing, commercial editing, cgi integration, vfx, reels production",
  },
  "client-work": {
    metaTitle: "Client Work Portfolio | Cinemorix",
    metaDescription:
      "Explore selected Cinemorix client projects across graphics, 3D animation, and video production.",
    metaKeywords: "client portfolio, case studies, creative studio projects, brand work",
  },
  team: {
    metaTitle: "Our Team | Cinemorix",
    metaDescription:
      "Meet the Cinemorix team of founders, designers, animators, and video creators.",
    metaKeywords: "cinemorix team, founders, designers, animators, creative professionals",
  },
  contact: {
    metaTitle: "Contact Cinemorix",
    metaDescription:
      "Contact Cinemorix for graphics design, 3D animation, and video production projects.",
    metaKeywords: "contact cinemorix, project inquiry, creative studio contact",
  },
};
