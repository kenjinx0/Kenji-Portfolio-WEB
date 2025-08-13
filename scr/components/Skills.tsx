import { BarChart3, Palette, TestTube, Layers, Zap, PenTool } from 'lucide-react';

const skills = [
  {
    name: 'Data Analytics',
    level: 90,
    icon: BarChart3,
    description: 'Statistical analysis, data visualization, and insights generation'
  },
  {
    name: 'Photoshop',
    level: 85,
    icon: Palette,
    description: 'Photo editing, digital art, and graphic design'
  },
  {
    name: 'Adobe XD',
    level: 80,
    icon: Layers,
    description: 'User interface design and prototyping'
  },
  {
    name: 'Figma',
    level: 88,
    icon: PenTool,
    description: 'Collaborative design and wireframing'
  },
  {
    name: 'A/B Testing',
    level: 75,
    icon: TestTube,
    description: 'Conversion optimization and user behavior analysis'
  },
  {
    name: 'Adobe Illustrator',
    level: 82,
    icon: Zap,
    description: 'Vector graphics and logo design'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-secondary text-4xl md:text-5xl text-center mb-16">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group light-text-box dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 dark:border dark:border-gray-700 hover:border-purple-300/60 dark:hover:border-purple-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="subheading text-lg mb-2 text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="body-text text-sm mb-4 text-gray-700 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
                
                {/* Proficiency Bar */}
                <div className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="badge-text text-sm text-gray-800 dark:text-gray-300">Proficiency</span>
                    <span className="badge-text text-sm font-bold text-purple-800 dark:text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300/60 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full transition-all duration-1000 ease-out shadow-sm"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}