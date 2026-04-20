'use client'

export function VideoSection() {
  return (
    <section id="video" className="py-20 md:py-32 px-5 bg-gradient-to-b from-[#04060F] via-[#080C1A] to-[#04060F]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-orbitron text-xs tracking-widest uppercase text-[#00D4FF] mb-3 block">Experiencia</p>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl leading-tight mb-5">
            Mira Cómo Funciona
          </h2>
          <p className="text-[#8892A4] text-lg max-w-2xl mx-auto">
            Descubre la experiencia completa de MotoRide en solo 2 minutos
          </p>
        </div>

        {/* Video Wrapper */}
        <div className="rounded-3xl overflow-hidden border border-[#00D4FF]/20 glow-blue max-w-4xl mx-auto">
          {process.env.NEXT_PUBLIC_VIDEO_URL ? (
            <iframe
              src={process.env.NEXT_PUBLIC_VIDEO_URL}
              className="w-full aspect-video"
              allowFullScreen
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <div className="w-full aspect-video bg-[#08040C] flex items-center justify-center">
              <p className="text-[#8892A4]">Video no disponible</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
