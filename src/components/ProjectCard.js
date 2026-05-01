import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiX, HiCog } from 'react-icons/hi';

const ProjectCard = ({ title, problem, solution, value, tags, demoLink, logicHighlights, index = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
            <div className="flex gap-2">
              {logicHighlights && logicHighlights.length > 0 && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-secondary hover:bg-accent-secondary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  <HiCog className="text-xl" />
                  Workflow Architecture
                </button>
              )}
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

    {/* Modal */}
    {isModalOpen && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">{title} - Workflow Architecture</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <HiX className="text-2xl text-gray-500" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Workflow Screenshot</h3>
                <div className="bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-gray-500 text-center">
                    Workflow screenshot placeholder<br />
                    (Add image here)
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Logic Highlights</h3>
                <ul className="space-y-3">
                  {logicHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
    </>
  );
};

export default ProjectCard;
