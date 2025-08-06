import React from 'react';
import { Brain, Smartphone, Globe, Zap, Database, Shield, Check, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent systems that learn, adapt, and evolve with your business needs.',
      features: ['Neural Networks', 'Predictive Analytics', 'Computer Vision', 'NLP Processing']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Progressive Web Apps']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern web applications built with cutting-edge frameworks and technologies.',
      features: ['React/Vue/Angular', 'Node.js', 'TypeScript', 'Serverless Architecture']
    },
    {
      icon: Database,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and microservices architecture.',
      features: ['AWS/Azure/GCP', 'Kubernetes', 'Docker', 'CI/CD Pipelines']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.',
      features: ['Penetration Testing', 'Security Audits', 'Compliance', 'Threat Detection']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications optimized for speed and efficiency.',
      features: ['Code Optimization', 'Database Tuning', 'Caching Strategies', 'Load Balancing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$5,000 - $25,000',
      duration: 'per project',
      description: 'Perfect for startups and small businesses looking to establish their digital presence',
      features: [
        'MVP Development',
        'Basic Web/Mobile App',
        'UI/UX Design',
        'Basic Analytics',
        '3 Months Support',
        'Source Code Delivery'
      ],
      popular: false,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderGradient: 'from-cyan-400 to-blue-400'
    },
    {
      name: 'Growth',
      price: '$25,000 - $75,000',
      duration: 'per project',
      description: 'Ideal for growing companies ready to scale their technology infrastructure',
      features: [
        'Full-Stack Development',
        'Advanced Features',
        'API Integration',
        'Database Design',
        'Cloud Deployment',
        '6 Months Support',
        'Performance Optimization',
        'Security Implementation'
      ],
      popular: true,
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderGradient: 'from-purple-400 to-pink-400'
    },
    {
      name: 'Enterprise',
      price: '$75,000+',
      duration: 'per project',
      description: 'Comprehensive solutions for large enterprises with complex requirements',
      features: [
        'Custom Architecture',
        'AI/ML Integration',
        'Microservices',
        'Advanced Security',
        'Scalable Infrastructure',
        '12 Months Support',
        'DevOps & CI/CD',
        'Compliance & Auditing',
        'Dedicated Team',
        '24/7 Monitoring'
      ],
      popular: false,
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderGradient: 'from-green-400 to-emerald-400'
    }
  ];
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-cyan-400/50"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Software Development Pricing
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing for projects of all sizes. Choose the plan that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-purple-400/50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                  <div className="mb-4">
                    <span className={`text-3xl font-bold bg-gradient-to-r ${plan.borderGradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-sm ml-2">{plan.duration}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-400 hover:to-pink-400'
                      : 'border border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Need a custom solution? We offer flexible pricing for unique requirements.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <span>Contact us for a custom quote</span>
              <Zap className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;