import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import projectOneImg from "../assets/project1.png";
import projectTwoImg from "../assets/projec2.png";
import projectThreeImg from "../assets/project3.png";
import projectFour from "../assets/project4.png";
import projectFive from "../assets/project5.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Real-chatRoom-application",
    description:
           "The ChatRoom Website project is a dynamic web application that is used for real-time communication.",
    techStack: "React, Tailwind, Node.js, Express, MongoDB, Socket.io",
    liveLink: "https://chatwalaroomm.netlify.app/",
    githubLink: "https://github.com/Dipeshgithub1/Real-chatRoom-application",
    imageUrls: [projectOneImg, projectTwoImg], // Changed to array, added a placeholder image
  },
  {
    title: "VI-WO (Visual Workspace)",
    description:
"Vi-Wo is an online workspace for innovation that is visually Similar to whiteboards, we have in meeting rooms. All the tools are located on the left side of the screen",
    techStack: "Next.js: 14 , Convex: For backend logic and database interactions • Clerk: For authentication and user management • TailwindCSS: For styling • ShadCN UI: For additional UI components • Liveblocks: For real-time collaboration features 2. APIs and Services • Authentication: Clerk API •  Liveblocks API",
    liveLink: "https://next14-miro.vercel.app/",
    githubLink: "https://github.com/Dipeshgithub1/ViWo-Visual---Workspace",
    imageUrls: [projectTwoImg, projectOneImg], // Changed to array, added a placeholder image
  },
  {
    title: "Notes-App",
    description:
      "Developed Picsearch which allows users to search different types of images using the Unsplash API.",
    techStack: "React, Tailwind",
    liveLink: "https://picsearch-two.vercel.app/",
    githubLink: "https://github.com/Dipeshgithub1/Backend--Development/blob/main/Notes-app",
    imageUrls: [projectThreeImg, projectFour], // Changed to array, added a placeholder image
  },
  {
    title: "Portfolio",
    description:
      "A sleek, professionally crafted portfolio designed to make a lasting impression with a seamless user experience.",
    techStack: "React, Tailwind, Framer Motion",
    liveLink: "https://portfolio-dipesh-ten.vercel.app//",
    githubLink: "https://github.com/Dipeshgithub1/portfolio-dipesh",
    imageUrls: [projectFour, projectFive], // Changed to array, added a placeholder image
  },
  {
    title: "Npmjs",
    description:
      "Built NpmJs Clone which allows to search any library and mentioned the download package",
    techStack: "React, Tailwind",
    liveLink: "https://npmjss.vercel.app/",
    githubLink: "https://github.com/Dipeshgithub1/Backend--Development",
    imageUrls: [projectFive, projectOneImg], // Changed to array, added a placeholder image
  },
  
];

const Projects: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const handleImageChange = (projectIndex: number, newIndex: number) => {
    setCurrentImageIndex((prev) => ({ ...prev, [projectIndex]: newIndex }));
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent, info: any, projectIndex: number) => {
    const dragThreshold = 50; // pixels
    const offset = info.offset.x;

    if (offset < -dragThreshold) {
      // Swiped left
      setCurrentImageIndex((prev) => {
        const currentIndex = prev[projectIndex] || 0;
        const newIndex = (currentIndex + 1) % projects[projectIndex].imageUrls.length;
        return { ...prev, [projectIndex]: newIndex };
      });
    } else if (offset > dragThreshold) {
      // Swiped right
      setCurrentImageIndex((prev) => {
        const currentIndex = prev[projectIndex] || 0;
        const newIndex = (currentIndex - 1 + projects[projectIndex].imageUrls.length) % projects[projectIndex].imageUrls.length;
        return { ...prev, [projectIndex]: newIndex };
      });
    }
  };

  return (
    <motion.section
      id="projects"
      className="py-12 px-4 bg-background text-text dark:bg-dark-background dark:text-dark-text"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary dark:text-dark-primary text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={projectIndex}
              className="flex flex-col rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-card dark:bg-dark-card border border-item dark:border-dark-item hover:border-accent dark:hover:border-accent transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * projectIndex }}
              viewport={{ once: true }}
            >
              {/* Image Carousel / Media */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden group">
                <motion.img
                  src={project.imageUrls[currentImageIndex[projectIndex] || 0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(event, info) => handleDragEnd(event, info, projectIndex)}
                />
                {project.imageUrls.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 p-2 z-10">
                    {project.imageUrls.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleImageChange(projectIndex, idx)}
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${idx === (currentImageIndex[projectIndex] || 0) ? 'bg-primary dark:bg-primary scale-125' : 'bg-gray-300 dark:bg-gray-600'}`}
                      ></button>
                    ))}
                  </div>
                )}
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-secondary dark:text-secondary">
                  {project.title}
                </h3>
                <p className="text-base leading-relaxed mb-4 text-text-secondary dark:text-dark-text-secondary flex-grow">
                  {project.description}
                </p>
                <p className="text-sm font-medium text-text dark:text-dark-text mb-6">
                  <strong className="text-primary dark:text-primary">Tech Stack:</strong> {project.techStack}
                </p>
                {/* Links */}
                <div className="flex flex-col space-y-3 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-primary dark:bg-primary text-white font-semibold px-6 py-3 rounded-full text-center transition duration-300 hover:bg-secondary dark:hover:bg-secondary transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Link
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-item dark:bg-dark-item text-text dark:text-dark-text font-semibold px-6 py-3 rounded-full text-center transition duration-300 hover:bg-card dark:hover:bg-dark-card transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-item focus:ring-opacity-50"
                  >
                    <FaGithub className="mr-2" /> GitHub Link
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
