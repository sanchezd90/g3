Número de Grupo: 16

Nombre de Equipo: Quickstarters

Integrantes y Roles:

Daniel Sánchez Rueda - Líder de equipo

Myriam Roque Vasquez  - Diseñador de Software

Juan Sebastian Sarmiento - Diseñador UI 

Fernando Buitrago - Tester

Juan David Jaramillo - Administrador 

**Al clonar el proyecto por primera vez se deben instalar todas las dependencias**
cd client
npm i

**Para correr la aplicación se debe:**
1. Correr el servidor de la API 
cd server
npm start

2. Correr el servidor del front
cd client
npm start

También se puede correr con docker:
1. Primero se hace el build (ejecutar desde la carpeta raíz)
docker-compose up -d --build   
2. Luego se levanta la imagen
docker-compose up

**El cliente corre de forma local en: localhost:4200**
