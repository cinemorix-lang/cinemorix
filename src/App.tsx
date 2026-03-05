import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const queryClient = new QueryClient();

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
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/graphics-design"
          element={
            <PageTransition>
              <GraphicsDesign />
            </PageTransition>
          }
        />
        <Route
          path="/3d-modeling-animation"
          element={
            <PageTransition>
              <ModelingAnimation />
            </PageTransition>
          }
        />
        <Route
          path="/video-production"
          element={
            <PageTransition>
              <VideoProduction />
            </PageTransition>
          }
        />
        <Route
          path="/team"
          element={
            <PageTransition>
              <Team />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/our-client-work"
          element={
            <PageTransition>
              <OurClientWork />
            </PageTransition>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
