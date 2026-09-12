import { motion } from 'framer-motion';
import {
  Zap,
  TrendingUp,
  Shield,
  Search,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Award,
  Layers,
  Clock,
} from 'lucide-react';
import { MagneticCursor } from './MouseTrackingEffect';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#f7f7f8] py-24 md:py-32 font-comforta"
    >
      {/* Background Ambient Radial Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#d8aa5d]/12 via-[#EEAB21]/8 to-[#00C9A7]/10 blur-[130px]" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#00C9A7]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header with Fade-Up */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Top Pill Badge */}
          <motion.div variants={fadeUpVariants} className="inline-flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-neutral-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#d8aa5d]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d8aa5d] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d8aa5d]" />
              </span>
              <span>The Consultancy Difference</span>
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl"
          >
            Why Businesses{' '}
            <span className="bg-gradient-to-r from-[#d8aa5d] via-[#EEAB21] to-[#00C9A7] bg-clip-text text-transparent">
              Choose Us.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg"
          >
            We don't just provide services. We understand your goals, create the right strategy,
            and guide you through every step of building a successful business in the UAE.
          </motion.p>
        </motion.div>

        {/* Bento Grid with Animated Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3"
        >
          {/* Card 1: We Learn Your Business First (Spans 2 cols, 2 rows) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group/card col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.12] bg-[#07090e] shadow-xl transition-all duration-500 group-hover/card:border-[#d8aa5d]/50 group-hover/card:shadow-[0_20px_50px_rgba(216,170,93,0.18)]">
              {/* Top Accent Line with Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d8aa5d] via-[#EEAB21] to-transparent transition-all duration-500 group-hover/card:h-1.5" />

              {/* Ambient internal light */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#d8aa5d]/10 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100 opacity-40" />

              <div className="relative z-10 p-6 md:p-8">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d8aa5d]/15 text-[#d8aa5d] border border-[#d8aa5d]/30 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:bg-[#d8aa5d]/25">
                      <Zap className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white transition-colors duration-300 group-hover/card:text-[#d8aa5d]">
                      We Understand Your Business First
                    </h3>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    Strategy First
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-neutral-300/80">
                  Before recommending jurisdictions or banking pathways, we deeply analyze your
                  commercial model, target markets, and tax strategy. Every setup is uniquely engineered
                  around your actual business objectives.
                </p>

                {/* Feature Tags List */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#00C9A7]" />
                    Mainland vs Freezone Optimization
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#00C9A7]" />
                    Banking Risk Assessment
                  </span>
                </div>
              </div>

              {/* Media Container with Smooth Hover Scale & Shine */}
              <MagneticCursor
                magneticFactor={0.55}
                blendMode="exclusion"
                cursorSize={40}
                className="min-h-[15rem] flex-1"
              >
                <div className="relative h-full w-full min-h-[15rem] overflow-hidden bg-neutral-950">
                  <img
                    src="/FASTER-poster.webp"
                    alt="Understand Business Process Strategy"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="400"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-85"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/30 to-transparent" />

                  {/* Subtle shine sweep */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              </MagneticCursor>

            </div>
          </motion.div>

          {/* Card 2: One Team. Complete Support. (Spans 2 cols, row 1) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group/card col-span-1 lg:col-span-2"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.12] bg-[#07090e] shadow-xl transition-all duration-500 group-hover/card:border-[#EEAB21]/50 group-hover/card:shadow-[0_16px_40px_rgba(238,171,33,0.15)] sm:flex-row">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#EEAB21] transition-all duration-500 group-hover/card:h-1.5" />

              <MagneticCursor
                magneticFactor={0.55}
                blendMode="exclusion"
                cursorSize={40}
                className="min-h-[11rem] sm:w-1/2 shrink-0 self-stretch"
              >
                <div className="relative h-full w-full min-h-[11rem] overflow-hidden bg-neutral-950">
                  <img
                    src="/SCALE-poster.webp"
                    alt="One Dedicated Team Support"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-85"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#07090e]" />
                </div>
              </MagneticCursor>

              <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEAB21]/15 text-[#EEAB21] border border-[#EEAB21]/30 transition-transform duration-300 group-hover/card:scale-110">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover/card:text-[#EEAB21]">
                    One Team. Complete Support.
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-neutral-300/80">
                  From initial license issuance to corporate bank account opening and Golden Visas,
                  our senior advisors oversee your entire journey with unified accountability.
                </p>

                <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-[#EEAB21]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Single Dedicated Point of Contact</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Transparent Advice. No Hidden Steps. (Spans 2 cols, row 2) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group/card col-span-1 lg:col-span-2"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.12] bg-[#07090e] shadow-xl transition-all duration-500 group-hover/card:border-[#2563EB]/50 group-hover/card:shadow-[0_16px_40px_rgba(37,99,235,0.15)] sm:flex-row">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#2563EB] transition-all duration-500 group-hover/card:h-1.5" />

              <MagneticCursor
                magneticFactor={0.55}
                blendMode="exclusion"
                cursorSize={40}
                className="min-h-[11rem] sm:w-1/2 shrink-0 self-stretch"
              >
                <div className="relative h-full w-full min-h-[11rem] overflow-hidden bg-neutral-950">
                  <img
                    src="/poster.webp"
                    alt="Transparent Honest Advice"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-85"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#07090e]" />
                </div>
              </MagneticCursor>

              <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB]/15 text-[#2563EB] border border-[#2563EB]/30 transition-transform duration-300 group-hover/card:scale-110">
                    <Shield className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover/card:text-[#2563EB]">
                    Transparent Advice. No Hidden Steps.
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-neutral-300/80">
                  We believe in upfront pricing, realistic bank approval timelines, and transparent
                  government fee breakdowns. No sudden surprise costs or hidden retainers.
                </p>

                <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-[#60A5FA]">
                  <Award className="h-3.5 w-3.5" />
                  <span>100% Guaranteed Fee Clarity</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Support That Continues Beyond Setup (Spans all 4 cols, row 3) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group/card col-span-1 md:col-span-2 lg:col-span-4"
          >
            <div className="relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.12] bg-[#07090e] shadow-xl transition-all duration-500 group-hover/card:border-[#00C9A7]/50 group-hover/card:shadow-[0_20px_50px_rgba(0,201,167,0.15)] md:flex-row md:items-center">
              {/* Top Accent Line with Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C9A7] via-[#2563EB] to-[#d8aa5d] transition-all duration-500 group-hover/card:h-1.5" />

              <MagneticCursor
                magneticFactor={0.55}
                blendMode="exclusion"
                cursorSize={40}
                className="min-h-[13rem] md:w-[36%] md:max-w-[22rem] shrink-0 self-stretch"
              >
                <div className="relative h-full w-full min-h-[13rem] overflow-hidden bg-neutral-950">
                  <img
                    src="/SEARCH-poster.webp"
                    alt="Support That Continues Beyond Setup"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-85"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#07090e]" />
                </div>
              </MagneticCursor>

              <div className="flex-1 p-6 md:p-8">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00C9A7]/15 text-[#00C9A7] border border-[#00C9A7]/30 transition-transform duration-300 group-hover/card:scale-110">
                      <Search className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white transition-colors duration-300 group-hover/card:text-[#00C9A7]">
                      Support That Continues Beyond Setup
                    </h3>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#00C9A7]/30 bg-[#00C9A7]/10 px-3 py-1 text-xs font-semibold text-[#00C9A7]">
                    <Clock className="h-3.5 w-3.5" />
                    Lifetime Advisory
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-neutral-300/80">
                  Our commitment extends far past incorporation. We support your long-term growth
                  with corporate tax structuring, annual license renewals, mortgage refinancing, and
                  commercial expansion advisory across the Emirates.
                </p>

                {/* Additional Value Highlights */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
                    Corporate Tax &amp; VAT
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EEAB21]" />
                    Mortgage &amp; Refinancing Desk
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d8aa5d]" />
                    PRO &amp; Visa Renewals
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
