import React from "react";
import { motion } from "framer-motion";
import projectOneImg from "../assets/project1.png";
import projectTwoImg from "../assets/projec2.png";
import projectThreeImg from "../assets/project3.png";
import projectFour from "../assets/project4.png";
import projectFive from "../assets/project5.png";
const projects = [
  {
    title: "Real-chatRoom-application",
    description:
           "The ChatRoom Website project is a dynamic web application that is used for real-time communication.",
    techStack: "React, Tailwind, Node.js, Express, MongoDB, Socket.io",
    liveLink: "https://chatwalaroomm.netlify.app/",
    githubLink: "https://github.com/Dipeshgithub1/Real-chatRoom-application",
    imageUrl: projectOneImg,
  },
  {
    title: "VI-WO (Visual Workspace)",
    description:
"Vi-Wo is an online workspace for innovation that is visually Similar to whiteboards, we have in meeting rooms. All the tools are located on the left side of the screen",
    techStack: "Next.js: 14 , Convex: For backend logic and database interactions • Clerk: For authentication and user management • TailwindCSS: For styling • ShadCN UI: For additional UI components • Liveblocks: For real-time collaboration features 2. APIs and Services • Authentication: Clerk API •  Liveblocks API",
    liveLink: "https://next14-miro.vercel.app/",
    githubLink: "https://github.com/Dipeshgithub1/ViWo-Visual---Workspace",
    imageUrl: projectTwoImg,
  },
  {
    title: "Notes-App",
    description:
      "Developed Picsearch which allows users to search different types of images using the Unsplash API.",
    techStack: "React, Tailwind",
    liveLink: "https://picsearch-two.vercel.app/",
    githubLink: "https://github.com/Dipeshgithub1/Backend--Development/blob/main/Notes-app",
    imageUrl: projectThreeImg,
  },
  {
    title: "Portfolio",
    description:
      "A sleek, professionally crafted portfolio designed to make a lasting impression with a seamless user experience.",
    techStack: "React, Tailwind, Framer Motion",
    liveLink: "https://nirbhayportfolio.vercel.app/",
    githubLink: "https://github.com/NirbhaySingh74/portfoio",
    imageUrl: projectFour,
  },
  {
    title: "Npmjs",
    description:
      "Built NpmJs Clone which allows to search any library and mentioned the download package",
    techStack: "React, Tailwind",
    liveLink: "https://npmjss.vercel.app/",
    githubLink: "https://github.com/NirbhaySingh74/npmjs",
    imageUrl: projectFive,
  },
  
];

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="py-12 px-4 bg-[var(--background-color)] text-[var(--text-color)]"
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
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row bg-[var(--card-background-color)] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              {/* Left Side */}
              <div className="p-6 md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-lg mb-4">{project.description}</p>
                <p className="text-lg mb-4 text-gray-400">
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
              </div>
              {/* Right Side */}
              <div className="md:w-1/2 flex flex-col">
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full max-h-80 object-cover transition-transform duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
                {/* Links below the image */}
                <div className="flex flex-col space-y-2 p-6 pb-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-full text-center hover:bg-indigo-600 transition duration-300"
                  >
                    Live Link
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-full text-center hover:bg-gray-600 transition duration-300"
                  >
                    GitHub Link
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
