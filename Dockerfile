FROM node:16.18.0 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./

RUN npm i --legacy-peer-deps --silent

COPY . ./

RUN npm run build

# production environment
FROM nginx:1.22.0

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
