import React from 'react';
import { Code, Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="py-12 border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Code className="h-8 w-8 text-cyan-400" />
                <Zap className="h-4 w-4 text-purple-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                FutureCode
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Building tomorrow's software today. We specialize in cutting-edge technologies 
              to transform your business and accelerate digital innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
                <Github className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
                <Twitter className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a href="mailto:hello@futurecode.dev" className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
                <Mail className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">AI & Machine Learning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Mobile Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Web Applications</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Cloud Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 FutureCode. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" data-page="privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" data-page="terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" data-page="cookies" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;