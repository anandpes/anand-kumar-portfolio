import React, { useState } from 'react';
import { portfolioData } from '../data/mock';
import { ExternalLink, ChevronRight, Filter } from 'lucide-react';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#1a2332]">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-full mx-auto"></div>
          <p className="text-[#94a3b8] text-lg mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions that drive business transformation and technical excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter size={16} className="text-[#94a3b8] mt-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] text-white shadow-lg shadow-[#3b82f6]/25'
                  : 'bg-[#0f1419] border border-[#334155] text-[#94a3b8] hover:border-[#3b82f6] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-[#0f1419] border border-[#334155] rounded-lg overflow-hidden hover:border-[#3b82f6] transition-all duration-300 hover:transform hover:scale-105 group hover:shadow-lg hover:shadow-[#3b82f6]/10"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-[#334155]">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gradient-to-r from-[#1e293b] to-[#334155] text-[#3b82f6] px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide border border-[#334155]">
                    {project.category}
                  </span>
                  <span className="text-[#10b981] text-xs font-medium bg-[#1e293b] border border-[#334155] px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#3b82f6] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-[#334155]">
                <h4 className="text-white text-sm font-bold mb-3 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[#1a2332] border border-[#334155] text-[#94a3b8] px-3 py-1 rounded text-xs font-medium hover:bg-[#3b82f6] hover:text-white hover:border-[#3b82f6] transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="p-6">
                <h4 className="text-white text-sm font-bold mb-3 uppercase tracking-wide">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hlIndex) => (
                    <li key={hlIndex} className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-[#3b82f6] mt-1 flex-shrink-0" />
                      <span className="text-[#94a3b8] text-xs leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Project Link Placeholder */}
                <div className="mt-6 pt-4 border-t border-[#334155]">
                  <button className="flex items-center gap-2 text-[#3b82f6] text-sm font-medium hover:text-[#2563eb] transition-colors group-hover:translate-x-1 transition-transform">
                    <span>View Case Study</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0f1419] via-[#1e293b] to-[#0f1419] border border-[#334155] p-8 rounded-lg max-w-3xl mx-auto">
            <h4 className="text-white text-xl font-bold mb-4">
              Have a Project in Mind?
            </h4>
            <p className="text-[#94a3b8] mb-6">
              I'm always interested in discussing new challenges and opportunities for innovation.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] hover:from-[#2563eb] hover:to-[#1e40af] text-white border-none rounded-full px-8 py-3 font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/25 uppercase tracking-tight"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;