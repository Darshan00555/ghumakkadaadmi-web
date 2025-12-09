import * as React from 'react';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={cn(
                'sticky top-5 z-50',
                'mx-auto w-full max-w-5xl rounded-2xl border shadow-lg',
                'bg-white/80 dark:bg-black/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60', // Adjusted for contrast
                'transition-all duration-300',
                scrolled ? 'shadow-xl' : 'shadow-md'
            )}
        >
            <nav className="mx-auto flex items-center justify-between p-3 px-6">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative overflow-hidden rounded-full border border-border shadow-sm group-hover:shadow-md transition-shadow">
                        <img
                            src="/LOGO.png"
                            alt="Ghumakkad Aadmi Logo"
                            className="h-10 w-10 object-cover"
                        />
                    </div>
                    <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:to-primary transition-all duration-300">
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
                                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-gray-800 dark:text-gray-200", // Explicit text colors
                                "group"
                            )}
                        >
                            <span className="relative z-10">{item.name}</span>
                            <span className="absolute inset-0 bg-accent/50 scale-0 rounded-lg transition-transform group-hover:scale-100 -z-0" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu & Action */}
                <div className="flex items-center gap-3">
                    <Button size="sm" className="hidden sm:inline-flex rounded-full px-6 shadow-sm hover:shadow-md transition-all">
                        Subscribe
                    </Button>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => setOpen(!open)}
                            className="md:hidden rounded-full hover:bg-accent"
                        >
                            <MenuIcon className="size-5" />
                        </Button>
                        <SheetContent
                            side="right"
                            className="w-[300px] sm:w-[400px] border-l"
                        >
                            <div className="flex flex-col gap-6 mt-8">
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
                                                buttonVariants({ variant: "ghost" }),
                                                "justify-start text-lg font-medium py-6"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <Button className="w-full rounded-full" size="lg">Subscribe Now</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </motion.header>
    );
}
