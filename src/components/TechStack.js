import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data/techStack';

const TechStack = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white"
            style={{ letterSpacing: '-0.02em' }}
          >
            Tech Stack
          </h2>
          <p className="text-slate-100 text-lg max-w-2xl mx-auto">
            Tools and platforms I use to build intelligent automation solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto justify-items-center">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
              className="relative group p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl transition-all duration-300"
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                y: -4,
                transition: { duration: 0.2 },
              }}
              >
              <div className="flex flex-col items-center justify-center transition-all duration-300">
                <Icon className="text-6xl mb-4" style={{ color: tech.color, filter: `drop-shadow(0 0 10px ${tech.color}44)` }} />
              </div>
              <h3 className="text-white font-semibold text-lg text-center">
                {tech.name}
              </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
