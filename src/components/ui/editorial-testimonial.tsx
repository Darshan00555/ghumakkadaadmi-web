'use client';

import { useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'The attention to detail and creative vision transformed our brand identity completely.',
    author: 'Sarah Chen',
    role: 'Creative Director',
    company: 'Studio Forma',
    image:
      'https://plus.unsplash.com/premium_photo-1689551671548-79ff30459d2a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D$0',
  },
  {
    id: 2,
    quote: 'Working with them felt like a true creative partnership from day one.',
    author: 'Marcus Webb',
    role: 'Head of Design',
    company: 'Minimal Co',
    image:
      'https://images.unsplash.com/photo-1649123245135-4db6ead931b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D$0',
  },
  {
    id: 3,
    quote: 'They understand that great design is invisible yet unforgettable.',
    author: 'Elena Voss',
    role: 'Art Director',
    company: 'Pixel & Co',
    image:
      'https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D$0',
  },
];

export default function TestimonialsEditorial() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleChange = (index: number) => {
    if (index === active || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handlePrev = () => {
    const newIndex = active === 0 ? testimonials.length - 1 : active - 1;
    handleChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = active === testimonials.length - 1 ? 0 : active + 1;
    handleChange(newIndex);
  };

  const current = testimonials[active];

  return (
    <div className="mx-auto w-full max-w-2xl px-2 py-8 sm:px-6 sm:py-12 md:py-16">
      {/* Large index number */}
      <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
        <span
          className="text-foreground/10 text-[60px] leading-none font-light transition-all duration-500 select-none sm:text-[80px] md:text-[100px] lg:text-[120px]"
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          {String(active + 1).padStart(2, '0')}
        </span>

        <div className="flex-1 pt-2 sm:pt-4 md:pt-6">
          {/* Quote */}
          <blockquote
            className={`text-foreground text-lg leading-relaxed font-light tracking-tight transition-all duration-300 sm:text-xl md:text-2xl lg:text-3xl ${
              isTransitioning ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            {current.quote}
          </blockquote>

          {/* Author info with hover reveal */}
          <div
            className={`group mt-10 cursor-default transition-all delay-100 duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="ring-foreground/10 group-hover:ring-foreground/30 relative h-12 w-12 overflow-hidden rounded-full ring-2 transition-all duration-300">
                <img
                  src={current.image || '/placeholder.svg'}
                  alt={current.author}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <div>
                <p className="text-foreground font-medium">{current.author}</p>
                <p className="text-muted-foreground text-sm">
                  {current.role}
                  <span className="text-foreground/20 mx-2">/</span>
                  <span className="group-hover:text-foreground transition-colors duration-300">
                    {current.company}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - vertical line selector */}
      <div className="mt-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleChange(index)}
                className="group relative py-4"
              >
                <span
                  className={`block h-px transition-all duration-500 ease-out ${
                    index === active
                      ? 'bg-foreground w-12'
                      : 'bg-foreground/20 group-hover:bg-foreground/40 w-6 group-hover:w-8'
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            className="text-foreground/40 hover:text-foreground hover:bg-foreground/5 rounded-full p-2 transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="text-foreground/40 hover:text-foreground hover:bg-foreground/5 rounded-full p-2 transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
