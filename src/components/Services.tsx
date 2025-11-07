import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaDatabase, FaServer, FaPalette, FaLaptopCode, FaTag } from "react-icons/fa";

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance, and scalable web applications using modern front-end and back-end technologies.",
    icon: <FaCode className="text-primary dark:text-dark-primary text-4xl mb-4" />,
  },
  {
    title: "Data Analysis",
    description: "Trnsforming raw data into meaningful insights for smarter decision-making.",
    icon: <FaMobileAlt className="text-primary dark:text-dark-primary text-4xl mb-4" />,
  },
  {
    title: "Backend Development",
    description: "Designing and implementing robust server-side logic, APIs, and database solutions for seamless application functionality.",
    icon: <FaServer className="text-primary dark:text-dark-primary text-4xl mb-4" />,
  },
  {
    title: "Database Management",
    description: "Expertise in setting up, optimizing, and managing databases to ensure data integrity and efficient retrieval.",
    icon: <FaDatabase className="text-primary dark:text-dark-primary text-4xl mb-4" />,
  },
  {
    title: "Full Stack Solutions",
    description: "Providing end-to-end development services, covering both front-end and back-end to deliver complete, integrated applications.",
    icon: <FaLaptopCode className="text-primary dark:text-dark-primary text-4xl mb-4" />,
  },
  {
    title: " Data Annotator",
    description: "Experienced in data annotation and labeling for machine learning models, ensuring high-quality and accurate datasets.",
    icon: <FaTag className="text-primary dark:text-dark-primary text-4xl mb-4" />,
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-12 px-4 bg-background text-text dark:bg-dark-background dark:text-dark-text"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary dark:text-dark-primary text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Freelance Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center bg-card dark:bg-dark-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-2 text-secondary dark:text-dark-secondary">
                {service.title}
              </h3>
              <p className="text-text-secondary dark:text-dark-text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 