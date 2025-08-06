import React from 'react';
import { Search, Palette, Code, TestTube, Rocket, Headphones } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Analysis',
      description: 'We dive deep into your business requirements, analyze market trends, and define project scope.',
      details: ['Requirements gathering', 'Market research', 'Technical feasibility', 'Project roadmap'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      description: 'Creating intuitive user experiences with modern design principles and interactive prototypes.',
      details: ['UI/UX design', 'Wireframing', 'Interactive prototypes', 'Design system'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Building robust, scalable solutions using cutting-edge technologies and best practices.',
      details: ['Agile development', 'Code reviews', 'Version control', 'Documentation'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      description: 'Comprehensive testing to ensure quality, performance, and security standards.',
      details: ['Unit testing', 'Integration testing', 'Performance testing', 'Security audits'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Seamless deployment to production with CI/CD pipelines and monitoring setup.',
      details: ['CI/CD setup', 'Cloud deployment', 'Performance monitoring', 'Security configuration'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and optimization to keep your software running smoothly.',
      details: ['24/7 monitoring', 'Regular updates', 'Performance optimization', 'Technical support'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Development Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center border-2 border-white/20">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color}/20 rounded-2xl group-hover:${step.color}/30 transition-all duration-300`}>
                  <step.icon className={`h-8 w-8 bg-gradient-to-r ${step.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                {step.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${step.color} rounded-full`}></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Typical Timeline: 8-16 weeks</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
              <span className="text-sm text-gray-300">Agile Sprints: 2-week cycles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;