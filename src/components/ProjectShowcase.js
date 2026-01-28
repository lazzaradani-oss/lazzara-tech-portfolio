import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { projects } from '../data/projects';

const ProjectShowcase = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-slate-blue"
            style={{ letterSpacing: '-0.02em' }}
          >
            Featured Projects
          </h2>
          <p className="text-muted-slate text-lg max-w-2xl mx-auto">
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
                  <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-slate-blue"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {project.title}
                  </h3>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-blue hover:bg-slate-blue/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm"
                  >
                    <HiExternalLink className="text-lg" />
                    Live Demo
                  </a>
                </div>

                <div className="space-y-3 mb-4 flex-grow">
                  <div className="bg-white/30 backdrop-blur-[12px] border border-white/50 rounded-2xl p-4">
                    <h4 className="text-slate-blue font-bold text-xs uppercase tracking-wide mb-2">
                      Problem
                    </h4>
                    <p className="text-muted-slate leading-relaxed text-sm">
                      {project.problem}
                    </p>
                  </div>

                  <div className="bg-white/30 backdrop-blur-[12px] border border-white/50 rounded-2xl p-4">
                    <h4 className="text-slate-blue font-bold text-xs uppercase tracking-wide mb-2">
                      Solution
                    </h4>
                    <p className="text-muted-slate leading-relaxed text-sm">
                      {project.solution}
                    </p>
                  </div>

                  <div className="bg-white/30 backdrop-blur-[12px] border border-white/50 rounded-2xl p-4">
                    <h4 className="text-slate-blue font-bold text-xs uppercase tracking-wide mb-2">
                      Value
                    </h4>
                    <p className="text-muted-slate leading-relaxed text-sm">
                      {project.value}
                    </p>
                  </div>
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
