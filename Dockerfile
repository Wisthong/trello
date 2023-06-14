FROM node:latest as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build

LABEL org.opencontainers.image.restart_policy="always"
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
COPY --from=node /app/dist/trello-app /usr/share/nginx/html
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

