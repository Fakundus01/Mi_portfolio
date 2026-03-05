# Facu Portfolio

## Stack
- React + Vite
- Tailwind CSS
- i18next + react-i18next

## Scripts
- `npm i`
- `npm run dev`
- `npm run build`

## Cargar tus proyectos (lo que ve el cliente)
Archivo: `src/data/projects.json`

Cada proyecto tiene:
- `category`: `web`, `ecommerce`, `systems`, `automation`, `desktop`
- `title.es` / `title.en`: nombre del proyecto
- `summary.es` / `summary.en`: explicacion breve
- `image`: ruta de captura (ej: `/projects/mi_proyecto_1.png`)
- `demoUrl`: dominio publico clickeable (si existe)
- `repoUrl`: repositorio (opcional)

## Capturas de pantalla
1. Copia tus imagenes en `public/projects/`
2. Usa la ruta en `image` dentro de `projects.json`

Ejemplo:
```json
"image": "/projects/sistema-facturacion.png"
```

## Configurar contacto
1. Defini un endpoint de Formspree (o compatible).
2. Crea `.env` con: `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx`
3. El formulario de `src/sections/Contact.jsx` enviara a ese endpoint.

## Publicarlo en la web (Vercel)
1. Sube este repo a GitHub.
2. En Vercel: `Add New > Project`.
3. Importa el repo `MI_PORTFOLIO`.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Agrega variable de entorno: `VITE_FORMSPREE_ENDPOINT`.
7. Deploy.

Vercel te genera un link publico tipo:
`https://tu-portfolio.vercel.app`
Ese link ya lo podes enviar a cualquier cliente.