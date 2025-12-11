import React from 'react';

import { AnimatedFolder } from '@/components/ui/3d-folder';
import { CircularGallery } from '@/components/ui/circular-gallery-2';
import { RatingInteraction } from '@/components/ui/emoji-rating';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const Hero = ({ profileImage = '/LOGO.png' }) => {
  return (
    <section className="bg-gray-950 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="space-y-6">
          <p className="text-sm tracking-[0.2em] text-slate-400 uppercase">Travel Vlogs • India</p>
          <h1 className="text-4xl leading-tight font-extrabold lg:text-5xl">
            Explore India <span className="text-orange-400">like a local.</span>
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
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
          <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl lg:h-96 lg:w-96">
            <div className="flex h-56 w-56 items-center justify-center rounded-2xl bg-slate-950/50 lg:h-72 lg:w-72">
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
          image:
            'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop',
          title: 'Switzerland Alps',
        },
        {
          id: '2',
          image:
            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop',
          title: 'Paris Streets',
        },
        {
          id: '3',
          image:
            'https://images.unsplash.com/photo-1499856831901-ccad28479522?q=80&w=2670&auto=format&fit=crop',
          title: 'Venice Canals',
        },
      ];

  const popularProjects = [
    {
      id: 'p1',
      image:
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2694&auto=format&fit=crop',
      title: 'Tokyo Nights',
    },
    {
      id: 'p2',
      image:
        'https://images.unsplash.com/photo-1528629297340-d1d466945dc5?q=80&w=2675&auto=format&fit=crop',
      title: 'Kyoto Temples',
    },
    {
      id: 'p3',
      image:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop',
      title: 'Osaka Food',
    },
  ];

  const upcomingProjects = [
    {
      id: 'u1',
      image:
        'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2670&auto=format&fit=crop',
      title: 'London Calling',
    },
    {
      id: 'u2',
      image:
        'https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2671&auto=format&fit=crop',
      title: 'Scottish Highlands',
    },
    {
      id: 'u3',
      image:
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop',
      title: 'Bath City',
    },
  ];

  return (
    <section id="latest" className="overflow-hidden bg-white py-16 text-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold">Latest Vlogs</h2>
        <div className="flex flex-col items-center justify-center gap-12 xl:flex-row">
          {/* Left Folder */}
          <AnimatedFolder title="Popular Series" projects={popularProjects} />

          {/* Center Folder (Main) */}
          <AnimatedFolder
            title="Recent Adventures"
            projects={latestProjects}
            className="z-10 scale-110"
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
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
    text: 'Taj Mahal',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
    text: 'Goa Beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop',
    text: 'Himalayas',
  },
  {
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop',
    text: 'Mount Abu',
  },
  {
    image:
      'https://images.unsplash.com/photo-1593696140826-c58b5e6368d6?q=80&w=1000&auto=format&fit=crop',
    text: 'Kerala',
  },
  {
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop',
    text: 'Jaipur',
  },
];

const GalleryPreview = () => {
  return (
    <section id="gallery" className="bg-gray-50 py-16 text-gray-900">
      <div className="mx-auto max-w-7xl px-0 lg:px-8">
        <h2 className="mb-6 px-6 text-center text-3xl font-bold">Trip Gallery</h2>
        <div className="relative h-[600px] w-full overflow-hidden rounded-xl bg-white shadow-inner">
          <CircularGallery items={galleryItems} bend={3} borderRadius={0.05} scrollEase={0.05} />
        </div>
      </div>
    </section>
  );
};

const SectionRating = () => (
  <section className="border-t border-gray-100 bg-white py-12">
    <div className="mx-auto flex flex-col items-center justify-center gap-6">
      <p className="text-muted-foreground/60 text-xs font-medium tracking-[0.2em] uppercase">
        How was your experience?
      </p>
      <RatingInteraction />
    </div>
  </section>
);

export default function Home(props) {
  return (
    <main className="min-h-screen bg-gray-950 font-sans antialiased">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/videos/hero-intro.mp4"
        posterSrc="/hero-bg.png"
        bgImageSrc="/hero-bg.png"
        title="Ghumakkad Aadmi"
        date="Travel Vlogs • India"
        scrollToExpand="Scroll to Explore"
        textBlend={true}
      >
        <div className="-mx-8 w-full bg-white md:-mx-16 lg:-mx-0">
          {' '}
          {/* Negative margin to offset container padding if needed, or just let it be center aligned */}
          <SectionLatest videos={props.videos || []} />
          <GalleryPreview />
          <SectionRating />
        </div>
      </ScrollExpandMedia>
    </main>
  );
}
