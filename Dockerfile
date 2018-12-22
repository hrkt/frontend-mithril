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
COPY --from=build-stage ./bin/* /usr/share/nginx/html/bin/
EXPOSE 80
#CMD /usr/sbin/nginx -g daemon off;
#CMD /bin/sh
CMD /usr/sbin/nginx -g "daemon off;"
