FROM node:latest as build
#WORKDIR /app
#COPY ./ /app

#RUN npm install
#RUN npm run build --prod

FROM nginx:stable-alpine
COPY /dist /usr/share/nginx/html

EXPOSE 80
#docker build -t alexandrequeiroz/acalapp:0.0.1 .
