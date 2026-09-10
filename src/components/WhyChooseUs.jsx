import { Zap, TrendingUp, Shield, Search } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section id="why" className="relative overflow-hidden bg-[#f7f7f8] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[2.5px] text-neutral-500">
            THE CONSULTANCY DIFFERENCE
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl font-comforta">
            Why Businesses{' '}
            <span className="bg-gradient-to-r from-[#d8aa5d] via-[#EEAB21] to-[#00C9A7] bg-clip-text text-transparent">
              Choose Us.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            We don't just provide services. We understand your goals, create the right strategy, and guide you through every step of building a successful business.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          {/* Card 1: We Learn Your Business First (Spans 2 cols, 2 rows) */}
          <div className="group col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#030303] shadow-xl transition-all duration-300 hover:shadow-2xl">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#d8aa5d]" />

              <div className="p-6 md:p-8">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d8aa5d]/20 text-[#d8aa5d]">
                    <Zap className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#d8aa5d]">
                    We Understand Your Business First
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Before recommending solutions, we understand your goals, industry, and challenges. Every strategy is built around your actual business needs
                </p>
              </div>

              <div className="relative min-h-[14rem] flex-1 overflow-hidden bg-black">
                <img
                  src="/FASTER-poster.webp"
                  alt="Learn Business"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Card 2: One Team. One Conversation. (Spans 2 cols, row 1) */}
          <div className="group col-span-1 lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#030303] shadow-xl transition-all duration-300 hover:shadow-2xl sm:flex-row">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#EEAB21]" />

              <div className="relative min-h-[11rem] sm:w-1/2 overflow-hidden bg-black shrink-0">
                <img
                  src="/SCALE-poster.webp"
                  alt="One Team"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#030303]" />
              </div>

              <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EEAB21]/20 text-[#EEAB21]">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-[#EEAB21]">
                    One Team. Complete Support.
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-white/70">
                  From company setup to ongoing assistance, our experts provide seamless guidance without unnecessary delays or complications.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Honest Scoping. Not Upselling. (Spans 2 cols, row 2) */}
          <div className="group col-span-1 lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#030303] shadow-xl transition-all duration-300 hover:shadow-2xl sm:flex-row">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#2563EB]" />

              <div className="relative min-h-[11rem] sm:w-1/2 overflow-hidden bg-black shrink-0">
                <img
                  src="/poster.webp"
                  alt="Honest Scoping"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#030303]" />
              </div>

              <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2563EB]/20 text-[#2563EB]">
                    <Shield className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-[#2563EB]">
                    Transparent Advice. No Hidden Steps.
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-white/70">
                  We believe in clear communication, honest recommendations, and solutions that create real value for your business.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: It Works After We Leave (Spans all 4 cols, row 3) */}
          <div className="group col-span-1 md:col-span-2 lg:col-span-4">
            <div className="relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#030303] shadow-xl transition-all duration-300 hover:shadow-2xl md:flex-row md:items-center">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#00C9A7]" />

              <div className="relative min-h-[12rem] overflow-hidden bg-black md:w-[35%] md:max-w-[22rem] shrink-0">
                <img
                  src="/SEARCH-poster.webp"
                  alt="It Works After We Leave"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#030303]" />
              </div>

              <div className="flex-1 p-6 md:p-8">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00C9A7]/20 text-[#00C9A7]">
                    <Search className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#00C9A7] md:text-xl">
                    Support That Continues Beyond Setup
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  Our relationship doesn't end after your business launch. We continue supporting your growth with reliable consultancy and professional services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
