# Customizaciones y Animaciones - MotoRide

## Variables CSS Personalizadas

En `app/globals.css` encontrarás todas las variables personalizadas del diseño:

```css
:root {
  --neon-blue: #00D4FF;        /* Azul neon principal */
  --neon-red: #FF2D55;         /* Rojo neon secundario */
  --neon-purple: #BF5FFF;      /* Púrpura neon */
  --bg-dark: #04060F;          /* Fondo oscuro principal */
  --bg-card: rgba(255,255,255,0.04); /* Fondo de tarjetas */
  --text-white: #F0F4FF;       /* Texto principal */
  --text-muted: #8892A4;       /* Texto secundario */
  --glow-blue: 0 0 20px #00D4FF88, 0 0 60px #00D4FF44;  /* Efecto glow azul */
  --glow-red: 0 0 20px #FF2D5588, 0 0 60px #FF2D5544;   /* Efecto glow rojo */
}
```

## Cambiar Colores

### Cambiar el color principal (Azul)

1. Edita `globals.css`:
```css
--neon-blue: #00FF00;  /* Cambia a verde */
```

2. O en el componente específico:
```tsx
className="text-[#00FF00] glow-blue"
```

### Cambiar el color de acento (Rojo)

```css
--neon-red: #FF00FF;   /* Cambia a magenta */
```

## Animaciones Disponibles

### 1. Speed Lines (Líneas de velocidad)

Animación que crea efecto de movimiento de derecha a izquierda.

```css
@keyframes speedLine {
  0% { transform: translateX(-100%); opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { transform: translateX(100vw); opacity: 0; }
}
```

**Uso:**
```tsx
<div className="speed-line" />
```

**Personalizar duración:**
```tsx
<div 
  className="speed-line" 
  style={{ animationDuration: '3s' }}  // Por defecto es 2s
/>
```

### 2. Title Glow (Brillo del título)

Efecto de parpadeo/brillo para títulos principales.

```css
@keyframes titleGlow {
  0%, 100% { filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.4)); }
  50% { filter: drop-shadow(0 0 50px rgba(0, 212, 255, 0.8)); }
}
```

**Uso:**
```tsx
<h1 className="title-glow">MOTORIDE</h1>
```

### 3. Pulse (Pulso suave)

Efecto de transparencia pulsante.

```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

**Uso:**
```tsx
<div className="pulse-glow">Contenido</div>
```

### 4. Blink Dot (Punto parpadeante)

Efecto de punto que parpadea y cambia de tamaño.

```css
@keyframes blinkDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.4); }
}
```

**Uso:**
```tsx
<div className="blink-dot">●</div>
```

## Efectos Glow (Resplandor)

### Glow Azul

```tsx
<div className="glow-blue">
  Elemento con brillo azul
</div>
```

Renderiza:
```css
box-shadow: 0 0 20px #00D4FF88, 0 0 60px #00D4FF44;
```

### Glow Rojo

```tsx
<div className="glow-red">
  Elemento con brillo rojo
</div>
```

Renderiza:
```css
box-shadow: 0 0 20px #FF2D5588, 0 0 60px #FF2D5544;
```

### Crear un nuevo Glow personalizado

En `globals.css`:

```css
.glow-purple {
  box-shadow: 0 0 20px #BF5FFF88, 0 0 60px #BF5FFF44;
}
```

Uso:
```tsx
<div className="glow-purple">Contenido</div>
```

## Personalizar Animaciones

### Cambiar duración de una animación

```tsx
<div 
  className="title-glow"
  style={{ animationDuration: '5s' }}  // De 3s a 5s
>
  Título
</div>
```

### Cambiar timing function

```tsx
<div 
  className="pulse-glow"
  style={{ animationTimingFunction: 'ease-out' }}
>
  Contenido
</div>
```

### Pausar una animación

```tsx
<div 
  className="speed-line"
  style={{ animationPlayState: 'paused' }}
/>
```

### Crear una animación nueva

Ejemplo: Rotación

```css
/* En globals.css */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.rotate-animation {
  animation: rotate 4s linear infinite;
}
```

Uso:
```tsx
<div className="rotate-animation">⚙️</div>
```

## Gradientes

### Gradiente en texto (usado en el título)

```tsx
<h1 className="bg-gradient-to-r from-white via-[#00D4FF] to-[#FF2D55] bg-clip-text text-transparent">
  MOTORIDE
</h1>
```

Personalizar:
```tsx
<h1 className="bg-gradient-to-b from-[#FF2D55] via-[#BF5FFF] to-[#00D4FF] bg-clip-text text-transparent">
  Gradiente vertical
</h1>
```

### Gradiente de fondo

```tsx
<div className="bg-gradient-to-r from-[#00D4FF] to-[#0088AA]">
  Contenido
</div>
```

## Velocidad de línea personalizada

Para cambiar la velocidad de las líneas en hero-section:

```tsx
// En components/hero-section.tsx
<div
  className="absolute h-px speed-line"
  style={{
    animationDelay: `${line.id * 0.5}s`,  // Aumenta el delay
    animationDuration: '5s'  // Aumenta la duración
  }}
/>
```

## Efectos de Hover

### Hover con transformación

```tsx
<button className="hover:scale-105 hover:translate-y-[-3px] transition-all">
  Botón
</button>
```

### Hover con cambio de color

```tsx
<a className="text-[#8892A4] hover:text-[#00D4FF] transition-colors">
  Link
</a>
```

### Hover con glow

```tsx
<div className="hover:glow-blue transition-all duration-300">
  Contenido
</div>
```

## Filtros CSS

### Blur

```tsx
<div className="backdrop-blur-sm">
  Fondo borroso
</div>
```

### Brightness

```tsx
<div className="brightness-125">
  Más brillante
</div>
```

### Contraste

```tsx
<div className="contrast-125">
  Más contraste
</div>
```

## Responsividad de Animaciones

Las animaciones se adaptan automáticamente según el dispositivo:

```tsx
<h1 className="text-4xl md:text-6xl lg:text-8xl title-glow">
  Texto responsivo con animación
</h1>
```

## Performance de Animaciones

Para optimizar performance:

1. **Usar `will-change` con cuidado**
```tsx
<div style={{ willChange: 'transform' }}>
  Elemento animado
</div>
```

2. **Limitar animaciones simultáneas**
```tsx
<div className="speed-line" />  {/* Una sola animación */}
```

3. **Usar `transform` en lugar de `left/top`**
```css
/* ✓ Mejor performance */
transform: translateX(100px);

/* ✗ Peor performance */
left: 100px;
```

## Debugging de Animaciones

### Ver la animación en slow-motion

En DevTools del navegador:
1. Abre Elements
2. Selecciona el elemento
3. En Animations, ajusta la velocidad a 0.1x

### Pausar animación

En DevTools:
1. Abre Elements
2. Selecciona el elemento
3. Click derecho > Inspect
4. Añade `animation-play-state: paused`

### Console para debugging

```javascript
// Ver propiedades de animación
console.log(document.querySelector('.title-glow').getAnimations())
```

## Themes Alternativos

### Theme Oscuro (por defecto)
Ya está configurado.

### Theme Claro (ejemplo)

```css
/* Agregar a globals.css */
.theme-light {
  --bg-dark: #F5F5F5;
  --text-white: #1a1a1a;
  --neon-blue: #0066CC;
}
```

Uso:
```tsx
<html className="theme-light">
  {/* Contenido */}
</html>
```

## Recursos Útiles

- [MDN Animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [Tailwind CSS](https://tailwindcss.com)
- [Keyframe Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
