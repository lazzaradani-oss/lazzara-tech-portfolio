import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiChevronDown, HiChevronUp } from 'react-icons/hi';

const ProjectCard = ({ title, problem, solution, value, tags, demoLink, technicalDeepDive, promptStrategy, index = 0 }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

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
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50 whitespace-nowrap border-b-2 border-cyan-300"
              style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
            >
              <HiExternalLink className="text-xl" />
              View Live Logic
            </a>
          )}
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl p-4">
            <h4 className="text-accent-primary font-bold text-sm uppercase tracking-wide mb-2">
              Problem
            </h4>
            <p className="text-slate-100 leading-relaxed">
              {problem}
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl p-4">
            <h4 className="text-accent-secondary font-bold text-sm uppercase tracking-wide mb-2">
              Solution
            </h4>
            <p className="text-slate-100 leading-relaxed">
              {solution}
            </p>
          </div>

          {value && (
            <div className="bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl p-4">
              <h4 className="text-green-600 font-bold text-sm uppercase tracking-wide mb-2">
                Value
              </h4>
              <p className="text-slate-100 leading-relaxed">
                {value}
              </p>
            </div>
          )}
        </div>

        {/* Technical Specs Accordion */}
        {(technicalDeepDive || promptStrategy) && (
          <div className="mb-6">
            <button
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              className="w-full flex items-center justify-between p-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded-xl hover:bg-white/30 transition-colors"
            >
              <span className="text-accent-primary font-semibold text-sm">Technical Specs</span>
              {isAccordionOpen ? (
                <HiChevronUp className="text-accent-primary text-lg" />
              ) : (
                <HiChevronDown className="text-accent-primary text-lg" />
              )}
            </button>
            {isAccordionOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 p-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl"
              >
                <div className="space-y-3">
                  {technicalDeepDive && (
                    <div>
                      <h5 className="text-accent-primary font-bold text-xs uppercase tracking-wide mb-1">
                        Technical Deep Dive
                      </h5>
                      <p className="text-slate-100 text-sm leading-relaxed">
                        {technicalDeepDive}
                      </p>
                    </div>
                  )}
                  {promptStrategy && (
                    <div>
                      <h5 className="text-accent-primary font-bold text-xs uppercase tracking-wide mb-1">
                        Prompt Strategy
                      </h5>
                      <p className="text-slate-100 text-sm leading-relaxed">
                        {promptStrategy}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        )}

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
