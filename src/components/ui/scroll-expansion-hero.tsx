'use client';

import { ReactNode, TouchEvent, WheelEvent, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [targetProgress, setTargetProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Smooth easing function
  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  useEffect(() => {
    setScrollProgress(0);
    setTargetProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  // Smooth interpolation animation loop
  useEffect(() => {
    const animate = () => {
      setScrollProgress((current) => {
        const diff = targetProgress - current;
        if (Math.abs(diff) < 0.001) {
          return targetProgress;
        }
        // Smooth interpolation - adjust 0.15 for faster/slower smoothing
        return current + diff * 0.15;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetProgress]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setTargetProgress(0.95); // Smooth return
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        // Increased sensitivity for smoother feel (was 0.0009)
        const scrollDelta = e.deltaY * 0.0015;
        const newProgress = Math.min(Math.max(targetProgress + scrollDelta, 0), 1);
        setTargetProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setTargetProgress(0.95);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        // Smoother mobile scrolling
        const scrollFactor = deltaY < 0 ? 0.015 : 0.012;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(targetProgress + scrollDelta, 0), 1);
        setTargetProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener('touchstart', handleTouchStart as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('touchmove', handleTouchMove as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener('wheel', handleWheel as unknown as EventListener);
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [targetProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = isMobileState
    ? 280 + scrollProgress * (window.innerWidth - 320)
    : 300 + scrollProgress * 1250;
  const mediaHeight = isMobileState
    ? 350 + scrollProgress * (window.innerHeight * 0.4)
    : 400 + scrollProgress * 400;
  const textTranslateX = scrollProgress * (isMobileState ? 120 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div ref={sectionRef} className="overflow-x-hidden transition-colors duration-700 ease-in-out">
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-start">
        <div className="relative flex min-h-[100dvh] w-full flex-col items-center">
          <motion.div
            className="absolute inset-0 z-0"
            style={{ height: '100vh', width: '100vw' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0 }}
          >
            <img
              src={bgImageSrc}
              alt="Background"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
              style={{
                willChange: 'opacity',
                imageRendering: 'crisp-edges',
                minHeight: '100vh',
                minWidth: '100vw',
              }}
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          <div className="relative z-10 container mx-auto flex flex-col items-center justify-start">
            <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center">
              <div
                className="group absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl transition-all duration-500 ease-out hover:scale-[1.02]"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Corner Highlights */}
                <div className="absolute -top-1 -left-1 h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute top-0 left-0 h-full w-1 rounded-full bg-gradient-to-b from-orange-400 via-orange-300 to-transparent"></div>
                  <div className="absolute top-0 left-0 h-1 w-full rounded-full bg-gradient-to-r from-orange-400 via-orange-300 to-transparent"></div>
                  <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-orange-400 blur-sm"></div>
                </div>
                <div className="absolute -top-1 -right-1 h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute top-0 right-0 h-full w-1 rounded-full bg-gradient-to-b from-orange-400 via-orange-300 to-transparent"></div>
                  <div className="absolute top-0 right-0 h-1 w-full rounded-full bg-gradient-to-l from-orange-400 via-orange-300 to-transparent"></div>
                  <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-orange-400 blur-sm"></div>
                </div>
                <div className="absolute -bottom-1 -left-1 h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 h-full w-1 rounded-full bg-gradient-to-t from-orange-400 via-orange-300 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 h-1 w-full rounded-full bg-gradient-to-r from-orange-400 via-orange-300 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 h-3 w-3 rounded-full bg-orange-400 blur-sm"></div>
                </div>
                <div className="absolute -right-1 -bottom-1 h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute right-0 bottom-0 h-full w-1 rounded-full bg-gradient-to-t from-orange-400 via-orange-300 to-transparent"></div>
                  <div className="absolute right-0 bottom-0 h-1 w-full rounded-full bg-gradient-to-l from-orange-400 via-orange-300 to-transparent"></div>
                  <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full bg-orange-400 blur-sm"></div>
                </div>

                {/* Black Matte Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border-4 border-black/0 transition-all duration-500 group-hover:border-black/60 group-hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"></div>

                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className="pointer-events-none relative h-full w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className="h-full w-full rounded-xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div
                        className="absolute inset-0 z-10"
                        style={{ pointerEvents: 'none' }}
                      ></div>

                      <motion.div
                        className="absolute inset-0 rounded-xl bg-black/30"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0 }}
                      />
                    </div>
                  ) : (
                    <div className="pointer-events-none relative h-full w-full">
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="h-full w-full rounded-xl object-cover"
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className="absolute inset-0 z-10"
                        style={{ pointerEvents: 'none' }}
                      ></div>

                      <motion.div
                        className="absolute inset-0 rounded-xl bg-black/30"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className="relative h-full w-full">
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className="h-full w-full rounded-xl object-cover"
                    />

                    <motion.div
                      className="absolute inset-0 rounded-xl bg-black/50"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0 }}
                    />
                  </div>
                )}

                <div className="relative z-10 mt-4 flex flex-col items-center text-center transition-none">
                  {date && (
                    <p
                      className="text-2xl text-blue-200"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-center font-medium text-blue-200"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`relative z-10 flex w-full flex-col items-center justify-center gap-4 text-center transition-none ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.h2
                  className="text-4xl font-bold text-blue-200 transition-none md:text-5xl lg:text-6xl"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className="text-center text-4xl font-bold text-blue-200 transition-none md:text-5xl lg:text-6xl"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>
            </div>

            <motion.section
              className="flex w-full flex-col px-8 py-10 md:px-16 lg:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
