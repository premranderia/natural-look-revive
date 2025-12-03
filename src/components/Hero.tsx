import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Star, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import FloatingIcon from "./FloatingIcon";
import heroImage1 from "@/assets/hero-confidence-1.jpeg";
import heroImage2 from "@/assets/hero-confidence-2.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);

  const images = [heroImage1, heroImage2];
  const benefits = [
    "Undetectable results",
    "Custom designed for you",
    "35+ years of excellence",
    "Natural confidence restored",
  ];

  // Cycle through background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for main headline - full text with loop
  const typewriter = useTypewriter({
    words: ["Confidence. Restored Naturally.", "A New Look. A New You.", "Hair That Matches Your Story", "Hair Loss Ends Here"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delayBetweenWords: 3000,
  });

  // Rotate benefits text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefitIndex((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={image}
              alt="Confident client with natural hair restoration"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
      </div>

      {/* Floating Icons */}
      <FloatingIcon Icon={Scissors} position="top-left" delay={0.2} />
      <FloatingIcon Icon={Star} position="top-right" delay={0.4} />
      <FloatingIcon Icon={Heart} position="bottom-left" delay={0.6} />
      <FloatingIcon Icon={Sparkles} position="bottom-right" delay={0.8} />

      {/* Content - Left Side with Grid Layout */}
      <div className="relative z-10 container-custom h-full flex items-center px-4 md:px-8 lg:px-12">
        <div className="w-full max-w-xl lg:max-w-2xl grid gap-8 md:gap-12">
          {/* Text Section - Fixed dimensions */}
          <div className="min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]">
            {/* Typewriter Headline with space reservation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 md:mb-6 relative"
            >
              {/* Invisible text to reserve full space */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight text-left invisible" aria-hidden="true">
                Confidence. Restored{" "}
                <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
                  Naturally.
                </span>
              </h1>

              {/* Visible typewriter text overlaid on top */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight text-left absolute top-0 left-0">
                {typewriter.text.split("Naturally").map((part, index) => (
                  <span key={index}>
                    {part}
                    {index === 0 && typewriter.text.includes("Naturally") && (
                      <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
                        Naturally
                      </span>
                    )}
                  </span>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1"
                >
                  |
                </motion.span>
              </h1>
            </motion.div>

            {/* Rotating Benefits Text - Fixed Height */}
            <div className="h-8 md:h-10 lg:h-12">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentBenefitIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-base md:text-xl lg:text-2xl text-primary-foreground/90 font-light text-left"
                >
                  {benefits[currentBenefitIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Buttons Section - Separate from text flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Button
                variant="hero"
                size="lg"
                asChild
                className="w-full text-sm md:text-base lg:text-lg px-6 md:px-8 py-4 md:py-6 hover-shadow whitespace-nowrap"
              >
                <Link to="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full text-sm md:text-base lg:text-lg px-6 md:px-8 py-4 md:py-6 bg-white/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-white/20 hover-shadow whitespace-nowrap"
              >
                <Link to="/portfolio">
                  See Real Results
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
