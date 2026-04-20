'use client'

import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    ciudad: '',
    tipo: 'usuario',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Error al registrar')

      setSubmitted(true)
      setFormData({ nombre: '', apellido: '', email: '', telefono: '', ciudad: '', tipo: 'usuario' })

      toast({
        title: 'Éxito',
        description: '¡Registro completado! Te contactaremos pronto.',
      })

      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un problema al registrar. Intenta de nuevo.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const benefits = [
    '✓ Acceso prioritario a la plataforma',
    '✓ Soporte técnico 24/7 dedicado',
    '✓ Bonificaciones y promociones especiales',
    '✓ Comunidad exclusiva de usuarios',
  ]

  return (
    <section id="registro" className="py-20 md:py-32 px-5 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #040608 0%, #080412 50%, #040608 100%)',
    }}>
      {/* Background blur */}
      <div className="absolute top-[-200px] right-[-200px] w-96 h-96 rounded-full bg-gradient-to-br from-[#FF2D55]/8 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-orbitron text-xs tracking-widest uppercase text-[#00D4FF] mb-3 block">
            Únete Ahora
          </p>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl leading-tight">
            Regístrate en MotoRide
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left: Benefits */}
          <div className="relative z-10">
            <h3 className="font-orbitron font-bold text-2xl text-[#FF2D55] mb-6">
              Beneficios Exclusivos
            </h3>

            <ul className="space-y-3.5">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[#8892A4] text-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF2D55] flex-shrink-0 glow-red" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-white/3 border border-[#FF2D55]/20 rounded-3xl p-9 relative overflow-hidden">
            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF2D55] to-transparent" />

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#8892A4] mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-[#8892A4]/50 focus:border-[#FF2D55] focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/15 transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#8892A4] mb-2">
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-[#8892A4]/50 focus:border-[#FF2D55] focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/15 transition-all"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#8892A4] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-[#8892A4]/50 focus:border-[#FF2D55] focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/15 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#8892A4] mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-[#8892A4]/50 focus:border-[#FF2D55] focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/15 transition-all"
                    placeholder="+58 412 1234567"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#8892A4] mb-2">
                      Ciudad
                    </label>
                    <select
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-[#FF2D55] focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/15 transition-all"
                    >
                      <option value="">Selecciona una ciudad</option>
                      <option value="cua">Cúa</option>
                      <option value="los-teques">Los Teques</option>
                      <option value="santa-teresa">Santa Teresa del Tuy</option>
                      <option value="ocumare">Ocumare del Tuy</option>
                      <option value="tacarigua">Tacarigua</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#8892A4] mb-2">
                      Tipo de Registro
                    </label>
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-[#FF2D55] focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/15 transition-all"
                    >
                      <option value="usuario">Usuario</option>
                      <option value="conductor">Conductor</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-[#FF2D55] to-[#AA1133] border-none rounded-full text-white font-orbitron font-bold text-sm tracking-widest uppercase cursor-pointer transition-all glow-red hover:translate-y-[-3px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Registrando...' : 'Registrarse Ahora'}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <p className="font-orbitron text-[#00D4FF] text-lg">
                  ¡Gracias por Registrarte!
                </p>
                <p className="text-[#8892A4] text-sm mt-2">
                  Te enviaremos más información pronto.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
