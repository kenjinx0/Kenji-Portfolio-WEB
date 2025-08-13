import React from 'react';

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  technologies?: string[];
  status?: string;
}

export default function ProjectCard({ title, type, description, technologies, status }: ProjectCardProps) {
  return (
    <div className="group light-text-box dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 dark:border dark:border-gray-700 hover:border-purple-300/60 dark:hover:border-purple-600 hover:-translate-y-1 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <span className="badge-text inline-block px-3 py-1 text-sm text-purple-900 dark:text-purple-300 bg-purple-200/60 dark:bg-purple-900/30 rounded-full border border-purple-300/40 dark:border-purple-700">
          {type}
        </span>
        {status && (
          <span className={`badge-text inline-block px-3 py-1 text-xs rounded-full ${
            status === 'Completed' 
              ? 'text-green-900 dark:text-green-300 bg-green-200/60 dark:bg-green-900/30 border border-green-300/40 dark:border-green-700' 
              : 'text-orange-900 dark:text-orange-300 bg-orange-200/60 dark:bg-orange-900/30 border border-orange-300/40 dark:border-orange-700'
          }`}>
            {status}
          </span>
        )}
      </div>
      
      <h3 className="subheading text-2xl mb-4 group-hover:text-purple-800 dark:group-hover:text-purple-400 transition-colors duration-300 text-gray-900 dark:text-white">
        {title}
      </h3>
      
      <p className="body-text leading-relaxed mb-6 text-gray-800 dark:text-gray-300 flex-grow">
        {description}
      </p>
      
      {technologies && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="badge-text px-3 py-1 text-xs text-gray-800 dark:text-gray-300 bg-gray-200/60 dark:bg-gray-700 rounded-full border border-gray-300/40 dark:border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex space-x-4 mt-auto">
        <button className="button-text button-hover-pop flex-1 px-4 py-2 bg-purple-600 text-white text-sm rounded-lg transition-colors duration-300 shadow-md">
          View Details
        </button>
        <button className="button-text button-hover-pop px-4 py-2 border-2 border-purple-600 text-purple-800 dark:text-purple-400 text-sm rounded-lg transition-all duration-300">
          Live Demo
        </button>
      </div>
      
      <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 dark:via-purple-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}