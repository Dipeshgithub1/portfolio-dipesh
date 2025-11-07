import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub } from "react-icons/fa";
import profilePic from "../assets/profilePic.png";

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const phrases = ["Full Stack Developer", "Data Analyst"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 150; // Typing speed in ms
    const deleteSpeed = 100; // Deleting speed in ms
    const delayBetweenPhrases = 1000; // Delay before typing next phrase or deleting

    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < phrases[phraseIndex].length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayedText(phrases[phraseIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typeSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayedText(phrases[phraseIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
    } else if (!isDeleting && charIndex === phrases[phraseIndex].length) {
      // Pause at end of typing, then start deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenPhrases);
    } else if (isDeleting && charIndex === 0) {
      // Pause at end of deleting, then start typing next phrase
      timer = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, delayBetweenPhrases / 2); // Shorter delay before typing next
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-background text-text dark:bg-dark-background dark:text-dark-text">
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-6 border-4 border-primary dark:border-primary shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-2 text-text dark:text-dark-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi, I'm <span className="text-primary dark:text-primary">Dipesh</span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-3xl mb-8 text-text-secondary dark:text-dark-text-secondary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        A Passionate{" "}
        <span className="font-bold relative inline-block text-accent dark:text-accent">
          {displayedText}
          <span className="absolute right-0 top-0 bottom-0 w-1 bg-accent dark:bg-accent animate-blink"></span>
        </span>
      </motion.p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <motion.a
          href="https://drive.google.com/file/d/1f4HJCQozbblangGLpc637s3CBw5Wk9FC/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary dark:bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-secondary dark:hover:bg-secondary transition duration-300 w-full md:w-auto transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          View My Resume
        </motion.a>
        <motion.a
          href="https://x.com/Dipeshmehr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-item dark:bg-dark-item text-text dark:text-dark-text font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-card dark:hover:bg-dark-card transition duration-300 flex items-center justify-center w-full md:w-auto transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <FaTwitter className="mr-2" /> X (Twitter)
        </motion.a>
        <motion.a
          href="https://github.com/Dipeshgithub1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-item dark:bg-dark-item text-text dark:text-dark-text font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-card dark:hover:bg-dark-card transition duration-300 flex items-center justify-center w-full md:w-auto transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <FaGithub className="mr-2" /> GitHub
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
