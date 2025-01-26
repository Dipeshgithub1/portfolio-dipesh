import React from "react";
import { motion } from "framer-motion";

const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "TypeScript",
    "Next.js",
  ],
  backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Socket.io",
    "Prisma",
  ],
  tools: ["Git", "GitHub", "Docker", "Vercel", "Postman API", "AWS"],
};

type SkillCategory = typeof skills;

const Skills: React.FC = () => {
  return (
    <motion.section
      id="skills"
      className="bg-gradient-to-bl from-[var(--background-dark)] to-[var(--background-dark)] text-[var(--text-color)] py-8 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-indigo-500 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {(Object.keys(skills) as Array<keyof SkillCategory>).map(
            (category, index) => (
              <motion.div
                key={index}
                className="bg-[var(--card-background-color)] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-indigo-400 capitalize text-center">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {skills[category].map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[var(--item-background-color)] text-[var(--text-color)] px-4 py-2 rounded-full text-center"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
