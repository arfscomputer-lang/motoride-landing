# MotoRide Landing Page

Landing page futurista para MotoRide, la app de MotoTaxi para los Valles del Tuy. Construido con Next.js 14, Tailwind CSS y shadcn/ui.

## Features

- ⚡ **Diseño Futurista**: Estética neon con animaciones dinámicas
- 📱 **100% Responsive**: Mobile-first, totalmente adaptable a todos los dispositivos
- 🎬 **Secciones Interactivas**: Hero, video, features, cobertura, registro y más
- ⏳ **Countdown Timer**: Cuenta regresiva hasta el lanzamiento
- 📋 **Formulario de Registro**: Con validación y almacenamiento en Vercel Blob
- 🎨 **Efectos Visuales**: Speed lines, glows, pulsaciones y animaciones suaves
- 📲 **QR Code**: Integración con WhatsApp para descarga
- 🎬 **Video Embed**: Integración de videos de demostración

## Tecnología

- **Framework**: Next.js 14 (App Router)
- **Estilos**: Tailwind CSS v4 + CSS personalizado
- **Componentes**: shadcn/ui
- **Fuentes**: Exo 2, Orbitron (Google Fonts)
- **QR Code**: qrcode.react
- **Almacenamiento**: Vercel Blob Storage

## Variables de Entorno

Copia el archivo `.env.example` a `.env.local` y configura las siguientes variables:

```bash
# Fecha de lanzamiento en formato ISO 8601
NEXT_PUBLIC_LAUNCH_DATE=2025-06-15T00:00:00Z

# URL de WhatsApp para descargar la app
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/5842121234567

# URL del video de demostración
NEXT_PUBLIC_VIDEO_URL=https://www.youtube.com/embed/VIDEO_ID

# URL de descarga del APK (opcional)
NEXT_PUBLIC_APK_URL=https://example.com/motoride.apk

# Vercel Blob Storage (configurado automáticamente)
BLOB_READ_WRITE_TOKEN=
```

## Estructura del Proyecto

```
├── app/
│   ├── api/
│   │   └── registro/
│   │       └── route.ts          # API para guardar registros en Blob
│   ├── layout.tsx                # Layout principal
│   ├── globals.css               # Estilos globales y animaciones
│   ├── page.tsx                  # Página principal
│   └── favicon.ico
├── components/
│   ├── navbar.tsx                # Navegación superior
│   ├── hero-section.tsx          # Sección hero con countdown y QR
│   ├── video-section.tsx         # Video de demostración
│   ├── how-it-works.tsx          # Cómo funciona la app
│   ├── features-section.tsx      # Características principales
│   ├── coverage-section.tsx      # Zona de cobertura
│   ├── registration-section.tsx  # Formulario de registro
│   ├── footer.tsx                # Pie de página
│   └── ui/                       # Componentes shadcn/ui
├── tailwind.config.ts            # Configuración de Tailwind
├── tsconfig.json
├── package.json
└── .env.example
```

## Componentes Principales

### Hero Section
- Título con efecto glow animado
- Countdown timer hasta fecha de lanzamiento
- QR code con link a WhatsApp
- Botones de acción (Descargar APK, Registrarse)

### Registro
- Formulario con validación de email y teléfono
- Integración con Vercel Blob Storage
- Toast notifications
- Datos guardados en JSON con timestamp

### Secciones Adicionales
- **How It Works**: Pasos para usar la app
- **Features**: Características principales
- **Coverage**: Zona de cobertura con mapa
- **Video**: Embed de video de demostración

## Instalación

```bash
# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores

# Ejecutar dev server
pnpm dev
```

La app estará disponible en `http://localhost:3000`

## Build

```bash
# Build para producción
pnpm build

# Ejecutar build generado
pnpm start
```

## Deploy a Vercel

```bash
# Instalar Vercel CLI
pnpm install -g vercel

# Deploy
vercel

# Con variables de entorno
vercel env pull
vercel deploy
```

## Almacenamiento de Registros

Los registros se guardan automáticamente en Vercel Blob Storage con la estructura:

```json
{
  "registros": [
    {
      "nombre": "Juan Pérez",
      "email": "juan@example.com",
      "telefono": "+58 412-1234567",
      "timestamp": "2025-03-15T10:30:00Z"
    }
  ]
}
```

## Animaciones y Efectos

### CSS Animations
- `speedLine`: Líneas de velocidad moviéndose
- `titleGlow`: Efecto glow pulsante en títulos
- `blinkDot`: Puntos parpadeantes
- `pulse`: Efecto de pulso general

### Estilos Personalizados
- `glow-blue`: Sombra azul neon
- `glow-red`: Sombra roja neon
- Variables CSS para colores, fondos y efectos

## Responsividad

El diseño es 100% mobile-first:
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grillas y flexbox responsive
- Imágenes y tipografía adaptable
- Navegación móvil optimizada

## Navegadores Soportados

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Licencia

Privado - MotoRide Inc.

## Contacto

Para preguntas o soporte: contacto@motoride.app
