'use client'

export function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      icon: '📱',
      title: 'Descarga la App',
      desc: 'Obtén MotoRide en tu dispositivo móvil desde App Store o Play Store',
    },
    {
      num: '02',
      icon: '📍',
      title: 'Selecciona Ubicación',
      desc: 'Indica tu punto de partida y destino en los Valles del Tuy',
    },
    {
      num: '03',
      icon: '🏍️',
      title: 'Reserva tu Viaje',
      desc: 'Conecta con los mejores mototaxistas certificados y seguros',
    },
    {
      num: '04',
      icon: '✅',
      title: 'Disfruta tu Viaje',
      desc: 'Viaja con seguridad, rastreo en tiempo real y soporte 24/7',
    },
  ]

  return (
    <section id="como-funciona" className="py-20 md:py-32 px-5 bg-radial-gradient" style={{
      background: 'radial-gradient(ellipse at center, #080C1A 0%, #04060F 70%)',
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-orbitron text-xs tracking-widest uppercase text-[#00D4FF] mb-3 block">Proceso</p>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl leading-tight">
            Cómo Funciona MotoRide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#04060F]/50 border border-[#00D4FF]/12 rounded-3xl p-9 relative overflow-hidden hover:translate-y-[-2rem] transition-transform duration-300 group"
            >
              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" />

              <p className="font-orbitron font-black text-5xl text-[#00D4FF]/10 leading-none mb-4">
                {step.num}
              </p>

              <p className="text-3xl mb-4">{step.icon}</p>

              <h3 className="font-orbitron font-bold text-lg text-[#00D4FF] mb-3">
                {step.title}
              </h3>

              <p className="text-[#8892A4] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
