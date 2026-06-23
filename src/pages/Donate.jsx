import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

/* ══════════════════════════════════════════════════════
   DONATION TIERS
══════════════════════════════════════════════════════ */
const tiers = [
  {
    amount: '5000',
    label: '₦5,000',
    description: 'Provides school supplies for one student for a term',
  },
  {
    amount: '10000',
    label: '₦10,000',
    description: "Covers a family's health outreach visit and follow-up",
  },
  {
    amount: '20000',
    label: '₦20,000',
    description: 'Funds one health outreach session for a community',
  },
  {
    amount: '50000',
    label: '₦50,000',
    description: 'Supports a full community development micro-project',
  },
  {
    amount: '100000',
    label: '₦100,000',
    description: 'Enables a full scholarship or sustained program support',
  },
]

/* ══════════════════════════════════════════════════════
   OTHER WAYS TO GIVE
══════════════════════════════════════════════════════ */
const otherWays = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="18" height="13" rx="2"/><polyline points="3 9 12 2 21 9"/>
        <line x1="9" y1="22" x2="9" y2="13"/><line x1="15" y1="22" x2="15" y2="13"/>
      </svg>
    ),
    title: 'Bank Transfer',
    body: 'Prefer a direct transfer? Contact us at info@toselfoundation.org for our bank account details.',
    cta: 'Email Us',
    to: 'mailto:info@toselfoundation.org',
    isExternal: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    title: 'Volunteer Your Time',
    body: 'Skills, time, and presence matter as much as money. Join us in the field or support from your location.',
    cta: 'Get Involved',
    to: '/contact',
    isExternal: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Corporate Partnership',
    body: 'Organisations can partner with us for CSR programs, matched giving, or co-branded community initiatives.',
    cta: 'Contact Us',
    to: '/contact',
    isExternal: false,
  },
]

export default function Donate() {
  /* ── State ────────────────────────────────────────── */
  const [selectedTier, setSelectedTier] = useState(null)
  const [customAmount, setCustomAmount] = useState('')

  /* ── Handlers ─────────────────────────────────────── */
  const handleTierClick = (amount) => {
    setSelectedTier(amount)
    setCustomAmount('') // Clear custom if they pick a pill
  }

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value)
    setSelectedTier(null) // Clear pill if they type custom
  }

  /* ── Derived state ────────────────────────────────── */
  // Determine which description to show
  const activeTierObj = tiers.find((t) => t.amount === selectedTier)

  // Determine the display amount for the checkout card
  let displayAmount = '0'
  if (selectedTier) {
    displayAmount = Number(selectedTier).toLocaleString()
  } else if (customAmount) {
    displayAmount = Number(customAmount).toLocaleString()
  }

  return (
    <>
      {/* ────────────────────────────────────────────────
          SECTION 1 · PAGE HERO
      ──────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Give Today"
        title="Support Our Mission"
        subtitle="Your generosity directly funds programs that uplift communities across Nigeria."
      />

      {/* ────────────────────────────────────────────────
          SECTION 2 · DONATION OPTIONS
      ──────────────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Choose Your Impact"
            title="How Would You Like to Give?"
            center
          />

          <div className="mt-10">
            {/* Amount pills */}
            <div className="flex flex-wrap justify-center gap-4">
              {tiers.map(({ amount, label }) => {
                const isSelected = selectedTier === amount
                return (
                  <button
                    key={amount}
                    onClick={() => handleTierClick(amount)}
                    className={`
                      px-6 py-3 rounded-full text-base font-bold transition-colors duration-200
                      ${
                        isSelected
                          ? 'bg-[#2E86DE] text-white'
                          : 'bg-white text-[#1A3557] border border-[#1A3557] hover:bg-[#1A3557] hover:text-white'
                      }
                    `}
                  >
                    {label}
                  </button>
                )
              })}
            </div>

            {/* Custom amount */}
            <div className="mt-8 max-w-sm mx-auto">
              <label htmlFor="customAmount" className="block text-sm text-[#6B6B64] font-medium mb-2">
                Or enter a custom amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A3557] font-bold">
                  ₦
                </span>
                <input
                  id="customAmount"
                  type="number"
                  min="0"
                  step="1000"
                  value={customAmount}
                  onChange={handleCustomChange}
                  placeholder="0.00"
                  className="
                    w-full bg-white border border-[#E8E5DC] rounded-sm pl-10 pr-4 py-3
                    text-[#1A3557] text-lg font-semibold
                    focus:outline-none focus:border-[#1A3557] transition-colors
                  "
                />
              </div>
            </div>

            {/* Impact Info Box (only shows if a tier is selected) */}
            <div
              className={`
                mt-8 mx-auto max-w-lg bg-[#DAEAF9] border border-[#2E86DE] rounded-sm p-4
                transition-all duration-300 overflow-hidden
                ${activeTierObj ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 border-transparent p-0'}
              `}
            >
              {activeTierObj && (
                <p className="text-[#1a6fc4] text-sm font-semibold">
                  {activeTierObj.description}
                </p>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 3 · PAYMENT PLACEHOLDER
      ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[40rem] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Secure Payment"
            title="Complete Your Donation"
            center
          />

          {/* 
            // TODO: Integrate real payment gateway here
            // Recommended: Paystack (paystack.com) or Flutterwave (flutterwave.com)
            // Both support NGN payments with React SDKs
            // Paystack React: npm install @paystack/inline-js
            // Flutterwave React: npm install flutterwave-react-v3
          */}
          <div className="mt-10 bg-[#FAF8F4] border border-[#1A3557] rounded-sm p-8 text-center">
            
            <p className="text-[#1A3557] text-lg font-semibold mb-8">
              You are donating: <span className="text-[#2E86DE] text-2xl font-bold ml-2">₦{displayAmount}</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-[#E8E5DC] rounded-sm py-4 font-semibold text-[#1A3557] text-sm shadow-sm flex items-center justify-center">
                Paystack
              </div>
              <div className="bg-white border border-[#E8E5DC] rounded-sm py-4 font-semibold text-[#1A3557] text-sm shadow-sm flex items-center justify-center">
                Flutterwave
              </div>
              <div className="bg-white border border-[#E8E5DC] rounded-sm py-4 font-semibold text-[#1A3557] text-sm shadow-sm flex items-center justify-center">
                Bank Transfer
              </div>
            </div>

            <button
              className="
                w-full py-4 bg-[#2E86DE] text-white font-bold rounded text-base
                transition-colors duration-200 hover:bg-[#1a6fc4]
              "
            >
              Proceed to Payment →
            </button>

            <p className="text-[#6B6B64] text-xs mt-6 px-4">
              All payments are secure and encrypted. Your donation goes directly to our programs.
            </p>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          SECTION 4 · OTHER WAYS TO GIVE
      ──────────────────────────────────────────────── */}
      <section className="bg-[#1A3557] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="More Ways to Help"
            title="Other Ways to Support Us"
            light
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherWays.map(({ icon, title, body, cta, to, isExternal }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-sm p-8 flex flex-col"
              >
                <div className="text-[#2E86DE] text-4xl mb-6">{icon}</div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                  {body}
                </p>
                <div>
                  {isExternal ? (
                    <a
                      href={to}
                      className="inline-block px-6 py-2.5 bg-transparent border border-[#2E86DE] text-[#2E86DE] font-medium rounded-sm text-sm hover:bg-[#1a6fc4] hover:text-white transition-colors duration-200"
                    >
                      {cta}
                    </a>
                  ) : (
                    <Link
                      to={to}
                      className="inline-block px-6 py-2.5 bg-transparent border border-[#2E86DE] text-[#2E86DE] font-medium rounded-sm text-sm hover:bg-[#1a6fc4] hover:text-white transition-colors duration-200"
                    >
                      {cta}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
