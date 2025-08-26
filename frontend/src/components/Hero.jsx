import React from 'react';
import { portfolioData } from '../data/mock';
import { ArrowDown, Code, Database, Cloud } from 'lucide-react';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419] min-h-screen flex items-center relative px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] rounded-full opacity-5 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#334155] rounded-full opacity-20"></div>
        
        {/* Tech icons floating */}
        <div className="absolute top-32 right-64 opacity-20 animate-bounce delay-500">
          <Cloud size={32} className="text-[#3b82f6]" />
        </div>
        <div className="absolute bottom-48 left-64 opacity-20 animate-bounce delay-1000">
          <Database size={28} className="text-[#3b82f6]" />
        </div>
        <div className="absolute top-64 left-32 opacity-20 animate-bounce delay-1500">
          <Code size={30} className="text-[#3b82f6]" />
        </div>
      </div>

      <div className="hero-content relative z-10 max-w-[87.5rem] mx-auto w-full">
        <div className="max-w-5xl">
          {/* Greeting with animated typing effect */}
          <div className="mb-6">
            <span className="text-[#94a3b8] text-lg font-medium tracking-wide uppercase animate-fade-in">
              Hello, I'm
            </span>
          </div>

          {/* Name with gradient and animation */}
          <h1 className="hero-title mb-6 leading-tight animate-slide-up">
            <span 
              className="block bg-gradient-to-r from-white via-[#3b82f6] to-white bg-clip-text text-transparent"
              style={{
                fontFamily: "'Inter', Arial, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(4rem, 8vw, 8rem)",
                lineHeight: 0.9,
                textTransform: "uppercase",
                letterSpacing: "-0.02em"
              }}
            >
              {personal.name.split(' ')[0]}
            </span>
            <span 
              className="block bg-gradient-to-r from-[#3b82f6] via-white to-[#3b82f6] bg-clip-text text-transparent"
              style={{
                fontFamily: "'Inter', Arial, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(4rem, 8vw, 8rem)",
                lineHeight: 0.9,
                textTransform: "uppercase",
                letterSpacing: "-0.02em"
              }}
            >
              {personal.name.split(' ')[1]}
            </span>
          </h1>

          {/* Title with professional styling */}
          <div className="mb-8">
            <h2 className="text-[#94a3b8] text-2xl md:text-4xl font-bold mb-2 animate-slide-up delay-300">
              {personal.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-full animate-slide-up delay-500"></div>
          </div>

          {/* Enhanced tagline */}
          <p className="text-white text-lg md:text-xl font-medium mb-12 max-w-3xl leading-relaxed animate-slide-up delay-700">
            {personal.tagline}
          </p>

          {/* Stats/highlights section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up delay-900">
            <div className="bg-[#1a2332] border border-[#334155] rounded-lg p-6 hover:border-[#3b82f6] transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-[#3b82f6] text-3xl font-black mb-2">15+</div>
              <div className="text-white font-medium text-sm">Years Experience</div>
            </div>
            <div className="bg-[#1a2332] border border-[#334155] rounded-lg p-6 hover:border-[#3b82f6] transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-[#3b82f6] text-3xl font-black mb-2">50+</div>
              <div className="text-white font-medium text-sm">Projects Delivered</div>
            </div>
            <div className="bg-[#1a2332] border border-[#334155] rounded-lg p-6 hover:border-[#3b82f6] transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-[#3b82f6] text-3xl font-black mb-2">2M+</div>
              <div className="text-white font-medium text-sm">Daily Transactions</div>
            </div>
          </div>

          {/* Location Badge - updated */}
          <div className="flex items-center gap-4 mb-12 animate-slide-up delay-1100">
            <div className="bg-[#1e293b] border border-[#334155] text-[#3b82f6] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
              📍 {personal.location}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up delay-1300">
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] hover:from-[#2563eb] hover:to-[#1e40af] text-white border-none rounded-full px-8 py-4 font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/25 uppercase tracking-tight min-h-[56px] flex items-center justify-center"
            >
              <span className="mr-2">View My Work</span>
              <ArrowDown size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-transparent text-white border-2 border-[#3b82f6] hover:bg-[#3b82f6] rounded-full px-8 py-4 font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/25 uppercase tracking-tight min-h-[56px] flex items-center justify-center"
            >
              <span className="mr-2">Get in Touch</span>
              <div className="w-2 h-2 bg-[#3b82f6] group-hover:bg-white rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-[#94a3b8] hover:text-[#3b82f6] transition-all duration-300 group"
        >
          <span className="text-sm mb-2 uppercase tracking-wider font-medium">Explore</span>
          <div className="w-6 h-10 border-2 border-[#334155] group-hover:border-[#3b82f6] rounded-full flex justify-center transition-colors">
            <div className="w-1 h-3 bg-[#3b82f6] rounded-full mt-2 animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;