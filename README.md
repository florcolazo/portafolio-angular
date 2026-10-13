# Portafolio (Angular)

Portafolio personal desarrollado con Angular.

## Ejecutar

```bash
npm install
npm start        # http://localhost:4200
npm run build    # genera dist/portafolio-angular/browser
```

## Personalizar

- **Contenido:** edita `src/app/data/data.json` (nombre, redes, experiencia, proyectos, formación, extras).
  - Campos opcionales en `experience`, `projects` y `training`: `technologies`, `date`, `certificate`, `image`, `url`, `github`.
  - `icon` de cada ítem: nombre de un icono de [Lucide](https://lucide.dev/icons/) (ej. `terminal`, `graduation-cap`).
  - `icon` de tecnologías: clase de [Devicon](https://devicon.dev/) (ej. `devicon-angular-plain`).
- **Imágenes y CV:** reemplaza los archivos en `public/` (`avatar.jpg`; el CV va en `data/cv.pdf` y su ruta `/data/cv.pdf` en `media.cv`).
- **Colores y formas:** variables CSS al inicio de `src/styles.css`.

## Estructura

```
src/app/
  data/data.json          ← tu contenido
  models/                 ← tipos TypeScript del JSON
  components/             ← header, media, tech-stack, info-section, info-detail, extras, footer
  app.html                ← orden de las secciones
```

## Desplegar

En Vercel/Netlify: comando de build `npm run build`, carpeta de salida `dist/portafolio-angular/browser`.
