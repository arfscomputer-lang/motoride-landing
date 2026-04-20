'use client'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#020306] px-5 py-12 md:py-16 border-t border-white/6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-orbitron font-black text-2xl md:text-3xl bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent mb-3">
          MOTORIDE
        </h2>

        <p className="text-[#8892A4] text-sm md:text-base mb-8">
          La revolución del transporte en los Valles del Tuy
        </p>

        <div className="flex gap-6 md:gap-8 justify-center flex-wrap mb-8">
          <a
            href="#hero"
            className="text-[#8892A4] text-sm hover:text-[#00D4FF] transition-colors"
          >
            Inicio
          </a>
          <a
            href="#como-funciona"
            className="text-[#8892A4] text-sm hover:text-[#00D4FF] transition-colors"
          >
            Cómo Funciona
          </a>
          <a
            href="#features"
            className="text-[#8892A4] text-sm hover:text-[#00D4FF] transition-colors"
          >
            Características
          </a>
          <a
            href="#registro"
            className="text-[#8892A4] text-sm hover:text-[#00D4FF] transition-colors"
          >
            Registro
          </a>
        </div>

        <p className="text-[#888A94]/50 text-xs">
          © {year} MotoRide. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
