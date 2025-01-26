import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.png";

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-[var(--background-color)] text-[var(--text-color)]">
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-6 border-4 border-[var(--border-color)] shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi, I'm <span className="text-indigo-500">Dipesh</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        A Passionate{" "}
        <span className="text-indigo-500">Full Stack Developer</span>
      </motion.p>
      <motion.a
        href="https://drive.google.com/file/d/1f4HJCQozbblangGLpc637s3CBw5Wk9FC/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-600 transition duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        View My Resume
      </motion.a>
    </section>
  );
};

export default Hero;
