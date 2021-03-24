# CaninosAppReactNative

## Desplegar App
- ```npm Install```
- ```npm run android```

## Base de datos y servicio rest

En el directorio './Database' se encuentra la base de datos usada y las instrucciones para lanzar el servicio rest con json-serv,
JSON Server es una API REST NodeJS para entornos de desarrollo y pruebas, toma como base de datos un archivo JSON. es un servicio rest completo por lo que cuenta con los metodos: GET, POST, PUT, PATCH, DELETE.

### Instalacion: 

- ```npm install --save json-server```

Desplegar servicio REST con la base de datos bdmascotas.json
y un host espesifico:

- ```json-server --watch --host 192.168.0.17 bdmascota.json```
