import React from 'react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-[#1a2332]">
      <div className="max-w-[87.5rem] mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
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
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-full mx-auto"></div>
          <p className="text-[#94a3b8] text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit built through 15+ years of hands-on experience in enterprise architecture and digital transformation
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-white text-2xl font-bold mb-8 text-center">
            Technical Proficiencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.technical.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-[#0f1419] border border-[#334155] p-6 rounded-lg hover:border-[#3b82f6] transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <h4 className="text-white text-lg font-bold mb-4 flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-full mr-3 group-hover:animate-pulse"></div>
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-[#1e293b] border border-[#334155] text-[#94a3b8] px-3 py-1 rounded-full text-sm font-medium hover:bg-[#3b82f6] hover:text-white hover:border-[#3b82f6] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0f1419] via-[#1e293b] to-[#0f1419] border border-[#334155] p-8 rounded-lg max-w-3xl mx-auto">
            <h4 className="text-white text-xl font-bold mb-4">
              Ready to Collaborate?
            </h4>
            <p className="text-[#94a3b8] mb-6">
              I'm always excited to work on challenging projects that push the boundaries of technology and business innovation.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] hover:from-[#2563eb] hover:to-[#1e40af] text-white border-none rounded-full px-8 py-3 font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/25 uppercase tracking-tight"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;