import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useScroll } from 'framer-motion';
import portrait from '../assets/Aboutsection.png';

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // For subtle mouse interaction
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const translateX = useSpring(0, springConfig);
  const translateY = useSpring(0, springConfig);

  useEffect(() => {
    if (isHovered) {
      translateX.set(mousePosition.x * 20); // 20px max translation
      translateY.set(mousePosition.y * 20);
    } else {
      translateX.set(0);
      translateY.set(0);
    }
  }, [mousePosition, isHovered, translateX, translateY]);

  // Subtle scroll parallax for the portrait
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 border-t border-white/5 bg-black relative overflow-hidden" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Background container optimized for the new layout */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-center lg:items-stretch">
          
          {/* RIGHT - ABOUT INFORMATION (Appears first on mobile) */}
          <div className="order-1 lg:order-2 w-full lg:w-[50%] flex flex-col pt-4 lg:pt-24 pb-12 lg:pb-32 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
                About me
              </h2>
            </motion.div>

            <motion.div 
              className="prose prose-invert prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-12">
                I am an AI Engineer and full-stack developer focused on creating scalable web applications and intelligent products. With a strong foundation in both frontend and backend development, I build robust systems that solve real-world problems.
              </p>
            </motion.div>

            {/* INFO ITEMS */}
            <div className="space-y-8 mt-4 border-t border-white/10 pt-10">
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6 items-baseline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-sm font-semibold text-white/40 uppercase tracking-widest">Currently</div>
                <div className="text-white/90 text-lg md:text-xl font-medium">Full-Stack Developer Intern</div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6 items-baseline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-sm font-semibold text-white/40 uppercase tracking-widest">Based in</div>
                <div className="text-white/90 text-lg md:text-xl font-medium">Kerala, India</div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6 items-baseline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-sm font-semibold text-white/40 uppercase tracking-widest">Focus</div>
                <div className="text-white/90 text-lg md:text-xl font-medium">AI Engineering · Intelligent Products · Software</div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6 items-baseline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-sm font-semibold text-white/40 uppercase tracking-widest">Experience</div>
                <div className="text-white/70 text-lg leading-relaxed">
                  Engineered AI-assisted code analysis tools, developed scalable backend APIs managing 5K+ requests, and built responsive, customized platforms utilizing Python, FastAPI, and React.
                </div>
              </motion.div>

            </div>
          </div>

          {/* LEFT - LARGE PORTRAIT (Appears last on mobile) */}
          <motion.div 
            className="order-2 lg:order-1 w-full lg:w-[48%] relative flex justify-start items-end lg:-ml-12 lg:scale-110 transform-gpu z-10"
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setMousePosition({ x: 0, y: 0 });
            }}
          >
            {/* Subtle background glow */}
            <motion.div 
              className="absolute inset-0 bg-white/5 blur-3xl rounded-full mix-blend-screen pointer-events-none" 
              animate={{ opacity: isHovered ? 0.3 : 0.1, scale: isHovered ? 1.05 : 0.95 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Halftone effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none transition-opacity duration-1000 z-0"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px',
                WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
              }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            />
            
            <motion.div
              style={{ x: translateX, y: translateY }}
              className="relative z-10 w-full h-full flex items-end justify-center lg:justify-start"
            >
              <motion.img 
                src={portrait} 
                alt="Mohammed Ziyan" 
                className="w-[90%] md:w-[80%] lg:w-[48vw] h-auto lg:h-[85vh] object-cover object-bottom mix-blend-normal transition-all duration-700"
                style={{ 
                  y: scrollY,
                  // The drop-shadow applies exactly to the transparent silhouette of the image.
                }}
                animate={{
                  filter: isHovered 
                    ? "drop-shadow(0 0 20px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))"
                    : "drop-shadow(0 0 0px rgba(255, 255, 255, 0)) drop-shadow(0 0 0px rgba(255, 255, 255, 0))"
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
