import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { experience } from '../data/experience';

const ExperienceTimeline = () => {
  return (
    <section className="py-20">
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
            My Journey
          </h2>
          <p className="text-muted-slate text-lg max-w-2xl mx-auto">
            From logistics and customer care to AI-powered automation specialist
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-blue/40 to-transparent"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex flex-col md:flex-row gap-6 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-slate-blue rounded-full transform -translate-x-1.5 border-4 border-white z-10 shadow-md"></div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                <div className="inline-block px-4 py-1 bg-white/40 backdrop-blur-[24px] border-[1.5px] border-white/60 rounded-full mb-3"
                  style={{ boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)' }}
                >
                  <span className="text-slate-blue font-semibold text-sm">
                    {exp.year}
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tighter text-slate-blue mb-2"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {exp.title}
                </h3>
                <p className="text-slate-blue font-semibold mb-3">
                  {exp.company}
                </p>
                <p className="text-muted-slate mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <ul className={`space-y-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className={`flex items-start gap-2 text-muted-slate ${
                        index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                      }`}
                    >
                      <HiCheckCircle className="text-slate-blue text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
                {exp.link && (
                  <div className={`mt-4 ${index % 2 === 0 ? 'md:flex md:justify-end' : ''}`}>
                    <a
                      href={exp.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-blue hover:bg-slate-blue/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm"
                    >
                      {exp.link.text} →
                    </a>
                  </div>
                )}
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
