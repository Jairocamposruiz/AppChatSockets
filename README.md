<p align="center">
  <a href="https://blog.jcoder.es/" target="blank"><img src="https://jcoderbucket.s3.eu-west-2.amazonaws.com/Logo/logo512.png" width="200" alt="JCodeR Logo" /></a>
</p>

## Descripción

Ejemplo de un Chat implementado con Sockets más info sobre proyectos en [JCodeR.es](https://blog.jcoder.es).

Este proyecto es un ejemplo de un chat implementado con Socket.io, un backend implementado en Node.js con TypesScript y
MongoDB. Para el frontend se utiliza React.js con el framework Next.js y para estilizar el proyecto se utiliza Tailwind.

## Composición del proyecto:

El proyecto se compone de 3 directorios en el directorio raíz del proyecto podemos encontrar el docker-compose.yml, con
las instrucciones para el despliegue del proyecto.

En el directorio api nos está el backend del proyecto implementado con Node.js. En el directorio client podemos ver la
aplicación de React.js y por último en el directorio nginx podemos ver el Dockerfile y la configuración de un servidor
Nginx.

## Docker

Para el despliegue del proyecto se utiliza Docker, con el cual levantamos 5 contenedores:

- El backend
- El frontend
- Un servidor Nginx: Se encarga de dirigir el tráfico entre el frontend y el backend
- Un proxy de Nginx: Recibe todas la peticiones por el puerto 80 y 443, se encarga de comunicarse con el contenedor de
  Letsencrypt el cual le provee de certificados SSL.
- Letsencrypt: Se encarga de proveer de certificados SSL.

## Bases de datos

Para la base de datos escogí mongo y está desplegada en Mongo Atlas.

## Datos sobre el autor

- Autor - Jairo Campos Ruiz
- Website - [JCodeR.es](https://blog.jcoder.es)
