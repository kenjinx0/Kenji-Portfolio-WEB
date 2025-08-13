import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Smart Analytics Dashboard',
    type: 'Data Analytics',
    description: 'Interactive dashboard built with Python and Power BI featuring real-time data processing, predictive analytics, and automated reporting. Includes advanced visualizations for business intelligence and KPI tracking.',
    technologies: ['Python', 'Power BI', 'SQL', 'Pandas'],
    status: 'Completed'
  },
  {
    title: 'E-commerce UI Redesign',
    type: 'UI/UX Design',
    description: 'Complete redesign of an e-commerce platform focusing on user experience optimization, accessibility standards, and conversion rate improvement. Includes user research, wireframing, and prototype testing.',
    technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Usability Testing'],
    status: 'In Progress'
  },
  {
    title: 'Customer Behavior Analysis',
    type: 'Data Science',
    description: 'Machine learning project analyzing customer purchasing patterns and predicting future behavior. Implemented clustering algorithms and recommendation systems for personalized marketing strategies.',
    technologies: ['Python', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
    status: 'Completed'
  },
  {
    title: 'Brand Identity System',
    type: 'Graphic Design',
    description: 'Complete brand identity design including logo creation, color palette, typography guidelines, and marketing materials. Delivered comprehensive brand guidelines and asset library.',
    technologies: ['Illustrator', 'Photoshop', 'InDesign', 'Brand Strategy'],
    status: 'Completed'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-secondary text-4xl md:text-5xl text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard
                title={project.title}
                type={project.type}
                description={project.description}
                technologies={project.technologies}
                status={project.status}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="body-text mb-6">
            Want to see more of my work?
          </p>
          <button className="button-text button-hover-pop inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}