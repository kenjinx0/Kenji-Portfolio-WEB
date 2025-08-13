import React from 'react';
import { MdMail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading-secondary text-4xl md:text-5xl mb-8">
          Let's Work Together
        </h2>
        
        <p className="subheading text-xl mb-16 max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'm available for freelance, contracts and full time opportunities. 
          Let's discuss how we can create something amazing together.
        </p>
        
        <div className="mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-purple-100 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="badge-text text-purple-700 dark:text-purple-300">
              Available for New Projects
            </span>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="group flex items-center justify-center space-x-4 p-6 light-text-box dark:bg-gray-800 rounded-2xl shadow-xl border-0 dark:border dark:border-gray-700 hover:border-purple-300/60 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-2xl">
            <MdMail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <div className="text-left">
              <p className="badge-text text-sm text-gray-700 dark:text-gray-400">Email me directly</p>
              <a
                href="mailto:kjha.business@gmail.com"
                className="subheading text-xl hover:text-purple-800 dark:hover:text-purple-400 transition-colors duration-300 text-gray-900 dark:text-white"
              >
                kjha.business@gmail.com
              </a>
            </div>
          </div>
          
          {/* Response Time Section */}
          <div className="p-3 bg-gray-100/80 dark:bg-gray-800/50 rounded-xl border border-gray-200/60 dark:border-gray-700 backdrop-blur-sm max-w-xs mx-auto">
            <h3 className="subheading text-sm mb-1 text-gray-800 dark:text-white">
              Response Time
            </h3>
            <p className="body-text text-sm text-gray-700 dark:text-gray-300">
              Within 24 hrs.
            </p>
          </div>
          
          {/* Social Links - Icons Only */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/kunal-jha-kenji/"
              className="p-3 bg-gray-100/80 dark:bg-gray-800/50 rounded-full border border-gray-200/60 dark:border-gray-700 hover:border-purple-300/60 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg group"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </a>
            
            <a
              href="https://github.com/kenjinx0"
              className="p-3 bg-gray-100/80 dark:bg-gray-800/50 rounded-full border border-gray-200/60 dark:border-gray-700 hover:border-purple-300/60 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg group"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 text-gray-800 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
            </a>
            
            <a
              href="https://discord.com/users/703615436507578368"
              className="p-3 bg-gray-100/80 dark:bg-gray-800/50 rounded-full border border-gray-200/60 dark:border-gray-700 hover:border-purple-300/60 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg group"
              title="Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}