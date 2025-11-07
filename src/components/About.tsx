import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 px-4 bg-background text-text dark:bg-dark-background dark:text-dark-text"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-8 text-primary dark:text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed text-text-secondary dark:text-dark-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I’m D!pesh
      I’m a passionate Full Stack Developer with a proven track record of building dynamic,responsive,and user-centric web applications.
      My expertise lies in crafting full-stack solutions using modern technologies and frameworks that not only meet but exceed user expectations.
      I thrive on solving complex problems, collaborating with innovative teams, and bringing ideas to life through clean and efficient code.
      Adaptability and continuous learning are at the core of my approach, allowing me to stay ahead in this ever-evolving tech landscape.
     Got an exciting project in mind? Let’s connect and turn your vision into reality!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
