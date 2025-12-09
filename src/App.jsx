import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FloatingHeader } from '@/components/ui/floating-header';
import { Footer } from '@/components/ui/footer-section';

import BlogLandingPage from './BlogLandingPage';
import HomeLayout from './Layout/HomeLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DemoOne from './pages/DemoOne';
import ScrollHeroDemo from './pages/ScrollHeroDemo';
import Gallery from './pages/Gallery';
import AboutPage from './pages/About';
import Vlogs from './pages/Vlogs';


const About = () => <h2 className="text-2xl text-blue-400">About Page</h2>;

const App = () => {
  return (
    <Router>
      <div className="relative font-sans antialiased text-white bg-background min-h-screen flex flex-col">
        <div className="absolute top-0 w-full z-50 p-4">
          <FloatingHeader />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vlogs" element={<Vlogs />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

