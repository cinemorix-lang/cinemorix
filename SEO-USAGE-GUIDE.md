# SEO Component Usage Examples for Cinemorix

## 📖 How to Use the SEO Component

The SEO component is a reusable React component that manages all meta tags using `react-helmet-async`. It's located at `src/components/SEO.tsx`.

---

## Example 1: Default Usage (Home Page)

```tsx
import SEO from "@/components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO />
      {/* Your page content */}
    </>
  );
};
```

**Result**: Uses all default values optimized for Cinemorix home page.

---

## Example 2: Custom Page SEO (Video Production)

```tsx
import SEO from "@/components/SEO";

const VideoProductionPage = () => {
  return (
    <>
      <SEO 
        title="Video Production Services | Cinemorix Studio India"
        description="Professional video production services in India. Corporate videos, commercials, music videos, and cinematic storytelling by Cinemorix."
        keywords="video production India, corporate video production, commercial video, music video production, cinematic video services, video production Surat"
        canonical="https://cinemorix.com/video-production"
        ogUrl="https://cinemorix.com/video-production"
        ogTitle="Video Production Services | Cinemorix Studio India"
        twitterTitle="Video Production Services | Cinemorix Studio India"
      />
      {/* Your page content */}
    </>
  );
};
```

---

## Example 3: Custom Page SEO (3D Design)

```tsx
import SEO from "@/components/SEO";

const ThreeDDesignPage = () => {
  return (
    <>
      <SEO 
        title="3D Design & CGI Services | Cinemorix Studio India"
        description="Expert 3D design, CGI, and animation services. Product rendering, architectural visualization, and 3D game assets by Cinemorix."
        keywords="3D design studio India, CGI services, 3D animation, product rendering, architectural visualization, game assets design, 3D studio Surat"
        canonical="https://cinemorix.com/3d-design"
        ogUrl="https://cinemorix.com/3d-design"
        ogTitle="3D Design & CGI Services | Cinemorix Studio India"
        ogDescription="Expert 3D design, CGI, and animation services for products, architecture, and gaming."
        twitterTitle="3D Design & CGI Services | Cinemorix Studio India"
        twitterDescription="Expert 3D design, CGI, and animation services for products, architecture, and gaming."
      />
      {/* Your page content */}
    </>
  );
};
```

---

## Example 4: Custom Page SEO (Branding)

```tsx
import SEO from "@/components/SEO";

const BrandingPage = () => {
  return (
    <>
      <SEO 
        title="Creative Branding Agency | Cinemorix Studio India"
        description="Build powerful brand identities. Logo design, brand strategy, visual identity systems, and creative branding solutions by Cinemorix."
        keywords="branding agency India, creative branding, brand identity design, logo design, brand strategy, startup branding, visual identity, branding Surat"
        canonical="https://cinemorix.com/branding"
        ogUrl="https://cinemorix.com/branding"
        ogTitle="Creative Branding Agency | Cinemorix Studio India"
        twitterTitle="Creative Branding Agency | Cinemorix Studio India"
      />
      {/* Your page content */}
    </>
  );
};
```

---

## Example 5: Custom Page SEO (Motion Graphics)

```tsx
import SEO from "@/components/SEO";

const MotionGraphicsPage = () => {
  return (
    <>
      <SEO 
        title="Motion Graphics & VFX Studio | Cinemorix India"
        description="Professional motion graphics and VFX services. 2D/3D animation, explainer videos, and visual effects by Cinemorix creative studio."
        keywords="motion graphics studio, VFX studio India, 2D animation, 3D animation, explainer videos, visual effects, motion design, VFX Surat"
        canonical="https://cinemorix.com/motion-graphics"
        ogUrl="https://cinemorix.com/motion-graphics"
        ogTitle="Motion Graphics & VFX Studio | Cinemorix India"
        twitterTitle="Motion Graphics & VFX Studio | Cinemorix India"
      />
      {/* Your page content */}
    </>
  );
};
```

---

## 🎯 Available SEO Component Props

```typescript
interface SEOProps {
  title?: string;                // Page title (60 chars recommended)
  description?: string;          // Meta description (150-160 chars)
  keywords?: string;             // Comma-separated keywords
  ogTitle?: string;              // Open Graph title
  ogDescription?: string;        // Open Graph description
  ogImage?: string;              // Open Graph image URL
  ogUrl?: string;                // Open Graph page URL
  twitterTitle?: string;         // Twitter card title
  twitterDescription?: string;   // Twitter card description
  twitterImage?: string;         // Twitter card image URL
  canonical?: string;            // Canonical URL
  type?: string;                 // OG type (default: "website")
}
```

**All props are optional** - the component works with sensible defaults for Cinemorix.

---

## 📝 SEO Best Practices

### 1. Title Tag
- ✅ Keep it under 60 characters
- ✅ Include primary keyword near the beginning
- ✅ Add brand name at the end
- ✅ Make it compelling and click-worthy

### 2. Meta Description
- ✅ Keep it 150-160 characters
- ✅ Include target keywords naturally
- ✅ Write compelling copy that encourages clicks
- ✅ Include a call-to-action when appropriate

### 3. Keywords
- ✅ Focus on long-tail keywords
- ✅ Include location-based keywords for local SEO
- ✅ Mix primary and secondary keywords
- ❌ Don't keyword stuff - keep it natural

### 4. Open Graph & Twitter Cards
- ✅ Use high-quality images (1200x630px recommended)
- ✅ Write compelling titles and descriptions
- ✅ Ensure images have proper alt text
- ✅ Test how they appear using social media preview tools

### 5. Canonical URLs
- ✅ Always set canonical URLs to avoid duplicate content issues
- ✅ Use absolute URLs (https://cinemorix.com/page)
- ✅ Match the canonical URL with the actual page URL

### 6. Local SEO
- ✅ Include city and state in titles and descriptions
- ✅ Use geo meta tags (already included in base SEO)
- ✅ Create location-specific landing pages when possible
- ✅ Maintain consistent NAP (Name, Address, Phone) across web

---

## 🚀 Quick Reference

### Minimal Implementation
```tsx
<SEO />
```

### Custom Title Only
```tsx
<SEO title="Your Custom Title | Cinemorix" />
```

### Custom Title + Description
```tsx
<SEO 
  title="Your Title | Cinemorix"
  description="Your compelling description here."
/>
```

### Full Custom SEO
```tsx
<SEO 
  title="Page Title | Cinemorix"
  description="Page description"
  keywords="keyword1, keyword2, keyword3"
  canonical="https://cinemorix.com/page"
  ogUrl="https://cinemorix.com/page"
  ogTitle="Social Media Title"
  ogDescription="Social media description"
  twitterTitle="Twitter Title"
/>
```

---

## 🔍 Testing Your SEO

After implementing, test your pages using these tools:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

---

## 📊 Monitoring Performance

Track your SEO performance using:
- **Google Search Console** - Monitor rankings and clicks
- **Google Analytics 4** - Track user behavior
- **Social Media Analytics** - Monitor social engagement

---

**Last Updated**: March 5, 2026  
**Component Location**: `src/components/SEO.tsx`  
**Package Used**: `react-helmet-async`
