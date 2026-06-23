import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isHome = pathname === '/'

  /* ── Scroll listener ───────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()                        // set initial state
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Close mobile menu on route change ─────────────── */
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  /* ── Background logic ──────────────────────────────── */
  // Home: transparent → navy after scroll
  // Other pages: always navy
  const navBg = (!isHome || scrolled)
    ? 'bg-[#1A3557] shadow-md'
    : 'bg-transparent'

  /* ── Active / inactive link styles ────────────────── */
  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide transition-colors duration-200 ${
      isActive ? 'text-[#2E86DE] font-semibold' : 'text-white/80 font-medium hover:text-white'
    }`

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 h-[72px]
        transition-all duration-300
        ${navBg}
      `}
    >
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────── */}
        <Link to="/" className="flex flex-row items-center gap-3 shrink-0">
          <img
            src="/src/assets/images/foundation-logo.png"
            alt="Tosel Foundation logo"
            className="h-9 w-auto object-contain"
          />
          <span
            className="text-white text-lg leading-tight hidden sm:block"
            style={{ fontFamily: '"Lora", Georgia, serif', fontWeight: 500 }}
          >
            Tosel Foundation
          </span>
        </Link>

        {/* ── Desktop nav ──────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ── Desktop CTA ──────────────────────────────── */}
        <div className="hidden md:block">
          <Link
            to="/donate"
            className="
              inline-block px-5 py-2.5 rounded
              bg-[#FFFFFF] text-[#1A3557] font-bold text-sm
              transition-colors duration-200
              hover:bg-[#F0F4F8]
            "
          >
            Donate Now
          </Link>
        </div>

        {/* ── Hamburger (mobile) ───────────────────────── */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
        >
          {/* Bar 1 */}
          <span
            className={`
              block w-6 h-0.5 bg-white
              transition-all duration-200 origin-center
              ${menuOpen ? 'translate-y-[8px] rotate-45' : ''}
            `}
          />
          {/* Bar 2 */}
          <span
            className={`
              block w-6 h-0.5 bg-white
              transition-all duration-200
              ${menuOpen ? 'opacity-0' : ''}
            `}
          />
          {/* Bar 3 */}
          <span
            className={`
              block w-6 h-0.5 bg-white
              transition-all duration-200 origin-center
              ${menuOpen ? '-translate-y-[8px] -rotate-45' : ''}
            `}
          />
        </button>
      </div>

      {/* ── Mobile dropdown ──────────────────────────────── */}
      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-300 ease-in-out
          ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          bg-[#1A3557] border-t border-white/10
        `}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-1">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `py-3 text-sm border-b border-white/10 transition-colors duration-200 ${
                  isActive ? 'text-[#2E86DE] font-semibold' : 'text-white/80 font-medium hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/donate"
            className="
              mt-3 text-center py-3 rounded w-full
              bg-[#FFFFFF] text-[#1A3557] font-bold text-base
              transition-colors duration-200 hover:bg-[#F0F4F8]
            "
          >
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
