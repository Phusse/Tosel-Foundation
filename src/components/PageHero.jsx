export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative bg-[#1A3557] overflow-hidden pt-[128px] pb-[80px] px-6">
      
      {/* ── Background Texture Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '22px 22px'
        }}
      />

      {/* ── Decorative Glows ── */}
      {/* Bottom Right Blue Glow */}
      <div
        className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(46,134,222,0.08) 0%, transparent 70%)'
        }}
      />
      
      {/* Top Left White Glow */}
      <div
        className="absolute top-10 left-10 w-[150px] h-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)'
        }}
      />

      {/* ── Content Container ── */}
      <div className="relative mx-auto max-w-7xl w-full z-10">
        
        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-[#2E86DE] text-xs font-semibold uppercase tracking-widest mb-4">
            {eyebrow}
          </p>
        )}

        {/* H1 */}
        <h1
          className="text-white font-semibold leading-[1.1] text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          style={{ fontFamily: '"Lora", Georgia, serif' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/70 text-lg leading-relaxed max-w-[36rem] mt-5">
            {subtitle}
          </p>
        )}

        {/* Decorative Taper */}
        <div className="flex items-center gap-1.5 mt-10">
          <span className="block w-12 h-[2px] rounded-[1px] bg-[#2E86DE]" aria-hidden="true" />
          <span className="block w-6 h-[2px] rounded-[1px] bg-[#2E86DE]/50" aria-hidden="true" />
          <span className="block w-3 h-[2px] rounded-[1px] bg-[#2E86DE]/25" aria-hidden="true" />
        </div>

      </div>
    </section>
  )
}
