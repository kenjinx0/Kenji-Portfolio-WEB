import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-secondary text-4xl md:text-5xl text-center mb-16">
          About Me
        </h2>
        
        <div className="light-text-box dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border-0 dark:border dark:border-gray-700">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="body-text leading-relaxed mb-6 text-gray-800 dark:text-gray-300">
              I'm a dedicated individual pursuing my Bachelor of Computer Applications (BCA) with a specialization in Data Science and Big Data Analysis. 
              My academic journey seamlessly integrates analytical thinking with creative design, enabling me to bridge complex data insights with intuitive user experiences.
            </p>
            
            <p className="body-text leading-relaxed mb-6 text-gray-800 dark:text-gray-300">
              With comprehensive experience in technical analysis and visual design, I excel at crafting innovative solutions that not only address complex challenges but also 
              deliver exceptional user experiences. My methodology involves understanding business requirements, identifying data patterns, and transforming findings 
              into actionable insights through compelling visualizations and strategic design.
            </p>
            
            <p className="body-text leading-relaxed mb-8 text-gray-800 dark:text-gray-300">
              I'm consistently driven to embrace new challenges that expand the possibilities of data science and design innovation. 
              Whether developing predictive models, architecting intuitive dashboards, or designing sophisticated user interfaces, 
              I bring meticulous attention to detail and creative problem-solving to every project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="light-text-box dark:bg-purple-900/20 rounded-xl p-6 border-0 dark:border dark:border-purple-800">
                <h3 className="subheading text-lg mb-2 text-purple-900 dark:text-purple-300">
                  Academic Excellence
                </h3>
                <p className="body-text text-sm text-gray-800 dark:text-gray-300">
                  Specializing in Data Science & Big Data Analysis with comprehensive expertise in modern analytics frameworks and advanced methodologies.
                </p>
              </div>
              
              <div className="light-text-box dark:bg-purple-900/20 rounded-xl p-6 border-0 dark:border dark:border-purple-800">
                <h3 className="subheading text-lg mb-2 text-purple-900 dark:text-purple-300">
                  Design Innovation
                </h3>
                <p className="body-text text-sm text-gray-800 dark:text-gray-300">
                  Merging technical proficiency with creative design expertise to deliver comprehensive digital solutions that exceed user expectations.
                </p>
              </div>
              
              <div className="light-text-box dark:bg-purple-900/20 rounded-xl p-6 border-0 dark:border dark:border-purple-800">
                <h3 className="subheading text-lg mb-2 text-purple-900 dark:text-purple-300">
                  Rapid Delivery
                </h3>
                <p className="body-text text-sm text-gray-800 dark:text-gray-300">
                  Available for immediate project engagement with an unwavering commitment to excellence and timely delivery of high-quality solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}