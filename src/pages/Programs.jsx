import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

/* ══════════════════════════════════════════════════════
   PROGRAMS DATA
══════════════════════════════════════════════════════ */
const programs = [
  {
    badge: '01 · Education',
    title: 'Education Support',
    description:
      'Our education support program provides resources, mentorship, and scholarships to empower students and enhance learning opportunities. Access to quality education is one of the most powerful tools for breaking cycles of poverty.',
    whatWeDo: [
      'Scholarships & bursaries',
      'Learning materials supply',
      'Mentorship matching',
      'Literacy campaigns',
      'Teacher support resources',
    ],
    // TODO: Add real number — e.g. X students supported
    impactLine: 'Impacting students across our communities',
    img: '/images/education-program.jpeg',
    imgAlt: 'Students in education support program',
    bg: 'bg-white',
  },
  {
    badge: '02 · Health',
    title: 'Health Outreach',
    description:
      'Through health outreach initiatives, we connect communities with essential health services and promote wellness and preventive care. Many Nigerian communities lack access to even basic healthcare — we bridge that gap.',
    whatWeDo: [
      'Medical outreach events',
      'Maternal health support',
      'Disease prevention campaigns',
      'Health worker training',
      'Wellness education',
    ],
    // TODO: Add real number — e.g. X people reached
    impactLine: 'Connecting communities to essential health services',
    img: '/images/health-outreach-1.jpeg',
    imgAlt: 'Health outreach program in the community',
    bg: 'bg-[#FAF8F4]',
  },
  {
    badge: '03 · Development',
    title: 'Community Development',
    description:
      'Our community development projects focus on sustainable practices to improve living conditions and enhance local economies. Sustainable communities need more than short-term relief — we build lasting local capacity.',
    whatWeDo: [
      'Skills & vocational training',
      'Local infrastructure support',
      "Women's economic empowerment",
      'Youth development programs',
      'Community partnership building',
    ],
    // TODO: Add real number — e.g. X projects completed
    impactLine: 'Building sustainable community capacity',
    img: '/images/community-dev.jpeg',
    imgAlt: 'Community development project in progress',
    bg: 'bg-white',
  },
]

/* ══════════════════════════════════════════════════════
   DONATION TIERS
   // TODO: Adjust these amounts to reflect real program costs
══════════════════════════════════════════════════════ */
const tiers = [
  {
    amount: '₦5,000',
    description: 'Provides school supplies for one student for a term',
  },
  {
    amount: '₦20,000',
    description: 'Funds one health outreach session for a community',
  },
  {
    amount: '₦50,000',
    description: 'Supports a full community development micro-project',
  },
  {
    amount: '₦100,000+',
    description: 'Enables a scholarship or sustained program support',
  },
]

/* ══════════════════════════════════════════════════════
   GALLERY IMAGES
══════════════════════════════════════════════════════ */
const gallery = [
  {
    src: '/images/community-outreach-2.jpeg',
    alt: 'Foundation volunteers working with community members',
  },
  {
    src: '/images/health-outreach-2.jpeg',
    alt: 'Community members receiving health services',
  },
  {
    src: '/images/community-outreach-1.jpeg',
    alt: 'Foundation team during community outreach program',
  },
]

export default function Programs() {
  // useState available for future filtering / tab interactions
  const [_activeTab, setActiveTab] = useState(null)   // eslint-disable-line

  return (
    <>
      {/* ────────────────────────────────────────────────
          SECTION 1 · PAGE HERO
      ──────────────────────────────────────────────── */}
      <PageHero
        eyebrow="What We Do"
        title="Our Programs"
        subtitle="Three core areas of focus. Real impact in Nigerian communities."
      />

      {/* ────────────────────────────────────────────────
          SECTION 2 · PROGRAMS INTRO
      ──────────────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Initiatives"
            title="Discover the Various Programs We Offer"
            subtitle="We uplift and support individuals and communities through focused, evidence-based programs."
            center
          />
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTIONS 3, 4, 5 · THREE PROGRAM FEATURES
      ──────────────────────────────────────────────── */}
      {programs.map(
        ({ badge, title, description, whatWeDo, impactLine, img, imgAlt, bg }, i) => {
          const isOdd     = i % 2 !== 0
          const imgOffset = isOdd
            ? 'absolute -bottom-4 -left-4 border-[#1A3557]'
            : 'absolute -bottom-4 -right-4 border-[#2E86DE]'

          return (
            <section key={title} className={`${bg} py-24`}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                  className={`
                    grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
                    ${isOdd ? 'lg:[direction:rtl]' : ''}
                  `}
                >
                  {/* Text block — always normal reading direction */}
                  <div className={isOdd ? 'lg:[direction:ltr]' : ''}>
                    {/* Badge */}
                    <span className="inline-block mb-4 text-[#2E86DE] text-xs font-semibold uppercase tracking-widest">
                      {badge}
                    </span>

                    {/* Title */}
                    <h2
                      className="text-[#1A3557] text-3xl sm:text-4xl font-semibold mb-4 leading-tight"
                      style={{ fontFamily: '"Lora", Georgia, serif' }}
                    >
                      {title}
                    </h2>

                    {/* Description */}
                    <p className="text-[#6B6B64] leading-relaxed mb-8">
                      {description}
                    </p>

                    {/* What We Do list */}
                    <div className="mb-6">
                      <p className="text-[#1A3557] text-sm font-semibold uppercase tracking-wide mb-3">
                        What We Do
                      </p>
                      <ul className="space-y-2">
                        {whatWeDo.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="text-[#2E86DE] font-bold mt-0.5 shrink-0">
                              ✓
                            </span>
                            <span className="text-[#6B6B64] text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact line */}
                    <p className="text-[#2E86DE] text-sm italic mb-8">
                      {impactLine}
                    </p>

                    {/* CTA */}
                    <Link
                      to="/donate"
                      className="inline-block px-6 py-3 bg-[#2E86DE] text-white font-bold rounded-sm text-sm transition-colors duration-200 hover:bg-[#1a6fc4]"
                    >
                      Support This Program
                    </Link>
                  </div>

                  {/* Image block */}
                  <div className={`relative ${isOdd ? 'lg:[direction:ltr]' : ''}`}>
                    <div
                      className="relative w-full overflow-hidden rounded-sm"
                      style={{ height: '420px' }}
                    >
                      <img
                        src={img}
                        alt={imgAlt}
                        className={`w-full h-full object-cover bg-[#1A3557] ${
                          img.includes('community-dev.jpeg') ? 'object-[center_20%]' : 'object-center'
                        }`}
                      />
                    </div>
                    {/* Offset decorative border — alternates sides */}
                    <div
                      aria-hidden="true"
                      className={`w-20 h-20 rounded-sm border-2 -z-10 ${imgOffset}`}
                    />
                  </div>

                </div>
              </div>
            </section>
          )
        },
      )}

      {/* ────────────────────────────────────────────────
          SECTION 6 · HOW YOUR DONATION HELPS
      ──────────────────────────────────────────────── */}
      <section className="bg-[#1A3557] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Make a Difference"
            title="How Your Donation Helps"
            light
            center
          />

          {/* TODO: Adjust these amounts to reflect real program costs */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map(({ amount, description }) => (
              <div
                key={amount}
                className="
                  group bg-white/5 border border-white/10 rounded-sm p-7
                  transition-all duration-300
                  hover:bg-white/10 hover:border-[#2E86DE]
                "
              >
                <p
                  className="text-[#2E86DE] text-3xl font-semibold mb-4 leading-none"
                  style={{ fontFamily: '"Lora", Georgia, serif' }}
                >
                  {amount}
                </p>
                <p className="text-white text-sm leading-relaxed mb-6">
                  {description}
                </p>
                <Link
                  to="/donate"
                  className="text-[#2E86DE] text-xs font-semibold uppercase tracking-wide hover:underline"
                >
                  Donate at this level →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 7 · IMPACT GALLERY
      ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="In The Field"
            title="Our Work in Action"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map(({ src, alt }) => (
              <div
                key={src}
                className="relative overflow-hidden rounded-sm group"
                style={{ height: '320px' }}
              >
                <img
                  src={src}
                  alt={alt}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-[#1A3557] ${
                    src.includes('health-outreach-2.jpeg') ? 'object-[center_30%]' : 'object-center'
                  }`}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 8 · BOTTOM CTA
      ──────────────────────────────────────────────── */}
      <section className="bg-[#1A3557] py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">
                Support Our Work
              </p>
              <h2
                className="text-white text-3xl md:text-4xl font-semibold mb-4"
                style={{ fontFamily: '"Lora", Georgia, serif' }}
              >
                Every Program Runs on Community Support
              </h2>
              <p className="text-white/70 text-base leading-relaxed max-w-xl">
                Your donation directly funds education, health, and community development across Nigeria.
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
