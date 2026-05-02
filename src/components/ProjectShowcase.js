import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { projects } from '../data/projects';

const ProjectShowcase = () => {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (projectId) => {
    setOpenAccordions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white"
            style={{ letterSpacing: '-0.02em' }}
          >
            Featured Projects
          </h2>
          <p className="text-slate-100 text-lg max-w-2xl mx-auto">
            Real-world automation solutions delivering measurable business value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/40 backdrop-blur-[24px] border-[1.5px] border-white/60 rounded-3xl overflow-hidden 
                transition-all duration-300 hover:border-white/80"
              style={{ boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="p-6 md:p-8 h-full flex flex-col">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-white"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {project.title}
                  </h3>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50 whitespace-nowrap text-sm border-b-2 border-cyan-300"
                    style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
                  >
                    <HiExternalLink className="text-lg" />
                    View Live Logic
                  </a>
                </div>

                <div className="space-y-3 mb-4 flex-grow">
                  <div className="bg-white/30 backdrop-blur-[12px] border border-white/50 rounded-2xl p-4">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wide mb-2">
                      Problem
                    </h4>
                    <p className="text-slate-100 leading-relaxed text-sm">
                      {project.problem}
                    </p>
                  </div>

                  <div className="bg-white/30 backdrop-blur-[12px] border border-white/50 rounded-2xl p-4">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wide mb-2">
                      Solution
                    </h4>
                    <p className="text-slate-100 leading-relaxed text-sm">
                      {project.solution}
                    </p>
                  </div>

                  <div className="bg-white/30 backdrop-blur-[12px] border border-white/50 rounded-2xl p-4">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wide mb-2">
                      Value
                    </h4>
                    <p className="text-slate-100 leading-relaxed text-sm">
                      {project.value}
                    </p>
                  </div>
                </div>

                {/* Technical Specs Accordion */}
                <div className="mb-4">
                  <button
                    onClick={() => toggleAccordion(project.id)}
                    className="w-full flex items-center justify-between p-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded-xl hover:bg-white/30 transition-colors"
                  >
                    <span className="text-white font-semibold text-sm">Technical Specs</span>
                    {openAccordions[project.id] ? (
                      <HiChevronUp className="text-white text-lg" />
                    ) : (
                      <HiChevronDown className="text-white text-lg" />
                    )}
                  </button>
                  {openAccordions[project.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 p-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl"
                    >
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-white font-bold text-xs uppercase tracking-wide mb-1">
                            Technical Deep Dive
                          </h5>
                          <p className="text-slate-100 text-sm leading-relaxed">
                            {project.technicalDeepDive}
                          </p>
                        </div>
                        <div>
                          <h5 className="text-white font-bold text-xs uppercase tracking-wide mb-1">
                            Prompt Strategy
                          </h5>
                          <p className="text-slate-100 text-sm leading-relaxed">
                            {project.promptStrategy}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/30 border border-white/50 text-slate-blue rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
