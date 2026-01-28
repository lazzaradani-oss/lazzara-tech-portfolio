import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';

const ProjectCard = ({ title, problem, solution, value, tags, demoLink, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
      className="bg-white/20 backdrop-blur-[15px] border border-white/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
    >
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {title}
          </h3>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <HiExternalLink className="text-xl" />
              Live Demo
            </a>
          )}
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl p-4">
            <h4 className="text-accent-primary font-bold text-sm uppercase tracking-wide mb-2">
              Problem
            </h4>
            <p className="text-gray-800 leading-relaxed">
              {problem}
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl p-4">
            <h4 className="text-accent-secondary font-bold text-sm uppercase tracking-wide mb-2">
              Solution
            </h4>
            <p className="text-gray-800 leading-relaxed">
              {solution}
            </p>
          </div>

          {value && (
            <div className="bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl p-4">
              <h4 className="text-green-600 font-bold text-sm uppercase tracking-wide mb-2">
                Value
              </h4>
              <p className="text-gray-800 leading-relaxed">
                {value}
              </p>
            </div>
          )}
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent-primary/10 border border-accent-primary/20 text-accent-primary rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
