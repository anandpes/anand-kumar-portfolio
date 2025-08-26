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
    <section id="projects" className="py-24 bg-[#302f2c]">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#d9fb06] rounded-full mx-auto"></div>
          <p className="text-[#888680] text-lg mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions that drive business transformation and technical excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter size={16} className="text-[#888680] mt-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#d9fb06] text-[#1a1c1b]'
                  : 'bg-[#1a1c1b] text-[#d9fb06] border border-[#3f4816] hover:border-[#888680]'
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
              className="bg-[#1a1c1b] rounded-lg border border-[#3f4816] overflow-hidden hover:border-[#888680] transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-[#3f4816]">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#3f4816] text-[#d9fb06] px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-[#d9fb06] text-xs font-medium bg-[#3f4816] px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-[#d9fb06] text-xl font-bold mb-3 group-hover:text-[rgba(217,251,6,0.8)] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[#888680] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-[#3f4816]">
                <h4 className="text-[#d9fb06] text-sm font-bold mb-3 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[#302f2c] text-[#d9fb06] px-3 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="p-6">
                <h4 className="text-[#d9fb06] text-sm font-bold mb-3 uppercase tracking-wide">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hlIndex) => (
                    <li key={hlIndex} className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-[#d9fb06] mt-1 flex-shrink-0" />
                      <span className="text-[#888680] text-xs leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Project Link Placeholder */}
                <div className="mt-6 pt-4 border-t border-[#3f4816]">
                  <button className="flex items-center gap-2 text-[#d9fb06] text-sm font-medium hover:text-[rgba(217,251,6,0.8)] transition-colors group-hover:translate-x-1 transition-transform">
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
          <div className="bg-[#1a1c1b] p-8 rounded-lg border border-[#3f4816] max-w-3xl mx-auto">
            <h4 className="text-[#d9fb06] text-xl font-bold mb-4">
              Have a Project in Mind?
            </h4>
            <p className="text-[#888680] mb-6">
              I'm always interested in discussing new challenges and opportunities for innovation.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary bg-[#d9fb06] text-[#1a1c1b] border-none rounded-[10rem] px-8 py-3 font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90 uppercase tracking-tight"
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