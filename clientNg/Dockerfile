
FROM node:12.20-alpine AS build
WORKDIR /dist/src/app
COPY package.json package-lock.json ./
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:latest AS ngi
ENV LISTEN_PORT 8080
EXPOSE 8080
COPY --from=build /dist/src/app/dist/clientNg /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80