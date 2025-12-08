import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Brand */}
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold">
              GA
            </div>
            <span className="font-semibold tracking-tight">
              Ghumakkad Aadmi
            </span>
          </a>

          {/* Center: Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#latest" className="hover:text-white transition-colors">
              Vlogs
            </a>
            <a href="#gallery" className="hover:text-white transition-colors">
              Gallery
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Right: Button */}
          <a
            href="#contact"
            className="bg-orange-500 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-400 transition-colors"
          >
            Subscribe / Login
          </a>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1">{children}</main>

      {/* CTA BLOCK – footer ke just upar */}
      <section className="relative bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative -mb-16">
            <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white px-8 py-12 lg:px-16 lg:py-16 shadow-2xl overflow-hidden">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">
                  Ready to explore more?
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                  Watch detailed vlogs & plan your{" "}
                  <span className="text-orange-400">next trip</span>.
                </h2>
                <p className="text-slate-300 mb-6">
                  Before you pack your bags, see real routes, budgets and local
                  experiences from Ghumakkad Aadmi.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#latest"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-slate-100 transition"
                  >
                    🌏 Explore vlogs
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-slate-500 text-slate-100 hover:bg-slate-800 transition"
                  >
                    ✉️ Contact for collab
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="bg-black text-slate-300 pt-24 pb-10"
        id="contact"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[2fr,1fr,1fr,1fr]">
            {/* Brand block */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-sm font-bold">
                  GA
                </div>
                <div className="text-lg font-semibold">Ghumakkad Aadmi</div>
              </div>
              <p className="text-sm text-slate-400 max-w-sm">
                Real Indian travel stories – from gurudwaras and temples to
                street food, hill stations and hidden local spots. Vlogs that
                feel like you're on the trip.
              </p>
            </div>

            {/* Columns */}
            <div className="space-y-3 text-sm">
              <h3 className="font-semibold text-white">Content</h3>
              <ul className="space-y-1 text-slate-400">
                <li>
                  <a href="#latest" className="hover:text-white">
                    Latest vlogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    City guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Temple visits
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 text-sm">
              <h3 className="font-semibold text-white">Connect</h3>
              <ul className="space-y-1 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@ghumakkadaadmi.in"
                    className="hover:text-white"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 text-sm">
              <h3 className="font-semibold text-white">More</h3>
              <ul className="space-y-1 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Work with me
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* bottom row */}
          <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} Ghumakkad Aadmi. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-300">
                Terms
              </a>
              <a href="#" className="hover:text-slate-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeLayout;
