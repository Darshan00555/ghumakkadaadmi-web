import React from 'react';
import { Link } from 'react-router-dom';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQs() {
  const faqCategories = [
    {
      category: 'About Ghumakkad Aadmi',
      questions: [
        {
          q: 'Who is Ghumakkad Aadmi?',
          a: "Ghumakkad Aadmi is a travel vlogger who explores India, sharing authentic experiences of temples, food, culture, and hidden gems. The vlogs focus on real, unfiltered travel stories that make you feel like you're on the journey too.",
        },
        {
          q: 'What kind of content do you create?',
          a: 'I create travel vlogs covering diverse topics including temple visits, street food explorations, hill station adventures, cultural experiences, road trips, and local hidden spots across India. Each vlog aims to showcase the authentic beauty and culture of the places I visit.',
        },
        {
          q: 'How often do you upload new videos?',
          a: 'I try to upload new vlogs regularly, typically once or twice a week. The frequency may vary depending on travel schedules and production quality requirements. Subscribe to my YouTube channel and follow on Instagram to get notified about new uploads.',
        },
      ],
    },
    {
      category: 'Travel & Vlogs',
      questions: [
        {
          q: 'Which places have you covered so far?',
          a: "I've covered numerous destinations across India, including famous temples, gurudwaras, hill stations, cities, and off-beat locations. Check out the Gallery and Vlogs sections on this website to see all the places I've visited.",
        },
        {
          q: 'Do you plan your trips or travel spontaneously?',
          a: "It's a mix of both! Some trips are planned in advance, especially when visiting specific festivals or events. However, I also love spontaneous detours and discovering unexpected places along the way, which often lead to the most memorable experiences.",
        },
        {
          q: 'Can you suggest budget travel tips?',
          a: 'Absolutely! I always try to travel on a budget and share practical tips in my vlogs. Key tips include: traveling during off-season, using public transport, staying in budget accommodations, eating at local eateries, and planning in advance. Watch my vlogs for destination-specific budget advice.',
        },
        {
          q: 'What camera equipment do you use?',
          a: 'I use a combination of cameras and equipment to capture the best footage. This typically includes a DSLR/mirrorless camera for main shots, an action camera for POV shots, a smartphone for quick captures, and various accessories like gimbals and microphones. The exact gear may vary depending on the trip.',
        },
      ],
    },
    {
      category: 'Collaborations & Sponsorships',
      questions: [
        {
          q: 'Do you accept brand collaborations?',
          a: "Yes, I'm open to collaborations with brands that align with my content and values. I only promote products or services that I genuinely believe in and that would be valuable to my audience. For collaboration inquiries, please email me at hello@ghumakkadaadmi.in.",
        },
        {
          q: 'Can hotels or tourism boards sponsor your trips?',
          a: "I'm open to partnerships with hotels, resorts, and tourism boards. However, I maintain complete editorial independence and will always provide honest reviews and opinions. If you're interested in a partnership, please reach out via email with your proposal.",
        },
        {
          q: 'Do you offer paid promotions in your videos?',
          a: "I may include sponsored content or paid promotions if they align with my audience's interests and my content style. All sponsored content is clearly disclosed in the video and description, maintaining transparency with my viewers.",
        },
      ],
    },
    {
      category: 'Community & Interaction',
      questions: [
        {
          q: 'How can I suggest a place for you to visit?',
          a: 'I love getting suggestions from my audience! You can suggest places by commenting on my YouTube videos, sending a DM on Instagram, or emailing me at hello@ghumakkadaadmi.in. I read all suggestions and try to incorporate them into my travel plans.',
        },
        {
          q: 'Can I join you on a trip?',
          a: "While I appreciate the enthusiasm, most of my trips are solo or with a small crew to maintain the vlog's authenticity and production quality. However, I occasionally organize meetups or group trips, which I announce on my social media channels.",
        },
        {
          q: 'How do I stay updated with your latest content?',
          a: 'The best way to stay updated is to subscribe to my YouTube channel with notifications on, follow me on Instagram, and check this website regularly. I post updates, behind-the-scenes content, and travel announcements across all platforms.',
        },
      ],
    },
    {
      category: 'Technical & Website',
      questions: [
        {
          q: 'Can I download your videos?',
          a: 'My videos are available for viewing on YouTube. Please do not download or re-upload them without permission, as this violates copyright laws. If you need to use my content for any purpose, please contact me for permission.',
        },
        {
          q: 'How can I use your content on my website or social media?',
          a: "You can share links to my videos or embed them using YouTube's official embed feature. If you want to use clips or screenshots, please contact me for permission and ensure proper attribution. Unauthorized use of content is not permitted.",
        },
        {
          q: 'I found an error on the website. How do I report it?',
          a: "Thank you for helping improve the website! Please email me at hello@ghumakkadaadmi.in with details about the error, including the page URL and a description of the issue. I'll work to fix it as soon as possible.",
        },
      ],
    },
    {
      category: 'Contact & Support',
      questions: [
        {
          q: 'How can I contact you?',
          a: 'You can reach me via email at hello@ghumakkadaadmi.in for business inquiries, collaborations, or general questions. For quick updates and casual interaction, you can also DM me on Instagram or comment on my YouTube videos.',
        },
        {
          q: 'Do you respond to all messages?',
          a: 'I try my best to read and respond to all messages, but due to the volume of messages I receive, it may take some time. For urgent matters or business inquiries, email is the best way to reach me.',
        },
        {
          q: 'Can I send you gifts or fan mail?',
          a: "I appreciate the love and support! For now, I don't have a public mailing address. The best way to show support is by watching, liking, sharing my videos, and engaging with the content. Your support means the world to me!",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-200">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-orange-400 transition-colors hover:text-orange-300"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-400">
            Got questions? We've got answers! Find everything you need to know about Ghumakkad
            Aadmi.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
                <span className="h-8 w-1 rounded-full bg-orange-500"></span>
                {category.category}
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`item-${categoryIndex}-${faqIndex}`}
                    className="rounded-lg border-slate-700 bg-slate-800/30 px-6 transition-colors hover:bg-slate-800/50"
                  >
                    <AccordionTrigger className="text-base text-white hover:text-orange-400">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-slate-300">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 border-t border-slate-800 pt-8">
          <div className="rounded-xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-8 text-center">
            <h3 className="mb-3 text-2xl font-semibold text-white">Still have questions?</h3>
            <p className="mb-6 text-slate-300">
              Can't find the answer you're looking for? Feel free to reach out!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@ghumakkadaadmi.in"
                className="inline-block rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Email Us
              </a>
              <Link
                to="/"
                className="inline-block rounded-lg bg-slate-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-slate-600"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
