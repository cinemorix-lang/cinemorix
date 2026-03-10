import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import GraphicsDesign from "./pages/GraphicsDesign";
import ModelingAnimation from "./pages/ModelingAnimation";
import VideoProduction from "./pages/VideoProduction";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import OurClientWork from "./pages/OurClientWork";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const appRoutes = [
  { path: "/", Component: Index },
  { path: "/graphic-design", Component: GraphicsDesign },
  { path: "/3d-animation", Component: ModelingAnimation },
  { path: "/video-production", Component: VideoProduction },
  { path: "/team", Component: Team },
  { path: "/contact", Component: Contact },
  { path: "/client-works", Component: OurClientWork },
] as const;

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// Animated routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        {appRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <PageTransition>
                <Component />
              </PageTransition>
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
