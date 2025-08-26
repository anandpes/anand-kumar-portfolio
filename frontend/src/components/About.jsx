import React from 'react';
import { portfolioData } from '../data/mock';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 bg-[#0f1419]">
      <div className="max-w-[87.5rem] mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 
            className="text-white mb-6"
            style={{
              fontFamily: "'Inter', Arial, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 4rem + 1vw, 5rem)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-0.02em"
            }}
          >
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main Content */}
          <div>
            <p className="text-[#94a3b8] text-lg md:text-xl leading-relaxed mb-8 font-medium">
              {about.summary}
            </p>
            
            <div className="bg-[#1a2332] border border-[#334155] p-8 rounded-lg hover:border-[#3b82f6] transition-all duration-300">
              <h3 className="text-white text-xl font-bold mb-6">
                Core Expertise Areas
              </h3>
              <div className="grid gap-4">
                {about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle 
                      size={20} 
                      className="text-[#3b82f6] mt-1 flex-shrink-0" 
                    />
                    <span className="text-[#94a3b8] font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats/Achievement Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1a2332] to-[#1e293b] border border-[#334155] p-6 rounded-lg hover:border-[#3b82f6] transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-[#3b82f6] text-3xl font-black mb-2">10+</div>
              <div className="text-white font-medium">Years of Experience</div>
              <div className="text-[#64748b] text-sm mt-1">In enterprise architecture and data solutions</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1a2332] to-[#1e293b] border border-[#334155] p-6 rounded-lg hover:border-[#3b82f6] transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-[#3b82f6] text-3xl font-black mb-2">50+</div>
              <div className="text-white font-medium">Projects Delivered</div>
              <div className="text-[#64748b] text-sm mt-1">Successful digital transformation initiatives</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1a2332] to-[#1e293b] border border-[#334155] p-6 rounded-lg hover:border-[#3b82f6] transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-[#3b82f6] text-3xl font-black mb-2">2M+</div>
              <div className="text-white font-medium">Daily Transactions</div>
              <div className="text-[#64748b] text-sm mt-1">Handled by payment systems I've architected</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1a2332] to-[#1e293b] border border-[#334155] p-6 rounded-lg hover:border-[#3b82f6] transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-[#3b82f6] text-3xl font-black mb-2">15+</div>
              <div className="text-white font-medium">Teams Led</div>
              <div className="text-[#64748b] text-sm mt-1">Cross-functional development and architecture teams</div>
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#1a2332] via-[#1e293b] to-[#1a2332] border border-[#334155] p-8 rounded-lg max-w-4xl mx-auto">
            <blockquote className="text-white text-xl md:text-2xl font-medium italic mb-4">
              "Innovation isn't just about adopting new technology—it's about transforming how businesses operate and deliver value to their customers."
            </blockquote>
            <cite className="text-[#94a3b8] text-base">— My approach to solutions architecture</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;