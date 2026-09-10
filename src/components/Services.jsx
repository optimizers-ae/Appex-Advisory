const services = [
  {
    number: "01",
    title: "Website Refresh",
    description:
      "Modernize your existing website with better visuals, performance, and user experience."
  },
  {
    number: "02",
    title: "Website Development",
    description:
      "Custom-built websites that do more than look good. They help your business grow."
  },
  {
    number: "03",
    title: "Web Applications",
    description:
      "Powerful web applications designed around your business workflow and users."
  },
  {
    number: "04",
    title: "Portals & Dashboards",
    description:
      "Internal systems, dashboards, and platforms built for efficiency."
  },
  {
    number: "05",
    title: "AI Media & Systems",
    description:
      "Smart digital experiences powered by modern AI technologies."
  },
  {
    number: "06",
    title: "Technical Consulting",
    description:
      "Expert guidance to help you choose the right technology direction."
  }
];

export default function Services() {
  return (
    <section className="bg-[#f7f7f8] py-24">
      <div className="container mx-auto px-6">

        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight font-comforta text-neutral-900">
            Digital products built with{' '}
            <span className="bg-gradient-to-r from-[#d8aa5d] via-[#EEAB21] to-[#00C9A7] bg-clip-text text-transparent">
              design and engineering.
            </span>
          </h2>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service)=>(
            <div
              key={service.number}
              className="
              bg-white 
              rounded-3xl 
              p-8 
              border 
              border-gray-200
              hover:shadow-xl
              transition
              "
            >

              <span className="text-sm text-gray-400">
                {service.number}
              </span>

              <h3 className="text-2xl font-bold mt-6 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}