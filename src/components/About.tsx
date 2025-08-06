import React from 'react';
import { Users, Award, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '150+', label: 'Projects Delivered', icon: Target },
    { number: '50+', label: 'Expert Developers', icon: Users },
    { number: '25+', label: 'Industry Awards', icon: Award },
    { number: '10+', label: 'Years of Innovation', icon: Lightbulb }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'AI/ML, Cloud Architecture'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Lead Frontend Architect',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'React, Vue.js, UX Design'
    },
    {
      name: 'Marcus Johnson',
      role: 'Cybersecurity Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'Penetration Testing, DevSecOps'
    },
    {
      name: 'Dr. Emily Zhang',
      role: 'Data Science Lead',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'Machine Learning, Analytics'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl mb-4 group-hover:from-green-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                About FutureCode
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We are a team of visionary developers, designers, and innovators who believe in pushing the boundaries of what's possible with technology.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our mission is to transform ideas into powerful digital solutions that drive business growth and create meaningful user experiences. We specialize in emerging technologies like AI, blockchain, IoT, and extended reality to build the software of tomorrow.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Cutting-edge technology stack</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Agile development methodology</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">24/7 support and maintenance</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-white mb-2">Discovery & Strategy</h4>
                  <p className="text-gray-300 text-sm">Understanding your vision and crafting the perfect roadmap</p>
                </div>
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h4 className="font-semibold text-white mb-2">Design & Prototyping</h4>
                  <p className="text-gray-300 text-sm">Creating intuitive experiences with cutting-edge design</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-white mb-2">Development & Testing</h4>
                  <p className="text-gray-300 text-sm">Building robust solutions with rigorous quality assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Meet Our Team</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Industry experts and innovators working together to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-green-400 to-cyan-400"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-cyan-400/20 group-hover:from-green-400/30 group-hover:to-cyan-400/30 transition-all duration-300"></div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
              <p className="text-green-400 text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;