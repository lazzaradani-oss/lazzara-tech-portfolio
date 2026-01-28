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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-slate-blue"
            style={{ letterSpacing: '-0.02em' }}
          >
            Tech Stack
          </h2>
          <p className="text-muted-slate text-lg max-w-2xl mx-auto">
            Tools and platforms I use to build intelligent automation solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="bg-white/40 backdrop-blur-[24px] border-[1.5px] border-white/60 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:border-white/80 transition-all duration-300"
                style={{ boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)' }}
              >
                <div 
                  className="text-6xl transition-all duration-300"
                  style={{ color: tech.color }}
                >
                  <Icon />
                </div>
                <h3 className="text-slate-blue font-semibold text-lg text-center">
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
