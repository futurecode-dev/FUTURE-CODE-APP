import React from 'react';
import { Code2, Database, Cloud, Smartphone, Globe, Shield } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      icon: Globe,
      title: 'Frontend Technologies',
      color: 'from-cyan-500 to-blue-500',
      technologies: [
        { name: 'React', level: 95 },
        { name: 'Vue.js', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'Next.js', level: 92 },
        { name: 'TypeScript', level: 94 },
        { name: 'Tailwind CSS', level: 96 }
      ]
    },
    {
      icon: Code2,
      title: 'Backend Technologies',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', level: 95 },
        { name: 'Python', level: 92 },
        { name: 'Java', level: 88 },
        { name: 'Go', level: 85 },
        { name: 'PHP', level: 82 },
        { name: 'C#', level: 87 }
      ]
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'PostgreSQL', level: 93 },
        { name: 'MongoDB', level: 90 },
        { name: 'Redis', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'Elasticsearch', level: 82 },
        { name: 'Firebase', level: 89 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'AWS', level: 94 },
        { name: 'Docker', level: 92 },
        { name: 'Kubernetes', level: 88 },
        { name: 'Azure', level: 85 },
        { name: 'GCP', level: 83 },
        { name: 'Terraform', level: 87 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        { name: 'React Native', level: 93 },
        { name: 'Flutter', level: 90 },
        { name: 'Swift', level: 85 },
        { name: 'Kotlin', level: 87 },
        { name: 'Ionic', level: 82 },
        { name: 'Xamarin', level: 78 }
      ]
    },
    {
      icon: Shield,
      title: 'AI & Emerging Tech',
      color: 'from-teal-500 to-cyan-500',
      technologies: [
        { name: 'TensorFlow', level: 88 },
        { name: 'PyTorch', level: 85 },
        { name: 'Blockchain', level: 82 },
        { name: 'WebRTC', level: 87 },
        { name: 'GraphQL', level: 91 },
        { name: 'WebAssembly', level: 79 }
      ]
    }
  ];

  const tools = [
    'Git', 'GitHub', 'GitLab', 'Jira', 'Slack', 'Figma', 'Adobe XD', 'Postman',
    'Jenkins', 'CircleCI', 'Webpack', 'Vite', 'ESLint', 'Prettier', 'Jest', 'Cypress'
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks we use to build exceptional software solutions
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color}/20 rounded-xl group-hover:${category.color}/30 transition-all duration-300`}>
                  <category.icon className={`h-6 w-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Technologies with Skill Levels */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="group/tech">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                      <span className="text-gray-400 text-xs">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover/tech:animate-pulse`}
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Development Tools */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            Development Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
              <Code2 className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300 text-sm">Technologies Mastered</div>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl mb-4 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
              <Database className="h-8 w-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-300 text-sm">Database Systems</div>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
              <Cloud className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-300 text-sm">Cloud Platforms</div>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl mb-4 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
              <Shield className="h-8 w-8 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300 text-sm">Security Focused</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;