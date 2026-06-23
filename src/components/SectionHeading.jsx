export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
}) {
  const titleColor = light ? 'text-white' : 'text-[#1A3557]'
  const subtitleColor = light ? 'text-white/70' : 'text-[#6B6B64]'

  return (
    <div className={center ? 'text-center' : ''}>
      
      {/* 1. Eyebrow */}
      {eyebrow && (
        <p className="text-[#2E86DE] text-xs font-semibold tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}

      {/* 2. Title Row */}
      {center ? (
        <h2
          className={`text-3xl md:text-4xl font-semibold leading-tight ${titleColor}`}
          style={{ fontFamily: '"Lora", Georgia, serif' }}
        >
          {title}
        </h2>
      ) : (
        <div className="flex items-start gap-4">
          <span
            className="block w-1 h-[1.2em] rounded-[2px] bg-[#2E86DE] shrink-0 mt-1"
            aria-hidden="true"
          />
          <h2
            className={`text-3xl md:text-4xl font-semibold leading-tight ${titleColor}`}
            style={{ fontFamily: '"Lora", Georgia, serif' }}
          >
            {title}
          </h2>
        </div>
      )}

      {/* 3. Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed max-w-[36rem] ${subtitleColor} ${
            center ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
