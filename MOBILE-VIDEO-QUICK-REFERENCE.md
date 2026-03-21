# Quick Reference: Mobile Video Implementation

## Key Changes Made

### 1. Video Tag Attributes (CRITICAL)
```tsx
<video
  src={url}
  controls         // ✅ Always include
  autoPlay         // ✅ Start playing
  muted            // ✅✅✅ REQUIRED for autoplay on mobile
  playsInline      // ✅ Stay in-page on iOS
  preload="metadata"  // ✅ Fast loading
/>
```

### 2. Responsive Video Classes
```tsx
// Mobile: 60vh, Tablet: 75vh, Desktop: 88vh
className="max-h-[60vh] sm:max-h-[75vh] lg:max-h-[88vh]"

// Always use object-contain (no stretching)
className="object-contain"

// Full width/height
className="w-full h-full"
```

### 3. Modal Responsive Structure
```tsx
// Modal container
className="fixed inset-0 z-[999] bg-black/70 p-2 sm:p-4 overflow-y-auto"

// Grid: single column on mobile, two on desktop
className="grid grid-cols-1 lg:grid-cols-2"

// Video container responsive height
className="min-h-[280px] sm:min-h-[360px] lg:min-h-[620px]"
```

---

## Breakpoint Reference

| Breakpoint | Screen Width | Use Case |
|-----------|--------------|----------|
| Mobile (default) | < 640px | Phones |
| `sm:` | ≥ 640px | Large phones |
| `md:` | ≥ 768px | Tablets |
| `lg:` | ≥ 1024px | Desktop |
| `xl:` | ≥ 1280px | Large desktop |

---

## Common Responsive Patterns Used

```tsx
// Size scaling
w-10 sm:w-12 lg:w-16          // Responsive widths
h-[280px] sm:h-[360px] lg:h-[600px]  // Responsive heights

// Padding/margins
p-2 sm:p-4 lg:p-8             // Spacing increases on larger screens
mb-3 sm:mb-4 lg:mb-6          // Responsive vertical margins

// Layout
grid-cols-1 lg:grid-cols-2    // Stack on mobile, side-by-side on desktop
flex-col lg:flex-row          // Column layout on mobile, row on desktop

// Text
text-sm sm:text-base lg:text-lg  // Responsive text sizes
```

---

## Mobile Testing Checklist

### Quick Tests
- [ ] Video plays on tap
- [ ] Play button visible
- [ ] Volume control works
- [ ] Fullscreen works
- [ ] Can close modal
- [ ] No horizontal scroll
- [ ] Scroll down to see all content
- [ ] Buttons are 44px+ (finger-size)
- [ ] Text is readable (not too small)
- [ ] Video keeps aspect ratio

### Screen Sizes to Test
```
iPhone SE (375px)      // Small phone
iPhone 12 (390px)      // Standard phone  
iPhone 12 Max (430px)  // Large phone
iPad (768px)           // Tablet
iPad Pro (1024px)      // Large tablet
```

---

## CSS Video Utilities (in index.css)

```css
.video-responsive {
  @apply w-full h-full object-contain;
}

video::-webkit-media-controls {
  @apply z-10;  /* Ensures controls stay on top */
}
```

---

## Troubleshooting Guide

| Problem | Solution |
|---------|----------|
| **Video won't autoplay on mobile** | Add `muted` attribute |
| **Video looks zoomed/stretched** | Use `object-contain` |
| **Controls are hard to tap** | Ensure buttons are 44px+ |
| **Layout breaks on mobile** | Use responsive classes |
| **Modal overflow on small screen** | Add `overflow-y-auto` |
| **Text too small on phone** | Use responsive text sizes |

---

## Important Notes for Future Development

1. **Always include `muted` with `autoPlay`** on mobile
2. **Test on real devices** - emulators can miss issues
3. **Use `object-contain`** to preserve video aspect ratio
4. **Test both portrait and landscape** orientations
5. **Remember `playsInline`** for iOS (prevents fullscreen takeover)
6. **Set `preload="metadata"`** for better performance
7. **Ensure all videos use HTTPS** (not HTTP)
8. **Add `focus:ring-2` to buttons** for accessibility
9. **Use `aria-label` on interactive elements**
10. **Test with slow network** (throttle in DevTools)

---

## Responsive Class Patterns

### For Navigation Buttons
```tsx
// Small padding on mobile, larger on desktop
className="p-2 sm:p-3 lg:p-4"

// Small icons on mobile, larger on desktop  
className="w-4 sm:w-5 lg:w-6"

// Responsive gaps between elements
className="gap-1 sm:gap-2 lg:gap-3"
```

### For Text Content
```tsx
// Responsive font sizes
className="text-xs sm:text-sm lg:text-base"

// Responsive line height (readability)
className="leading-5 sm:leading-6 lg:leading-7"

// Responsive margins
className="mb-2 sm:mb-3 lg:mb-4"
```

### For Containers
```tsx
// Responsive padding
className="p-2 sm:p-4 lg:p-8"

// Responsive border radius
className="rounded-lg sm:rounded-xl lg:rounded-2xl"

// Responsive max-width
className="max-w-sm sm:max-w-md lg:max-w-4xl"
```

---

## Performance Tips

1. **Use `preload="metadata"`** (not `"auto"`)
   - Loads faster
   - Reduces bandwidth

2. **Muted autoplay**
   - Autoplay often requires muting
   - User can unmute manually

3. **Lazy load video modals**
   - Don't render until clicked
   - Already implemented ✅

4. **Use CDN for videos** (Cloudinary)
   - Already configured ✅
   - Ensures fast delivery

---

## Accessibility Improvements

```tsx
// Add aria-labels
aria-label="Play video"
aria-label="Next video"
aria-label="Close media viewer"

// Focus states for keyboard navigation
className="focus:outline-none focus:ring-2 focus:ring-primary"

// Semantic buttons instead of divs
<button onClick={handlePlay}>...</button>
```

---

## Device-Specific Notes

### iOS (iPhone/iPad)
- ✅ Use `playsInline` to prevent fullscreen takeover
- ✅ `muted` required for autoplay
- ✅ Older iOS might not support all codecs
- ⚠️ Always provide H.264 codec (MP4)

### Android
- ✅ Generally supports all modern codecs
- ✅ Chrome, Firefox, Edge work well
- ✅ Default browser varies by manufacturer
- ⚠️ Test with multiple Android versions

### Desktop
- ✅ All attributes work fine
- ✅ Fullscreen always available
- ✅ Video codecs well supported
- ✅ Use for testing but verify on mobile

---

## Code Review Checklist

Before deploying:

- [ ] Video has `muted` + `autoPlay`
- [ ] Video has `playsInline` for iOS
- [ ] `preload="metadata"` is set
- [ ] Container is responsive (`max-h-[60vh] sm:...`)
- [ ] Buttons are at least 44px
- [ ] Modal scrolls on small screens
- [ ] Grid breaks to single column on mobile
- [ ] Text scales responsively
- [ ] All buttons have `aria-label`
- [ ] Focus states are visible
- [ ] No console errors
- [ ] Works in landscape mode
- [ ] Works with network throttling

---

**Reference Date**: March 21, 2026
