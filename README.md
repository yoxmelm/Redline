# REDLINE — Marketplace de muscle cars


> Una experiencia web creada para explorar, comparar y consultar muscle cars clásicos y modernos.

![Estado](https://img.shields.io/badge/estado-en_desarrollo-EF3D25)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Vite](https://img.shields.io/badge/Vite-7-646CFF)

Redline comenzó como una landing page simple y fue creciendo hasta convertirse en un catálogo interactivo. La versión actual permite recorrer vehículos, buscar modelos, marcar favoritos, consultar detalles y probar los flujos de compra y venta desde el navegador.

## Antes de empezar

Este repositorio contiene una demostración frontend. Los vehículos, precios y respuestas de formularios viven dentro del proyecto: todavía no existe conexión con una API, una base de datos o un servicio de mensajes.

### ¿Qué hace especial a este proyecto?

- Interfaz visual pensada para una marca de autos premium.
- Catálogo local con 20 vehículos.
- Filtros por categoría y búsqueda por marca o modelo.
- Modales para detalles, consultas y tasaciones.
- Diseño adaptable para computadoras, tablets y teléfonos.
- CI y publicación automática mediante GitHub Actions.

## Índice

1. [¿Qué es Redline?](#1-qué-es-redline)
2. [Qué puedes hacer con la página](#2-qué-puedes-hacer-con-la-página)
3. [Tecnologías](#3-tecnologías)
4. [Arquitectura del proyecto](#4-arquitectura-del-proyecto)
5. [Flujo de trabajo por fases](#5-flujo-de-trabajo-por-fases)
6. [Cómo preparar el proyecto](#6-cómo-preparar-el-proyecto)
7. [Cómo verlo en el navegador](#7-cómo-verlo-en-el-navegador)
8. [Scripts disponibles](#8-scripts-disponibles)
9. [Personalización](#9-personalización)
10. [Estructura de archivos](#10-estructura-de-archivos)
11. [Despliegue](#11-despliegue)
12. [Equipo](#12-equipo)

## 1. ¿Qué es Redline?

Redline es una tienda visual creada para presentar autos con personalidad: muscle cars, deportivos y clásicos. La idea fue construir una experiencia sencilla donde una persona pueda explorar el inventario, revisar sus características y probar una consulta sin abandonar la página.

Todo lo que ves al navegar, buscar o filtrar ocurre directamente en el navegador. Los mensajes de confirmación son parte de la demostración, porque todavía no hay una API ni un backend conectado.

## 2. Qué puedes hacer aquí

- Recorrer una colección que cambia automáticamente.
- Navegar desde el teléfono o desde una computadora.
- Buscar una marca o un modelo específico.
- Filtrar entre coupés, deportivos, sedanes, clásicos y eléctricos.
- Revisar los 20 vehículos incluidos en la demostración.
- Guardar vehículos favoritos durante la visita.
- Abrir fichas detalladas de cada vehículo.
- Completar una solicitud de información.
- Probar el formulario para vender o tasar un vehículo.
- Subir hasta ocho imágenes y ver sus vistas previas.
- Conocer al equipo que desarrolló el proyecto.

## 3. Tecnologías

### Desarrollo frontend

| Tecnología | Función dentro de Redline |
|---|---|
| React 19 | Construye la interfaz mediante componentes reutilizables |
| Vite 7 | Ejecuta el servidor de desarrollo y genera la versión de producción |
| JavaScript | Maneja el inventario, filtros, favoritos y modales |

### Diseño e interfaz

| Tecnología | Función dentro de Redline |
|---|---|
| CSS personalizado | Define la identidad visual, la cuadrícula, las tarjetas y el diseño responsive |
| Tailwind CSS 4 | Proporciona utilidades CSS e integración con Vite |
| RemixIcon | Añade los iconos utilizados en botones y secciones |

### Librerías adicionales

| Librería | Estado dentro del proyecto |
|---|---|
| GSAP | Disponible para futuras animaciones avanzadas |
| React Slick | Disponible para implementar carruseles internos |
| Swiper | Disponible para componentes adicionales tipo slider |

## 4. Arquitectura del proyecto

El proyecto utiliza una arquitectura basada en componentes. Cada pantalla o comportamiento grande se organiza dentro de un componente React.

```text
main.jsx
   └─ importa marketplace.css
   └─ monta App.jsx

App.jsx
   └─ renderiza Home.jsx

Home.jsx
   └─ renderiza MuscleMarketplace.jsx

MuscleMarketplace.jsx
   ├─ carrusel principal
   ├─ buscador
   ├─ filtros
   ├─ inventario
   ├─ detalles
   ├─ consulta de compra
   ├─ venta de vehículo
   ├─ sección del equipo
   └─ footer
```

### Componentes importantes

- `src/main.jsx`: punto de entrada de React.
- `src/App.jsx`: raíz de aplicación.
- `src/pages/Home.jsx`: conecta la página principal con el componente marketplace.
- `src/pages/MuscleMarketplace.jsx`: lógica principal, inventario, estados y modales.
- `src/marketplace.css`: identidad visual, grid, responsive y estilos de componentes.

## 5. Flujo de trabajo por fases

### Fase 1 — Identidad visual

La interfaz usa una paleta oscura con acentos rojo-anaranjados. El objetivo visual es transmitir velocidad, potencia y exclusividad.

- Fondo oscuro: navegación, footer y elementos premium.
- Acento rojo: acciones principales y destacados.
- Tipografía serif para títulos: sensación clásica y editorial.
- Cards y formularios claros: contraste con las secciones oscuras.

### Fase 2 — Carrusel principal

La sección hero contiene imágenes superpuestas controladas por el estado `heroIndex`.

```text
heroIndex → diapositiva activa → imagen, año y modelo
intervalo automático → incrementa heroIndex cada 5.5 segundos
botones manuales → seleccionan una diapositiva concreta
```

### Fase 3 — Inventario

El inventario contiene objetos con marca, modelo, año, categoría, precio, potencia, motor, transmisión, kilometraje e imagen.

La función `useMemo` filtra los resultados combinando:

- categoría seleccionada;
- texto escrito en el buscador.

### Fase 4 — Favoritos

Los favoritos se mantienen en el estado React durante la sesión mediante un arreglo de identificadores.

```text
ID seleccionado → agregar o eliminar del arreglo → actualizar icono
```

### Fase 5 — Detalles del vehículo

Cada card puede abrir un modal que muestra:

- imagen;
- marca y modelo;
- precio;
- potencia;
- motor;
- kilometraje;
- transmisión;
- año;
- categoría;
- acciones de favorito e información.

### Fase 6 — Consultas de compra

“Solicitar información” abre un modal separado del flujo de venta.

Solicita:

- nombre;
- teléfono;
- correo;
- tipo de interés;
- mensaje precargado con el modelo seleccionado.

### Fase 7 — Venta de vehículos

“Vender mi auto” abre un modal independiente para registrar:

- marca;
- modelo;
- año;
- kilometraje;
- precio esperado;
- datos de contacto;
- hasta ocho imágenes locales.

Las imágenes usan vistas previas mediante `URL.createObjectURL()` y se liberan al cerrar el modal.

### Fase 8 — Equipo

La sección Equipo muestra los nombres y roles fijos de los integrantes del proyecto.

Los datos están definidos directamente en el arreglo `initialTeam` dentro de `MuscleMarketplace.jsx`. Todos los integrantes aparecen como estudiantes y no existe actualmente un formulario para modificarlos desde la interfaz.

## 6. Cómo preparar el proyecto

Para ejecutar Redline necesitas tener Node.js y npm instalados. Yo recomiendo trabajar con VS Code, pero puedes usar el editor que prefieras.

Abre una terminal y entra en la carpeta del proyecto:

```bash
cd c:\Users\Administrador\OneDrive\Desktop\Repository\Redline
```

Después instala las bibliotecas que utiliza el proyecto:

```bash
npm install
```

Este paso descarga React, Vite y el resto de las dependencias declaradas en `package.json`.

## 7. Cómo verlo en el navegador

Cuando todo esté instalado, inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una dirección en la terminal. Normalmente será:

```text
http://localhost:5173/
```

Abre esa dirección en el navegador. Cada cambio que guardes debería actualizar la página automáticamente. Para cerrar el servidor, utiliza `Ctrl + C`.

## 8. Scripts disponibles

| Comando | ¿Para qué sirve? |
|---|---|
| `npm run dev` | Abre el proyecto en modo desarrollo |
| `npm run build` | Crea la versión optimizada para publicar |
| `npm run preview` | Permite probar la versión compilada en local |
| `npm run lint` | Revisa si el código tiene errores detectables |
| `npm run ci` | Ejecuta el lint y después la compilación |

El comando `npm run ci` reproduce las comprobaciones principales antes de subir cambios.

## 9. Personalización

### Añadir un vehículo

Abre `src/pages/MuscleMarketplace.jsx` y añade un objeto dentro de `cars`:

```jsx
{
  id: 21,
  brand: 'Ford',
  model: 'Mustang example',
  year: 2024,
  type: 'Coupé',
  price: 65000,
  oldPrice: null,
  power: '500 HP',
  engine: '5.0 V8',
  transmission: 'Manual',
  mileage: '2 000 km',
  image: 'URL_DE_LA_IMAGEN',
  featured: true
}
```

### Añadir una categoría

Incluye el tipo exacto dentro de:

```jsx
const categories = ['Todos', 'Coupé', 'Sport', 'Sedán', 'Clásico', 'Eléctrico']
```

El valor debe coincidir con la propiedad `type` de los vehículos.

### Cambiar colores

Los principales colores visuales están dentro de `src/marketplace.css`:

```text
Rojo principal: #ef3d25
Fondo oscuro: #11110f
Fondo claro: #f4f4f0
Texto oscuro: #151515
```

### Modificar integrantes

Los integrantes están definidos en el arreglo `initialTeam` dentro de `MuscleMarketplace.jsx`:

```jsx
const initialTeam = [
  { id: 1, name: 'Yoxmel Morles', role: 'Estudiante' },
  { id: 2, name: 'Jhosting Bermudez', role: 'Estudiante' },
  { id: 3, name: 'Juan Gutierrez', role: 'Estudiante' },
  { id: 4, name: 'Neomar Castro', role: 'Estudiante' }
]
```

Estos datos son de solo lectura en la página. Para cambiarlos, hay que modificar el arreglo directamente en el código.

## 10. Estructura de archivos

```text
Redline/
├─ public/
├─ src/
│  ├─ assets/
│  │  └─ recursos heredados del diseño anterior
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  └─ MuscleMarketplace.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ marketplace.css
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

## 11. Despliegue

Cuando quieras preparar una versión para publicar, ejecuta:

```bash
npm run build
```

El resultado se crea en:

```text
dist/
```

Para revisar localmente esa versión:

```bash
npm run preview
```

El contenido de `dist/` puede publicarse en servicios compatibles con sitios estáticos, como Netlify, GitHub Pages o Vercel.

### CI y GitHub Pages

El archivo `.github/workflows/deploy.yml` ejecuta automáticamente:

1. Node.js 22 y `npm ci`.
2. ESLint con `npm run lint`.
3. La compilación con `npm run build`.
4. El despliegue de `dist/` en GitHub Pages desde `main`.

Para ejecutar las comprobaciones locales:

```bash
npm run ci
```

En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente.

## 12. Equipo

Este proyecto fue desarrollado por:

- Yoxmel Morles — Estudiante
- Jhosting Bermudez — Estudiante
- Juan Gutierrez — Estudiante
- Neomar Castro — Estudiante

La información del equipo es fija y solo puede modificarse directamente desde el arreglo `initialTeam` en el código fuente.

---

## Limitaciones actuales

Conviene tener estas limitaciones claras antes de llevar el proyecto a producción:

- Los formularios muestran confirmaciones, pero no envían información a un servidor.
- Los vehículos son ejemplos almacenados dentro del código.
- Algunas imágenes se cargan desde servicios externos.
- Los favoritos duran solo mientras la página permanece abierta.
- Las fotos seleccionadas solo generan vistas previas en el navegador.

## Próximas mejoras

1. Crear una API REST o una base de datos.
2. Persistir vehículos y favoritos en servidor.
3. Conectar formularios a correo o WhatsApp.
4. Crear rutas independientes por vehículo.
5. Añadir autenticación para vendedores.
6. Descargar o guardar solicitudes reales.
