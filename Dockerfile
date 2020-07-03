# build
FROM node:12-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./

# production|staging
ARG ENV

RUN cat ${ENV}.env > .env && node_modules/.bin/webpack --mode production

# run
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
