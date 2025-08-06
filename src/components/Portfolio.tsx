import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'NeuroVision AI',
      description: 'Advanced computer vision platform for autonomous vehicles',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'AWS'],
      category: 'AI/ML'
    },
    {
      title: 'Quantum Finance',
      description: 'Real-time trading platform with quantum-inspired algorithms',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'GraphQL', 'Docker'],
      category: 'Fintech'
    },
    {
      title: 'MetaSpace VR',
      description: 'Immersive virtual collaboration platform',
      image: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Unity', 'C#', 'WebXR', 'WebRTC'],
      category: 'VR/AR'
    },
    {
      title: 'BioCrypt Health',
      description: 'Secure blockchain-based health data management',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Solidity', 'Web3', 'IPFS', 'React'],
      category: 'Blockchain'
    },
    {
      title: 'IoT Dashboard Pro',
      description: 'Real-time monitoring for smart city infrastructure',
      image: 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'MQTT', 'InfluxDB', 'Grafana'],
      category: 'IoT'
    },
    {
      title: 'CyberShield Security',
      description: 'AI-powered threat detection and response system',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Elasticsearch', 'Kibana', 'ML'],
      category: 'Security'
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative projects that showcase our expertise in emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-500/80 text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={() => window.open('#', '_blank')}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm cursor-pointer">Live Demo</span>
                  </button>
                  <button 
                    onClick={() => window.open('https://github.com', '_blank')}
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm cursor-pointer">Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;