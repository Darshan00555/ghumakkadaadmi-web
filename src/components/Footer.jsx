import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-10 text-slate-300" id="contact">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr,1fr,1fr,1fr]">
          {/* Brand block */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold">
                GA
              </div>
              <div className="text-lg font-semibold">Ghumakkad Aadmi</div>
            </div>
            <p className="max-w-sm text-sm text-slate-400">
              Real Indian travel stories – from gurudwaras and temples to street food, hill stations
              and hidden local spots. Vlogs that feel like you're on the trip.
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
                <a href="mailto:hello@ghumakkadaadmi.in" className="hover:text-white">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="font-semibold text-white">More</h3>
            <ul className="space-y-1 text-slate-400">
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Work with me
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
          <div>© {new Date().getFullYear()} Ghumakkad Aadmi. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-slate-300">
              Terms
            </a>
            <a href="/terms" className="hover:text-slate-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
