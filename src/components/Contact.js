import React from 'react';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-slate-blue"
            style={{ letterSpacing: '-0.02em' }}
          >
            Let's Build Something Great
          </h2>
          <p className="text-muted-slate text-lg mb-12">
            Ready to automate your workflows and scale your business? Let's connect and discuss how I can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="mailto:lazzaradani@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-blue hover:bg-slate-blue/90 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <HiMail className="text-2xl" />
              Send Email
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/danielle-lazzara"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/40 backdrop-blur-[24px] border-[1.5px] border-white/60 hover:border-white/80 text-slate-blue rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
              style={{ boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)' }}
            >
              <FaLinkedin className="text-2xl text-[#0A66C2]" />
              LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com/lazzaradani-oss/lazzaradani-oss"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/40 backdrop-blur-[24px] border-[1.5px] border-white/60 hover:border-white/80 text-slate-blue rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
              style={{ boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)' }}
            >
              <FaGithub className="text-2xl" />
              GitHub
            </motion.a>

            <motion.a
              href="https://dani-lazzara.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/40 backdrop-blur-[24px] border-[1.5px] border-white/60 hover:border-white/80 text-slate-blue rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
              style={{ boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)' }}
            >
              <HiShoppingCart className="text-2xl" />
              Herbal Store
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/30 mt-20 pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-slate">
            <p className="mb-2 font-medium">
              © 2026 Danielle Lazzara. All rights reserved.
            </p>
            <p className="text-sm">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
