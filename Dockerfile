# Build
FROM node:9.11.1-alpine as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Production
FROM nginx:1.15.7-alpine as production-stage
COPY ./index.html /usr/share/nginx/html
COPY --from=build-stage /app/bin/bundle.js /usr/share/nginx/html/bundle.js
EXPOSE 80
CMD /usr/sbin/nginx -g "daemon off;"
