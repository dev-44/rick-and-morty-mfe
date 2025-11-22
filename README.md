# Rick & Morty — Microfrontends con React, Vite y Module Federation

Este repositorio contiene tres paquetes principales:

- `components-library` → Librería de componentes UI reutilizables.
- `mfe-shell` → Microfrontend host (Home, routing principal e integración remota).
- `mfe-characters` → Microfrontend de personajes (listado, filtros, favoritos).

> La librería se consume directamente vía `workspace:` dentro del monorepo, sin necesidad de `yarn link`.
> Durante el desarrollo se utilizó **tsup + `yarn link`** para consumirla localmente desde `mfe-shell` y `mfe-characters`.

---

## 🏗 Arquitectura general

Este repositorio está organizado como un monorepo simple:

rick-and-morty-mfe

- components-library
- mfe-shell
- mfe-characters
- scripts

### `mfe-shell` (host)

- Contiene la página de inicio (Home) y el router principal.
- Carga dinámicamente el microfrontend remoto `mfe-characters` usando Module Federation.
- Rutas principales:
  - `/` → Home con diseño basado en el Figma.
  - `/characters` → Listado de personajes (microfrontend remoto).
  - `/characters/favorites` → Vista de favoritos (microfrontend remoto).

### `mfe-characters`

Microfrontend responsable del dominio de personajes. Implementa una variante de Clean Architecture:

- `domain` → entidades, value objects, interfaces de repositorios.
- `application` → casos de uso (por ejemplo `fetchCharactersUseCase`).
- `infrastructure` → adaptadores HTTP a la API pública de Rick & Morty.
- `state` → stores con Zustand para filtros, selección y favoritos (con persistencia).
- `presentation` → componentes, páginas, header, grid y la entrada remota `CharactersApp`.
- `remote`: punto de entrada para Module Federation

Funcionalidades principales:

- Consumo de la API REST pública de Rick & Morty.
- Listado de personajes.
- Búsqueda por nombre.
- Filtros por estado (vivo, muerto, desconocido).
- Gestión de favoritos con persistencia.
- Vista separada de favoritos.
- Uso de la `components-library` para las tarjetas (`CharacterCard`) y ThemeProvider.

### `components-library`

- Librería UI utilizada desde los microfrontends.
- Contiene componentes como `CharacterCard`, `StatusChip`, `ThemeProvider`, etc.
- Se compila con **tsup**.
- En este ejercicio se consume mediante `yarn link` en desarrollo.

---

## 🎨 Diseño

El diseño está basado en el Figma provisto en el reto.  
Se priorizó:

- Una UI consistente y adaptable.
- Componentes reutilizables.
- Layout similar al diseño original (Home, header, listado, favoritos).
- Uso de Material UI (MUI) y estilos con `sx` para una integración limpia.

---

## 🔌 Tecnologías principales

- React 18+
- TypeScript
- Vite
- Module Federation (`@module-federation/vite`)
- React Router
- Material UI (MUI) + Emotion
- Zustand
- Vitest + React Testing Library (tests unitarios en `mfe-characters` y `components-library`)
- tsup
- Yarn workspaces

---

## 🧪 Tests

En `mfe-characters` y `components-library` se incluyen pruebas unitarias utilizando **Vitest** y **React Testing Library**.
Ejemplos:

- Tests de componentes de presentación (por ejemplo `CharactersGrid`).
- Tests de casos de uso.

Para ejecutar los tests (desde la carpeta `mfe-characters` o desde `components-library`):

```bash
yarn test
```

---

# 🚀 Instrucciones para levantar el proyecto

## 🌐 Producción (BUILD + PREVIEW)

### 1) Construir todo

```bash
yarn build
```

### 2) Levantar producción local

```bash
yarn preview
```

Esto levanta:

- mfe-shell → http://localhost:3000
- mfe-characters → http://localhost:5001

---

## ▶️ Desarrollo

```bash
yarn dev
```

Ejecuta automáticamente:

- build + link de la components-library
- levanta:
  - `mfe-characters` → :5001
  - `mfe-shell` → :3000

## 🧪 Tests globales

```bash
yarn test
```

## 🧹 Limpieza global

```bash
yarn clean
```

---

# 🧪 Tests minimalistas por proyecto

### Components Library

```bash
cd components-library
yarn test
```

### Characters MFE

```bash
cd mfe-characters
yarn test
```

---

# 📘 Scripts PowerShell incluidos

## 📦 package.json root

En la raíz del monorepo (junto a este README) existe un `package.json` con:

- Workspaces para los tres proyectos.
- Scripts globales (`dev`, `test`, `clean`, `build y preview`) que usan los scripts PowerShell descritos arriba.

Esto facilita correr las tareas más comunes con un solo comando desde la raíz.

Se incluyen scripts para Windows:

- `yarn dev-ps`
- `yarn test-ps`
- `yarn clean-ps`
- `yarn prod-ps`

Ejecutan exactamente lo mismo que sus equivalentes root pero con manejo extra de logs y errores.

---

## 🧩 Notas importantes

- La librería UI se consume por workspace, sin link.
- Mismos puertos en DEV y PREVIEW.
- Module Federation funcional en dev y producción.

---
