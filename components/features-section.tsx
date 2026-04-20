'use client'

export function FeaturesSection() {
  const features = [
    {
      icon: '🔒',
      title: 'Seguridad Verificada',
      desc: 'Todos nuestros conductores están certificados y verificados',
    },
    {
      icon: '📍',
      title: 'Rastreo en Tiempo Real',
      desc: 'Conoce la ubicación exacta de tu mototaxista en todo momento',
    },
    {
      icon: '⚡',
      title: 'Rápido y Eficiente',
      desc: 'Viajes más cortos y directos por los Valles del Tuy',
    },
    {
      icon: '💰',
      title: 'Precios Justos',
      desc: 'Tarifas transparentes sin sorpresas al final del viaje',
    },
    {
      icon: '🎯',
      title: 'Disponibilidad 24/7',
      desc: 'Llamada a mototaxista cuando lo necesites, cuando lo necesites',
    },
    {
      icon: '👨‍💼',
      title: 'Soporte Premium',
      desc: 'Atención al cliente dedicada y soporte técnico inmediato',
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 px-5 bg-gradient-to-br from-[#060A18] to-[#08040C]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-orbitron text-xs tracking-widest uppercase text-[#00D4FF] mb-3 block">
            Ventajas
          </p>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl leading-tight mb-6">
            Características Principales
          </h2>
          <p className="text-[#8892A4] text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para viajar seguro y cómodo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/3 border border-white/7 rounded-2xl p-7 flex gap-4 items-start hover:border-[#00D4FF]/25 hover:bg-[#00D4FF]/4 transition-all duration-300"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00D4FF]/15 to-[#00D4FF]/5 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0 text-2xl">
                {feature.icon}
              </div>

              <div className="flex-1">
                <h3 className="font-orbitron font-semibold text-sm text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#8892A4] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
