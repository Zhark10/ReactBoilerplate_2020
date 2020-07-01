# Stage 1 - the build process
FROM node:12 as build-deps
WORKDIR /usr/src/app
RUN npm install webpack -g
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build:release

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]