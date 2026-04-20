import { put } from '@vercel/blob'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

interface RegistrationData {
  nombre: string
  apellido: string
  email: string
  telefono: string
  ciudad: string
  tipo: 'usuario' | 'conductor'
}

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json()

    // Validate data
    if (!data.nombre || !data.apellido || !data.email || !data.telefono || !data.ciudad) {
      return NextResponse.json(
        { error: 'Datos incompletos' },
        { status: 400 }
      )
    }

    // Create a registration record with timestamp
    const timestamp = new Date().toISOString()
    const filename = `registrations/${data.tipo}/${timestamp}-${data.email}.json`

    const registrationData = {
      ...data,
      timestamp,
      id: `${timestamp}-${Math.random().toString(36).substr(2, 9)}`,
    }

    // Save to Vercel Blob
    await put(filename, JSON.stringify(registrationData, null, 2), {
      contentType: 'application/json',
      addRandomSuffix: false,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Registro completado exitosamente',
        data: registrationData,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Error al procesar el registro' },
      { status: 500 }
    )
  }
}
