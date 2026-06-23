import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

/* ══════════════════════════════════════════════════════
   SECTION 4 — Core values data
══════════════════════════════════════════════════════ */
const values = [
  {
    num: '01',
    title: 'Community First',
    body: 'We design every program around the specific needs of the communities we serve.',
  },
  {
    num: '02',
    title: 'Impact Driven',
    body: 'We measure success by real outcomes — not just activities or effort.',
  },
  {
    num: '03',
    title: 'Inclusive',
    body: 'Our programs are designed to reach everyone, especially the most underserved.',
  },
  {
    num: '04',
    title: 'Transparent',
    body: 'We are accountable to our donors, partners, and the communities we serve.',
  },
]

export default function About() {
  return (
    <>
      {/* ────────────────────────────────────────────────
          SECTION 1 · PAGE HERO
      ──────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Who We Are"
        title="About Tosel Foundation"
        subtitle="Dedicated to transforming lives through education, health, and community development initiatives for a brighter future."
      />

      {/* ────────────────────────────────────────────────
          SECTION 2 · ABOUT BODY
      ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Text */}
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Empowering Communities"
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
                  communities.
                </p>
                <p className="text-[#6B6B64] leading-relaxed">
                  We prioritize the specific needs of each community we serve,
                  fostering sustainable growth and development through programs
                  that make a real difference.
                </p>
              </div>

              <Link
                to="/programs"
                className="inline-block mt-8 px-6 py-3 bg-[#1A3557] text-white font-medium rounded-sm text-sm transition-colors duration-200 hover:bg-[#1E4A73]"
              >
                See Our Programs →
              </Link>
            </div>

            {/* Right — Image */}
            <div className="relative">
              <div
                className="relative rounded-sm overflow-hidden"
                style={{ height: '380px' }}
              >
                <img
                  src="/images/community-about.jpeg"
                  alt="Tosel Foundation team photo"
                  className="w-full h-full object-cover object-center rounded-sm"
                />
              </div>

              {/* Amber offset border square — bottom-right */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-sm border-2 border-[#2E86DE] -z-10"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 3 · VISION & MISSION
      ──────────────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Purpose"
            title="Vision & Mission"
            center
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Vision card */}
            <div className="bg-white border border-[#E8E5DC] rounded-sm p-10 flex gap-6">
              {/* Amber left border */}
              <span className="block w-1 shrink-0 rounded-full bg-[#2E86DE]" aria-hidden="true" />

              <div>
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-[#FDF0D0] flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3557" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </div>
                <h3
                  className="text-[#1A3557] text-2xl font-semibold mb-4"
                  style={{ fontFamily: '"Lora", Georgia, serif' }}
                >
                  Our Vision
                </h3>
                <p className="text-[#6B6B64] leading-relaxed">
                  To create a world where every community thrives through access
                  to education, health, and sustainable development.
                </p>
              </div>
            </div>

            {/* Mission card */}
            <div className="bg-white border border-[#E8E5DC] rounded-sm p-10 flex gap-6">
              {/* Navy left border */}
              <span className="block w-1 shrink-0 rounded-full bg-[#1A3557]" aria-hidden="true" />

              <div>
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-[#D0E4F5] flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3557" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                <h3
                  className="text-[#1A3557] text-2xl font-semibold mb-4"
                  style={{ fontFamily: '"Lora", Georgia, serif' }}
                >
                  Our Mission
                </h3>
                <p className="text-[#6B6B64] leading-relaxed">
                  To enhance the well-being of communities by providing
                  comprehensive programs that advance education, health, and
                  overall development.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 4 · CORE VALUES
      ──────────────────────────────────────────────── */}
      <section className="bg-[#1A3557] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            light
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ num, title, body }) => (
              <div
                key={num}
                className="bg-white/5 border border-white/10 rounded-sm p-7"
              >
                <p
                  className="text-[#2E86DE] text-3xl font-semibold mb-4 leading-none"
                  style={{ fontFamily: '"Lora", Georgia, serif' }}
                >
                  {num}
                </p>
                <h4 className="text-white font-semibold text-base mb-2">
                  {title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 5 · TWO PILLARS HIGHLIGHT
      ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Text */}
            <div>
              <SectionHeading
                eyebrow="Our Approach"
                title="Innovative Solutions for Real Communities"
              />

              <p className="mt-6 text-[#6B6B64] leading-relaxed">
                Our programs are tailored to address unique challenges, ensuring
                effective and impactful outcomes for those we assist. We don't
                apply one-size-fits-all solutions — we listen, research, and
                design specifically for each community.
              </p>

              <Link
                to="/programs"
                className="inline-block mt-8 px-6 py-3 bg-[#2E86DE] text-white font-bold rounded-sm text-sm transition-colors duration-200 hover:bg-[#1a6fc4]"
              >
                Explore Our Programs →
              </Link>
            </div>

            {/* Right — Image */}
            <div
              className="rounded-sm overflow-hidden"
              style={{ aspectRatio: '4 / 3' }}
            >
              <img
                src="/images/community-outreach-2.jpeg"
                alt="Foundation volunteers working with community members"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 6 · DONATE CTA
      ──────────────────────────────────────────────── */}
      <section className="bg-[#1A3557] py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">
                Join Our Mission
              </p>
              <h2
                className="text-white text-3xl md:text-4xl font-semibold mb-4"
                style={{ fontFamily: '"Lora", Georgia, serif' }}
              >
                Be Part of the Change
              </h2>
              <p className="text-white/70 text-base leading-relaxed max-w-xl">
                Help us support those in need through your generous contributions and involvement.
              </p>
            </div>

            {/* Right */}
            <div className="lg:text-right flex flex-col lg:items-end gap-4">
              <Link
                to="/donate"
                className="inline-block px-8 py-4 bg-[#2E86DE] text-white font-bold rounded transition-colors duration-200 hover:bg-[#1a6fc4]"
              >
                Donate Now →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
