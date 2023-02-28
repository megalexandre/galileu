# Estagio 1 - Responsável por gerar o build da nossa aplicação
FROM node:14.21.3-alpine as node
WORKDIR /app
COPY . .
RUN npm install
COPY ./ /app/
RUN npm run build --aot --prod

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=node /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

#docker build -t alexandrequeiroz/acalapp:0.0.1 .
#docker push alexandrequeiroz/acalapp:0.0.1
