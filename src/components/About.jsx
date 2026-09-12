import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  MonitorSmartphone,
  Smartphone,
  Layers,
  Lightbulb,
  Sparkles,
  Palette,
} from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    number: '01 / 06',
    title: 'Residential Mortgage Overview',
    tag: 'MORTGAGE SOLUTIONS',
    description: 'Navigate your path to homeownership with our comprehensive mortgage solutions, tailored to fit your unique financial goals and dream home aspirations.',
    image: '/service-web-editorial-mobile.webp',
    icon: MonitorSmartphone,
    accent: '#527A33',
  },
  {
    id: '02',
    number: '02 / 06',
    title: 'Non-Resident Solutions',
    tag: 'MORTGAGE SOLUTIONS',
    description: 'Tailored financing options for expatriates and international investors looking to purchase or manage property seamlessly from abroad.',
    image: '/service-app-editorial-mobile.webp',
    icon: Smartphone,
    accent: '#C2410C',
  },
  {
    id: '03',
    number: '03 / 06',
    title: 'Investment Properties',
    tag: 'MORTGAGE SOLUTIONS',
    description: 'Expand your real estate portfolio with competitive rates and strategic financing tailored specifically for property investors.',
    image: '/service-systems-editorial-v2-mobile.webp',
    icon: Layers,
    accent: '#2563EB',
  },
  {
    id: '04',
    number: '04 / 06',
    title: 'Mortgage Refinancing',
    tag: 'MORTGAGE SOLUTIONS',
    description: 'Lower your monthly payments, adjust your loan term, or tap into your homes equity with our flexible and competitive refinancing options.',
    image: '/service-consulting-editorial-mobile.webp',
    icon: Lightbulb,
    accent: '#EEAB21',
  },
  {
    id: '05',
    number: '05 / 06',
    title: 'Mortgage Buyout & Equity Release',
    tag: 'MORTGAGE SOLUTIONS',
    description: 'Unlock the built-up value in your property or transfer your existing mortgage to secure better rates and access cash for your next big goal.',
    image: '/hero-elearning-desktop.webp',
    icon: Sparkles,
    accent: '#DB2777',
  },
  {
    id: '06',
    number: '06 / 06',
    title: 'Commercial Mortgage Finance',
    tag: 'MORTGAGE SOLUTIONS',
    description: 'Strategic financing solutions designed specifically for business owners and investors to acquire, refinance, or develop commercial real estate.',
    image: '/SECURITY-poster.webp',
    icon: Palette,
    accent: '#B45309',
  },
];

// Staggered container for header
const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Smooth fade-up variant
const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Carousel container stagger
const carouselContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// Card fade-up variant
const cardFadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability();
      el.addEventListener('scroll', checkScrollability, { passive: true });
      window.addEventListener('resize', checkScrollability);
      return () => {
        el.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="section-2"
      className="relative overflow-hidden bg-[#f7f7f8] pt-24 pb-20 text-neutral-900 md:pt-32 md:pb-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Section with Fade-Up */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          {/* Sub-heading / Kicker */}
          <motion.p
            variants={fadeUpVariants}
            className="font-comforta text-xs font-semibold uppercase tracking-[2.5px] text-neutral-500"
          >
            About Us
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            variants={fadeUpVariants}
            className="font-comforta mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-tight"
          >
            Inspired by Flight &amp; Fueled by{' '}
            <span className="bg-gradient-to-r from-[#d8aa5d] via-[#EEAB21] to-[#00C9A7] bg-clip-text text-transparent">
              Imagination.
            </span>
          </motion.h2>

          {/* Subtitle / Description */}
          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base md:text-lg"
          >
            As a design engineering studio, we bridge the gap between premium visual
            design and technical excellence, ensuring your project looks stunning and
            performs flawlessly.
          </motion.p>

          {/* Top-Right Carousel Navigation Controls */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-8 flex items-center justify-center gap-3 md:absolute md:right-0 md:bottom-0 md:mt-0"
          >
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous service"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white/80 text-neutral-800 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next service"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white/80 text-neutral-800 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>

        {/* Photos & Services Carousel with Fade-Up */}
        <motion.div
          variants={carouselContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-12 md:mt-16"
        >
          <div
            ref={scrollContainerRef}
            className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:-mx-6 sm:gap-6 sm:px-6 lg:-mx-8 lg:px-8"
          >
            {SERVICES.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={cardFadeUpVariants}
                  className="group/service relative w-[calc(100vw-48px)] max-w-[360px] shrink-0 cursor-pointer rounded-[24px] sm:w-[380px] sm:max-w-none md:w-[420px] lg:w-[460px] lg:rounded-[32px] overflow-hidden bg-neutral-950 shadow-md transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {/* Background Photo - Clear initially, blurs and scales smoothly on hover */}
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      width="460"
                      height="345"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover/service:scale-[1.06] group-hover/service:blur-[3px]"
                    />

                    {/* Gradient Overlay for Vignette and Text Contrast */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-all duration-500 group-hover/service:from-black/95 group-hover/service:via-black/50" />
                    <div className="pointer-events-none absolute inset-0 bg-black/0 backdrop-blur-none transition-all duration-500 group-hover/service:bg-black/20 group-hover/service:backdrop-blur-[2px]" />

                    {/* Top Row: Icon Badge (Left) & Number Badge (Right) */}
                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-5 lg:p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 group-hover/service:-translate-y-0.5 group-hover/service:bg-white/25 sm:h-11 sm:w-11">
                        <IconComponent className="h-5 w-5 transition-transform duration-300 group-hover/service:scale-110" />
                      </div>

                      <span className="inline-flex min-h-8 items-center rounded-full border border-white/40 bg-white/15 px-3 font-mono text-[11px] tracking-widest text-white/90 shadow-[0_4px_15px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:px-3.5 sm:text-xs">
                        {service.number}
                      </span>
                    </div>

                    {/* Bottom Row: Title visible, details reveal on hover */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8 text-white">
                      {/* Title + Arrow */}
                      <div className="flex items-end justify-between gap-4">
                        <div className="flex-1">
                          {/* Tag - hidden until hover */}
                          <p className="mb-2 max-h-0 overflow-hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover/service:max-h-8 group-hover/service:translate-y-0 group-hover/service:opacity-100 sm:text-[11px]">
                            {service.tag}
                          </p>

                          {/* Title */}
                          <h3 className="font-comforta text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            {service.title}
                          </h3>

                          {/* Description - hidden until hover */}
                          <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-white/85 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover/service:max-h-20 group-hover/service:translate-y-0 group-hover/service:opacity-100 sm:text-sm">
                            {service.description}
                          </p>
                        </div>

                        {/* Arrow - hidden until hover */}
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-xl opacity-0 translate-y-3 scale-90 transition-all duration-500 ease-out group-hover/service:translate-y-0 group-hover/service:scale-100 group-hover/service:opacity-100 group-hover/service:rotate-[-45deg] group-hover/service:border-white/70 group-hover/service:bg-white/30 sm:h-11 sm:w-11">
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;