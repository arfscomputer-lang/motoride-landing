'use client'

export function CoverageSection() {
  const cities = [
    { name: 'Cúa', state: 'Valles del Tuy' },
    { name: 'Los Teques', state: 'Valles del Tuy' },
    { name: 'Santa Teresa del Tuy', state: 'Valles del Tuy' },
    { name: 'Ocumare del Tuy', state: 'Valles del Tuy' },
    { name: 'Tacarigua', state: 'Valles del Tuy' },
    { name: 'La Laguneta', state: 'Valles del Tuy' },
  ]

  return (
    <section id="cobertura" className="py-20 md:py-32 px-5" style={{
      background: 'radial-gradient(ellipse at 30% 50%, #0A0418 0%, #04060F 60%)',
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-orbitron text-xs tracking-widest uppercase text-[#00D4FF] mb-3 block">
            Servicio
          </p>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl leading-tight">
            Cobertura en los Valles del Tuy
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Left: Map Visual */}
          <div className="bg-gradient-to-br from-[#00D4FF]/5 to-[#BF5FFF]/5 border border-[#00D4FF]/15 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient" style={{
              background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.08), transparent 70%)',
            }} />

            <p className="text-6xl mb-3 block relative z-10">🗺️</p>

            <h3 className="font-orbitron font-bold text-2xl text-white mb-2 relative z-10">
              Valles del Tuy
            </h3>

            <p className="text-[#8892A4] text-sm mb-6 relative z-10">
              Cobertura integral en toda la región
            </p>

            <div className="inline-block px-5 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full font-orbitron text-xs text-[#00D4FF] tracking-widest uppercase relative z-10">
              6+ Ciudades
            </div>
          </div>

          {/* Right: Cities List */}
          <div className="space-y-3">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#00D4FF]/5 border border-[#00D4FF]/10 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/30 transition-all duration-300 group"
              >
                {/* Animated Dot */}
                <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 glow-blue ${idx % 2 === 0 ? 'blink-dot' : 'blink-dot'}`} style={{
                  background: idx % 2 === 0 ? '#00D4FF' : '#FF2D55',
                  boxShadow: idx % 2 === 0 ? '0 0 20px #00D4FF88, 0 0 60px #00D4FF44' : '0 0 20px #FF2D5588, 0 0 60px #FF2D5544',
                  animationDelay: idx % 2 === 0 ? '0s' : '0.5s',
                }} />

                <div>
                  <p className="font-semibold text-white">{city.name}</p>
                  <p className="text-xs text-[#8892A4]">{city.state}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
