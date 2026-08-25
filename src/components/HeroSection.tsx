import React from 'react';
import heroIllustration from '../assets/Hero Illustration Transparent.png';

export const HeroSection = () => {
  return (
    <section id="home" className="pt-24 md:pt-0 min-h-[100svh] flex items-center overflow-hidden relative bg-[#030303]">
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-[5vw] relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Text Content */}
          <div className="w-full lg:w-[47%] text-center lg:text-left z-10 relative pt-12 pb-16 lg:py-24">


            <h1
              className="mb-8 text-foreground"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",  
                fontWeight: 800,
                lineHeight: 0.88,
                fontSize: "clamp(4rem, 8.5vw, 9.5rem)",
                letterSpacing: "-0.02em"
              }}
            >
              Mohammed<br />
              Ziyan
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              AI Engineer. Builder. Problem solver.
            </p>
          </div>

          {/* Illustration Content */}
          <div className="w-full lg:w-[53%] relative pointer-events-none flex justify-center lg:block mt-8 lg:mt-0">
            <div className="relative w-[115%] -ml-[7.5%] sm:w-[90%] sm:ml-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[2vw] lg:w-[52vw] lg:max-w-[850px] lg:h-[85vh] flex items-center justify-center lg:justify-end">
              <img
                src={heroIllustration}
                alt="Mohammed Ziyan Working"
                className="w-full h-full object-contain object-center lg:object-right opacity-95"
              />
              {/* Bottom fade integration overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#030303] from-0% to-transparent to-[22%]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
