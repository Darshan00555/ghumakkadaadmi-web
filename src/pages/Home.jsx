import React from 'react';

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

const SectionLatest = ({ videos = [] }) => (
  <section id="latest" className="bg-white py-16 text-gray-900">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <h2 className="mb-6 text-3xl font-bold">Latest Vlogs</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.length
          ? videos.map((v) => (
              <a
                key={v.id}
                href={v.url}
                className="group block overflow-hidden rounded-lg shadow transition hover:shadow-lg"
              >
                <div className="aspect-video bg-gray-200">
                  <img
                    src={v.thumb}
                    alt={v.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="bg-white p-4">
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{v.excerpt}</p>
                </div>
              </a>
            ))
          : Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-orange-100 bg-orange-50 p-4"
              >
                <div className="mb-3 aspect-video bg-orange-200" />
                <div className="mb-2 h-6 w-3/4 rounded bg-orange-100" />
                <div className="h-4 w-1/2 rounded bg-orange-100" />
              </div>
            ))}
      </div>
    </div>
  </section>
);

const GalleryPreview = () => (
  <section id="gallery" className="bg-gray-50 py-16">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <h2 className="mb-6 text-3xl font-bold">Trip Gallery</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {[
          '/images/thumb1.jpg',
          '/images/thumb2.jpg',
          '/images/thumb3.jpg',
          '/images/thumb4.jpg',
          '/images/thumb5.jpg',
          '/images/thumb6.jpg',
        ].map((src, i) => (
          <div key={i} className="h-48 overflow-hidden rounded-xl shadow">
            <img src={src} alt={`thumb-${i}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
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
        <div className="-mx-8 w-full md:-mx-16 lg:-mx-0">
          {' '}
          {/* Negative margin to offset container padding if needed, or just let it be center aligned */}
          <SectionLatest videos={props.videos || []} />
          <GalleryPreview />
        </div>
      </ScrollExpandMedia>
    </main>
  );
}
