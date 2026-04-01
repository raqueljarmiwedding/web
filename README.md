# 💒 Página Web de Nuestra Boda

Una página web elegante y moderna para compartir los detalles de tu boda con tus invitados.

## Características Actuales

- ✅ Navegación responsiva
- ✅ Sección de inicio (Hero)
- ✅ Detalles del evento (ceremonia, recepción, ubicación)
- ✅ Galería de fotos
- ✅ Formulario RSVP funcional con almacenamiento local
- ✅ Diseño responsivo (mobile-friendly)
- ✅ Animaciones suaves

## Estructura del Proyecto

```
bodaweb/
├── index.html       # Página principal
├── styles.css       # Estilos
├── script.js        # Lógica JavaScript
├── .gitignore       # Archivos a ignorar en Git
├── README.md        # Este archivo
├── pics/            # Carpeta para tus fotos
└── package.json     # (próximo paso) Configuración del proyecto
```

## Cómo Empezar

1. **Personaliza la información:**
   - Abre `index.html`
   - Reemplaza "Nombre 1 & Nombre 2" con vuestros nombres
   - Actualiza la fecha, hora y lugares

2. **Añade tus fotos:**
   - Coloca tus fotos en la carpeta `pics/`
   - Nómbralas como `photo1.jpg`, `photo2.jpg`, etc.

3. **Prueba localmente:**
   - Abre `index.html` en tu navegador

## Próximos Pasos

- [ ] Agregar más secciones (Timeline, Regalos, Hospedaje)
- [ ] Integración con servicio de email para RSVPs
- [ ] Galería con lightbox interactivo
- [ ] Mapa interactivo de ubicación
- [ ] Contador regresivo
- [ ] Música de fondo
- [ ] Página de agradecimientos

## Personalización

### Colores
Los colores principales están en `styles.css` en la sección `:root`:
```css
--primary-color: #e83e8c;      /* Rosa/Magenta */
--secondary-color: #ffc0cb;    /* Rosa claro */
```

### Fuentes
Se utilizan fuentes del sistema para mejor compatibilidad. Puedes cambiarlas en el `body` de `styles.css`.

## Publicación en GitHub

1. Crea un repositorio en GitHub
2. Clona el repositorio localmente
3. Copia estos archivos al repositorio
4. Haz commit y push

```bash
git init
git add .
git commit -m "Inicial: estructura base de la web"
git push origin main
```

5. Habilita GitHub Pages en los ajustes del repositorio

## Contacto y Soporte

¿Necesitas ayuda personalizando tu página? Puedes modificar cualquier sección siguiendo los comentarios en el código.

---

Hecho con ❤️ para tu boda especial.
