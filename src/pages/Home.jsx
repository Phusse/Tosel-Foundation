import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

/* ══════════════════════════════════════════════════════
   SECTION 2 — Pillar cards data
══════════════════════════════════════════════════════ */
const pillars = [
  {
    num: '01',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3557" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Community Focused',
    body: 'We prioritize the unique needs of each community to foster sustainable growth and development from the ground up.',
  },
  {
    num: '02',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3557" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    title: 'Impact Driven',
    body: 'Our initiatives are designed based on research and community input, ensuring meaningful and measurable outcomes for real people.',
  },
  {
    num: '03',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3557" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Inclusive Programs',
    body: 'We create programs that reach diverse populations, ensuring every individual has access to resources and opportunities.',
  },
]

/* ══════════════════════════════════════════════════════
   SECTION 4 — Impact stats
   // TODO: Replace these placeholder numbers with real data from the foundation
══════════════════════════════════════════════════════ */
const stats = [
  { value: '500+', label: 'Communities Reached', sub: 'Across Nigeria' },
  { value: '200+', label: 'Beneficiaries Supported', sub: 'And growing' },
  { value: '3', label: 'Core Programs', sub: 'Education · Health · Development' },
  { value: '5+', label: 'Years of Service', sub: 'Since our founding' },
]

/* ══════════════════════════════════════════════════════
   SECTION 5 — Initiatives cards data
══════════════════════════════════════════════════════ */
const initiatives = [
  {
    img: '/images/education-program.jpeg',
    alt: 'Students in education support program',
    title: 'Education Support',
    body: 'Our education support program provides resources, mentorship, and scholarships to empower students and enhance learning opportunities.',
    cropClass: 'object-center',
  },
  {
    img: '/images/health-outreach-1.jpeg',
    alt: 'Health outreach program in the community',
    title: 'Health Outreach',
    body: 'Through health outreach initiatives, we connect communities with essential health services and promote wellness and preventive care.',
    cropClass: 'object-[center_32%]',
  },
  {
    img: '/images/community-dev.jpeg',
    alt: 'Community development project in progress',
    title: 'Community Development',
    body: 'Our community development projects focus on sustainable practices to improve living conditions and enhance local economies.',
    cropClass: 'object-[center_15%]',
  },
]

/* ══════════════════════════════════════════════════════
   SECTION 6 — Impact stories data
══════════════════════════════════════════════════════ */
const stories = [
  {
    img: '/images/community-outreach-1.jpeg',
    alt: 'Foundation team during community outreach program',
    category: 'Community',
    title: 'New Beginnings',
    body: 'Through our community outreach efforts, families are gaining access to resources that are changing their lives for the better.',
  },
  {
    img: '/images/health-outreach-2.jpeg',
    alt: 'Community members receiving health services',
    category: 'Health',
    title: 'Health Revolution',
    body: 'Our health outreach program is connecting underserved communities with quality healthcare for the first time.',
  },
]

/* ══════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ────────────────────────────────────────────────
          SECTION 1 · HERO
      ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a1628]">

        {/* LAYER 1 — BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/community-outreach-1.jpeg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-top"
          />
          {/* Dark overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/85 via-[#0a1628]/70 to-[#0a1628]/95" />
        </div>

        {/* LAYER 2 — MAIN CONTENT */}
        <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full px-6 pt-28 md:pt-36 pb-0">

          {/* TOP SECTION — text block */}
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#2E86DE]" />
              <span className="text-[#2E86DE] text-[11px] font-semibold tracking-[0.25em] uppercase">
                Empowering Communities · Nigeria
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.2] mb-10">
              Changing Lives.<br />
              <span className="text-white/40 font-normal italic">One Community</span><br />
              <span className="text-[#2E86DE]">at a Time.</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/65 text-lg leading-relaxed max-w-xl mb-10">
              Through education, health outreach, and community development —
              the Tosel Foundation is building a stronger Nigeria,
              one program at a time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to="/donate"
                className="px-8 py-4 bg-white text-[#1A3557] font-bold text-sm rounded hover:bg-[#F0F4F8] transition-colors text-center"
              >
                Donate Now
              </Link>
              <Link
                to="/programs"
                className="px-8 py-4 bg-white/10 border border-white/25 text-white font-medium text-sm rounded hover:bg-white/20 hover:border-white/50 transition-all text-center"
              >
                Our Programs
              </Link>
            </div>

            {/* Inline stats row */}
            <div className="flex items-center gap-4 md:gap-8 flex-wrap mb-16">
              {[
                { num: '500+', label: 'Communities' },
                { num: '200+', label: 'Beneficiaries' },
                { num: '3', label: 'Core Programs' },
              ].map(({ num, label }, i) => (
                <div key={label} className="flex items-center gap-4 md:gap-8">
                  <div>
                    <div className="font-display text-2xl font-bold text-white">{num}</div>
                    <div className="text-white/40 text-xs mt-0.5">{label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-white/15" />}
                </div>
              ))}
            </div>
          </div>

          {/* PHOTO STRIP — hidden on mobile */}
          <div className="mt-auto hidden md:grid grid-cols-3 gap-3 pb-0">
            {[
              {
                src: '/images/community-outreach-1.jpeg',
                alt: 'Foundation team during community outreach program',
                label: 'Community Outreach',
                cropClass: 'object-center',
              },
              {
                src: '/images/education-program.jpeg',
                alt: 'Students in education support program',
                label: 'Education Support',
                cropClass: 'object-center',
              },
              {
                src: '/images/health-outreach-1.jpeg',
                alt: 'Health outreach program in the community',
                label: 'Health Outreach',
                cropClass: 'object-[center_35%]',
              },
            ].map(({ src, alt, label, cropClass }) => (
              <div key={label} className="relative overflow-hidden rounded-t-lg group" style={{ height: '240px' }}>
                <img
                  src={src}
                  alt={alt}
                  className={`w-full h-full object-cover ${cropClass} group-hover:scale-105 transition-transform duration-500`}
                />
                {/* Bottom label overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a1628] to-transparent h-20" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-xs font-semibold tracking-wide">{label}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 2 · THREE PILLARS
      ──────────────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="What We Do"
            title="Our Three Pillars"
            subtitle="Everything we do centres on three areas where we create the most lasting impact."
            center
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map(({ num, icon, title, body }) => (
              <div
                key={num}
                className="
                  relative bg-white border border-[#E8E5DC] rounded-sm p-8
                  overflow-hidden group
                  transition-all duration-300
                  hover:border-[#1A3557] hover:shadow-lg
                "
              >
                {/* Navy top bar */}
                <span className="absolute top-0 inset-x-0 h-1 bg-[#1A3557]" />

                {/* Number badge */}
                <span
                  className="absolute top-6 right-6 text-5xl font-semibold text-[#2E86DE]/20 leading-none select-none"
                  style={{ fontFamily: '"Lora", Georgia, serif' }}
                  aria-hidden="true"
                >
                  {num}
                </span>

                {/* Icon container */}
                <div className="w-12 h-12 rounded-lg bg-[#EBF4FC] flex items-center justify-center mb-5">
                  {icon}
                </div>

                <h3
                  className="text-xl font-semibold text-[#1A3557] mb-3"
                  style={{ fontFamily: '"Lora", Georgia, serif' }}
                >
                  {title}
                </h3>
                <p className="text-[#6B6B64] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 3 · ABOUT SNIPPET
      ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Text */}
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="About Tosel Foundation"
              />

              <div className="mt-6 space-y-4">
                <p className="text-[#6B6B64] leading-relaxed">
                  The Tosel Foundation is a nonprofit organization dedicated to
                  enhancing community development, education, and health
                  initiatives. We work tirelessly to improve lives and foster a
                  supportive community environment.
                </p>
                <p className="text-[#6B6B64] leading-relaxed">
                  Motivated by a passion for social change, our founders
                  established this organization to address critical issues in
                  education and health, aiming to empower individuals and
                  communities across Nigeria.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/about"
                  className="inline-block px-6 py-3 bg-[#1A3557] text-white font-medium rounded-sm text-sm transition-colors duration-200 hover:bg-[#1E4A73]"
                >
                  Learn More About Us
                </Link>
                <Link
                  to="/programs"
                  className="inline-block px-6 py-3 border border-[#1A3557] text-[#1A3557] font-medium rounded-sm text-sm transition-colors duration-200 hover:bg-[#1A3557] hover:text-white"
                >
                  Our Programs
                </Link>
              </div>
            </div>

            {/* Right — Image with decorative elements */}
            <div className="relative">
              {/* Decorative green square — top-left */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-4 w-24 h-24 rounded-sm bg-[#E8F7EE] -z-10"
              />

              {/* Image wrapper */}
              <div
                className="relative rounded-sm overflow-hidden bg-[#1A3557]"
                style={{ aspectRatio: '4 / 3' }}
              >
                <img
                  src="/images/community-about.jpeg"
                  alt="Tosel Foundation team photo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative blue border square — bottom-right */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-sm border-2 border-[#2E86DE] -z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 4 · IMPACT NUMBERS
      ──────────────────────────────────────────────── */}
      <section className="bg-[#1A3557] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <SectionHeading
            eyebrow="Our Impact"
            title="Our Impact So Far"
            subtitle="Real milestones from real programs across Nigerian communities."
            center
            light
          />

          {/* Stats grid */}
          <div className="max-w-[900px] mx-auto mt-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-sm px-6 py-8 text-center"
                >
                  <p
                    className="text-[#2E86DE] text-4xl font-semibold leading-none"
                    style={{ fontFamily: '"Lora", Georgia, serif' }}
                  >
                    {value}
                  </p>
                  <p className="text-white text-sm font-medium mt-2">{label}</p>
                  <p className="text-white/40 text-xs mt-1">{sub}</p>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="text-white/30 text-xs text-center mt-6">
              *Numbers are approximate. Updated periodically.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 5 · OUR INITIATIVES
      ──────────────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Programs"
            title="Our Initiatives"
            subtitle="Discover the various programs we offer to uplift and support individuals and communities."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map(({ img, alt, title, body, cropClass = 'object-[center_25%]' }) => (
              <div
                key={title}
                className="
                  bg-white border border-[#E8E5DC] rounded-sm overflow-hidden
                  transition-shadow duration-300 hover:shadow-lg
                "
              >
                <img src={img} alt={alt} className={`w-full h-52 object-cover ${cropClass} bg-[#1A3557]`} />
                <div className="p-6">
                  <h3
                    className="text-[#1A3557] text-xl font-semibold mb-3"
                    style={{ fontFamily: '"Lora", Georgia, serif' }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#6B6B64] text-sm leading-relaxed mb-5">
                    {body}
                  </p>
                  <Link
                    to="/programs"
                    className="text-[#2E86DE] text-sm font-semibold hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 6 · IMPACT STORIES
      ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Stories"
            title="Inspiring Transformation Stories"
            subtitle="Read how our efforts have positively impacted the lives of those we serve."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map(({ img, alt, category, title, body }) => (
              <div
                key={title}
                className="
                  bg-white border border-[#E8E5DC] rounded-sm
                  transition-shadow duration-300 hover:shadow-lg
                  flex flex-col h-full
                "
              >
                <div className="relative w-full overflow-hidden rounded-t-sm shrink-0" style={{ height: '340px' }}>
                  <img
                    src={img}
                    alt={alt}
                    className={`w-full h-full object-cover bg-[#1A3557] ${img.includes('health-outreach-2.jpeg') ? 'object-[center_5%]' : 'object-center'
                      }`}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col items-start">
                  {/* Category badge */}
                  <span className="inline-block px-3 py-1 bg-[#DAEAF9] text-[#1a6fc4] text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
                    {category}
                  </span>
                  <h3
                    className="text-[#1A3557] text-xl font-semibold mb-3"
                    style={{ fontFamily: '"Lora", Georgia, serif' }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#6B6B64] text-sm leading-relaxed mb-5">
                    {body}
                  </p>
                  <a
                    href="#"
                    className="text-[#2E86DE] text-sm font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 7 · DONATE CTA BANNER
      ──────────────────────────────────────────────── */}
      <section className="bg-[#1A3557] py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">
                Make A Difference
              </p>
              <h2
                className="text-white text-3xl md:text-4xl font-semibold mb-4"
                style={{ fontFamily: '"Lora", Georgia, serif' }}
              >
                Your Support Changes Lives
              </h2>
              <p className="text-white/70 text-base leading-relaxed max-w-xl">
                Every contribution goes directly to programs that create real, measurable change in Nigerian communities.
              </p>
            </div>

            {/* Right */}
            <div className="lg:text-right flex flex-col lg:items-end gap-4">
              <Link
                to="/donate"
                className="inline-block px-8 py-4 bg-[#2E86DE] text-white font-bold rounded transition-colors duration-200 hover:bg-[#1a6fc4]"
              >
                Donate Now
              </Link>
              <Link
                to="/programs"
                className="text-white/60 text-sm underline hover:text-white transition-colors duration-200"
              >
                Learn About Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
