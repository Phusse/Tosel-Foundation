import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

/* ══════════════════════════════════════════════════════
   CONTACT DETAILS DATA
══════════════════════════════════════════════════════ */
const contactCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
        <path d="m2 4 10 8 10-8"/>
      </svg>
    ),
    label: 'Email Us',
    value: 'info@toselfoundation.org',
    href: 'mailto:info@toselfoundation.org',
    sub: 'We reply within 48 hours',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Visit Us',
    value: 'Lagos, Nigeria',
    href: null,
    sub: 'Contact us for full address',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Call Us',
    value: '08033817413',
    href: 'tel:+2348033817413',
    sub: 'Monday – Friday, 9am – 5pm',
  },
]

/* ══════════════════════════════════════════════════════
   SOCIAL DATA
══════════════════════════════════════════════════════ */
const socials = [
  { 
    label: 'Facebook',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    href: '#' 
  },
  { 
    label: 'Instagram',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    href: '#' 
  },
  { 
    label: 'Twitter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    href: '#' 
  },
  { 
    label: 'WhatsApp',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
    href: '#' 
  },
]

/* ══════════════════════════════════════════════════════
   FAQ DATA
══════════════════════════════════════════════════════ */
const faqs = [
  {
    q: 'How can I support Tosel Foundation?',
    a: 'You can support us through donations, volunteering, or participating in our community programs. Every contribution makes a real difference.',
  },
  {
    q: 'What programs does Tosel Foundation offer?',
    a: 'We offer three core programs: Education Support, Health Outreach, and Community Development. Visit our Programs page for full details.',
  },
  {
    q: 'How do I apply for assistance?',
    a: "Fill in the contact form on this page and select 'General Enquiry', or email us at info@toselfoundation.org with details about your situation.",
  },
  {
    q: 'Is my donation tax-deductible?',
    // TODO: Add real answer based on foundation's registered status.
    a: 'Please contact us at info@toselfoundation.org for information about the tax implications of your donation based on your location.',
  },
  {
    q: 'Where can I learn about upcoming events?',
    a: 'Follow us on social media and check back on our website for announcements about upcoming programs and community events.',
  },
]

/* ══════════════════════════════════════════════════════
   FAQ ACCORDION ITEM
══════════════════════════════════════════════════════ */
function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border border-[#E8E5DC] rounded-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-[#FAF8F4] transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-[#1A3557] text-sm font-semibold pr-4">{q}</span>
        <span
          className={`shrink-0 text-[#2E86DE] text-xl font-bold transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* Animated answer panel */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '200px' : '0px' }}
      >
        <p className="px-5 py-4 text-[#6B6B64] text-sm leading-relaxed border-t border-[#E8E5DC] bg-white">
          {a}
        </p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   CONTACT PAGE
══════════════════════════════════════════════════════ */
export default function Contact() {
  /* ── Form state ───────────────────────────────────── */
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', type: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  /* ── FAQ accordion state ──────────────────────────── */
  const [openFaq, setOpenFaq] = useState(null)

  /* ── Handlers ─────────────────────────────────────── */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect form to Formspree, EmailJS, or backend API
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', type: '', message: '' })
    setSubmitted(false)
  }

  const toggleFaq = (i) => setOpenFaq((prev) => (prev === i ? null : i))

  /* ── Shared input classes ─────────────────────────── */
  const inputBase = `
    w-full bg-[#FAF8F4] border border-[#E8E5DC] rounded-sm px-4 py-3
    text-sm text-[#1A3557] placeholder-[#B0AFA5]
    focus:outline-none focus:border-[#1A3557] focus:bg-white
    transition-colors duration-200
  `

  return (
    <>
      {/* ────────────────────────────────────────────────
          SECTION 1 · PAGE HERO
      ──────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Reach Out"
        title="Get In Touch"
        subtitle="Connect with us to learn how we can make a difference together in our communities."
      />

      {/* ────────────────────────────────────────────────
          SECTION 2 · CONTACT DETAILS ROW
      ──────────────────────────────────────────────── */}
      <section className="bg-[#1A3557] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactCards.map(({ icon, label, value, href, sub }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-sm px-6 py-8 text-center"
              >
                <div className="flex justify-center text-white mb-4">{icon}</div>
                <p className="text-[#2E86DE] text-xs font-semibold uppercase tracking-widest mb-2">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-white font-medium text-sm hover:text-[#2E86DE] transition-colors duration-200 break-all"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-white font-medium text-sm">{value}</p>
                )}
                <p className="text-white/40 text-xs mt-2">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 3 · FORM + SOCIAL / FAQ
      ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* ── LEFT: Contact Form (3 cols) ─────────── */}
            <div className="lg:col-span-3">
              <SectionHeading
                eyebrow="Send a Message"
                title="How Can We Help?"
              />

              <div className="mt-10">
                {submitted ? (
                  /* Success state */
                  <div className="bg-[#E8F7EE] border border-[#C8EDD8] rounded-sm p-10 text-center">
                    <div className="text-5xl mb-4">✅</div>
                    <h3
                      className="text-[#1B5E38] text-2xl font-semibold mb-2"
                      style={{ fontFamily: '"Lora", Georgia, serif' }}
                    >
                      Message Received!
                    </h3>
                    <p className="text-[#2D7A4F] text-sm mb-6">
                      Thank you for reaching out. We'll get back to you within
                      48 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-[#1B5E38] text-white text-sm font-medium rounded-sm hover:bg-[#2D7A4F] transition-colors duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-[#1A3557] uppercase tracking-wide mb-2">
                          Full Name <span className="text-[#2E86DE]">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-[#1A3557] uppercase tracking-wide mb-2">
                          Email Address <span className="text-[#2E86DE]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className={inputBase}
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone + Topic */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-[#1A3557] uppercase tracking-wide mb-2">
                          Phone Number{' '}
                          <span className="text-[#B0AFA5] font-normal normal-case tracking-normal">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 800 000 0000"
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label htmlFor="type" className="block text-xs font-semibold text-[#1A3557] uppercase tracking-wide mb-2">
                          I'm Interested In <span className="text-[#2E86DE]">*</span>
                        </label>
                        <select
                          id="type"
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          required
                          className={`${inputBase} cursor-pointer`}
                        >
                          <option value="" disabled>Select a topic</option>
                          <option value="donation">Making a Donation</option>
                          <option value="volunteering">Volunteering</option>
                          <option value="partnership">Program Partnership</option>
                          <option value="media">Media &amp; Press</option>
                          <option value="general">General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-[#1A3557] uppercase tracking-wide mb-2">
                        Message <span className="text-[#2E86DE]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us how we can help…"
                        className={`${inputBase} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="
                        w-full py-3.5 bg-[#1A3557] text-white font-bold rounded-sm text-sm
                        transition-colors duration-200 hover:bg-[#1E4A73]
                      "
                    >
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ── RIGHT: Social + FAQ (2 cols) ─────────── */}
            <div className="lg:col-span-2 space-y-12">

              {/* Social block */}
              <div>
                <p className="text-[#2E86DE] text-xs font-semibold uppercase tracking-widest mb-3">
                  Follow Us
                </p>
                <p className="text-[#6B6B64] text-sm leading-relaxed mb-5">
                  Stay updated on our programs and impact stories.
                </p>
                <div className="flex items-center gap-3">
                  {socials.map(({ label, icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded bg-[#1A3557] flex items-center justify-center text-white hover:bg-[#2E86DE] transition-colors cursor-pointer"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E8E5DC]" />

              {/* FAQ accordion */}
              <div>
                <SectionHeading eyebrow="FAQ" title="Common Questions" />

                <div className="mt-6 space-y-3">
                  {faqs.map(({ q, a }, i) => (
                    <FaqItem
                      key={i}
                      q={q}
                      a={a}
                      isOpen={openFaq === i}
                      onToggle={() => toggleFaq(i)}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 4 · DONATE FOOTER CTA
      ──────────────────────────────────────────────── */}
      <section className="bg-[#1A3557] py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">
                Give Today
              </p>
              <h2
                className="text-white text-3xl md:text-4xl font-semibold mb-4"
                style={{ fontFamily: '"Lora", Georgia, serif' }}
              >
                Ready to Make a Difference?
              </h2>
              <p className="text-white/70 text-base leading-relaxed max-w-xl">
                Your support directly funds programs that change lives across Nigerian communities.
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
