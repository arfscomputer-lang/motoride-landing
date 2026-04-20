'use client'

import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

export function HeroSection() {
  const [speedLines, setSpeedLines] = useState<Array<{ id: number; top: number }>>([])

  useEffect(() => {
    const lines = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
    }))
    setSpeedLines(lines)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#04060f]/70 via-[#04060f]/40 to-[#04060f]/85" />

      {/* Speed Lines Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {speedLines.map((line) => (
          <div
            key={line.id}
            className="absolute h-px speed-line"
            style={{
              top: `${line.top}%`,
              left: 0,
              right: 0,
              background: 'linear-gradient(90deg, transparent, #00D4FF, transparent)',
              animationDelay: `${line.id * 0.25}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 md:px-10 max-w-4xl">
        {/* Tag */}
        <div className="inline-block mb-5 md:mb-6 px-5 py-1.5 border border-[#00D4FF] rounded-full text-xs md:text-sm tracking-widest uppercase text-[#00D4FF] glow-blue pulse-glow">
          La App MotoTaxi del Futuro
        </div>

        {/* Title */}
        <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl leading-none bg-gradient-to-r from-white via-[#00D4FF] to-[#FF2D55] bg-clip-text text-transparent mb-2 title-glow">
          MOTORIDE
        </h1>

        {/* Subtitle */}
        <p className="font-orbitron text-base md:text-2xl tracking-widest uppercase text-[#FF2D55] mb-6 drop-shadow-lg" style={{ textShadow: '0 0 20px #FF2D5588, 0 0 60px #FF2D5544' }}>
          Revolución del Transporte
        </p>

        {/* Description */}
        <p className="text-base md:text-xl text-opacity-80 text-white leading-relaxed max-w-lg mx-auto mb-10">
          La plataforma más rápida, segura y confiable para moto taxi en los Valles del Tuy. Descarga la app ahora y comienza tu viaje.
        </p>

        {/* Countdown */}
        <Countdown />

        {/* QR Section */}
        <QRSection />
      </div>
    </section>
  )
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const launchDate = process.env.NEXT_PUBLIC_LAUNCH_DATE
      if (!launchDate) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const target = new Date(launchDate).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mb-8">
      <p className="text-xs tracking-widest uppercase text-[#8892A4] mb-3">Lanzamiento en</p>
      <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
        {[
          { value: timeLeft.days, label: 'Días' },
          { value: timeLeft.hours, label: 'Horas' },
          { value: timeLeft.minutes, label: 'Minutos' },
          { value: timeLeft.seconds, label: 'Segundos' },
        ].map((unit) => (
          <div
            key={unit.label}
            className="bg-[#00D4FF]/5 border border-[#00D4FF]/25 rounded-3xl px-5 md:px-6 py-4 min-w-20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/8 to-transparent" />
            <p className="font-orbitron font-bold text-3xl md:text-4xl text-[#00D4FF] leading-none relative z-10 glow-blue">
              {String(unit.value).padStart(2, '0')}
            </p>
            <p className="text-xs tracking-widest uppercase text-[#8892A4] mt-1.5 relative z-10">
              {unit.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function QRSection() {
  const [qrValue, setQrValue] = useState('https://motoride.app')

  return (
    <div className="flex items-center justify-center gap-6 flex-wrap">
      <div className="bg-white rounded-3xl p-3.5 glow-blue border-2 border-[#00D4FF]">
        <QRCodeSVG
          value={qrValue}
          size={128}
          level="H"
          includeMargin={false}
          className="w-32 h-32"
        />
      </div>

      <div className="flex flex-col gap-3 text-left">
        <p className="text-xs md:text-sm tracking-widest uppercase text-[#8892A4]">Descargar Ahora</p>

        <a
          href={process.env.NEXT_PUBLIC_WHATSAPP_URL || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#0088AA] text-white font-orbitron font-bold text-sm tracking-widest uppercase glow-blue hover:shadow-lg hover:translate-y-[-3px] transition-all"
        >
          <span>📱</span>
          <span>WhatsApp</span>
        </a>

        {process.env.NEXT_PUBLIC_APK_URL && (
          <a
            href={process.env.NEXT_PUBLIC_APK_URL}
            download
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-transparent text-[#FF2D55] font-orbitron font-semibold text-sm tracking-widest uppercase border border-[#FF2D55] glow-red hover:bg-[#FF2D55]/10 hover:translate-y-[-3px] transition-all"
          >
            <span>⬇️</span>
            <span>APK</span>
          </a>
        )}
      </div>
    </div>
  )
}
