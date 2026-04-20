# Guía de Configuración - MotoRide Landing Page

## Requisitos Previos

- Node.js 18+ 
- pnpm 8+ (o npm/yarn)
- Git
- Vercel CLI (para deploy)

## Instalación Local

### 1. Clonar el Repositorio

```bash
git clone <repository-url>
cd motoride-landing
```

### 2. Instalar Dependencias

```bash
pnpm install
# o
npm install
# o
yarn install
```

### 3. Configurar Variables de Entorno

Copia el archivo `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Edita `.env.local` y completa las siguientes variables:

#### NEXT_PUBLIC_LAUNCH_DATE
Fecha de lanzamiento en formato ISO 8601. Ejemplo:
```
NEXT_PUBLIC_LAUNCH_DATE=2025-06-15T00:00:00Z
```

#### NEXT_PUBLIC_WHATSAPP_URL
URL de WhatsApp para la descarga de la app. Formato:
```
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/58XXXXXXXXXXX
```

Reemplaza:
- `58` = código de país (Venezuela)
- `XXXXXXXXXXX` = número de teléfono sin símbolos

Ejemplo completo:
```
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/584121234567
```

#### NEXT_PUBLIC_VIDEO_URL
URL del video de demostración. Puede ser:
- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO_ID`
- Otro hosting de video

Ejemplo:
```
NEXT_PUBLIC_VIDEO_URL=https://www.youtube.com/embed/dQw4w9WgXcQ
```

#### NEXT_PUBLIC_APK_URL (Opcional)
URL de descarga del APK. Si no está definida, el botón "Descargar APK" no será visible.

```
NEXT_PUBLIC_APK_URL=https://storage.googleapis.com/motoride-app/motoride.apk
```

#### BLOB_READ_WRITE_TOKEN
Token para Vercel Blob Storage. Se configura automáticamente cuando conectas Vercel Blob.

### 4. Ejecutar en Desarrollo

```bash
pnpm dev
```

La app estará disponible en `http://localhost:3000`

## Deploy en Vercel

### Opción 1: Desde la CLI

```bash
# Instalar Vercel CLI si no lo tienes
npm i -g vercel

# Deploy (requiere estar logueado en Vercel)
vercel

# Seguir las instrucciones interactivas
```

### Opción 2: Desde GitHub

1. Conecta tu repositorio GitHub a Vercel
2. En Vercel Dashboard, ve a Project Settings > Environment Variables
3. Agrega las siguientes variables:
   - `NEXT_PUBLIC_LAUNCH_DATE`
   - `NEXT_PUBLIC_WHATSAPP_URL`
   - `NEXT_PUBLIC_VIDEO_URL`
   - `NEXT_PUBLIC_APK_URL` (opcional)
   - `BLOB_READ_WRITE_TOKEN` (se genera automáticamente con Vercel Blob)

4. Cada push a `main` realizará un deploy automático

### Opción 3: Vercel Blob Storage

1. En Vercel Dashboard, ve a Storage > Create Database
2. Selecciona "Blob" 
3. Sigue las instrucciones para crear y conectar
4. El token se configurará automáticamente en las variables de entorno

## Verificación del Setup

Después de la instalación, verifica que todo funcione:

```bash
# 1. Verificar que las dependencias estén instaladas
pnpm list | grep qrcode

# 2. Verificar que la compilación funcione
pnpm build

# 3. Verificar que el dev server inicie sin errores
pnpm dev
```

Abre `http://localhost:3000` y verifica:
- ✓ El hero section carga con animaciones
- ✓ El countdown timer funciona
- ✓ El QR code se muestra correctamente
- ✓ Los botones de WhatsApp y APK funcionan
- ✓ El formulario de registro responde
- ✓ Los links de navegación funcionan

## Estructura de Directorios

```
motoride-landing/
├── app/
│   ├── api/
│   │   └── registro/          # API route para guardar registros
│   │       └── route.ts
│   ├── globals.css            # Estilos globales y animaciones
│   ├── layout.tsx             # Layout principal
│   ├── page.tsx               # Página principal
│   └── favicon.ico
├── components/
│   ├── navbar.tsx             # Navegación
│   ├── hero-section.tsx       # Sección hero
│   ├── video-section.tsx      # Video
│   ├── how-it-works.tsx       # Instrucciones
│   ├── features-section.tsx   # Características
│   ├── coverage-section.tsx   # Cobertura
│   ├── registration-section.tsx # Formulario
│   ├── footer.tsx             # Pie de página
│   └── ui/                    # Componentes shadcn/ui
├── hooks/
│   ├── use-toast.ts           # Toast hook
│   └── use-mobile.ts
├── lib/
│   └── utils.ts               # Utilidades
├── public/                    # Archivos estáticos
├── .env.example               # Ejemplo de variables
├── .env.local                 # Variables locales (gitignored)
├── tailwind.config.ts         # Configuración Tailwind
├── tsconfig.json              # Configuración TypeScript
├── next.config.mjs            # Configuración Next.js
├── package.json
├── pnpm-lock.yaml
├── README.md
└── SETUP.md                   # Este archivo
```

## Solución de Problemas

### Error: "Cannot find module 'qrcode.react'"

```bash
# Reinstalar las dependencias
pnpm install
# o
pnpm install qrcode.react
```

### Error: "Environment variables not defined"

Asegúrate de que `.env.local` existe y contiene todas las variables requeridas:

```bash
cat .env.local
```

### El countdown no funciona

Verifica el formato de `NEXT_PUBLIC_LAUNCH_DATE`. Debe ser ISO 8601:
```
✓ Correcto: 2025-06-15T00:00:00Z
✗ Incorrecto: 2025-06-15
```

### El formulario no guarda registros

1. Verifica que Vercel Blob Storage esté configurado
2. Revisa la consola del servidor (logs de Vercel)
3. Asegúrate que `BLOB_READ_WRITE_TOKEN` esté configurado

### El QR code no carga

Verifica que `qrcode.react` esté instalado:

```bash
pnpm add qrcode.react
```

### Los estilos neon no se ven

Asegúrate que `globals.css` está siendo importado en `layout.tsx`:

```typescript
import './globals.css'
```

## Optimizaciones

### Imágenes

Para optimizar imágenes, utiliza Next.js Image component:

```typescript
import Image from 'next/image'

<Image 
  src="/image.jpg" 
  alt="Descripción" 
  width={800} 
  height={600}
/>
```

### Prerendering

Para prerenderizar páginas estáticas:

```typescript
export const revalidate = 3600 // 1 hora
```

### Caching

Los registros se cachean en Vercel Blob con el formato:
```
registrations/{tipo}/{timestamp}-{email}.json
```

## Mantenimiento

### Actualizar dependencias

```bash
pnpm update
```

### Limpiar caché

```bash
# Caché de Next.js
rm -rf .next

# node_modules
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Verificar tipos

```bash
pnpm tsc --noEmit
```

## Performance Metrics

Objetivos de performance:

- **Lighthouse**: 90+ en Accessibility, Best Practices
- **Core Web Vitals**: LCP < 2.5s, CLS < 0.1
- **Build time**: < 60s
- **Tamaño JS**: < 100KB (gzipped)

## Support

Para reportar problemas o sugerencias:

1. Abre un issue en GitHub
2. Proporciona:
   - Versión de Node.js: `node --version`
   - Versión de pnpm: `pnpm --version`
   - Error exacto con stack trace
   - Pasos para reproducir

## Licencia

Privado - MotoRide Inc.
