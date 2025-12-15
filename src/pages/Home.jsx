import React, { useState } from 'react';

import { AnimatedFolder } from '@/components/ui/3d-folder';
import { LeadCapturePage } from '@/components/ui/animated-characters-lead-capture';
import { ArticleCard } from '@/components/ui/blog-post-card';
import { CircularGallery } from '@/components/ui/circular-gallery-2';
import TestimonialsEditorial from '@/components/ui/editorial-testimonial';
import { RatingInteraction } from '@/components/ui/emoji-rating';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const Hero = ({ profileImage = '/LOGO.png' }) => {
  return (
    <section className="bg-gray-950 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-3 py-10 sm:px-6 sm:py-16 md:gap-10 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="space-y-6">
          <p className="text-xs tracking-[0.15em] text-slate-400 uppercase sm:text-sm sm:tracking-[0.2em]">
            Travel Vlogs • India
          </p>
          <h1 className="text-2xl leading-tight font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
            Explore India <span className="text-orange-400">like a local.</span>
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base md:text-lg">
            Temples, food, street walks and off-beat spots. Ghumakkad Aadmi takes you on trips that
            feel real – budgets, chaos and all.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#latest"
              className="inline-flex items-center gap-2 rounded-full bg-orange-400 px-5 py-3 font-semibold text-black shadow transition hover:scale-[1.01]"
            >
              ▶ Watch latest vlog
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-3 text-slate-100 transition hover:bg-slate-900"
            >
              📷 View trip shots
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 text-xs text-slate-400">
            <span>Punjab • Himachal • Delhi • More coming…</span>
          </div>
        </div>

        {/* Right: logo / hero visual */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative flex h-48 w-48 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl sm:h-64 sm:w-64 sm:rounded-3xl md:h-72 md:w-72 lg:h-96 lg:w-96">
            <div className="flex h-40 w-40 items-center justify-center rounded-xl bg-slate-950/50 sm:h-52 sm:w-52 sm:rounded-2xl md:h-56 md:w-56 lg:h-72 lg:w-72">
              <img
                src={profileImage}
                alt="Ghumakkad Aadmi"
                className="h-5/6 w-5/6 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionLatest = ({ videos = [] }) => {
  // Data for the folders
  const latestProjects = videos.length
    ? videos.map((v, index) => ({
        id: v.id || `video-${index}`,
        title: v.title,
        image: v.thumb,
      }))
    : [
        {
          id: '1',
          image: '/images/switzerland-alps.jpg',
          title: 'Switzerland Alps',
        },
        {
          id: '2',
          image: '/images/paris-streets.jpg',
          title: 'Paris Streets',
        },
        {
          id: '3',
          image: '/images/venice-canals.jpg',
          title: 'Venice Canals',
        },
      ];

  const popularProjects = [
    {
      id: 'p1',
      image: '/images/tokyo-nights.jpg',
      title: 'Tokyo Nights',
    },
    {
      id: 'p2',
      image: '/images/kyoto-temples.jpg',
      title: 'Kyoto Temples',
    },
    {
      id: 'p3',
      image: '/images/osaka-food.jpg',
      title: 'Osaka Food',
    },
  ];

  const upcomingProjects = [
    {
      id: 'u1',
      image: '/images/london-calling.jpg',
      title: 'London Calling',
    },
    {
      id: 'u2',
      image: '/images/scottish-highlands.jpg',
      title: 'Scottish Highlands',
    },
    {
      id: 'u3',
      image: '/images/bath-city.jpg',
      title: 'Bath City',
    },
  ];

  return (
    <section
      id="latest"
      className="bg-background text-foreground overflow-hidden py-8 sm:py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-2xl font-bold sm:mb-8 sm:text-3xl md:mb-10">
          Latest Vlogs
        </h2>
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-8 md:gap-12 xl:flex-row">
          {/* Left Folder */}
          <AnimatedFolder title="Popular Series" projects={popularProjects} />

          {/* Center Folder (Main) */}
          <AnimatedFolder
            title="Recent Adventures"
            projects={latestProjects}
            className="z-10 sm:scale-110"
          />

          {/* Right Folder */}
          <AnimatedFolder title="Coming Soon" projects={upcomingProjects} />
        </div>
      </div>
    </section>
  );
};

const galleryItems = [
  {
    image: '/images/taj-mahal.jpg',
    text: 'Taj Mahal',
  },
  {
    image: '/images/goa-beach.jpg',
    text: 'Goa Beach',
  },
  {
    image: '/images/himalayas.jpg',
    text: 'Himalayas',
  },
  {
    image: '/images/mount-abu.jpg',
    text: 'Mount Abu',
  },
  {
    image: '/images/kerala.jpg',
    text: 'Kerala',
  },
  {
    image: '/images/jaipur.jpg',
    text: 'Jaipur',
  },
];

const GalleryPreview = () => {
  return (
    <section id="gallery" className="bg-muted/30 text-foreground py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-0 sm:px-4 lg:px-8">
        <h2 className="mb-4 px-4 text-center text-2xl font-bold sm:mb-6 sm:px-6 sm:text-3xl">
          Trip Gallery
        </h2>
        <div className="bg-card relative mx-auto h-[400px] w-full overflow-hidden rounded-none shadow-inner sm:h-[500px] sm:rounded-xl md:h-[600px]">
          <CircularGallery items={galleryItems} bend={3} borderRadius={0.05} scrollEase={0.05} />
        </div>
      </div>
    </section>
  );
};

const blogPosts = [
  {
    headline: 'Hidden Gems of Himachal',
    excerpt:
      'Discover the untouched valleys and serene villages that often get missed by the regular tourist trail.',
    cover: '/images/himachal-gems.jpg',
    tag: 'Travel',
    readingTime: 300,
    writer: 'Amit Kumar',
    publishedAt: new Date('2024-03-15'),
  },
  {
    headline: 'Street Food of Old Delhi',
    excerpt: 'A culinary journey through the chaotic yet aromatic lanes of Chandni Chowk.',
    cover: '/images/delhi-food.jpg',
    tag: 'Food',
    readingTime: 420,
    writer: 'Priya Singh',
    publishedAt: new Date('2024-03-10'),
  },
  {
    headline: 'Solo Trip to Goa?',
    excerpt:
      'Is Goa safe for solo travelers? Here is my experience and some tips for your first solo adventure.',
    cover: '/images/goa-solo.jpg',
    tag: 'Guide',
    readingTime: 360,
    writer: 'Rohan Das',
    publishedAt: new Date('2024-02-28'),
  },
  {
    headline: 'Temple Architecture of South India',
    excerpt: 'Exploring the intricate carvings and history of the Chola temples in Tamil Nadu.',
    cover: '/images/temple-arch.jpg',
    tag: 'Heritage',
    readingTime: 540,
    writer: 'Anjali Rao',
    publishedAt: new Date('2024-02-15'),
  },
  {
    headline: 'Camping in Ladakh',
    excerpt: 'Under the starry skies of Pangong Lake: A night to remember.',
    cover: '/images/ladakh-camping.jpg',
    tag: 'Adventure',
    readingTime: 480,
    writer: 'Vikram Seth',
    publishedAt: new Date('2024-01-20'),
  },
  {
    headline: 'Banaras: The City of Lights',
    excerpt: 'Witnessing the Ganga Aarti and the spiritual vibe of Varanasi.',
    cover: '/images/banaras.jpg',
    tag: 'Culture',
    readingTime: 390,
    writer: 'Neha Gupta',
    publishedAt: new Date('2024-01-05'),
  },
];

const SectionBlog = () => {
  return (
    <section className="bg-background py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h2 className="text-foreground mb-6 text-center text-2xl font-bold sm:mb-8 sm:text-3xl md:mb-10">
          Travel Stories
        </h2>
        <div className="grid grid-cols-1 justify-items-center gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ArticleCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionRating = () => (
  <section className="border-border bg-background border-t py-8 sm:py-10 md:py-12">
    <div className="mx-auto flex flex-col items-center justify-center gap-4 px-4 sm:gap-6">
      <p className="text-muted-foreground/60 text-center text-xs font-medium tracking-[0.15em] uppercase sm:text-sm sm:tracking-[0.2em]">
        How was your experience?
      </p>
      <RatingInteraction />
    </div>
  </section>
);

export default function Home(props) {
  const [showLeadCapture, setShowLeadCapture] = useState(() => {
    const hasVisited = localStorage.getItem('hasVisited_v1');
    return !hasVisited;
  });

  const handleLeadCaptureComplete = () => {
    localStorage.setItem('hasVisited_v1', 'true');
    setShowLeadCapture(false);
  };

  if (showLeadCapture) {
    return <LeadCapturePage onComplete={handleLeadCaptureComplete} />;
  }

  return (
    <main className="bg-background text-foreground min-h-screen font-sans antialiased">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/videos/hero-intro.mp4"
        posterSrc="/hero-bg.jpg"
        bgImageSrc="/hero-bg.jpg"
        title="Ghumakkad Aadmi"
        date="Travel Vlogs • India"
        scrollToExpand="Scroll to Explore"
        textBlend={true}
      >
        <div className="bg-background -mx-8 w-full md:-mx-16 lg:-mx-0">
          {' '}
          {/* Negative margin to offset container padding if needed, or just let it be center aligned */}
          <SectionLatest videos={props.videos || []} />
          <GalleryPreview />
          <SectionBlog />
          <TestimonialsEditorial />
          <SectionRating />
        </div>
      </ScrollExpandMedia>
    </main>
  );
}
