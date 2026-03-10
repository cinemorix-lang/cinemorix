import { Helmet } from "react-helmet-async";
import { seoContent } from "@/data/siteContent";

interface SEOProps {
  pageKey?: string;
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  type?: string;
}

const SEO = ({
  pageKey = "home",
  title = "Cinemorix | 3D Design, CGI & Video Production Studio India",
  description = "Cinemorix: Leading cinematic creative studio in India specializing in 3D design, CGI, VFX, motion graphics, branding & video production services.",
  keywords = "Cinemorix, cinematic creative studio, creative film studio, cinematic storytelling studio, video production studio, professional video editing services, motion graphics studio, VFX studio, creative branding agency, brand identity design studio, digital creative studio, startup branding services, 3D design studio, CGI studio, 3D animation studio, product 3D rendering, realistic product visualization, social media creative design, digital marketing creatives, advertising creative design, game assets design, 3D game asset studio, creative studio in India, video production studio in India, CGI studio in India, 3D design studio in India, creative studio in Surat, video production studio in Surat",
  ogTitle = "Cinemorix | 3D Design, CGI & Video Production Studio India",
  ogDescription = "Leading cinematic creative studio specializing in 3D design, CGI, VFX, motion graphics, branding & video production services in India.",
  ogImage = "https://res.cloudinary.com/dywgvus16/image/upload/v1772704401/ChatGPT_Image_Mar_5_2026_03_23_00_PM_fwtqdu.png",
  ogUrl = "https://cinemorix.com",
  twitterTitle = "Cinemorix | 3D Design, CGI & Video Production Studio India",
  twitterDescription = "Leading cinematic creative studio specializing in 3D design, CGI, VFX, motion graphics, branding & video production services in India.",
  twitterImage = "https://res.cloudinary.com/dywgvus16/image/upload/v1772704401/ChatGPT_Image_Mar_5_2026_03_23_00_PM_fwtqdu.png",
  canonical = "https://cinemorix.com",
  type = "website",
}: SEOProps) => {
  const seo = seoContent[pageKey];

  const resolvedTitle = seo?.metaTitle || title;
  const resolvedDescription = seo?.metaDescription || description;
  const resolvedKeywords = seo?.metaKeywords || keywords;
  const resolvedOgImage = seo?.ogImage || ogImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="keywords" content={resolvedKeywords} />
      <meta name="author" content="Cinemorix" />
      <meta name="x-page-key" content={pageKey} />
      <meta 
        name="robots" 
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" 
      />
      <link rel="canonical" href={canonical} />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Surat, Gujarat" />
      <meta name="geo.position" content="21.1702;72.8311" />
      <meta name="ICBM" content="21.1702, 72.8311" />

      {/* Open Graph Tags (WhatsApp / Facebook / LinkedIn) */}
      <meta property="og:title" content={seo?.metaTitle || ogTitle} />
      <meta property="og:description" content={seo?.metaDescription || ogDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Cinemorix - Cinematic Creative Studio" />
      <meta property="og:site_name" content="Cinemorix" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cinemorix" />
      <meta name="twitter:creator" content="@cinemorix" />
      <meta name="twitter:title" content={seo?.metaTitle || twitterTitle} />
      <meta name="twitter:description" content={seo?.metaDescription || twitterDescription} />
      <meta name="twitter:image" content={seo?.ogImage || twitterImage} />
      <meta name="twitter:image:alt" content="Cinemorix - Cinematic Creative Studio" />
    </Helmet>
  );
};

export default SEO;
