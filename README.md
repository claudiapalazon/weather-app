# 🌤️ Weather App — El Tiempo

Aplicación del tiempo desarrollada con **React** y **TypeScript** que consume la API de OpenWeather. Incluye búsqueda por ciudad, predicción por horas (24h) y por días (hasta una semana), modo claro/oscuro y diseño responsive.

**Demo en vivo:** [https://claudiapalazon.github.io/weather-app/](https://claudiapalazon.github.io/weather-app/)

---

## ✨ Características

- **Búsqueda por ciudad** usando Geocoding API y One Call 3 de OpenWeather
- **Vista por horas**: predicción hasta 24 horas con detalle (temperatura, sensación térmica, viento, humedad, UV, etc.)
- **Vista por días**: predicción semanal con máx/mín, fases lunares, amanecer/atardecer
- **Tema claro y oscuro** con detección de preferencia del sistema y persistencia en `localStorage`
- **Diseño responsive** para móvil y escritorio
- **Persistencia**: última búsqueda guardada para no perder el estado al recargar
- **Modal informativo** cuando se supera el límite de la API gratuita (con opción de reinicio para pruebas)

---

## 📸 Previsualización

### Vista principal (búsqueda)

<img width="600" alt="Vista principal - búsqueda" src="https://github.com/claudiapalazon/weather-app/assets/64781684/729c06fe-93f2-42a4-8e49-4e168c10c9c7">

### Vista con datos — Light mode

<img width="600" alt="Vista con datos - modo claro" src="https://github.com/claudiapalazon/weather-app/assets/64781684/7ba4bd6c-7596-4673-9dbd-a194d6b3fd6b">

### Vista con datos — Dark mode

<img width="600" alt="Vista con datos - modo oscuro" src="https://github.com/claudiapalazon/weather-app/assets/64781684/695aaf9d-11e2-440e-a41d-f6dcbb781308">

### Responsive

<img width="200" alt="Vista responsive" src="https://github.com/claudiapalazon/weather-app/assets/64781684/d19ba85b-6d41-41f4-ae8f-a3fcbee98789">

---

## 🛠️ Stack técnico

| Área        | Tecnologías                          |
|------------|--------------------------------------|
| **Frontend** | React 18, TypeScript                 |
| **Estilos**  | SASS (módulos por página/componente) |
| **Routing**  | React Router v6 (rutas anidadas)     |
| **Estado**   | Estado local + Context (tema)        |
| **API**      | OpenWeather (Geocoding + One Call 3) |
| **Fechas**   | Moment.js (zonas horarias)           |
| **Deploy**   | GitHub Pages                         |

---

## 📁 Estructura del proyecto

```
src/
├── api/              # Llamadas a OpenWeather y tipos TypeScript
├── assets/            # Iconos (SVG) e iconos de tiempo
├── components/        # SearchBar, CurrentWeather, Hourly/DailyWeather, MenuDayHour, ModalSubscription
├── contexts/          # ThemeContext (tema claro/oscuro)
├── pages/             # Home, WeatherView, NotFound
├── theme/             # ThemeProvider y ThemeSetter
├── utils/             # Formateo de fechas/horas con timezone
└── styles/            # SASS global y por componente/página
```

---

## 🚀 Cómo ejecutarlo en local

### Requisitos

- Node.js y npm
- API Key de [OpenWeather](https://openweathermap.org/) (Geocoding API y [One Call 3](https://openweathermap.org/api/one-call-3))

### Pasos

1. Clonar el repositorio e instalar dependencias:

```bash
git clone https://github.com/claudiapalazon/weather-app.git
cd weather-app
npm install
```

2. Crear un archivo `.env` en la raíz con tu API Key (puedes copiar `.env.example` y renombrarlo):

```env
REACT_APP_OPENWEATHER_API_KEY=tu_api_key
```

> **Importante:** sin espacios alrededor del `=`. Reinicia el servidor (`npm run start`) después de crear o modificar `.env`.

3. Arrancar en desarrollo:

```bash
npm run start
```

4. **(Opcional)** Desplegar en GitHub Pages:

```bash
npm run deploy
```

---

## 📜 Scripts disponibles

| Comando        | Descripción                    |
|----------------|--------------------------------|
| `npm run start` | Servidor de desarrollo        |
| `npm run build` | Build de producción           |
| `npm run deploy`| Build + despliegue a gh-pages |
| `npm test`      | Tests con React Testing Library |

---

## 📌 Notas

- En la versión gratuita de OpenWeather, tras **más de 5 búsquedas o actualizaciones** se muestra un modal informativo; desde el propio modal se puede reiniciar el contador para seguir probando.
- La app usa **HashRouter** para compatibilidad con GitHub Pages.

---

## 📎 Recursos

- [OpenWeather API](https://openweathermap.org/api)
- Iconos: Comunidad de Figma
