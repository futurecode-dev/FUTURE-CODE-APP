import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'David Park',
      company: 'TechVentures Inc.',
      position: 'CEO',
      content: 'FutureCode transformed our outdated system into a cutting-edge AI platform. Their expertise in machine learning helped us increase efficiency by 300%.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Lisa Chang',
      company: 'FinanceFlow',
      position: 'CTO',
      content: 'The blockchain solution they built for us revolutionized our payment processing. Secure, fast, and incredibly reliable. Outstanding work!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Roberts',
      company: 'HealthTech Solutions',
      position: 'Founder',
      content: 'Their IoT expertise helped us create a comprehensive patient monitoring system. The real-time analytics have saved countless lives.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-pink-400/30" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed text-center">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-pink-400/30"
                />
                <div className="text-center">
                  <div className="font-bold text-white text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-pink-400 text-sm">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-pink-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;