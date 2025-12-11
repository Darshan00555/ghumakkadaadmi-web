import * as React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { MenuIcon } from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Vlogs', link: '/vlogs' },
  { name: 'Gallery', link: '/gallery' },
  { name: 'About', link: '/about' },
];

export function FloatingHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={cn(
        'sticky top-2 z-50 sm:top-5',
        'mx-2 w-auto max-w-5xl rounded-xl border shadow-lg sm:mx-auto sm:w-full sm:rounded-2xl',
        'bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:bg-black/80 dark:supports-[backdrop-filter]:bg-black/60',
        'transition-all duration-300',
        scrolled ? 'shadow-xl' : 'shadow-md'
      )}
    >
      <nav className="mx-auto flex items-center justify-between p-2 px-3 sm:p-3 sm:px-6">
        <Link to="/" className="group flex items-center gap-2 sm:gap-3">
          <div className="border-border relative overflow-hidden rounded-full border shadow-sm transition-shadow group-hover:shadow-md">
            <img
              src="/LOGO.png"
              alt="Ghumakkad Aadmi Logo"
              className="h-8 w-8 object-cover sm:h-10 sm:w-10"
            />
          </div>
          <span className="group-hover:to-primary hidden bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-base font-bold tracking-tight text-transparent transition-all duration-300 sm:inline sm:text-lg dark:from-white dark:to-gray-300">
            Ghumakkad Aadmi
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className={cn(
                'hover:text-primary relative px-4 py-2 text-sm font-medium text-gray-800 transition-colors dark:text-gray-200', // Explicit text colors
                'group'
              )}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="bg-accent/50 absolute inset-0 -z-0 scale-0 rounded-lg transition-transform group-hover:scale-100" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu & Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.youtube.com/@ghumakkad.aadmi1?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button
              size="sm"
              className="rounded-full px-4 text-xs shadow-sm transition-all hover:shadow-md sm:px-6 sm:text-sm"
            >
              Subscribe
            </Button>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setOpen(!open)}
              className="hover:bg-accent rounded-full md:hidden"
            >
              <MenuIcon className="size-5" />
            </Button>
            <SheetContent side="right" className="w-[300px] border-l sm:w-[400px]">
              <div className="mt-8 flex flex-col gap-6">
                <div className="flex items-center gap-2 px-2">
                  <img src="/LOGO.png" alt="Logo" className="h-8 w-8 rounded-full" />
                  <span className="font-bold">Ghumakkad Aadmi</span>
                </div>
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      onClick={() => setOpen(false)}
                      className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        'justify-start py-6 text-lg font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <a
                  href="https://www.youtube.com/@ghumakkad.aadmi1?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full rounded-full" size="lg">
                    Subscribe Now
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
