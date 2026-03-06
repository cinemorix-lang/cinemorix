import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Graphics Design", href: "/graphic-design" },
  { label: "3D & Animation", href: "/3d-animation" },
  { label: "Video Production", href: "/video-production" },
  { label: "Our Client Work", href: "/client-works" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
  setIsOpen(false);
  window.scrollTo({
    top: 0,
    behavior: "smooth", // remove "smooth" if you want instant scroll
  });
}, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = "hidden";
      
      // Reset mobile menu scroll position to top
      if (mobileMenuRef.current) {
        mobileMenuRef.current.scrollTop = 0;
      }
    } else {
      // Restore body scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup: restore scroll on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-foreground relative group"
          style={{ fontFamily: '"Minal", "Space Grotesk", sans-serif' }}
        >
          CINE
          <motion.span
            className="text-primary"
            animate={{
              textShadow: isScrolled
                ? "none"
                : [
                    "0 0 10px hsl(156 33% 72% / 0.3)",
                    "0 0 20px hsl(156 33% 72% / 0.5)",
                    "0 0 10px hsl(156 33% 72% / 0.3)",
                  ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            MORIX
          </motion.span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, -1).map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {/* Underline animation */}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary transform origin-left transition-transform duration-300 ${
                    location.pathname === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          ))}
          <li className="ml-4">
            <Link
              to="/contact"
              className="bg-gradient-mint text-primary-foreground px-6 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(156_33%_72%/0.3)]"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu - slide in panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[300px] bg-card border-l border-border lg:hidden overflow-y-auto z-50"
            >
              <div className="p-6 pt-20">
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                          location.pathname === link.href
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Social links in mobile menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-border"
                >
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {["Instagram", "Twitter", "YouTube"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="px-4 py-2 rounded-md border border-border text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
