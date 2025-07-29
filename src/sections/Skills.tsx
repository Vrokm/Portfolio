import React from 'react';
import { skills } from '../data/portfolioData'; // Adjust path if needed
// Optional: Install react-icons if you want icons: npm install react-icons
// import { FaReact, FaNodeJs } from 'react-icons/fa'; // Example

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md shadow-sm text-gray-700 dark:text-gray-200 font-medium flex items-center space-x-2"
            >
              {/* Optional: Add icon here if you defined one */}
              {/* {skill.icon && <span className="text-xl">{skill.icon}</span>} */}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;