import React from 'react';
import { Project } from '../types'; // Adjust path if needed

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-30 backdrop-blur-md border border-none border-opacity-20 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">

      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-start space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:underline text-sm font-medium"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;