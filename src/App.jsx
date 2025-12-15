import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { FloatingHeader } from '@/components/ui/floating-header';
import { Footer } from '@/components/ui/footer-section';

import BlogLandingPage from './BlogLandingPage';
import HomeLayout from './Layout/HomeLayout';
import AboutPage from './pages/About';
import DemoOne from './pages/DemoOne';
import FAQs from './pages/FAQs';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ScrollHeroDemo from './pages/ScrollHeroDemo';
import TermsAndConditions from './pages/TermsAndConditions';
import TestPage from './pages/TestPage';
import Vlogs from './pages/Vlogs';

const About = () => <h2 className="text-2xl text-blue-400">About Page</h2>;

const App = () => {
  return (
    <Router>
      <div className="bg-background relative flex min-h-screen flex-col font-sans text-white antialiased">
        <div className="absolute top-0 z-50 w-full p-4">
          <FloatingHeader />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vlogs" element={<Vlogs />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route
              path="/old-about"
              element={
                <HomeLayout>
                  <About />
                </HomeLayout>
              }
            />
            <Route path="/scroll-hero" element={<ScrollHeroDemo />} />
            <Route path="/demo" element={<DemoOne />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
