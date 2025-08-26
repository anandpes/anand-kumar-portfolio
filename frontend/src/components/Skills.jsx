import React from 'react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-[#302f2c]">
      <div className="max-w-[87.5rem] mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 
            className="text-[#d9fb06] mb-6"
            style={{
              fontFamily: "'PP Right Grotesk', Arial, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 4rem + 1vw, 5rem)",
              lineHeight: 0.76,
              textTransform: "uppercase",
              letterSpacing: "0px"
            }}
          >
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-[#d9fb06] rounded-full mx-auto"></div>
          <p className="text-[#888680] text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in enterprise architecture and digital transformation
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-[#d9fb06] text-2xl font-bold mb-8 text-center">
            Technical Proficiencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.technical.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-[#1a1c1b] p-6 rounded-lg border border-[#3f4816] hover:border-[#888680] transition-all duration-300 hover:transform hover:scale-105"
              >
                <h4 className="text-[#d9fb06] text-lg font-bold mb-4 flex items-center">
                  <div className="w-3 h-3 bg-[#d9fb06] rounded-full mr-3"></div>
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-[#3f4816] text-[#d9fb06] px-3 py-1 rounded-full text-sm font-medium hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Management Skills */}
        <div>
          <h3 className="text-[#d9fb06] text-2xl font-bold mb-8 text-center">
            Leadership & Management
          </h3>
          <div className="bg-[#1a1c1b] p-8 rounded-lg border border-[#3f4816]">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.management.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-[#302f2c] rounded-lg border border-[#3f4816] hover:border-[#888680] transition-all duration-300 hover:transform hover:translateY(-2px)"
                >
                  <div className="w-2 h-2 bg-[#d9fb06] rounded-full flex-shrink-0"></div>
                  <span className="text-[#d9fb06] font-medium text-sm">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-[#1a1c1b] p-8 rounded-lg border border-[#3f4816] max-w-3xl mx-auto">
            <h4 className="text-[#d9fb06] text-xl font-bold mb-4">
              Ready to Collaborate?
            </h4>
            <p className="text-[#888680] mb-6">
              I'm always excited to work on challenging projects that push the boundaries of technology and business innovation.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary bg-[#d9fb06] text-[#1a1c1b] border-none rounded-[10rem] px-8 py-3 font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90 uppercase tracking-tight"
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