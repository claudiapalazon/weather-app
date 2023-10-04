# Weather App

**DEMO En tiempo real aquí:** https://claudiapalazon.github.io/weather-app/

**Descripción**: Se trata de una aplicación del tiempo que permite la búsqueda de cualquier ciudad usando la Api **OpenWeather**. Dentro de la aplicación, puedes ver el tiempo actual y la predicción hasta 24h después en el apartado por **Horas**. También puedes ver hasta una semana después en el apartado por **Días**. La app está disponible en **light** y **dark mode**. Cuando se supere la búsqueda de 5 localidades o se actualice la información de la localidad seleccionada, aparecerá un aviso de que se ha superado el límite de prueba gratuito y el enlace de la suscripción. (En esta versión beta, se puede reiniciar la app para seguir utilizándola en la propia modal).

## Previsualización

#### Vista página principal
<img width="600" alt="preview app" src="https://github.com/claudiapalazon/weather-app/assets/64781684/729c06fe-93f2-42a4-8e49-4e168c10c9c7">

#### Vista con información - Light mode

<img width="600" alt="preview data light" src="https://github.com/claudiapalazon/weather-app/assets/64781684/7ba4bd6c-7596-4673-9dbd-a194d6b3fd6b">


#### Vista con información - Dark mode

<img width="600" alt="preview data dark" src="https://github.com/claudiapalazon/weather-app/assets/64781684/695aaf9d-11e2-440e-a41d-f6dcbb781308">

#### Responsive

<img width="200" alt="responsive view" src="https://github.com/claudiapalazon/weather-app/assets/64781684/d19ba85b-6d41-41f4-ae8f-a3fcbee98789">

## Desarrollado con
- React
- Typescript
- HTML
- SASS

## Deploy con
- Github Pages

## Recursos
- Iconos de la Comunidad de Figma

## Configuración para lanzar la app en local

Para lanzar la aplicación en local se necesita añadir en la raíz del proyecto un archivo **.env** con la **OpenWeather API Key**. En este caso se ha utilizado la siguiente:
**https://openweathermap.org/api/one-call-3** además de **https://openweathermap.org/api/geocoding-api**. Ambas funcionan con la misma API Key, la primera es para recibir la información del tiempo, la segunda es la que recoge el nombre de la localidad deseada y le pasa sus coordenadas a la primera.

```
REACT_APP_OPENWEATHER_API_KEY = 'YOUR_API_KEY'
```
#### Lanzar el proyecto

En la terminal en la ruta del proyecto, hay que seguir los siguientes pasos:

```
npm install -> para instalar las dependencias
npm run start -> para lanzar el proyecto en local
```

#### Script de empaquetado

Se ha creado un script para subir la aplicación a Github Pages

```
npm run deploy
```


