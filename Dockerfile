FROM node:18.3.0 AS builder
WORKDIR /home/node/build

COPY . .
RUN npm ci
RUN npm run build

FROM nginx
COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/mime.types /etc/nginx/conf/mime.types
COPY --from=builder /home/node/build/src/dist /usr/share/nginx/html
