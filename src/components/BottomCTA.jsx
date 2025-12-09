import React from "react";

export default function BottomCTA() {
  return (
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
                Before you pack your bags, see real routes, budgets and local experiences
                from Ghumakkad Aadmi.
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
  );
}
