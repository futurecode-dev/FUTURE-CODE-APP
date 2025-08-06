import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';

type PageType = 'home' | 'privacy' | 'terms' | 'cookies';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      
      // Handle legal page links
      if (target.getAttribute('data-page')) {
        e.preventDefault();
        const page = target.getAttribute('data-page') as PageType;
        setCurrentPage(page);
        window.scrollTo(0, 0);
        return;
      }
      
      if (target.hash && currentPage === 'home') {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, [currentPage]);

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={handleBackToHome} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={handleBackToHome} />;
  }

  if (currentPage === 'cookies') {
    return <CookiePolicy onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 pointer-events-none"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <Process />
        <TechStack />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;