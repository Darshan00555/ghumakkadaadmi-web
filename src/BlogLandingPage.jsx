import React, { useEffect, useState } from 'react';

import {
  ArrowRight,
  Briefcase,
  Calendar,
  Camera,
  Check,
  ChevronRight,
  Clock,
  Code,
  Coffee,
  Facebook,
  Globe,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Search,
  Star,
  TrendingUp,
  Twitter,
  User,
  X,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                               Data Constants                               */
/* -------------------------------------------------------------------------- */

const FEATURED_POSTS = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    excerpt:
      'Exploring how artificial intelligence is reshaping the way we build and interact with the web.',
    category: 'Technology',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    author: {
      name: 'Alex Chen',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    },
    date: 'Dec 12, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Mastering Minimalist Design',
    excerpt: 'Why less is more: A deep dive into the principles of minimalist UI/UX design.',
    category: 'Design',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    author: {
      name: 'Sarah Miller',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    },
    date: 'Dec 10, 2024',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Remote Work: A New Era',
    excerpt:
      'Tips and strategies for staying productive and maintaining work-life balance from home.',
    category: 'Lifestyle',
    image:
      'https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&q=80&w=800',
    author: {
      name: 'Mike Ross',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    },
    date: 'Dec 08, 2024',
    readTime: '6 min read',
  },
];

const CATEGORIES = [
  { name: 'Technology', count: 120, icon: Code, color: 'text-blue-500' },
  { name: 'Lifestyle', count: 85, icon: Coffee, color: 'text-pink-500' },
  { name: 'Travel', count: 54, icon: Globe, color: 'text-green-500' },
  { name: 'Photography', count: 42, icon: Camera, color: 'text-purple-500' },
  { name: 'Business', count: 30, icon: Briefcase, color: 'text-amber-500' },
  { name: 'Design', count: 95, icon: TrendingUp, color: 'text-cyan-500' },
];

const STATS = [
  { label: 'Total Readers', value: 50000, suffix: '+' },
  { label: 'Articles Published', value: 1200, suffix: '' },
  { label: 'Active Writers', value: 45, suffix: '' },
  { label: 'Countries Reached', value: 85, suffix: '' },
];

const LATEST_ARTICLES = [
  {
    id: 101,
    title: 'Understanding React Server Components',
    excerpt: 'A comprehensive guide to the next major shift in React development.',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    date: 'Dec 14, 2024',
    category: 'Dev',
  },
  {
    id: 102,
    title: '10 Best Coffee Shops for Digital Nomads',
    excerpt: 'Work from anywhere in style with our curated list of coffee havens.',
    image:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800',
    date: 'Dec 13, 2024',
    category: 'Lifestyle',
  },
  {
    id: 103,
    title: 'The Art of Street Photography',
    excerpt: 'Capturing the soul of the city: Techniques for better street shots.',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    date: 'Dec 12, 2024',
    category: 'Photography',
  },
  {
    id: 104,
    title: 'Sustainable Living Guide 2025',
    excerpt: 'Small changes you can make today for a greener tomorrow.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    date: 'Dec 11, 2024',
    category: 'Green',
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Emily Watson',
    role: 'Senior Developer',
    quote: "The best tech blog I've come across. The articles are in-depth and truly insightful.",
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 2,
    name: 'James Carter',
    role: 'Digital Nomad',
    quote: "I love the lifestyle section. It's my go-to for travel tips and workspace inspiration.",
    avatar:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 3,
    name: 'Sofia Rodriguez',
    role: 'Photographer',
    quote: 'Stunning visuals and great photography tips. A feast for the eyes!',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
  },
];

/* -------------------------------------------------------------------------- */
/*                            Atomic Components                               */
/* -------------------------------------------------------------------------- */

const Badge = ({ children, className }) => (
  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${className}`}>{children}</span>
);

const SectionHeading = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="mb-4 inline-block bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
      {title}
    </h2>
    {subtitle && <p className="mx-auto max-w-2xl text-lg text-gray-400">{subtitle}</p>}
  </div>
);

const AnimatedCounter = ({ end, duration = 2000, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(end * percentage);

      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* -------------------------------------------------------------------------- */
/*                            Section Components                              */
/* -------------------------------------------------------------------------- */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-white/10 bg-gray-900/80 py-4 shadow-lg backdrop-blur-xl' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="group text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-500 group-hover:to-purple-500">
            Ghumakkad
          </span>
          <span className="text-white">Aadmi</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-8 md:flex">
          {['Home', 'Articles', 'Categories', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-gray-300 transition-all hover:scale-105 hover:text-white"
            >
              {item}
            </a>
          ))}
          <button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 active:scale-95">
            Subscribe
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white focus:outline-none md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="animate-slideDown absolute top-full right-0 left-0 border-b border-gray-800 bg-gray-900/95 p-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col space-y-4">
            {['Home', 'Articles', 'Categories', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-lg p-2 text-lg font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item}
              </a>
            ))}
            <button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 py-3 font-bold text-white shadow-md">
              Subscribe Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="animate-blob absolute top-0 -left-20 h-96 w-96 rounded-full bg-purple-600/30 opacity-50 mix-blend-screen blur-3xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute top-0 -right-20 h-96 w-96 rounded-full bg-blue-600/30 opacity-50 mix-blend-screen blur-3xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute -bottom-32 left-20 h-96 w-96 rounded-full bg-pink-600/30 opacity-50 mix-blend-screen blur-3xl filter"></div>

      <div className="relative z-10 container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
        <div className="space-y-6 text-left">
          <Badge className="mb-4 inline-block border border-blue-500/30 bg-blue-500/20 text-blue-300">
            New Version 2.0 is Live
          </Badge>
          <h1 className="text-5xl leading-tight font-extrabold text-white md:text-7xl">
            Discover the <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Future of Tech
            </span>
          </h1>
          <p className="max-w-lg text-xl leading-relaxed text-gray-400">
            Explore insightful articles, expert tutorials, and the latest trends in development,
            design, and digital lifestyle.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-gray-900 shadow-xl transition-colors hover:-translate-y-1 hover:bg-gray-100 hover:shadow-2xl">
              Start Reading <ArrowRight size={20} />
            </button>
            <button className="rounded-full border border-gray-700 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
              Explore Categories
            </button>
          </div>
        </div>

        {/* Hero Visuals */}
        <div className="group relative hidden md:block">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                alt="Future Tech"
                className="h-auto w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded bg-purple-500 px-2 py-1 text-xs font-bold text-white">
                    Featured
                  </span>
                  <span className="text-xs text-gray-300">5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Cybersecurity in 2025: What You Need to Know
                </h3>
              </div>
            </div>
          </div>
          {/* Floating cards */}
          <div className="animate-float absolute -top-8 -right-8 rounded-xl border border-white/10 bg-gray-800/90 p-4 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-500/20 p-2 text-green-400">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Trending</p>
                <p className="text-sm font-bold text-white">+125% Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedPosts = () => {
  return (
    <section className="bg-gray-900/50 py-20">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Featured Stories"
          subtitle="Hand-picked articles that are trending among our readers this week."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gray-800/50 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="border border-white/20 bg-white/10 text-white backdrop-blur-md">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <div className="relative p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
                  {post.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-gray-400">{post.excerpt}</p>

                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-8 w-8 rounded-full border border-purple-500/30"
                    />
                    <span className="text-sm text-gray-300">{post.author.name}</span>
                  </div>
                  <button className="text-purple-400 transition-colors hover:text-white">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  return (
    <section className="border-t border-gray-800 bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Explore Topics" align="center" />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="group cursor-pointer rounded-2xl border border-white/5 bg-gray-800/40 p-6 text-center transition-all duration-300 hover:border-white/10 hover:bg-gray-800"
            >
              <div
                className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 shadow-inner transition-transform duration-300 group-hover:scale-110 ${cat.color}`}
              >
                <cat.icon size={24} />
              </div>
              <h4 className="mb-1 font-bold text-white">{cat.name}</h4>
              <p className="text-xs text-gray-500 group-hover:text-gray-400">
                {cat.count} articles
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="cursor-default rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="mb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium tracking-wider text-purple-300 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestArticles = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(LATEST_ARTICLES);

  const loadMore = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPosts([...posts, ...posts.map((p) => ({ ...p, id: p.id + 10 }))]);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Latest Articles" align="left" />

        <div className="space-y-8">
          {posts.map((article, index) => (
            <article
              key={article.id}
              className={`flex flex-col items-center gap-8 rounded-2xl border border-white/5 bg-gray-800/20 p-4 transition-colors hover:border-purple-500/20 md:flex-row md:p-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="aspect-video w-full overflow-hidden rounded-xl md:w-1/3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full space-y-4 md:w-2/3">
                <div className="flex items-center gap-3">
                  <Badge className="bg-purple-900/30 text-purple-300">{article.category}</Badge>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="cursor-pointer text-2xl font-bold text-white transition-colors hover:text-purple-400">
                  {article.title}
                </h3>
                <p className="leading-relaxed text-gray-400">{article.excerpt}</p>
                <div className="pt-2">
                  <a
                    href="#"
                    className="group inline-flex items-center font-medium text-blue-400 hover:text-blue-300"
                  >
                    Read Article{' '}
                    <ChevronRight
                      size={16}
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="mx-auto flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-8 py-3 font-bold text-white transition-all hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                Loading...
              </>
            ) : (
              'Load More Articles'
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="px-6 py-20">
      <div className="relative container mx-auto max-w-4xl">
        <div className="absolute inset-0 -rotate-1 transform bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-3xl"></div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-800/80 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-blue-500/10 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-purple-500/10 blur-2xl"></div>

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-purple-500/20 p-3 text-purple-300">
              <Mail size={32} />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Subscribe to our Newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-gray-400">
              Get the latest articles, tutorials, and free resources delivered straight to your
              inbox. No spam, ever.
            </p>

            {status === 'success' ? (
              <div className="animate-fadeIn flex items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/20 p-4 text-green-300">
                <Check size={20} /> You've successfully subscribed!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 rounded-full border border-gray-700 bg-gray-900/50 px-6 py-4 text-white placeholder-gray-500 transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-bold text-nowrap text-white shadow-lg shadow-purple-600/30 transition-all hover:scale-105 hover:shadow-purple-600/50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Now'}
                </button>
              </form>
            )}
            <p className="mt-4 text-xs text-gray-500">Join 50,000+ others. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-gray-900/30 py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Reader Reviews" subtitle="What our community says about us." />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-colors hover:bg-white/10"
            >
              <div className="mb-4 flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-gray-300 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <h5 className="text-sm font-bold text-white">{t.name}</h5>
                  <span className="text-xs text-gray-400">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-gray-900 bg-gray-950 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="mb-6 block text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Ghumakkad
              </span>
              <span className="text-white">Aadmi</span>
            </a>
            <p className="mb-6 text-gray-400">
              Empowering developers and creatives with the knowledge they need to build the future.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-purple-600 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Contact', 'Careers', 'Privacy Policy', 'Terms of Service'].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 transition-colors hover:text-purple-400">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Categories</h4>
            <ul className="space-y-4">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.name}>
                  <a href="#" className="text-gray-400 transition-colors hover:text-purple-400">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 shrink-0" size={18} />
                <span>hello@nebulablog.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-1 shrink-0" size={18} />
                <span>www.nebulablog.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-900 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">© 2024 Nebula Blog. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Made with</span>
            <Heart size={14} className="fill-red-500 text-red-500" />
            <span>for Developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* -------------------------------------------------------------------------- */
/*                            Main Layout Component                           */
/* -------------------------------------------------------------------------- */

const BlogLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100 selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <FeaturedPosts />
        <Categories />
        <LatestArticles />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default BlogLandingPage;
