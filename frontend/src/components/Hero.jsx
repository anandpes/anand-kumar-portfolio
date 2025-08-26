import React from 'react';
import { portfolioData } from '../data/mock';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section bg-[#1a1c1b] min-h-screen flex items-center relative px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border border-[#d9fb06] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-[#3f4816] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#888680] rounded-full opacity-30"></div>
      </div>

      <div className="hero-content relative z-10 max-w-[87.5rem] mx-auto w-full">
        <div className="max-w-4xl">
          {/* Greeting */}
          <div className="mb-6">
            <span className="text-[#888680] text-lg font-medium tracking-wide uppercase">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="hero-title font-black text-[#d9fb06] mb-6 leading-[0.76] uppercase tracking-tight">
            <span 
              className="block"
              style={{
                fontFamily: "'PP Right Grotesk', Arial, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(4rem, 5.2571rem + 3.0476vw, 8rem)",
                lineHeight: 0.76,
                textTransform: "uppercase"
              }}
            >
              {personal.name.split(' ')[0]}
            </span>
            <span 
              className="block"
              style={{
                fontFamily: "'PP Right Grotesk', Arial, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(4rem, 5.2571rem + 3.0476vw, 8rem)",
                lineHeight: 0.76,
                textTransform: "uppercase"
              }}
            >
              {personal.name.split(' ')[1]}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-[#888680] text-2xl md:text-3xl font-bold mb-8 max-w-2xl">
            {personal.title}
          </h2>

          {/* Tagline */}
          <p className="text-[#d9fb06] text-lg md:text-xl font-medium mb-12 max-w-3xl leading-relaxed">
            {personal.tagline}
          </p>

          {/* Location Badge */}
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-[#3f4816] text-[#d9fb06] px-4 py-2 rounded-full text-sm font-medium">
              📍 {personal.location}
            </div>
            <div className="bg-[#3f4816] text-[#d9fb06] px-4 py-2 rounded-full text-sm font-medium">
              {personal.visaStatus}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary bg-[#d9fb06] text-[#1a1c1b] border-none rounded-[10rem] px-8 py-4 font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90 uppercase tracking-tight min-h-[48px] flex items-center justify-center"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary bg-transparent text-[#d9fb06] border border-[#d9fb06] rounded-[10rem] px-8 py-4 font-semibold text-base cursor-pointer transition-all duration-300 hover:bg-[#d9fb06] hover:text-[#1a1c1b] hover:scale-105 uppercase tracking-tight min-h-[48px] flex items-center justify-center"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-[#888680] hover:text-[#d9fb06] transition-all duration-300 group"
        >
          <span className="text-sm mb-2 uppercase tracking-wider">Scroll</span>
          <ArrowDown 
            size={20} 
            className="animate-bounce group-hover:text-[#d9fb06]" 
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;