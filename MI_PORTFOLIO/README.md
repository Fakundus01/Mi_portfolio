# Facu Portfolio

## Stack
- React + Vite
- Tailwind CSS
- i18next + react-i18next

## Scripts
- `npm i`
- `npm run dev`
- `npm run build`

## Edición de contenido
- Textos: `src/i18n/locales/es.json` y `src/i18n/locales/en.json`
- Proyectos: `src/data/projects.json`

## Configurar contacto
1. Definí un endpoint de Formspree (o compatible).
2. Creá `.env` con: `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx`
3. El formulario de `src/sections/Contact.jsx` enviará a ese endpoint.

## Deploy en Vercel
1. Subí este repo a GitHub.
2. En Vercel, importá el proyecto.
3. Configurá la variable `VITE_FORMSPREE_ENDPOINT`.
4. Deploy automático con cada push a la rama principal.
