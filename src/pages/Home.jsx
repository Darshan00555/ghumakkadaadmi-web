import React from "react";

const Hero = ({ profileImage = "/LOGO.png" }) => {
  return (
    <section className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Travel Vlogs • India
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Explore India{" "}
            <span className="text-orange-400">like a local.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl">
            Temples, food, street walks and off-beat spots. Ghumakkad Aadmi takes you
            on trips that feel real – budgets, chaos and all.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#latest"
              className="inline-flex items-center gap-2 px-5 py-3 bg-orange-400 text-black font-semibold rounded-full shadow hover:scale-[1.01] transition"
            >
              ▶ Watch latest vlog
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-5 py-3 border border-slate-600 text-slate-100 rounded-full hover:bg-slate-900 transition"
            >
              📷 View trip shots
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-4">
            <span>Punjab • Himachal • Delhi • More coming…</span>
          </div>
        </div>

        {/* Right: logo / hero visual */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-2xl">
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-2xl bg-slate-950/50 flex items-center justify-center">
              <img
                src={profileImage}
                alt="Ghumakkad Aadmi"
                className="object-contain w-5/6 h-5/6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionLatest = ({ videos = [] }) => (
  <section id="latest" className="bg-white text-gray-900 py-16">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">Latest Vlogs</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.length ? (
          videos.map((v) => (
            <a
              key={v.id}
              href={v.url}
              className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="aspect-video bg-gray-200">
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{v.excerpt}</p>
              </div>
            </a>
          ))
        ) : (
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden bg-orange-50 border border-orange-100 p-4"
            >
              <div className="aspect-video bg-orange-200 mb-3" />
              <div className="h-6 bg-orange-100 rounded w-3/4 mb-2" />
              <div className="h-4 bg-orange-100 rounded w-1/2" />
            </div>
          ))
        )}
      </div>
    </div>
  </section>
);

const GalleryPreview = () => (
  <section id="gallery" className="bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">Trip Gallery</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          "/images/thumb1.jpg",
          "/images/thumb2.jpg",
          "/images/thumb3.jpg",
          "/images/thumb4.jpg",
          "/images/thumb5.jpg",
          "/images/thumb6.jpg",
        ].map((src, i) => (
          <div key={i} className="h-48 overflow-hidden rounded-xl shadow">
            <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home(props) {
  return (
    <main className="font-sans antialiased bg-gray-950 min-h-screen">
      <Hero profileImage={props.profileImage || "/LOGO.png"} />
      <SectionLatest videos={props.videos || []} />
      <GalleryPreview />
    </main>
  );
}
