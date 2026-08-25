import React from 'react';
import { motion } from 'framer-motion';
import portrait from '../assets/Aboutsection.png';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="-mt-16 md:-mt-24 lg:-mt-[15vh] relative z-20 pt-16 pb-24 md:pt-20 md:pb-32 border-t border-white/5 bg-black overflow-hidden"
    >
      {/* Background container optimized for the new layout */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-center lg:items-start">

          {/* RIGHT - ABOUT INFORMATION (Appears first on mobile) */}
          <div className="order-1 lg:order-2 w-full lg:w-[50%] flex flex-col pt-4 lg:pt-12 pb-12 lg:pb-32 z-20">
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
            className="order-2 lg:order-1 w-full lg:w-[48%] relative flex justify-start items-start lg:-ml-28 lg:scale-110 transform-gpu z-10 lg:pt-0"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative z-10 w-full h-full flex items-start justify-center lg:justify-start">
              <img
                src={portrait}
                alt="Mohammed Ziyan"
                className="w-[90%] md:w-[80%] lg:w-[48vw] h-auto object-contain object-top mix-blend-normal"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
