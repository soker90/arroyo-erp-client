FROM node:20.17.0-alpine3.20 as build

ENV PNPM_HOME="/pnpm"
ENV PATH /app/node_modules/.bin:$PNPM_HOME:$PATH
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --prod --frozen-lockfile

COPY . ./

RUN pnpm run build

# production environment
FROM nginx:1.27.1-alpine3.20

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
