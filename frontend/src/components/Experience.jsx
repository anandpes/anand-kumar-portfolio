import React from 'react';
import { portfolioData } from '../data/mock';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-[#1a1c1b]">
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
            Experience
          </h2>
          <div className="w-20 h-1 bg-[#d9fb06] rounded-full mx-auto"></div>
          <p className="text-[#888680] text-lg mt-6 max-w-2xl mx-auto">
            A journey of innovation, leadership, and technical excellence across enterprise environments
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#3f4816]"></div>

          {experience.map((exp, index) => (
            <div key={exp.id} className={`relative mb-16 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#d9fb06] rounded-full border-4 border-[#1a1c1b]"></div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                <div className="bg-[#302f2c] p-8 rounded-lg border border-[#3f4816] hover:border-[#888680] transition-all duration-300 hover:transform hover:scale-105">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                      <Calendar size={16} className="text-[#d9fb06]" />
                      <span className="text-[#d9fb06] font-medium text-sm uppercase tracking-wide">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-[#d9fb06] text-xl md:text-2xl font-bold mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[#888680] font-medium">
                        {exp.company}
                      </span>
                      <MapPin size={14} className="text-[#888680]" />
                      <span className="text-[#888680] text-sm">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#d9fb06] mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <h4 className="text-[#d9fb06] font-bold mb-4">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-[#d9fb06] mt-1 flex-shrink-0" />
                        <span className="text-[#888680] text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-[#302f2c] p-8 rounded-lg border border-[#3f4816] max-w-3xl mx-auto">
            <h4 className="text-[#d9fb06] text-xl font-bold mb-4">
              Want to Learn More About My Journey?
            </h4>
            <p className="text-[#888680] mb-6">
              I'd be happy to discuss my experience in more detail and how it can benefit your organization.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary bg-[#d9fb06] text-[#1a1c1b] border-none rounded-[10rem] px-8 py-3 font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90 uppercase tracking-tight"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;