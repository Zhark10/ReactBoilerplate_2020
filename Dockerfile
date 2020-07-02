# build
FROM node:12 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./

# prod|dev
ARG ENV

RUN npm install -g webpack
RUN npm install -g webpack-cli
RUN cat ${ENV}.env > .env && webpack --mode production

# run
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
