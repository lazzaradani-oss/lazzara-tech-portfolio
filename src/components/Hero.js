import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles, HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/40 backdrop-blur-[24px] border-[1.5px] border-white/60 rounded-full mb-8 shadow-lg"
            style={{ boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)' }}
          >
            <HiSparkles className="text-slate-blue" />
            <span className="text-sm font-semibold text-slate-blue">AI Automation Specialist</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-slate-blue"
            style={{ letterSpacing: '-0.02em' }}
          >
            Danielle Lazzara
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 text-slate-blue"
            style={{ letterSpacing: '-0.02em' }}
          >
            Designing Scalable,
            <span className="text-slate-blue"> AI-Powered </span>
            Workflows
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-slate mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I translate complex business requirements into durable, automated systems using{' '}
            <span className="text-slate-blue font-semibold">Make</span>,{' '}
            <span className="text-slate-blue font-semibold">Zapier</span>, and{' '}
            <span className="text-slate-blue font-semibold">n8n</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-slate-blue hover:bg-slate-blue/90 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/40 backdrop-blur-[24px] border-[1.5px] border-white/60 text-slate-blue rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)' }}
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <HiArrowDown className="text-3xl text-muted-slate" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
